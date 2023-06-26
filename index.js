import process from "node:process";
import os from "node:os";

import { getUserName } from "./src/utils.js";
import {
  changeDirectory,
  navigateUp,
  currentDirectory,
} from "./src/navigation.js";
import { readDirectory } from "./src/read-directory.js";
import { read } from "./src/read-file.js";
import { create } from "./src/create.js";
import { rename } from "./src/rename.js";
import { copy } from "./src/copy.js";
import { remove } from "./src/delete.js";
import { calculateHash } from "./src/hash.js";
import { compress } from "./src/compress.js";
import { decompress } from "./src/decompress.js";

console.log(`Welcome to the File Manager, ${getUserName()}!`);
console.log(`You are currently in ${currentDirectory}`);

process.stdin.on("data", async (chunk) => {
  const input = chunk.toString("utf-8").trim();

  if (input === "up") {
    navigateUp();
  }

  if (input.startsWith("cd")) {
    changeDirectory(input);
  }

  if (input === "ls") {
    readDirectory(currentDirectory);
    console.log(`You are currently in ${currentDirectory}`);
  }

  if (input.startsWith("cat")) {
    read(input, currentDirectory);
    console.log(`You are currently in ${currentDirectory}`);
  }

  if (input.startsWith("add")) {
    create(input, currentDirectory);
    console.log(`You are currently in ${currentDirectory}`);
  }

  if (input.startsWith("rn")) {
    rename(input);
    console.log(`You are currently in ${currentDirectory}`);
  }

  if (input.startsWith("cp")) {
    copy(input);
    console.log(`You are currently in ${currentDirectory}`);
  }

  if (input.startsWith("rm")) {
    remove(input);
    console.log(`You are currently in ${currentDirectory}`);
  }

  if (input.startsWith("mv")) {
    await copy(input);
    remove(input);
    console.log(`You are currently in ${currentDirectory}`);
  }

  if (input === "os --EOL") {
    console.log(JSON.stringify(os.EOL));
  }

  if (input === "os --cpus") {
    console.log(os.cpus());
  }

  if (input === "os --homedir") {
    console.log(os.homedir());
  }

  if (input === "os --username") {
    console.log(os.userInfo().username);
  }

  if (input === "os --architecture") {
    console.log(os.arch());
  }

  if (input.startsWith("hash")) {
    calculateHash(input);
    console.log(`You are currently in ${currentDirectory}`);
  }

  if (input.startsWith("compress")) {
    compress(input);
    console.log(`You are currently in ${currentDirectory}`);
  }

  if (input.startsWith("decompress")) {
    decompress(input);
    console.log(`You are currently in ${currentDirectory}`);
  }
});

process.on("SIGINT", function () {
  console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
  process.exit();
});
