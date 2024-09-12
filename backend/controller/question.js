import { Question } from "../model/gameModel.js";

const createQuestion = async (req, res) => {

    const { questionId } = req.body
    try {
        const question = await Question.findOne({ questionId })

        if (question) {
            return res.status(400).json({ massage: "This question already exist in database ..." })
        }

        const submit = new Question({ ...req.body })
        await submit.save()

        console.log(submit);
        res.status(201).json({ massage: "question add successfully", submit })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "something went wrong in create question function " })

    }
}


const showAllQuestion = async (req, res) => {

    try {
        const show = await Question.find({})
        res.status(200).json({ show })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "something went wrong in show all question function " })

    }
}

export { showAllQuestion, createQuestion }