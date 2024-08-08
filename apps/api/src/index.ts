import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
