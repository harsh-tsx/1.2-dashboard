import { messages } from '@/config/messages';
import { z } from 'zod';

// form zod validation schema
export const rolePermissionSchema = z.object({
  name: z
    .string()
    .min(1, { message: messages.roleNameIsRequired })
    .min(3, { message: messages.roleNameLengthMin }),
  color: z
    .string(),
  super_admin: z.boolean(),
  permissions: z.record(z.any()),
});

// generate form types from zod validation schema
export type RolePermissionInput = z.infer<typeof rolePermissionSchema>;
