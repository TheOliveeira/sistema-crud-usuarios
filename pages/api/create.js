import { createAluno } from "./functions/create";

export default function handler(req, res) {
  switch (req.method) {
    case "POST": {
      console.log("Query", req.query)
      console.log("Body",req.body)
      
      createAluno(req.body)
      //updateAluno(req.query.id);
      res.statusCode = 200;
      res.end(JSON.stringify(res));
    }
  }
}
