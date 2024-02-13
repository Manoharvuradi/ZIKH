-- AlterTable
ALTER TABLE "SeachByCity" ADD COLUMN     "latitude" DECIMAL(65,30),
ADD COLUMN     "longitude" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "SearchByState" ADD COLUMN     "latitude" DECIMAL(65,30),
ADD COLUMN     "longitude" DECIMAL(65,30);
