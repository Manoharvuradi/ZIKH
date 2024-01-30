-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "LocationData" (
    "id" SERIAL NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "crimeType" TEXT NOT NULL,
    "description" TEXT,
    "cityDetails" JSONB,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "createdById" INTEGER,
    "updatedById" INTEGER,

    CONSTRAINT "LocationData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CredentialsUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "CredentialsUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrimeTip" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "tip" TEXT NOT NULL,
    "personalInfo" TEXT NOT NULL,
    "addtionalInfo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "createdById" INTEGER,
    "updatedById" INTEGER,

    CONSTRAINT "CrimeTip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "LocationData_id_key" ON "LocationData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CredentialsUser_email_key" ON "CredentialsUser"("email");

-- AddForeignKey
ALTER TABLE "LocationData" ADD CONSTRAINT "LocationData_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "CredentialsUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationData" ADD CONSTRAINT "LocationData_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "CredentialsUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrimeTip" ADD CONSTRAINT "CrimeTip_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "CredentialsUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrimeTip" ADD CONSTRAINT "CrimeTip_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "CredentialsUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

