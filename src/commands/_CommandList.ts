import { MessageCommandInt } from "../interfaces/MessageCommandInt";
import { ah } from "../commands/messageCommands/ah";
import { angry } from "../commands/messageCommands/angry";
import { fuck } from "../commands/messageCommands/fuck";
import { hmm } from "../commands/messageCommands/hmm";
import { hmmm } from "../commands/messageCommands/hmmm";
import { sleep } from "../commands/messageCommands/sleep";
import { sorry } from "../commands/messageCommands/sorry";
import { goat } from "../commands/slashCommands/goat";
import { help } from "../commands/slashCommands/help";
import { releaseData } from "../commands/slashCommands/releaseData";




export const MessageCommandList: MessageCommandInt[] = [ah, angry, fuck, hmm, hmmm, sleep, sorry];
export const SlashCommandList = [goat, help, releaseData];