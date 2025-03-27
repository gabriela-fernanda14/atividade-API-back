import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/notes", notesRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
