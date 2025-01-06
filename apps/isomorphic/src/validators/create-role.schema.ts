import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const createRoleSchema = z.object({
  roleName: z
    .string()
    .min(1, { message: messages.roleNameIsRequired })
    .min(3, { message: messages.roleNameLengthMin }),
  roleColor: z
    .string(),
  super_admin: z.boolean(),
});

// generate form types from zod validation schema
export type CreateRoleInput = z.infer<typeof createRoleSchema>;
