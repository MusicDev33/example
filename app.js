const express = require("express");
const googleService = require("./Services/GoogleService");

const env = process.env;

let app = express();
const port = 3000;

app.get("/test", async (req, res, next) => {
  try {
    const response = await googleService.getSheet();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

app.post("/test", async (req, res, next) => {
  try {
    const response = await googleService.postNewMerch(req);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
