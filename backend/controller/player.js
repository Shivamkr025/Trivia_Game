import { Game, Player } from "../model/gameModel.js";


const createPlayer = async (req, res) => {

    const { player1, player2 } = req.body
    try {
        const firstPlayer = new Player({ name: player1 });
        const secPlayer = new Player({ name: player2 });

        await firstPlayer.save()
        await secPlayer.save()

        const newGame = new Game({
            players: [firstPlayer._id, secPlayer._id],
            selectDifficulty: []
        });

        await newGame.save()
        res.status(201).json({ game: newGame });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "something went wrong create player function" })

    }
}

export { createPlayer }