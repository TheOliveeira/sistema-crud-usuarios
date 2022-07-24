import dbConnect from "../../database/connect";
import Aluno from "../../models/Aluno";

export async function createAluno(body) {
  try {
    await dbConnect();
    await Aluno.create(JSON.parse(body));
    return 200;
  } catch (err) {
    throw err;
  }
}
