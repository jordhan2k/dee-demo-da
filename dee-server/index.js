require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const itemRouter = require('./routers/ItemRouter');

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vg1wpxc.mongodb.net/dee-demo`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log('connect to DB');
  } catch (error) {
    console.log('db connecting error: ', error?.message);
    process.exit(1);
  }
};
connectDB();

app.use("/api/v1/items", itemRouter);

app.listen(port, () => {
  console.log(`Starting server at port: ${port}`);
});