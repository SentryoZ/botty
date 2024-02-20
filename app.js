import 'dotenv/config';
import express from 'express';
import {getRandomEmoji, VerifyDiscordRequest} from "./utils.js";
import {InteractionResponseType, InteractionType} from "discord-interactions";
import {randomNumberHandle, randomNumberName} from "./commands/randomNumber.js";
import {testName} from "./commands/test.js";
import {handleChooseRandomFood, randomFoodName} from "./commands/randomFood.js";


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

        if (name === testName) {
            // Send a message into the channel where command was triggered from
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    // Fetches a random emoji to send from a helper function
                    content: 'hello world ' + getRandomEmoji(),
                },
            });
        }
        if (name === randomNumberName) {
            let content = randomNumberHandle(req)
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    // Fetches a random emoji to send from a helper function
                    content: content,
                },
            });
        }

        if (name === randomFoodName) {
            let content = handleChooseRandomFood(req)
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    // Fetches a random emoji to send from a helper function
                    content: content,
                },
            });
        }
    }

})


// App listening
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});