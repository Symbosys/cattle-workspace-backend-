/*
  Warnings:

  - Added the required column `brandId` to the `MarketplaceCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MarketplaceCategory" ADD COLUMN     "brandId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MarketplaceCategory" ADD CONSTRAINT "MarketplaceCategory_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "BrandProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
