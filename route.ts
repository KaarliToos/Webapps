import { and, desc, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { moodEntries } from "@/db/schema";

const labels = ["", "Very bad", "Bad", "Okay", "Good", "Great"];

function fail(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected error";
  if (message.includes("no such table")) return Response.json({ error: "Mood storage is being prepared. Please try again shortly." }, { status: 503 });
  return Response.json({ error: message }, { status: 500 });
}
function validRating(value: unknown) { return Number.isInteger(value) && Number(value) >= 1 && Number(value) <= 5; }

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId")?.trim();
    const date = searchParams.get("date")?.trim();
    if (!userId) return Response.json({ error: "userId is required" }, { status: 400 });
    const db = getDb();
    if (date) {
      const [entry] = await db.select().from(moodEntries).where(and(eq(moodEntries.userId, userId), eq(moodEntries.date, date))).limit(1);
      return Response.json({ entry: entry ?? null });
    }
    const entries = await db.select().from(moodEntries).where(eq(moodEntries.userId, userId)).orderBy(desc(moodEntries.date)).limit(30);
    return Response.json({ entries });
  } catch (error) { return fail(error); }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    const userId = typeof body.userId === "string" ? body.userId.trim() : "";
    const date = typeof body.date === "string" ? body.date : "";
    const note = typeof body.note === "string" ? body.note.trim().slice(0, 500) : "";
    if (!userId || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !validRating(body.moodValue) || !validRating(body.energy) || !validRating(body.stress) || !validRating(body.gratitude)) return Response.json({ error: "Please complete every rating." }, { status: 400 });
    const moodValue = Number(body.moodValue);
    const db = getDb();
    await db.insert(moodEntries).values({ userId, date, moodValue, moodLabel: labels[moodValue], energy: Number(body.energy), stress: Number(body.stress), gratitude: Number(body.gratitude), note }).onConflictDoUpdate({ target: [moodEntries.userId, moodEntries.date], set: { moodValue, moodLabel: labels[moodValue], energy: Number(body.energy), stress: Number(body.stress), gratitude: Number(body.gratitude), note, updatedAt: new Date().toISOString() } });
    const [entry] = await db.select().from(moodEntries).where(and(eq(moodEntries.userId, userId), eq(moodEntries.date, date))).limit(1);
    return Response.json({ entry });
  } catch (error) { return fail(error); }
}
