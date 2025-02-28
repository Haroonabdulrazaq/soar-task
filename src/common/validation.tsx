import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Name must be at least 3 characters')
    .regex(
      /[a-zA-Z][a-zA-Z ]{2,}/,
      'Name can only contain letters, and underscores',
    ),

  username: z
    .string()
    .trim()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'Username can only contain letters, numbers, and underscores',
    ),

  email: z.string().trim().email('Invalid email format'),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[@$!%*?&]/, 'Password must contain at least one special character'),

  dateOfBirth: z
    .string()
    .trim()
    .refine(
      (date) => {
        const parsedDate = new Date(date);
        return !isNaN(parsedDate.getTime()) && parsedDate < new Date();
      },
      {
        message: "Date of birth cannot be >= to today's date",
      },
    ),

  presentAddress: z.string().trim().min(5, 'Present address is too short'),

  permanentAddress: z.string().trim().min(5, 'Permanent address is too short'),

  city: z.string().trim().min(2, 'City name is too short'),

  postalCode: z
    .string()
    .trim()
    .regex(/^\d{4,10}$/, 'Invalid postal code'),

  country: z.string().trim().min(2, 'Country name is too short'),
});
