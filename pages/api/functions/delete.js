import dbConnect from "../../../utils/database/connect";
import Aluno from "../../../models/Aluno";

export async function deleteAluno(id) {
  try {
    await dbConnect();
    await Aluno.deleteOne({ _id: id });
    return 200;
  } catch (err) {
    throw err;
  }
}
