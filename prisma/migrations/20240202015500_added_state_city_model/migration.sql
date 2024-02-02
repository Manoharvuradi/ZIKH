-- CreateTable
CREATE TABLE "SearchByState" (
    "id" SERIAL NOT NULL,
    "stateName" TEXT NOT NULL,

    CONSTRAINT "SearchByState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeachByCity" (
    "id" SERIAL NOT NULL,
    "cityName" TEXT NOT NULL,
    "searchByStateId" INTEGER NOT NULL,

    CONSTRAINT "SeachByCity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SearchByState_stateName_key" ON "SearchByState"("stateName");

-- CreateIndex
CREATE UNIQUE INDEX "SeachByCity_cityName_key" ON "SeachByCity"("cityName");

-- AddForeignKey
ALTER TABLE "SeachByCity" ADD CONSTRAINT "SeachByCity_searchByStateId_fkey" FOREIGN KEY ("searchByStateId") REFERENCES "SearchByState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
