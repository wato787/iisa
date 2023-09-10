import {
  breakCountSchema,
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

  getCount: authedProcedure
    .input(getCountSchema)
    .query(async ({ ctx, input }) => {
      const count = await ctx.prisma.time.findFirst({
        where: {
          userId: input.userId,
        },
      });
      return count;
    }),

  stopCount: authedProcedure
    .input(stopCountSchema)
    .mutation(async ({ ctx, input }) => {
      const stoppedCount = await ctx.prisma.time.update({
        where: {
          id: input.id,
        },
        data: {
          workedTime: input.workedTime,
        },
      });
      return stoppedCount;
    }),

  breakCount: authedProcedure
    .input(breakCountSchema)
    .mutation(async ({ ctx, input }) => {
      const breakedCount = await ctx.prisma.time.update({
        where: {
          id: input.id,
        },
        data: {
          breakTime: input.breakTime,
        },
      });
      return breakedCount;
    }),
});
