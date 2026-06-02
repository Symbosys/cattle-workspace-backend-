/*
  Warnings:

  - You are about to drop the column `slug` on the `MarketplaceCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `MarketplaceProduct` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `MarketplaceProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "MarketplaceCategory_slug_key";

-- AlterTable
ALTER TABLE "MarketplaceCategory" DROP COLUMN "slug";

-- AlterTable
ALTER TABLE "MarketplaceProduct" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MarketplaceProduct_slug_key" ON "MarketplaceProduct"("slug");
