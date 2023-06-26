import { createReadStream } from "node:fs";

export const read = (input, currentDirectory) => {
  const index = input.lastIndexOf(" ");
  const fileName = input.slice(index).trim();
  const filePath = currentDirectory + "\\" + fileName;

  const stream = createReadStream(filePath, "utf-8");

  let data = "";

  stream.on("data", (chunk) => (data += chunk));
  stream.on("end", () => console.log(data));
};
