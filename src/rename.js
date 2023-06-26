import fsPromises from "node:fs/promises";
import { extractArgs } from "./utils.js";

export const rename = async (input) => {
  const args = extractArgs(input);
  const pathToFile = args[0];
  const newFileName = args[1];

  const index = pathToFile.lastIndexOf("\\");
  const newPath = pathToFile.slice(0, index) + "\\" + newFileName;

  try {
    await fsPromises.rename(pathToFile, newPath);
  } catch (err) {
    if (err?.code === "ENOENT" || err?.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
    throw err;
  }
};
