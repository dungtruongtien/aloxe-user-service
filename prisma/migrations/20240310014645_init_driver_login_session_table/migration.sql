-- CreateTable
CREATE TABLE `driver_online_session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `driver_id` INTEGER NOT NULL,
    `current_longitude` DECIMAL(65, 30) NOT NULL,
    `current_latitude` DECIMAL(65, 30) NOT NULL,
    `online_status` INTEGER NOT NULL,
    `working_status` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `driver_online_session_driver_id_key`(`driver_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `driver_online_session` ADD CONSTRAINT `fk_driver_onl_session_vehicle` FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
