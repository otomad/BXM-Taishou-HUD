import { readFile } from "../utils/file.js";

export default async function handleGetPhrases(request, response) {
	if (request.method === "GET" && request.url === "/api/phrases") {
		const content = await readFile(import.meta.url, "utf-8", "..", "phrases.json");
		response.end(content);
		return true;
	}
}
