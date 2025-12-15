const express = require("express");
const dotenv = require("dotenv");
const contactRouter = require("./routes/constact.route");
const cors = require("cors");

dotenv.config();
const app = express();

// ✅ CORS MUST COME BEFORE ROUTES

app.use(cors());

app.use(express.json());

// ✅ ROUTES
app.use("/api", contactRouter);

app.listen(9000, () => {
  console.log("server is running on - 9000");
});
