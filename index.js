const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

const corsOptions = {
  origin: "http://127.0.0.1:5173",
};

app.use(cors(corsOptions));

app.use(express.json());

app.listen(PORT, () => console.log("its working"));

app.get("/frameid", (req, res) => {
  res.status(200).send([
    {
      123456: "img1",
      56789: "img2",
      10001: "img3",
    },
  ]);
});
