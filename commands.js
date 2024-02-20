import {InstallGlobalCommands} from "./utils.js";
import 'dotenv/config';
import {randomNumber} from "./commands/randomNumber.js";
import {randomFood} from "./commands/randomFood.js";

const COMMANDS = [randomNumber, randomFood]

InstallGlobalCommands(process.env.APP_ID, COMMANDS).then(value => {
    console.log(value)
})