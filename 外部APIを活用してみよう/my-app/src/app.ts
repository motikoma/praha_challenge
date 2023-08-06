import { Client, auth } from "twitter-api-sdk";
import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const authClient = new auth.OAuth2User({
  client_id: process.env.CLIENT_ID as string,
  client_secret: process.env.CLIENT_SECRET as string,
  callback: "http://127.0.0.1:3000/callback",
  scopes: ["tweet.read", "tweet.write", "users.read"],
});

const client = new Client(authClient);

const STATE = "my-state";

app.get("/login", async function (req, res) {
  const authUrl = authClient.generateAuthURL({
    state: STATE,
    code_challenge_method: "s256",
  });
  res.redirect(authUrl);
});

app.get("/callback", async function (req, res) {
  try {
    const { code, state } = req.query;
    if (state !== STATE) return res.status(500).send("State isn't matching");
    await authClient.requestAccessToken(code as string);
    const user = await client.users.findMyUser();
    console.dir(user, { depth: null });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
