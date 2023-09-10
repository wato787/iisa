import {
  createCountSchema,
  getCountSchema,
  stopCountSchema,
} from "../../../schema/count";
import { authedProcedure, t } from "../trpc";

export const countRouter = t.router({
  createCount: authedProcedure
    .input(createCountSchema)
    .mutation(async ({ ctx, input }) => {
      const createdCount = await ctx.prisma.time.create({
        data: {
          ...input,
        },
      });

      return createdCount;
    }),

  stopCount: authedProcedure
    .input(stopCountSchema)
    .mutation(async ({ ctx, input }) => {
      const count = await ctx.prisma.time.update({
        where: {
          id: input.id,
        },
        data: {
          workedTime: input.workedTime,
        },
      });
      return count;
    }),
});
