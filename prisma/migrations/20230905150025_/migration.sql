/*
  Warnings:

  - You are about to drop the column `endBreakedAt` on the `Time` table. All the data in the column will be lost.
  - You are about to drop the column `startBreakedAt` on the `Time` table. All the data in the column will be lost.
  - You are about to drop the column `startWorkedAt` on the `Time` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Time" DROP COLUMN "endBreakedAt",
DROP COLUMN "startBreakedAt",
DROP COLUMN "startWorkedAt",
ADD COLUMN     "breakTime" INTEGER;
