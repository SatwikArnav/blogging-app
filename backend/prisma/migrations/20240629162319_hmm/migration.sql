-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "createdAt" SET DEFAULT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY');

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "createdAt" SET DEFAULT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY');

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DEFAULT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY');