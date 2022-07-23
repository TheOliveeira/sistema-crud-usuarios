import mongoose, { Schema, Document } from "mongoose";

const UserSchema = new mongoose.Schema({
  Nome: {
    type: String,
    required: true,
  },
  DataNascimento: {
    type: Date,
    required: true,
  },
  DataCadastro: {
    type: Date,
    default: Date.now,
  },
  Ativo: {
    type: Boolean,
  },
  Curso: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
