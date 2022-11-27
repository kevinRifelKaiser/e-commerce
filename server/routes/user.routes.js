import express from "express";
import User from "../models/users.js";
const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.json("User already exists");
    if (!doc) {
      const { firstName, lastName, email, password } = req.body;
      const user = new User({ firstName, lastName, email, password });
      await user.save();
      res.json("User correctly added to DB");
    }
  });
});

export default userRouter;
