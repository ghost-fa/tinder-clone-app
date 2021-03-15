import express from "express";
import mangoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:llqAhjj2DjqGOUVe@cluster0.xk0ah.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//middlewares
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
//listener
app.listen(port, () => console.log(`listenig on localhost: ${port}`));
