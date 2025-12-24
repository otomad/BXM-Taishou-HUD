import { fileStats, isFileExist, readFile, readFileSlice } from "../utils/file.js";
import { extname } from "path"

export default async function handleStaticPages(request, response) {
	if (request.method === "GET") {
		let { url } = request;
		url = url.replace(/^\//, "");
		url ||= "index";
		url = decodeURIComponent(url);

		const ext = (contentType, encoding) => ({ contentType, encoding });
		const extensions = {
			ico: ext("image/x-icon"),
			html: ext("text/html", "utf-8"),
			css: ext("text/css", "utf-8"),
			mp4: ext("video/mp4"),
			vtt: ext("text/vtt", "utf-8"),
			srt: ext("text/plain", "utf-8"),
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

        const stat = await fileStats(import.meta.url, "../public", url);
        if (!stat) return false;

        const fileSize = stat.size;
        const range = request.headers.range;

        if (range) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = (end - start) + 1;

            response.writeHead(206, {
                "Content-Range": `bytes ${start}-${end}/${fileSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": chunksize,
                "Content-Type": contentType,
            });

            const buffer = await readFileSlice(import.meta.url, start, end, "../public", url);
            response.end(buffer);
            return true;
        }
		else {
			response.writeHead(200, {
                "Content-Length": fileSize,
                "Content-Type": contentType,
                "Accept-Ranges": "bytes",
            });
			const buffer = await readFile(import.meta.url, encoding, "../public", url);
			response.end(buffer);
			return true;
		}
	}
}
