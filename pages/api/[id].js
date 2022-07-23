import { deleteAluno } from "./functions/delete";

export default function handler(req, res) {
  switch (req.method) {
    case "DELETE": {
      deleteAluno(req.query.id);
      return 200;
    }
  }
}
