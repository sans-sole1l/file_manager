import { cp } from "node:fs/promises";
import { extractArgs } from "./utils.js";

export const copy = async (input) => {
  const [src, dest] = extractArgs(input);

  console.log(src, dest);

  try {
    await cp(src, dest, { errorOnExist: true, recursive: true, force: false });
  } catch (err) {
    if (err?.code === "ERR_FS_CP_EEXIST" || err?.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  }
};
