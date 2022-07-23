import dbConnect from "../../database/connect";
import Aluno from "../../models/Aluno";

export async function updateAluno(id, body) {
  try {
    await dbConnect();
    await Aluno.updateOne({ _id: id },{body});
    return 200;
  } catch (err) {
    throw err;
  }
}
