const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

// const corsOptions = {
//   origin: "https://bsframeapi.onrender.com/frameid",
// };

// app.use(cors(corsOptions));
app.use(cors())

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
