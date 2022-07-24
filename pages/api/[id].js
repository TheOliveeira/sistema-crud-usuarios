import { createAluno } from "./functions/create";
import { deleteAluno } from "./functions/delete";
import { updateAluno } from "./functions/update";

export default function handler(req, res) {
  switch (req.method) {
    case "DELETE": {
      return new Promise((resolve, reject) => {
        deleteAluno(req.query.id)
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
      });
    }
    case "PATCH": {
      console.log("AQUI");
      console.log(req.body);
      console.log(req.query.id);
      return new Promise((resolve, reject) => {
        updateAluno(req.query.id, req.body)
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
      });
    }
  }
}
