-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `dob` DATETIME(3) NULL,
    `role` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `staffs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `staff_no` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `staffs_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` VARCHAR(255) NOT NULL,
    `customer_no` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `customers_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drivers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_type` INTEGER NOT NULL,
    `driver_no` VARCHAR(255) NOT NULL,
    `vehicle_type` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `drivers_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `licenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `class` VARCHAR(255) NOT NULL,
    `issued_date` DATETIME(3) NOT NULL,
    `expired_date` DATETIME(3) NOT NULL,
    `license_number` VARCHAR(191) NOT NULL,
    `driver_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `licenses_driver_id_key`(`driver_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `model` VARCHAR(255) NULL,
    `license_plate` VARCHAR(191) NULL,
    `driver_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `vehicles_driver_id_key`(`driver_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `driver_online_session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `driver_id` INTEGER NOT NULL,
    `current_longitude` DECIMAL(11, 8) NOT NULL,
    `current_latitude` DECIMAL(10, 8) NOT NULL,
    `online_status` INTEGER NOT NULL,
    `working_status` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `driver_online_session_driver_id_key`(`driver_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `staffs` ADD CONSTRAINT `fk_user_staff` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customers` ADD CONSTRAINT `fk_user_customer` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drivers` ADD CONSTRAINT `fk_user_driver` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `licenses` ADD CONSTRAINT `fk_driver_license` FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicles` ADD CONSTRAINT `fk_driver_vehicle` FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `driver_online_session` ADD CONSTRAINT `fk_driver_onl_session_vehicle` FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
