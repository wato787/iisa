import z from "zod";

export const createCountSchema = z.object({
  userId: z.string(),
  userName: z.string(),
  month: z.number(),
  breakTime: z.number().optional(),
  workedTime: z.number().optional(),
});
export type CreateCount = z.infer<typeof createCountSchema>;

export const stopCountSchema = z.object({
  id: z.string().cuid(),
  workedTime: z.number(),
});

export type StopCount = z.infer<typeof stopCountSchema>;

export const getCountSchema = z.object({
  userId: z.string(),
});

export type GetCount = z.infer<typeof getCountSchema>;

export const breakCountSchema = z.object({
  id: z.string().cuid(),
  breakTime: z.number(),
});

export type BreakCount = z.infer<typeof breakCountSchema>;
