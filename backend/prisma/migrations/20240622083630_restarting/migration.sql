-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DEFAULT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY');