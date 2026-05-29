/*
  Warnings:

  - The `qualificationDocUrl` column on the `DoctorProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DoctorProfile" ALTER COLUMN "licenseNumber" DROP NOT NULL,
DROP COLUMN "qualificationDocUrl",
ADD COLUMN     "qualificationDocUrl" JSONB;
