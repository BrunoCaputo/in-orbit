import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "./routes/create-goal.route";
import { getPendingGoalsRoute } from "./routes/get-pending-goals.route";
import { createCompletionRoute } from "./routes/create-completion.route";
import { getWeekSummaryRoute } from "./routes/get-week-summary.route";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(getPendingGoalsRoute);
app.register(createGoalRoute);
app.register(createCompletionRoute);
app.register(getWeekSummaryRoute);

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("HTTP server listening on port 3000");
  });
