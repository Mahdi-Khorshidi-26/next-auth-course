"use server";

import passwordMatchValidationSchema from "@/validation/passwordMatchValidation";
import z from "zod";

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
}
