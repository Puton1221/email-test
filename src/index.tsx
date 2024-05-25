import { Hono } from "hono";
import { env } from "hono/adapter";
import { Resend } from "resend";

const app = new Hono();

app.get("/", (c) => {
  const { mailAPI } = env(c);
  const resend = new Resend(`${mailAPI}`);

  return c.text("Ok");
});

export default app;
