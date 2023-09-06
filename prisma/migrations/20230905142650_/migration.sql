/*
  Warnings:

  - You are about to drop the column `time` on the `Time` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Time" DROP COLUMN "time",
ADD COLUMN     "endBreakedAt" TIMESTAMP(3),
ADD COLUMN     "startBreakedAt" TIMESTAMP(3),
ADD COLUMN     "startWorkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "workedTime" INTEGER;
