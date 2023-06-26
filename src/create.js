import { writeFile } from "node:fs/promises";

export const create = async (input, path) => {
  const index = input.lastIndexOf(" ");
  const fileName = input.slice(index).trim();
  const dest = path + "\\" + fileName;

  try {
    await writeFile(dest, "", { flag: "wx" });
  } catch (err) {
    if (err?.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
    throw err;
  }
};
