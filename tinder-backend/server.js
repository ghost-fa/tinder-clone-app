import express from "express";
import mangoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:llqAhjj2DjqGOUVe@cluster0.xk0ah.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//middlewares

app.use(express.json());
app.use(Cors());

//DB config
mangoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//Api endpoints
app.get("/", (req, res) => {
  res.status(200).send("hello today");
});

app.post("/tinder/cards", (req, res) => {
  const dbCards = req.body;

  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//listener
app.listen(port, () => console.log(`listenig on localhost: ${port}`));
