export default function handleNotFound(response) {
	response.writeHead(404, { "Content-type": "text/plain" });
	response.write("404 Not Found\n");
	response.end();
}
