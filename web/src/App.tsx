import { useQuery } from "@tanstack/react-query";

import { Dialog } from "./components/ui/dialog";
import { CreateGoalDialog } from "./components/CreateGoalDialog";
import { Summary } from "./components/Summary";
import { EmptyGoals } from "./components/EmptyGoals";
import { getSummary } from "./http/get-summary";

export function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
  });

  return (
    <Dialog>
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoalDialog />
    </Dialog>
  );
}
