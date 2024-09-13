import { Dialog } from "./components/ui/dialog";
import { CreateGoalDialog } from "./components/CreateGoalDialog";
import { EmptyGoals } from "./components/EmptyGoals";

export function App() {
  return (
    <Dialog>
      <EmptyGoals />

      <CreateGoalDialog />
    </Dialog>
  );
}
