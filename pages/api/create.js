import { createAluno } from "./functions/create";

export default function handler(req, res) {
  switch (req.method) {
    case "POST": {
      createAluno(req.body)
        .then((response) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.setHeader("Cache-Control", "max-age=180000");
          res.end(JSON.stringify(response));
          resolve();
        })
        .catch((error) => {
          res.json(error);
          res.status(405).end();
          resolve(); // in case something goes wrong in the catch block (as vijay commented)
        });
      //updateAluno(req.query.id);
    }
  }
}
