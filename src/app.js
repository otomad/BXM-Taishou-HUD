import handleStaticPages from "./router/pages.js";

export default function serverHandler(request, response) {
	// 设置返回格式 JSON
	response.setHeader("Content-type", "application/json");

	if (handleStaticPages(request, response)) return true;

	// 未命中路由
	response.writeHead(404, { "Content-type": "text/plain" });
	response.write("404 Not Found\n");
	response.end();
}
