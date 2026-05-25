/*
  Warnings:

  - The `url` column on the `ListingImage` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ListingImage" DROP COLUMN "url",
ADD COLUMN     "url" JSONB;
