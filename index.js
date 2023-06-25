import { createServer as createServerHttp } from "node:http";

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
