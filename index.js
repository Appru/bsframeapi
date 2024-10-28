const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

// const corsOptions = {
//   origin: "https://bsframeapi.onrender.com/frameid",
// };

// app.use(cors(corsOptions));
app.use(cors());

app.use(express.json());

app.listen(PORT, () => console.log("its working"));

app.get("/frameid", (req, res) => {
  res.status(200).send([
    {
      id: 12345,
      image: "img1"
    },
    {
      id: 1001,
      image: "img2"
    },
    {
      id: 8888,
      image: "img3"
    },
  ]);
});
