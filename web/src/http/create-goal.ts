import { CreateGoalForm } from "../components/CreateGoalDialog";

export async function createGoal(goal: CreateGoalForm) {
  await fetch("http://localhost:3000/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goal),
  });
}
