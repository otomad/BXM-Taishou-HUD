import { readFile } from "../utils/file.js";

export default async function handleStaticPages(request, response) {
	if (request.method === "GET") {
		const { url } = request;
		const pages = ["", "control", "obs"];
		if (url === "/favicon.ico") {
			response.setHeader("Content-type", "image/x-icon");
			const buffer = await readFile(import.meta.url, undefined, "../public", "favicon.ico");
			response.end(buffer);
			return true;
		} else for (const page of pages)
			if (url === "/" + page) {
				response.setHeader("Content-type", "text/html");
				const content = await readFile(import.meta.url, "utf-8", "../public", (page || "index") + ".html");
				response.end(content);
				return true;
			}
	}
}
