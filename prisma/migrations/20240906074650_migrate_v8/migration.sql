/*
  Warnings:

  - You are about to drop the `postingcsr` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `postingevent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `postinghrbroadcast` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `postinghrinfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `postingwfcarticel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `postingwingsmart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refreshtoken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `postingcsr`;

-- DropTable
DROP TABLE `postingevent`;

-- DropTable
DROP TABLE `postinghrbroadcast`;

-- DropTable
DROP TABLE `postinghrinfo`;

-- DropTable
DROP TABLE `postingwfcarticel`;

-- DropTable
DROP TABLE `postingwingsmart`;

-- DropTable
DROP TABLE `refreshtoken`;

-- CreateTable
CREATE TABLE `posting_event` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subTitle` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NULL,
    `isShow` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refresh_token` (
    `id` VARCHAR(191) NOT NULL,
    `token` LONGTEXT NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posting_hr_broadcast` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subTitle` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NULL,
    `isShow` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posting_hr_info` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subTitle` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NULL,
    `isShow` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posting_csr` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subTitle` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `isShow` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posting_wings_mart` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `isShow` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posting_wfc_articel` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subTitle` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NULL,
    `isShow` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- RedefineIndex
-- CREATE UNIQUE INDEX `user_username_key` ON `user`(`username`);
-- DROP INDEX `User_username_key` ON `user`;
