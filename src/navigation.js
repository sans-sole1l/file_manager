import os from "node:os";

const dir = os.homedir();

export let currentDirectory = dir;

export const navigateUp = () => {
  if (currentDirectory === dir) {
    return console.log("You're in the root directory");
  }

  const index = currentDirectory.lastIndexOf("\\");
  currentDirectory = currentDirectory.slice(0, index);

  console.log(`You are currently in ${currentDirectory}`);
};

export const changeDirectory = (input) => {
  const index = input.lastIndexOf(" ");
  const newDirectory = input.slice(index).trim();

  if (newDirectory.startsWith(dir)) {
    currentDirectory = newDirectory;
    return console.log(`You are currently in ${currentDirectory}`);
  }

  console.log(`${newDirectory} is not correct path`);
};
