import {InstallGlobalCommands} from "./utils.js";
import 'dotenv/config';
import {RandomNumber} from "./commands/randomNumber.js";

const COMMANDS = [RandomNumber]

InstallGlobalCommands(process.env.APP_ID, COMMANDS).then(value => {
    console.log(value)
})