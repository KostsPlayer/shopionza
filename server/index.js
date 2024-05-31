import express from "express";
import configurateMiddleware from "./config/middleware.js";
import themeCategories from "./controller/themeCategories.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
configurateMiddleware(app);

app.use(themeCategories);

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
