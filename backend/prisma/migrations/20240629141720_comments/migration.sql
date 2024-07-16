/*
  Warnings:

  - Added the required column `userId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY');

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "createdAt" SET DEFAULT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY');

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DEFAULT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY');

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
