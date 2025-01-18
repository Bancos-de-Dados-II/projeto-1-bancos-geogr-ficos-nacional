/*
  Warnings:

  - You are about to drop the `location` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "location";

-- CreateTable
CREATE TABLE "place" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "coordinates" JSONB NOT NULL,

    CONSTRAINT "place_pkey" PRIMARY KEY ("id")
);
