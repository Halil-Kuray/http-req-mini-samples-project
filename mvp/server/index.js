import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import itemsRoutes from "./routes/item.js";

mongoose.set('strictQuery', false);

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Enable Cors
app.use(cors());

// DB Config
const db = "mongodb+srv://ibrahim:nyWJIzia1FxJhorx@participants.tqlnkll.mongodb.net/Certificate?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", itemsRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// DB Config

