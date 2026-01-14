import express from "express";
import supabase from "../config/supabaseClient.js";

const router = express.Router();

router.get("/:leads", async (req, res) => {
  const { leads } = req.params;

  const { data, error } = await supabase
    .from(leads)
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

export default router;
