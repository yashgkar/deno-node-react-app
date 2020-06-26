import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
const port = 5000;
const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server run on port ${port}`);
await app.listen({ port });