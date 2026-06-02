/*
  Warnings:

  - You are about to drop the column `slug` on the `MarketplaceProduct` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "MarketplaceProduct_slug_key";

-- AlterTable
ALTER TABLE "MarketplaceProduct" DROP COLUMN "slug";
