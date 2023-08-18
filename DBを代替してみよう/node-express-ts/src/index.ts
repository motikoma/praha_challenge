import dotenv from "dotenv";
import Airtable from "airtable";
import express from "express";
import type { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = 3001;

const base = new Airtable({
  apiKey: process.env.API_KEY,
}).base(process.env.BASE_ID || "");

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

app.get("/data", (req: Request, res: Response) => {
  let response: any = {};

  base("Table 1")
    .select({
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          response[record.id] = record.get("Name");
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }

        res.json(response);
      }
    );
});

app.post("/data", (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "name is required" });
    return;
  }

  base("Table 1").create(
    [
      {
        fields: { Name: name },
      },
    ],
    function (err: any, records: any) {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      res.json(records);
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
