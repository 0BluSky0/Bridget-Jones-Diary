const express = require('express');
const cors = require('cors');
const diaryRouter = require('./routers/snacks');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/diary', diaryRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Bridge Girl's Diary",
    description: "Enter your secrets and thoughts. hehehehehehehe."
  })
})

module.exports = app;