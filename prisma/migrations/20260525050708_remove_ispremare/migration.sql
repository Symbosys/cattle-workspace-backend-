/*
  Warnings:

  - You are about to drop the column `isPremium` on the `CattleListing` table. All the data in the column will be lost.
  - You are about to drop the column `premiumExpiresAt` on the `CattleListing` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "CattleListing_status_isPremium_idx";

-- AlterTable
ALTER TABLE "CattleListing" DROP COLUMN "isPremium",
DROP COLUMN "premiumExpiresAt",
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "CattleListing_status_idx" ON "CattleListing"("status");
