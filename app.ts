import { Application, Context, send } from "https://deno.land/x/oak@v6.0.1/mod.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || "127.0.0.1";

const app = new Application();
app.use(async (context: Context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/public`,
      index: "index.html",
    });
  });

  console.info(`Listening on port ${PORT}...`);
await app.listen(`${HOST}:${PORT}`);
