const express = require("express");
const dotenv = require("dotenv");
const app = express();
const db = require("./config/db");
const notes = require("./dummyNotes");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
const PORT = process.env.PORT || 5000;

dotenv.config();
db();

app.use(express.json());

app.get("/api/mynotes", (req, res) => {
  res.send(notes);
});

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on ${PORT}`));
