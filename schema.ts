import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const moodEntries = sqliteTable("mood_entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  date: text("date").notNull(),
  moodValue: integer("mood_value").notNull(),
  moodLabel: text("mood_label").notNull(),
  energy: integer("energy").notNull(),
  stress: integer("stress").notNull(),
  gratitude: integer("gratitude").notNull(),
  note: text("note").notNull().default(""),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("mood_entries_user_date_unique").on(table.userId, table.date),
  index("mood_entries_user_date_idx").on(table.userId, table.date),
]);
