import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";
import dataRoutes from "./routes/data.routes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());

// Routes
app.use("/users", usersRoutes);
app.use("/api", dataRoutes);

app.get("/", (req, res) => {
  res.send("API Express + Supabase OK ✅");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Serveur lancé sur http://localhost:${process.env.PORT || 3000}`);
});
