"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const postUser = async (payload) => {
  const { name, email, password } = payload;

  //check payload
  if (!email && !password) return null;

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
