import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";
import { extractArgs } from "./utils.js";

export const compress = async (input) => {
  const [srcPath, destPath] = extractArgs(input);
  const pipe = promisify(pipeline);

  const brotli = createBrotliCompress();
  const source = createReadStream(srcPath);
  const destination = createWriteStream(destPath);

  try {
    await pipe(source, brotli, destination);
  } catch (err) {
    console.error("An error occurred:", err);
    process.exitCode = 1;
  }
};
