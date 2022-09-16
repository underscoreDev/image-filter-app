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
// Init the Express application

// Set the network port

// Use the body parser middleware for post requests

// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

/**************************************************************************** */

//! END @TODO1

// Root Endpoint
// Displays a simple message to the user
