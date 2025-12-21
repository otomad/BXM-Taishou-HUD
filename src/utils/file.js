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

export async function isFileExist(importMetaUrl, ...paths) {
	const { __dirname } = useDirname(importMetaUrl);
	try {
		await fs.access(resolve(__dirname, ...paths), fs.constants.F_OK);
		return true;
	} catch {
		return false;
	}
}

export async function fileStats(importMetaUrl, ...paths) {
	const { __dirname } = useDirname(importMetaUrl);
	return await fs.stat(resolve(__dirname, ...paths));
}

export async function readFileSlice(importMetaUrl, start, end, ...paths) {
	const { __dirname } = useDirname(importMetaUrl);

    const size = (end - start) + 1;
    const buffer = Buffer.alloc(size);
    const fileHandle = await fs.open(resolve(__dirname, ...paths), "r");
    
    // read(buffer, offset_in_buffer, length_to_read, position_in_file)
    await fileHandle.read(buffer, 0, size, start);
    await fileHandle.close();
    
    return buffer;
}
