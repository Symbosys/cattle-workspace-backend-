-- AlterTable
ALTER TABLE "Animal" ADD COLUMN     "dailyMilkProdLtr" DECIMAL(8,2),
ADD COLUMN     "doesGiveMilk" BOOLEAN NOT NULL DEFAULT false;
