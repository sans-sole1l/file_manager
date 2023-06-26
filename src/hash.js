import { createReadStream } from "node:fs";
import { extractArgs } from "./utils.js";

const { createHash } = await import("node:crypto");

export const calculateHash = (input) => {
  const [filePath] = extractArgs(input);

  const hash = createHash("sha256");

  const readStream = createReadStream(filePath);

  readStream.on("readable", () => {
    const data = readStream.read();

    if (data) {
      hash.update(data);
    } else {
      console.log(`${hash.digest("hex")}`);
    }
  });
};
