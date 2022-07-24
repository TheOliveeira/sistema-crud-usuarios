import dbConnect from "../../../utils/database/connect";
import Aluno from "../../../models/Aluno";

export async function updateAluno(id, body) {
  try {
    await dbConnect();
    await Aluno.updateOne({ _id: id }, JSON.parse(body));
    return 200;
  } catch (err) {
    throw err;
  }
}
