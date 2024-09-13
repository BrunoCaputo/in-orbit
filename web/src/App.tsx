import { Dialog } from "./components/ui/dialog";
import { CreateGoalDialog } from "./components/CreateGoalDialog";
import { Summary } from "./components/Summary";

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />

      <CreateGoalDialog />
    </Dialog>
  );
}
