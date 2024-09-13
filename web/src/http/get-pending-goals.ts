export type TPendingGoals = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<TPendingGoals> {
  const response = await fetch("http://localhost:3000/pending-goals");
  const { pendingGoals } = await response.json();

  return pendingGoals;
}
