import { resolve } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default async function handleStaticPages(request, response) {
	if (request.method === "GET") {
		const { url } = request;
		const publicPath = resolve(__dirname, "../public");
		const pages = ["", "control", "obs"];
		if (url === "/favicon.ico") {
			response.setHeader("Content-type", "image/x-icon");
			const buffer = await readFile(resolve(publicPath, "favicon.ico"));
			response.end(buffer);
			return true;
		} else for (const page of pages)
			if (url === "/" + page) {
				response.setHeader("Content-type", "text/html");
				const content = await readFile(resolve(publicPath, (page || "index") + ".html"), "utf-8");
				response.end(content);
				return true;
			}
	}
	if (request.method === "GET" && request.url === "/get") {
		getLocales().then(data => {
			const stringify = JSON.stringify(data);
			response.end(stringify);
		});
		return true;
	}
}
