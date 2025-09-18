import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

// Middleware básico para JSON
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Endpoint de prueba
app.get("/api/ping", (req, res) => {
  res.json({ message: "pong desde backend 🚀" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});