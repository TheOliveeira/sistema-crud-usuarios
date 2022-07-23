import { createAluno } from "./functions/create";
import { deleteAluno } from "./functions/delete";
import { updateAluno } from "./functions/update";

export default function handler(req, res) {
  switch (req.method) {
    case "DELETE": {
      deleteAluno(req.query.id);
      return 200;
    }
    case "POST": {
      console.log("Query", req.query)
      console.log("Body",req)
      
      // createAluno
      //updateAluno(req.query.id);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.end(JSON.stringify(response));
    }
  }
}
