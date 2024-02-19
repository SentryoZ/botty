import 'dotenv/config';
import express from 'express';
import {getRandomEmoji, VerifyDiscordRequest} from "./utils.js";
import {InteractionResponseType, InteractionType} from "discord-interactions";


// Create App
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({verify: VerifyDiscordRequest(process.env.PUBLIC_KEY)}));


// Handle incoming interactions


app.post('/interactions', async function (req, res) {
    const {type, id, data} = req.body;

    /**
     * Handle verification requests
     */
    if (type === InteractionType.PING) {
        return res.send({type: InteractionResponseType.PONG});
    }

    if (type === InteractionType.APPLICATION_COMMAND) {
        const {name} = data;

        if (name === 'test') {
            // Send a message into the channel where command was triggered from
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    // Fetches a random emoji to send from a helper function
                    content: 'hello world ' + getRandomEmoji(),
                },
            });
        }
    }

})


// App listening
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});