import { socket } from "../www.js";

export default async function handleSendMessage(request, response) {
	const url = new URL(request.url, `http://${request.headers.host}`);
	if (request.method === "GET" && url.pathname === "/api/send") {
		const msg = url.searchParams.get("msg");
		if (msg) {
			let clientCount = 0;
			socket.clients.forEach(client => {
				if (client.readyState === 1) {
					client.send(msg);
					clientCount++;
				}
			});
			const result = {
				status: "ok",
				clientCount,
			};
			response.end(JSON.stringify(result));
			return true;
		}
	}
}
