import fsPromises from "node:fs/promises";
import { extractArgs } from "./utils.js";

export const remove = async (input) => {
  const [filePath] = extractArgs(input);

  try {
    await fsPromises.rm(filePath);
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  }
};
