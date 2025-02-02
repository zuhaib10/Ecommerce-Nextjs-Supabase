import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {
      message:
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long.",
    }),
});

export const signupSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  name: z.string(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {
      message:
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long.",
    }),
});
