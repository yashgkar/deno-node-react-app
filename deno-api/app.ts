import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";
const port = 5000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server run on port ${port}`);
await app.listen({ port });