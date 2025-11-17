// ✅ Import modules
import express from "express";
import cors from "cors";
import { collection, addDoc } from "firebase/firestore";
import {db} from "./firebase.js";


// ✅ Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Firestore Signup Route
app.post("/api/users/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    // Add user data to Firestore
    await addDoc(collection(db, "users"), { name, email, password });
    res.json({ message: "User added to Firestore successfully!" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Error saving user" });
  }
});

// ✅ Dummy reading data
const readingQuestions = [
  {
    id: 1,
    passage: "Sample TOEFL reading passage about global warming...",
    questions: [
      { q: "What is the main idea?", options: ["A", "B", "C", "D"], answer: "A" },
      { q: "What causes X?", options: ["P", "Q", "R", "S"], answer: "R" },
    ],
  },
];

// ✅ Welcome message
app.get("/", (req, res) => {
  res.send("Welcome to FluencyForge Backend!");
});

// ✅ Reading route
app.get("/api/questions/reading", (req, res) => {
  res.json(readingQuestions);
});

// ✅ Start server
app.listen(5000, () =>
  console.log("✅ Backend running on http://localhost:5000")
);
