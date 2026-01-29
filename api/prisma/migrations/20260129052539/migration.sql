/*
  Warnings:

  - You are about to drop the column `time` on the `Leaderboard` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bot_axis_y` to the `Coordinates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `left_axis_x` to the `Coordinates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `right_axis_x` to the `Coordinates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top_axis_y` to the `Coordinates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finishedBySec` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeDisplay` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coordinates" ADD COLUMN     "bot_axis_y" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "left_axis_x" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "right_axis_x" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "top_axis_y" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Leaderboard" DROP COLUMN "time",
ADD COLUMN     "finishedBySec" INTEGER NOT NULL,
ADD COLUMN     "timeDisplay" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
