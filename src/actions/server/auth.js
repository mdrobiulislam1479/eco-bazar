"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const postUser = async (payload) => {
  const { name, email, password } = payload;

  //check payload
  if (!email || !password) return null;

  //check user
  const isExist = await dbConnect("users").findOne({ email });
  if (isExist) return null;

  //create user
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };

  //insert user
  const result = await dbConnect("users").insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;

  //check payload
  if (!email || !password) return null;

  //check user
  const user = await dbConnect("users").findOne({ email });
  if (!user) return null;

  //check password
  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) return null;

  return {
    id: user._id.toString(),
    name: user.name || "",
    email: user.email,
  };
};
