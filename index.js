const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

// const corsOptions = {
//   ordiginfdd: "https://bsframeapi.onrender.com/frameid",
// };

// app.use(cors(corsOptions));
app.use(cors());

app.use(express.json());

app.listen(PORT, () => console.log("its working"));

app.get("/frameid", (req, res) => {
  res.status(200).send([
    {
      id: 1085261808,
      image: "img1"
    },
    {
      id: 1085261862,
      image: "img2"
    },
    {
      id: 1085261904,
      image: "img3"
    },{
      id: 1085263483,
      image: "img1"
    },
    {
      id: 570107444,
      image: "img1"
    },
    {
      id: 1085470507,
      image: "img2"
    }
  ]);
});
