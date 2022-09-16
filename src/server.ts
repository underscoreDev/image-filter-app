import app from "./app";

const port = process.env.PORT || 8982;

process.on("uncaughtException", (err) => {
  console.log("****** UNCAUGHT EXCEPTION 🔥🔥🔥 SHUTTING DOWN *****");
  console.log(err.name, err.message);
  process.exit(1);
});

// Start the Server
const server = app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log(`press CTRL+C to stop server`);
});

process.on("unhandledRejection", (err: any) => {
  console.log(err.name, err.message);
  console.log("****** UMHANDLED REJECTION 🔥🔥🔥 SHUTTING DOWN *****");
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.log("****** SIGTERM RECEIVED 🔥🔥🔥 SHUTTING DOWN *****");
  server.close(() => console.log("🔥🔥🔥 process terminated"));
});
