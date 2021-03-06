const Question = require('../models/Questions');

class QuestionController{
    async store(req, res) {
        const question = await Question.create({
            enunciado: req.body.enunciado,
            excluido: req.body.excluido,
        });

        return res.json(question);
    }

    async show(req, res) {
        const question = await Question.find();
        return res.json(question);
    }
}

module.exports = new QuestionController();