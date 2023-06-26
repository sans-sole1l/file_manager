import fsPromises from "node:fs/promises";
import fs from "node:fs";

export const readDirectory = async (dirPath) => {
  try {
    const content = await fsPromises.readdir(dirPath);

    const processed = content.map((name) => {
      const obj = { name };
      const isFile = fs.lstatSync(`${dirPath}\\${name}`).isFile();

      if (isFile) {
        obj.type = "file";
      } else {
        obj.type = "directory";
      }

      return obj;
    });

    console.table(processed);
  } catch (err) {
    if (err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  }
};
