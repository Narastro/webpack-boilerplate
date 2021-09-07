import app from "./server.js";
import path from "path";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Server Listening on : http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

const sendingHTML = (req, res) =>
  res.sendFile(path.resolve("src", "client", "index.html"));

app.get("/*", sendingHTML);
