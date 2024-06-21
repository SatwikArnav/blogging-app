-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DEFAULT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "intro" TEXT NOT NULL DEFAULT 'The author did not bother to give any intro';
