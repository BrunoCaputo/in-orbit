export type TSummary = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export async function getSummary(): Promise<TSummary> {
  const response = await fetch("http://localhost:3000/summary");
  const { summary } = await response.json();

  return summary;
}
