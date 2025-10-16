"use server";

import db from "@/db/drizzle";
import passwordMatchValidationSchema from "@/validation/passwordMatchValidation";
import z from "zod";
import { hash } from "bcryptjs";
export default async function registerUser({
  email,
  password,
  confirmPassword,
}: {
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const newUserValidationSchema = z
    .object({
      email: z.string().email("Invalid email address"),
    })
    .and(passwordMatchValidationSchema);

  const validatedData = newUserValidationSchema.safeParse({
    email,
    password,
    confirmPassword,
  });

  if (!validatedData.success) {
    return {
      error: true,
      message: validatedData.error.issues[0].message,
    };
  }
  const hashedPassword = await hash(validatedData.data.password, 10);
}
