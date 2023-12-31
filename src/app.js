import handleNotFound from "./router/not-found.js";
import handleStaticPages from "./router/pages.js";
import handleGetPhrases from "./router/phrases.js";
import handleSendMessage from "./router/send.js";

export default async function serverHandler(request, response) {
	// 设置返回格式 JSON
	response.setHeader("Content-type", "application/json");

	if (await handleStaticPages(request, response)) return true;
	if (await handleGetPhrases(request, response)) return true;
	if (await handleSendMessage(request, response)) return true;

	// 未命中路由
	handleNotFound();
}
