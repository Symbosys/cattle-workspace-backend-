/*
  Warnings:

  - You are about to drop the column `cityId` on the `BrandProfile` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `BrandProfile` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `BrandProfile` table. All the data in the column will be lost.
  - You are about to drop the column `stateId` on the `BrandProfile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BrandProfile" DROP CONSTRAINT "BrandProfile_cityId_fkey";

-- DropForeignKey
ALTER TABLE "BrandProfile" DROP CONSTRAINT "BrandProfile_stateId_fkey";

-- DropIndex
DROP INDEX "BrandProfile_cityId_key";

-- DropIndex
DROP INDEX "BrandProfile_stateId_key";

-- AlterTable
ALTER TABLE "BrandProfile" DROP COLUMN "cityId",
DROP COLUMN "latitude",
DROP COLUMN "longitude",
DROP COLUMN "stateId";

-- CreateTable
CREATE TABLE "BrandLocation" (
    "id" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "latitude" DECIMAL(10,8),
    "longitude" DECIMAL(11,8),
    "stateId" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BrandLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BrandLocation_stateId_key" ON "BrandLocation"("stateId");

-- CreateIndex
CREATE UNIQUE INDEX "BrandLocation_cityId_key" ON "BrandLocation"("cityId");

-- AddForeignKey
ALTER TABLE "BrandLocation" ADD CONSTRAINT "BrandLocation_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "BrandProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandLocation" ADD CONSTRAINT "BrandLocation_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandLocation" ADD CONSTRAINT "BrandLocation_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
