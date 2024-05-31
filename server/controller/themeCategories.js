import express from "express";
import configurateMiddleware from "../config/middleware.js";
import supabase from "../config/supabase.js";

const app = express();
configurateMiddleware(app);
const router = express.Router();

router.get("/theme-categories", async (req, res) => {
  try {
    const { data, error } = await supabase.from("theme_categories").select("*");

    if (error) {
      return res.json(error);
    }

    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

export default router;
