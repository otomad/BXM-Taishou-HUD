import http from "http";
import serverHandler from "./app.js";
import consoleColors from "./utils/console-colors.js";
import { exec } from "child_process";
import WebSocket from "../node_modules/ws/index.js";

const PORT = 2333;
const URL = `http://localhost:${PORT}/`;

const server = http.createServer(serverHandler);
export const socket = new WebSocket.Server({ server, path: "/ws" });

const colors = consoleColors.foreground;
console.log(`  ${colors.green}➜${colors.white} Start BXM Taishou HUD Server: ${colors.yellow}${URL}`);
exec(`start ${URL}`);

server.listen(PORT);
