import { Dialog } from "./components/ui/dialog";
import { CreateGoalDialog } from "./components/CreateGoalDialog";
import { Summary } from "./components/Summary";
import { useEffect, useState } from "react";
import { EmptyGoals } from "./components/EmptyGoals";

type TSummary = {
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

export function App() {
  const [summary, setSummary] = useState<TSummary | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/summary")
      .then((response) => {
        return response.json();
      })
      .then(({ summary }) => {
        setSummary(summary);
      });
  }, []);

  return (
    <Dialog>
      {summary && summary.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoalDialog />
    </Dialog>
  );
}
