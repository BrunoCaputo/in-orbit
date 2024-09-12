import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "./routes/create-goal.route";
import { getCompletionRoute } from "./routes/get-pending-goals.route";
import { createCompletionRoute } from "./routes/create-completion.route";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(getCompletionRoute);
app.register(createGoalRoute);
app.register(createCompletionRoute);

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("HTTP server listening on port 3000");
  });
