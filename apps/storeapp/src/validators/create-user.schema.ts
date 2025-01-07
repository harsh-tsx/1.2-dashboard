import { z } from 'zod';
import { messages } from '@/config/messages';
import { validateEmail } from './common-rules';

// form zod validation schema
export const createUserSchema = z.object({
  name: z.string().min(1, { message: messages.fullNameIsRequired }),
  phone: z.string({ description: "hello" }).min(1),
  email: validateEmail,
  password_unhashed: z.string().min(1),
  role: z.string().min(1, { message: messages.roleIsRequired }),
  // parent: z.string(),
});

// generate form types from zod validation schema
export type CreateUserInput = z.infer<typeof createUserSchema>;
