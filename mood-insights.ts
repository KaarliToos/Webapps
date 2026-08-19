export type MoodInsight = { kind: "sentiment" | "theme"; label: string; confidence: number };

/** Extension point for a future privacy-reviewed NLP provider. It deliberately returns no invented insight. */
export interface MoodInsightsService { analyze(note: string, userId: string): Promise<MoodInsight[]>; }
export const moodInsightsService: MoodInsightsService = { async analyze() { return []; } };
