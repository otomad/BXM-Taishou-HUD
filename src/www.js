import http from "http";
import serverHandler from "./app.js";
import consoleColors from "./utils/console-colors.js";
import { exec } from "child_process";

const PORT = 1000;
const URL = `http://localhost:${PORT}/`;

const server = http.createServer(serverHandler);

const colors = consoleColors.foreground;
console.log(`  ${colors.green}➜${colors.white} Start BXM Taishou HUD Server: ${colors.yellow}${URL}`);
exec(`start ${URL}`);

server.listen(PORT);
