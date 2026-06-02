/*
  Warnings:

  - You are about to drop the column `commissionRate` on the `BrandProfile` table. All the data in the column will be lost.
  - The `logoUrl` column on the `BrandProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `productId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `carrier` on the `MarketplaceOrder` table. All the data in the column will be lost.
  - You are about to drop the column `commissionAmount` on the `MarketplaceOrder` table. All the data in the column will be lost.
  - You are about to drop the column `shippingAddress` on the `MarketplaceOrder` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `MarketplaceOrder` table. All the data in the column will be lost.
  - You are about to drop the column `trackingNumber` on the `MarketplaceOrder` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `MarketplaceOrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `MarketplaceProduct` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `MarketplaceProduct` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `MarketplaceProduct` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `MarketplaceProduct` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `BrandProfile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stateId]` on the table `BrandProfile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cityId]` on the table `BrandProfile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cartId,variantId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `MarketplaceProduct` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `BrandProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variantId` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingAddressId` to the `MarketplaceOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotal` to the `MarketplaceOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandId` to the `MarketplaceOrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variantId` to the `MarketplaceOrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `MarketplaceProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `MarketplaceProduct` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED');

-- AlterEnum
ALTER TYPE "OrderStatus" ADD VALUE 'RETURNED';

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "MarketplaceOrderItem" DROP CONSTRAINT "MarketplaceOrderItem_productId_fkey";

-- DropIndex
DROP INDEX "CartItem_cartId_productId_key";

-- DropIndex
DROP INDEX "MarketplaceProduct_category_status_idx";

-- AlterTable
ALTER TABLE "BrandProfile" DROP COLUMN "commissionRate",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "bannerUrl" JSONB,
ADD COLUMN     "cityId" TEXT,
ADD COLUMN     "contactEmail" TEXT,
ADD COLUMN     "contactPhone" TEXT,
ADD COLUMN     "gstNumber" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "longitude" DOUBLE PRECISION,
ADD COLUMN     "rating" DECIMAL(3,2) NOT NULL DEFAULT 0.00,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "stateId" TEXT,
DROP COLUMN "logoUrl",
ADD COLUMN     "logoUrl" JSONB;

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "productId",
ADD COLUMN     "variantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MarketplaceOrder" DROP COLUMN "carrier",
DROP COLUMN "commissionAmount",
DROP COLUMN "shippingAddress",
DROP COLUMN "status",
DROP COLUMN "trackingNumber",
ADD COLUMN     "billingAddressId" TEXT,
ADD COLUMN     "discountAmount" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
ADD COLUMN     "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "shippingAddressId" TEXT NOT NULL,
ADD COLUMN     "shippingAmount" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
ADD COLUMN     "subTotal" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "taxAmount" DECIMAL(12,2) NOT NULL DEFAULT 0.00;

-- AlterTable
ALTER TABLE "MarketplaceOrderItem" DROP COLUMN "productId",
ADD COLUMN     "brandId" TEXT NOT NULL,
ADD COLUMN     "carrier" TEXT,
ADD COLUMN     "deliveredAt" TIMESTAMP(3),
ADD COLUMN     "discountAmount" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
ADD COLUMN     "shippedAt" TIMESTAMP(3),
ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "taxAmount" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
ADD COLUMN     "trackingNumber" TEXT,
ADD COLUMN     "variantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MarketplaceProduct" DROP COLUMN "category",
DROP COLUMN "imageUrl",
DROP COLUMN "price",
DROP COLUMN "stock",
ADD COLUMN     "attributes" JSONB,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "metaDescription" TEXT,
ADD COLUMN     "metaTitle" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductReview" ADD COLUMN     "images" JSONB,
ADD COLUMN     "isVerifiedPurchase" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sellerReply" TEXT;

-- CreateTable
CREATE TABLE "MarketplaceCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "parentId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarketplaceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "compareAtPrice" DECIMAL(10,2),
    "stock" INTEGER NOT NULL DEFAULT 0,
    "imageUrl" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAddress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Home',
    "recipientName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "apartment" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'India',
    "postalCode" TEXT NOT NULL,
    "latitude" DECIMAL(10,8),
    "longitude" DECIMAL(11,8),
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MarketplaceCategory_slug_key" ON "MarketplaceCategory"("slug");

-- CreateIndex
CREATE INDEX "MarketplaceCategory_parentId_idx" ON "MarketplaceCategory"("parentId");

-- CreateIndex
CREATE INDEX "MarketplaceCategory_isActive_idx" ON "MarketplaceCategory"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_sku_key" ON "ProductVariant"("sku");

-- CreateIndex
CREATE INDEX "ProductVariant_productId_idx" ON "ProductVariant"("productId");

-- CreateIndex
CREATE INDEX "ProductVariant_isActive_idx" ON "ProductVariant"("isActive");

-- CreateIndex
CREATE INDEX "UserAddress_userId_idx" ON "UserAddress"("userId");

-- CreateIndex
CREATE INDEX "UserAddress_isDefault_idx" ON "UserAddress"("isDefault");

-- CreateIndex
CREATE UNIQUE INDEX "BrandProfile_slug_key" ON "BrandProfile"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "BrandProfile_stateId_key" ON "BrandProfile"("stateId");

-- CreateIndex
CREATE UNIQUE INDEX "BrandProfile_cityId_key" ON "BrandProfile"("cityId");

-- CreateIndex
CREATE INDEX "BrandProfile_slug_idx" ON "BrandProfile"("slug");

-- CreateIndex
CREATE INDEX "CartItem_cartId_idx" ON "CartItem"("cartId");

-- CreateIndex
CREATE INDEX "CartItem_variantId_idx" ON "CartItem"("variantId");

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_variantId_key" ON "CartItem"("cartId", "variantId");

-- CreateIndex
CREATE INDEX "MarketplaceOrder_paymentStatus_idx" ON "MarketplaceOrder"("paymentStatus");

-- CreateIndex
CREATE INDEX "MarketplaceOrderItem_variantId_idx" ON "MarketplaceOrderItem"("variantId");

-- CreateIndex
CREATE INDEX "MarketplaceOrderItem_brandId_idx" ON "MarketplaceOrderItem"("brandId");

-- CreateIndex
CREATE INDEX "MarketplaceOrderItem_status_idx" ON "MarketplaceOrderItem"("status");

-- CreateIndex
CREATE UNIQUE INDEX "MarketplaceProduct_slug_key" ON "MarketplaceProduct"("slug");

-- CreateIndex
CREATE INDEX "MarketplaceProduct_categoryId_idx" ON "MarketplaceProduct"("categoryId");

-- CreateIndex
CREATE INDEX "MarketplaceProduct_status_idx" ON "MarketplaceProduct"("status");

-- CreateIndex
CREATE INDEX "ProductReview_userId_idx" ON "ProductReview"("userId");

-- AddForeignKey
ALTER TABLE "BrandProfile" ADD CONSTRAINT "BrandProfile_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandProfile" ADD CONSTRAINT "BrandProfile_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketplaceCategory" ADD CONSTRAINT "MarketplaceCategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "MarketplaceCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketplaceProduct" ADD CONSTRAINT "MarketplaceProduct_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MarketplaceCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "MarketplaceProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketplaceOrder" ADD CONSTRAINT "MarketplaceOrder_shippingAddressId_fkey" FOREIGN KEY ("shippingAddressId") REFERENCES "UserAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketplaceOrder" ADD CONSTRAINT "MarketplaceOrder_billingAddressId_fkey" FOREIGN KEY ("billingAddressId") REFERENCES "UserAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketplaceOrderItem" ADD CONSTRAINT "MarketplaceOrderItem_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketplaceOrderItem" ADD CONSTRAINT "MarketplaceOrderItem_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "BrandProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
