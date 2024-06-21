/*
  Warnings:

  - Made the column `createdAt` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `intro` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "intro" SET NOT NULL;
