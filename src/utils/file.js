import { fileURLToPath } from "url";
import { resolve } from "path";
import fs from "fs/promises";

export function useDirname(importMetaUrl) {
	return {
		__filename: fileURLToPath(importMetaUrl),
		__dirname: fileURLToPath(new URL('.', importMetaUrl)),
	};
}

export async function readFile(importMetaUrl, encoding, ...paths) {
	const { __dirname } = useDirname(importMetaUrl);
	return await fs.readFile(resolve(__dirname, ...paths), encoding);
}
