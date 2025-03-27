import notesModel from "../models/notesModel.js";


class NotesController {
  getAll = async (req, res) => {
    try {
      const notes = await notesModel.getAll();
      res.json(notes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar anotações" });
    }
  };

  create = async (req, res) => {
    const { titulo, conteudo, favorita, cor } = req.body;
    try {
      if (!titulo||!conteudo||!favorita||!cor) {
        return res.status(400).json({ erro: "campos obrigatórios precisam ser preenchidos" });
      }
      if (!titulo) {
        return res.status(400).json({ erro: "Título é obrigatorio" });
      }
      if (!conteudo) {
        return res.status(400).json({ erro: "Conteudo é obrigatorio" });
      }
      if (!favorita) {
        return res.status(400).json({ erro: "Informe se vai favoritar" });
      }
      if (!cor) {
        return res.status(400).json({ erro: "Cor é obrigatoria" });
      }

      const novaNota = await notesModel.create(titulo, conteudo, favorita, cor);
      res.status(201).json(novaNota);
    } catch(error){
        console.error(error);
        res.status(500).json({ erro: "erro ao criar nota"})
    }

  };

  update = async (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, favorita, cor } = req.body;

    try {
      const notesAtualizada = await notesModel.update(
       Number(id),
        titulo,
        conteudo,
        favorita,
        cor
      );

      if (!notesAtualizada) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.json(notesAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar anotação" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await notesModel.delete(parseInt(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao excluir anotação" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const nota = await notesModel.getById(parseInt(id));

      if (!notes) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.json(notes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar anotação" });
    }
  };
}

export default new NotesController();