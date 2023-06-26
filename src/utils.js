import process from "node:process";

export const getUserName = () => {
  const arg = process.argv.slice(2).find((arg) => arg.startsWith("--username"));
  const username = arg.slice(11);

  return username;
};

export const extractArgs = (input) => {
  const args = input.split(" ");

  return args.reduce((acc, arg, i) => {
    if (i > 0) {
      acc.push(arg);
    }

    return acc;
  }, []);
};
