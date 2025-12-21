import { isFileExist, readFile } from "../utils/file.js";
import { extname } from "path"

export default async function handleStaticPages(request, response) {
	if (request.method === "GET") {
		let { url } = request;
		url = url.replace(/^\//, "");
		url ||= "index";

		const ext = (contentType, encoding) => ({ contentType, encoding });
		const extensions = {
			ico: ext("image/x-icon"),
			html: ext("text/html", "utf-8"),
			css: ext("text/css", "utf-8"),
			mp4: ext("video/mp4"),
		}
		let extension = extname(url).replace(/^\./, "");
		if (!extension || !extensions.hasOwnProperty(extension)) {
			extension = "html";
			url += ".html";
		}

		let { contentType, encoding } = extensions[extension];
		contentType ||= "application/octet-stream";

		const isExist = await isFileExist(import.meta.url, "../public", url);
		if (!isExist) return false;

		response.setHeader("Content-type", contentType);
		const buffer = await readFile(import.meta.url, encoding, "../public", url);
		response.end(buffer);
		return true;
	}
}
