import { MessageCommandInt } from "../interfaces/MessageCommandInt";
import { ah } from "../commands/messageCommands/ah";
import { angry } from "../commands/messageCommands/angry";
import { fuck } from "../commands/messageCommands/fuck";
import { hmm } from "../commands/messageCommands/hmm";
import { hmmm } from "../commands/messageCommands/hmmm";
import { sleep } from "../commands/messageCommands/sleep";
import { sorry } from "../commands/messageCommands/sorry";
import { goat } from "../commands/slashCommands/goat"



export const MessageCommandList: MessageCommandInt[] = [ah, angry, fuck, hmm, hmmm, sleep, sorry];
export const SlashCommandList = [goat];