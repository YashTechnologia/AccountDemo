CREATE DATABASE  IF NOT EXISTS `fintek_accounting` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fintek_accounting`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: fintek_accounting
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_bank_payments`
--

DROP TABLE IF EXISTS `tbl_bank_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_bank_payments` (
  `bank_payments_id` int NOT NULL AUTO_INCREMENT,
  `bank_payments_bank_name` varchar(255) DEFAULT NULL,
  `bank_payments_cheque_no` varchar(45) DEFAULT NULL,
  `bank_payments_voucher_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `bank_payments_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`bank_payments_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_bank_payments`
--

LOCK TABLES `tbl_bank_payments` WRITE;
/*!40000 ALTER TABLE `tbl_bank_payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_bank_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_firm`
--

DROP TABLE IF EXISTS `tbl_firm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_firm` (
  `firm_id` int NOT NULL AUTO_INCREMENT,
  `firm_name` varchar(255) DEFAULT NULL,
  `firm_email` varchar(45) DEFAULT NULL,
  `firm_gstno` varchar(255) DEFAULT NULL,
  `firm_address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `firm_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`firm_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_firm`
--

LOCK TABLES `tbl_firm` WRITE;
/*!40000 ALTER TABLE `tbl_firm` DISABLE KEYS */;
INSERT INTO `tbl_firm` VALUES (33,'ABC','abs@gmail.com','de24referf','dederf','2024-10-14 09:51:22','18','2024-10-14 09:51:22',NULL,1),(34,'xyz','xyz@gmail.com','fjerhue6454','wdekofkroepkg','2024-10-14 09:54:44','18','2024-10-14 09:54:44',NULL,1),(35,'prt','prt@gmail.com','dferbg2343','weftyhyj','2024-10-15 05:27:06','18','2024-10-15 05:27:06',NULL,1),(36,'Money Heist','money@heist.com','mnyht3453','Spain','2024-10-16 11:28:44','27','2024-10-16 11:28:44',NULL,1),(37,'Pirates Of The Caribbean','pirates@gmail.com','prtsotcrbn2323','Port Royal','2024-10-16 11:30:54','27','2024-10-16 11:30:54',NULL,1);
/*!40000 ALTER TABLE `tbl_firm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_gl`
--

DROP TABLE IF EXISTS `tbl_gl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_gl` (
  `gl_id` int NOT NULL AUTO_INCREMENT,
  `gl_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gl_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_gl`
--

LOCK TABLES `tbl_gl` WRITE;
/*!40000 ALTER TABLE `tbl_gl` DISABLE KEYS */;
INSERT INTO `tbl_gl` VALUES (1,'Cash'),(2,'Accounts Receivable'),(3,'Inventory'),(4,'Prepaid Expenses'),(5,'Fixed Assets'),(6,'Accumulated Depreciation'),(7,'Investments'),(8,'Intangible Assets'),(9,'Accounts Payable'),(10,'Notes Payable'),(11,'Accrued Liabilities'),(12,'Deferred Revenue'),(13,'Long-term Debt'),(14,'Taxes Payable'),(15,'Other Current Liabilities'),(16,'Common Stock'),(17,'Retained Earnings'),(18,'Additional Paid-in Capital'),(19,'Treasury Stock'),(20,'Sales Revenue'),(21,'Service Revenue'),(22,'Interest Income'),(23,'Other Income'),(24,'Cost of Goods Sold (COGS)'),(25,'Salaries and Wages Expense'),(26,'Rent Expense'),(27,'Utilities Expense'),(28,'Depreciation Expense'),(29,'Marketing and Advertising Expense'),(30,'Interest Expense'),(31,'Insurance Expense'),(32,'Miscellaneous Expense');
/*!40000 ALTER TABLE `tbl_gl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ledger`
--

DROP TABLE IF EXISTS `tbl_ledger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ledger` (
  `lgr_id` int NOT NULL AUTO_INCREMENT,
  `lgr_gl_id` int DEFAULT NULL,
  `lgr_name` varchar(255) DEFAULT NULL,
  `lgr_op_balance` decimal(10,2) DEFAULT NULL,
  `lgr_firm_id` int DEFAULT NULL,
  `balance_type` tinyint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `ledger_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`lgr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ledger`
--

LOCK TABLES `tbl_ledger` WRITE;
/*!40000 ALTER TABLE `tbl_ledger` DISABLE KEYS */;
INSERT INTO `tbl_ledger` VALUES (13,7,'Rupesh Khillare',992000.00,31,1,'2024-10-11 09:22:40','18','2024-10-11 11:44:53',NULL,1),(14,5,'Dilip Heda',2008000.00,32,0,'2024-10-11 09:23:41','18','2024-10-11 11:44:53',NULL,1),(15,2,'labc',21850.00,33,1,'2024-10-14 09:55:16','18','2024-10-16 09:23:45',NULL,1),(16,3,'lxyz',12420.00,34,0,'2024-10-14 09:55:33','18','2024-10-16 09:25:58',NULL,1),(40,4,'fgnn',344.00,NULL,NULL,'2024-10-15 11:38:10','37','2024-10-15 11:38:10',NULL,1),(41,4,'fgnn',344.00,456,NULL,'2024-10-15 11:38:10','37','2024-10-15 11:38:10',NULL,1),(42,4,'fgnn',344.00,4,NULL,'2024-10-15 11:38:10','37','2024-10-15 11:38:10',NULL,1),(43,4,'fgnn',344.00,524,NULL,'2024-10-15 11:38:10','37','2024-10-15 11:38:10',NULL,1),(44,5,'new',100000.00,NULL,NULL,'2024-10-15 11:49:00','18','2024-10-15 11:49:00',NULL,1),(45,5,'new',104330.00,33,NULL,'2024-10-15 11:49:00','18','2024-10-16 09:29:41',NULL,1),(46,2,'lxyz',19744.00,33,NULL,'2024-10-15 11:49:29','18','2024-10-16 09:29:41',NULL,1),(47,2,'lxyz',17274.00,35,NULL,'2024-10-15 11:49:29','18','2024-10-16 06:49:20',NULL,1),(58,7,'Bank Of Spain',5000000.00,NULL,1,'2024-10-16 11:42:40','27','2024-10-16 11:42:40',NULL,1),(59,7,'Bank Of Spain',19500000.00,36,1,'2024-10-16 11:42:40','27','2024-10-16 12:02:06',NULL,1),(60,19,'Lost Treasure',2500000.00,NULL,1,'2024-10-16 11:43:44','27','2024-10-16 11:43:44',NULL,1),(61,19,'Lost Treasure',-5200000.00,37,1,'2024-10-16 11:43:44','27','2024-10-16 12:03:57',NULL,1),(62,17,'Hidden Gold',15000000.00,NULL,0,'2024-10-16 11:46:00','27','2024-10-16 11:46:00',NULL,1),(63,17,'Hidden Gold',16700000.00,36,0,'2024-10-16 11:46:00','27','2024-10-16 12:03:57',NULL,1),(64,17,'Hidden Gold',15000000.00,37,0,'2024-10-16 11:46:00','27','2024-10-16 11:46:00',NULL,1);
/*!40000 ALTER TABLE `tbl_ledger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_role`
--

DROP TABLE IF EXISTS `tbl_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_role`
--

LOCK TABLES `tbl_role` WRITE;
/*!40000 ALTER TABLE `tbl_role` DISABLE KEYS */;
INSERT INTO `tbl_role` VALUES (1,'Super_Admin'),(2,'User');
/*!40000 ALTER TABLE `tbl_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_transactions`
--

DROP TABLE IF EXISTS `tbl_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_transactions` (
  `trans_id` int NOT NULL AUTO_INCREMENT,
  `trans_v_id` int DEFAULT NULL,
  `trans_lgr_id` int DEFAULT NULL,
  `trans_firm_id` int DEFAULT NULL,
  `trans_amt` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `trans_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`trans_id`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_transactions`
--

LOCK TABLES `tbl_transactions` WRITE;
/*!40000 ALTER TABLE `tbl_transactions` DISABLE KEYS */;
INSERT INTO `tbl_transactions` VALUES (97,52,16,34,5000.00,'2024-10-14 09:58:11',NULL,'2024-10-14 09:58:11',NULL,1),(98,52,15,33,-5000.00,'2024-10-14 09:58:11',NULL,'2024-10-14 09:58:11',NULL,1),(99,53,15,33,2000.00,'2024-10-14 11:20:26',NULL,'2024-10-14 11:20:26',NULL,1),(100,53,16,34,-2000.00,'2024-10-14 11:20:26',NULL,'2024-10-14 11:20:26',NULL,1),(101,54,15,33,500.00,'2024-10-14 11:45:09',NULL,'2024-10-14 11:45:09',NULL,1),(102,54,16,34,-500.00,'2024-10-14 11:45:09',NULL,'2024-10-14 11:45:09',NULL,1),(103,55,15,33,300.00,'2024-10-14 12:42:22',NULL,'2024-10-14 12:42:22',NULL,1),(104,55,15,33,-300.00,'2024-10-14 12:42:22',NULL,'2024-10-14 12:42:22',NULL,1),(105,56,45,33,100.00,'2024-10-15 12:02:55',NULL,'2024-10-15 12:02:55',NULL,1),(106,56,15,33,-100.00,'2024-10-15 12:02:55',NULL,'2024-10-15 12:02:55',NULL,1),(107,57,45,33,2500.00,'2024-10-15 12:45:03',NULL,'2024-10-15 12:45:03',NULL,1),(108,57,47,35,-2500.00,'2024-10-15 12:45:03',NULL,'2024-10-15 12:45:03',NULL,1),(109,58,16,34,10.00,'2024-10-15 12:49:13',NULL,'2024-10-15 12:49:13',NULL,1),(110,58,16,34,-10.00,'2024-10-15 12:49:13',NULL,'2024-10-15 12:49:13',NULL,1),(111,59,47,35,400.00,'2024-10-16 04:56:16',NULL,'2024-10-16 04:56:16',NULL,1),(112,59,15,33,-400.00,'2024-10-16 04:56:16',NULL,'2024-10-16 04:56:16',NULL,1),(113,60,45,33,780.00,'2024-10-16 06:49:20',NULL,'2024-10-16 06:49:20',NULL,1),(114,60,47,35,-780.00,'2024-10-16 06:49:20',NULL,'2024-10-16 06:49:20',NULL,1),(115,61,16,34,450.00,'2024-10-16 09:23:45',NULL,'2024-10-16 09:23:45',NULL,1),(116,61,15,33,-450.00,'2024-10-16 09:23:45',NULL,'2024-10-16 09:23:45',NULL,1),(117,62,45,33,540.00,'2024-10-16 09:25:58',NULL,'2024-10-16 09:25:58',NULL,1),(118,62,16,34,-540.00,'2024-10-16 09:25:58',NULL,'2024-10-16 09:25:58',NULL,1),(119,63,45,33,410.00,'2024-10-16 09:29:41',NULL,'2024-10-16 09:29:41',NULL,1),(120,63,46,33,-410.00,'2024-10-16 09:29:41',NULL,'2024-10-16 09:29:41',NULL,1),(121,64,61,37,1000000.00,'2024-10-16 11:56:38',NULL,'2024-10-16 11:56:38',NULL,1),(122,64,59,36,-1000000.00,'2024-10-16 11:56:38',NULL,'2024-10-16 11:56:38',NULL,1),(123,65,61,37,8500000.00,'2024-10-16 11:58:37',NULL,'2024-10-16 11:58:37',NULL,1),(124,65,61,37,-8500000.00,'2024-10-16 11:58:37',NULL,'2024-10-16 11:58:37',NULL,1),(125,66,59,36,17000000.00,'2024-10-16 11:59:57',NULL,'2024-10-16 11:59:57',NULL,1),(126,66,61,37,-17000000.00,'2024-10-16 11:59:57',NULL,'2024-10-16 11:59:57',NULL,1),(127,67,63,36,2000000.00,'2024-10-16 12:01:14',NULL,'2024-10-16 12:01:14',NULL,1),(128,67,59,36,-2000000.00,'2024-10-16 12:01:14',NULL,'2024-10-16 12:01:14',NULL,1),(129,68,59,36,500000.00,'2024-10-16 12:02:06',NULL,'2024-10-16 12:02:06',NULL,1),(130,68,63,36,-500000.00,'2024-10-16 12:02:06',NULL,'2024-10-16 12:02:06',NULL,1),(131,69,63,36,200000.00,'2024-10-16 12:03:57',NULL,'2024-10-16 12:03:57',NULL,1),(132,69,61,37,-200000.00,'2024-10-16 12:03:57',NULL,'2024-10-16 12:03:57',NULL,1);
/*!40000 ALTER TABLE `tbl_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(45) DEFAULT NULL,
  `user_password` varchar(45) DEFAULT NULL,
  `user_contact` varchar(255) DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_role_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `user_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user`
--

LOCK TABLES `tbl_user` WRITE;
/*!40000 ALTER TABLE `tbl_user` DISABLE KEYS */;
INSERT INTO `tbl_user` VALUES (18,'admin123','admin@gmial.com','admin123','7897451231','Pune',1,'2024-10-11 09:07:39',NULL,'2024-10-16 11:26:33',NULL,1),(21,'vvvv','vvv','hyjt','3333','vvvv',1,'2024-10-11 11:23:51',NULL,'2024-10-11 11:26:38',NULL,1),(22,'random','ndjk@gmail.com','hnjjsnjkhwu',NULL,NULL,1,'2024-10-14 04:56:07',NULL,'2024-10-14 04:56:07',NULL,1),(23,'random','ndk@gmail.com','hnjjsnjkhwu',NULL,NULL,1,'2024-10-14 05:06:26',NULL,'2024-10-14 05:06:26',NULL,1),(24,'mahesh','mahesh@gmail.com','mahesh','2362773822','e3hdbbuisdcuiwd',2,'2024-10-14 09:56:34','18','2024-10-14 09:56:34',NULL,1),(25,'suresh','suresh@gmail.com','Suresh@123','1234567890','bgbnhgmj',2,'2024-10-14 09:57:32','18','2024-10-14 09:57:32',NULL,1),(26,'pawan','pawan@gmail.com','pawan@123','1234567890','mdklmvklf',2,'2024-10-16 06:47:12','18','2024-10-16 06:47:12',NULL,1),(27,'admin','admin@admin.com','admin123',NULL,NULL,1,'2024-10-16 11:26:56',NULL,'2024-10-16 11:26:56',NULL,1),(28,'Yash','yash@gmail.com','user@123','5456456465','Pune',2,'2024-10-16 11:47:01','27','2024-10-16 11:47:01',NULL,1),(29,'Vijay','vijay@gmail.com','user@123','5454556455','Hinjewadi',2,'2024-10-16 11:47:48','27','2024-10-16 11:47:48',NULL,1),(30,'User','user@gmail.com','user@123','5655565656','Norway',2,'2024-10-16 11:48:23','27','2024-10-16 11:48:23',NULL,1);
/*!40000 ALTER TABLE `tbl_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_firm`
--

DROP TABLE IF EXISTS `tbl_user_firm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user_firm` (
  `uf_id` int NOT NULL AUTO_INCREMENT,
  `uf_user_id` int DEFAULT NULL,
  `uf_firm_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `user_firm_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`uf_id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_firm`
--

LOCK TABLES `tbl_user_firm` WRITE;
/*!40000 ALTER TABLE `tbl_user_firm` DISABLE KEYS */;
INSERT INTO `tbl_user_firm` VALUES (57,18,33,'2024-10-14 09:51:22','18','2024-10-14 09:51:22',NULL,1),(58,18,34,'2024-10-14 09:54:44','18','2024-10-14 09:54:44',NULL,1),(59,24,33,'2024-10-14 09:56:34','18','2024-10-14 09:56:34',NULL,1),(60,25,34,'2024-10-14 09:57:32','18','2024-10-14 09:57:32',NULL,1),(61,18,35,'2024-10-15 05:27:06','18','2024-10-15 05:27:06',NULL,1),(62,26,35,'2024-10-16 06:47:12','18','2024-10-16 06:47:12',NULL,1),(63,27,36,'2024-10-16 11:28:44','27','2024-10-16 11:28:44',NULL,1),(64,27,37,'2024-10-16 11:30:54','27','2024-10-16 11:30:54',NULL,1),(65,28,36,'2024-10-16 11:47:01','27','2024-10-16 11:47:01',NULL,1),(66,29,37,'2024-10-16 11:47:48','27','2024-10-16 11:47:48',NULL,1),(67,30,36,'2024-10-16 11:48:23','27','2024-10-16 11:48:23',NULL,1),(68,30,37,'2024-10-16 11:48:24','27','2024-10-16 11:48:24',NULL,1);
/*!40000 ALTER TABLE `tbl_user_firm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_vouchers`
--

DROP TABLE IF EXISTS `tbl_vouchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_vouchers` (
  `v_id` int NOT NULL AUTO_INCREMENT,
  `v_type` varchar(255) DEFAULT NULL,
  `v_amount` int DEFAULT NULL,
  `v_remark` varchar(255) DEFAULT NULL,
  `v_amount_type` varchar(45) DEFAULT NULL,
  `v_from_firm_id` int DEFAULT NULL,
  `v_to_firm_id` int DEFAULT NULL,
  `v_from_ledger_id` int DEFAULT NULL,
  `v_to_ledger_id` int DEFAULT NULL,
  `v_date` datetime DEFAULT NULL,
  `voucher_status` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`v_id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_vouchers`
--

LOCK TABLES `tbl_vouchers` WRITE;
/*!40000 ALTER TABLE `tbl_vouchers` DISABLE KEYS */;
INSERT INTO `tbl_vouchers` VALUES (52,'1',5000,'done','CASH',33,34,15,16,'2024-10-15 00:00:00',1,'2024-10-14 09:58:11','18','2024-10-14 11:22:02',NULL),(53,'1',2000,'done','CASH',34,33,16,15,'2024-10-14 00:00:00',1,'2024-10-14 11:20:26','18','2024-10-14 11:20:26',NULL),(54,'1',500,'by','CASH',34,33,16,15,'2024-10-15 00:00:00',1,'2024-10-14 11:45:09','18','2024-10-14 11:45:09',NULL),(55,'1',300,'done','CASH',33,33,15,15,'2024-10-14 00:00:00',1,'2024-10-14 12:42:22','18','2024-10-14 12:42:22',NULL),(56,'1',100,'done','CASH',33,33,15,45,'2024-10-16 00:00:00',1,'2024-10-15 12:02:55','18','2024-10-15 12:02:55',NULL),(57,'1',2500,'done','CASH',35,33,47,45,'2024-10-15 00:00:00',1,'2024-10-15 12:45:03','18','2024-10-15 12:45:03',NULL),(58,'2',10,'done','CASH',34,34,16,16,'2024-10-15 00:00:00',1,'2024-10-15 12:49:13','18','2024-10-15 13:14:05',NULL),(59,'2',400,'DONE','CASH',33,35,15,47,'2024-10-16 00:00:00',1,'2024-10-16 04:56:16','18','2024-10-16 04:56:16',NULL),(60,'1',780,'done','CASH',35,33,47,45,'2024-10-16 00:00:00',1,'2024-10-16 06:49:20','26','2024-10-16 06:49:20',NULL),(61,'1',450,'test','CASH',33,34,15,16,'2024-10-16 00:00:00',1,'2024-10-16 09:23:45','18','2024-10-16 09:23:45',NULL),(62,'1',540,'cash','CASH',34,33,16,45,'2024-10-16 00:00:00',1,'2024-10-16 09:25:58','18','2024-10-16 09:25:58',NULL),(63,'1',410,'new','CASH',33,33,46,45,'2024-10-16 00:00:00',1,'2024-10-16 09:29:41','18','2024-10-16 09:29:41',NULL),(64,'1',1000000,'done','CASH',36,37,59,61,'2024-10-16 00:00:00',1,'2024-10-16 11:56:38','27','2024-10-16 11:56:38',NULL),(65,'1',8500000,'done','CASH',37,37,61,61,'2024-10-16 00:00:00',1,'2024-10-16 11:58:37','27','2024-10-16 11:58:37',NULL),(66,'1',17000000,'done','CASH',37,36,61,59,'2024-10-18 00:00:00',1,'2024-10-16 11:59:57','27','2024-10-16 11:59:57',NULL),(67,'1',2000000,'done','CASH',36,36,59,63,'2024-10-16 00:00:00',1,'2024-10-16 12:01:14','27','2024-10-16 12:01:14',NULL),(68,'1',500000,'done','CASH',36,36,63,59,'2024-10-16 00:00:00',1,'2024-10-16 12:02:06','27','2024-10-16 12:02:06',NULL),(69,'2',200000,'done','CASH',37,36,61,63,'2024-10-16 00:00:00',1,'2024-10-16 12:03:57','27','2024-10-16 12:03:57',NULL);
/*!40000 ALTER TABLE `tbl_vouchers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'fintek_accounting'
--

--
-- Dumping routines for database 'fintek_accounting'
--
/*!50003 DROP PROCEDURE IF EXISTS `Addfirm` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Addfirm`(

    IN p_firm_name VARCHAR(255), 
    IN p_firm_email VARCHAR(255), 
    IN p_firm_gstno VARCHAR(50), 
    IN p_firm_address TEXT, 
    IN p_user_id INT
)
BEGIN
    DECLARE v_firm_id INT;

    -- Check if the firm already exists
    IF EXISTS (SELECT 1 FROM tbl_firm WHERE firm_name = p_firm_name) THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Firm already exists';
    ELSE
        -- Insert the new firm
        INSERT INTO tbl_firm (firm_name, firm_email, firm_gstno, firm_address, created_by)
        VALUES (p_firm_name, p_firm_email, p_firm_gstno, p_firm_address, p_user_id);

        -- Get the last inserted firm ID
        SET v_firm_id = LAST_INSERT_ID();

        -- Insert a record into tbl_user_firm to link the user with the new firm
        INSERT INTO tbl_user_firm (uf_user_id, uf_firm_id, created_by)
        VALUES (p_user_id, v_firm_id, p_user_id);

        -- Return the new firm ID
        SELECT v_firm_id AS firmId;
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AddLedger` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddLedger`(

    IN p_firmIds JSON,         -- Array of firm IDs
    IN p_ledgerName VARCHAR(255),
 
    IN p_isExisting INT,       -- 1 for existing ledger, 0 for new ledger
    IN p_glId INT, 
    IN p_openingBalance DECIMAL(10,2), 
    IN p_cashORonline INT,
    IN p_userId INT
)
BEGIN
    DECLARE firmId INT;
    DECLARE existingLedgerId INT;

    -- Case 1: For existing ledger (p_isExisting = 1)
    IF p_isExisting = 1 THEN
        -- Step 1: Check if the ledger with the given name already exists
        SELECT lgr_id INTO existingLedgerId
        FROM tbl_ledger
        WHERE lgr_name = p_ledgerName
        LIMIT 1;

        -- If no ledger with that name is found, raise an error
        IF existingLedgerId IS NULL THEN
            SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'No ledger found with the given name.';
        ELSE
            -- Step 2: Iterate through the array of firm IDs
            WHILE JSON_LENGTH(p_firmIds) > 0 DO
                SET firmId = JSON_UNQUOTE(JSON_EXTRACT(p_firmIds, '$[0]')); -- Extract each firm ID
                
                -- Step 3: Check if this firm is already connected to the existing ledger
                IF NOT EXISTS (SELECT 1 FROM tbl_ledger WHERE lgr_name = p_ledgerName AND lgr_firm_id = firmId) THEN
                    -- Step 4: Insert a new row to connect the firm with the existing ledger
                    INSERT INTO tbl_ledger (lgr_name, lgr_gl_id, lgr_op_balance, balance_type, lgr_firm_id, created_by)
                    VALUES (p_ledgerName, p_glId, p_openingBalance, p_cashORonline, firmId, p_userId);
                END IF;
                
                -- Step 5: Remove the processed firm ID from the array
                SET p_firmIds = JSON_REMOVE(p_firmIds, '$[0]');
            END WHILE;
        END IF;

    -- Case 2: For new ledger (p_isExisting = 0)
    ELSE
        -- Step 1: Insert the new ledger
        INSERT INTO tbl_ledger (lgr_name, lgr_gl_id, lgr_op_balance, balance_type, created_by)
        VALUES (p_ledgerName, p_glId, p_openingBalance, p_cashORonline, p_userId);
        
        -- Get the newly created ledger ID
        SET existingLedgerId = LAST_INSERT_ID();

        -- Step 2: Iterate through the array of firm IDs and connect each to the new ledger
        WHILE JSON_LENGTH(p_firmIds) > 0 DO
            SET firmId = JSON_UNQUOTE(JSON_EXTRACT(p_firmIds, '$[0]')); -- Extract each firm ID

            -- Step 3: Insert the ledger-firm connection for the new ledger
            INSERT INTO tbl_ledger (lgr_name, lgr_gl_id, lgr_op_balance, balance_type, lgr_firm_id, created_by)
            VALUES (p_ledgerName, p_glId, p_openingBalance, p_cashORonline, firmId, p_userId);
            
            -- Step 4: Remove the processed firm ID from the array
            SET p_firmIds = JSON_REMOVE(p_firmIds, '$[0]');
        END WHILE;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AddUserWithFirm` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddUserWithFirm`(
    IN p_Name VARCHAR(255),
    IN p_Email VARCHAR(255),
    IN p_Password VARCHAR(255),
    IN p_Contact VARCHAR(255),
    IN p_Address VARCHAR(255),
    IN p_FirmIds JSON, -- Expecting an array of firm IDs in JSON format
    IN p_AdminUserId INT)
BEGIN
    DECLARE newUserId INT;
    DECLARE firmId INT;
    DECLARE idx INT DEFAULT 0;
    DECLARE numOfFirms INT;
    DECLARE duplicateCheck INT;

    -- Check if a user with the same email and created_by already exists
    SELECT COUNT(*)
    INTO duplicateCheck
    FROM tbl_user
    WHERE user_email = p_Email AND created_by = p_AdminUserId;

    -- If the user already exists, signal an error
    IF duplicateCheck > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'A user with the same email already exists under this admin';
    ELSE
        -- Insert user details into tbl_user, including user_role_id which is set to 2
        INSERT INTO tbl_user (user_name, user_email, user_password, user_contact, user_address, created_by, user_role_id)
        VALUES (p_Name, p_Email, p_Password, p_Contact, p_Address, p_AdminUserId, 2);

        -- Get the last inserted user ID
        SET newUserId = LAST_INSERT_ID();

        -- Calculate the number of firm IDs in the JSON array
        SET numOfFirms = JSON_LENGTH(p_FirmIds);

        -- Loop through each firm ID in the array
        WHILE idx < numOfFirms DO
            -- Extract the firm ID from the JSON array
            SET firmId = JSON_UNQUOTE(JSON_EXTRACT(p_FirmIds, CONCAT('$[', idx, ']')));

            -- Insert into tbl_user_firm (user_id, firm_id)
            INSERT INTO tbl_user_firm (uf_user_id, uf_firm_id, created_by)
            VALUES (newUserId, firmId, p_AdminUserId);

            -- Increment the index for the next firm ID
            SET idx = idx + 1;
        END WHILE;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeactivateFirm` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeactivateFirm`(
    IN p_firm_id INT,
    IN p_user_id INT
)
BEGIN
    -- Update the firm status to inactive (firm_status = 0) if it's currently active (firm_status = 1)
    UPDATE tbl_firm
    SET 
        firm_status = 0, 
        updated_by = p_user_id
    WHERE 
        firm_id = p_firm_id 
        AND firm_status = 1;

    -- Check if the update was successful
    IF ROW_COUNT() = 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Firm not found or already inactive.';
    END IF;
    
    -- Return a success message
    SELECT 'Firm deactivated successfully.' AS message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeactivateUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeactivateUser`(
    IN p_UserId INT,
    IN p_AdminUserId INT
)
BEGIN
 
    IF (SELECT COUNT(*) FROM tbl_user WHERE user_id = p_UserId AND created_by = p_AdminUserId) = 0 THEN
   
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'User not found or you do not have permission to deactivate this user';
    ELSE
   
        UPDATE tbl_user
        SET user_status = 0, updated_by = p_AdminUserId, updated_at = NOW()
        WHERE user_id = p_UserId;
        
  
        SELECT 'User deactivated successfully' AS message;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeactiveLedger` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeactiveLedger`(
    IN p_Ledger_Id INT,
    IN p_User_Id INT
)
BEGIN
    -- Update the ledger status to 0 (assuming status 0 means deleted)
    UPDATE tbl_ledger 
    SET ledger_status = 0, updated_by=p_User_Id
    WHERE lgr_id = p_Ledger_Id AND ledger_status = 1;
  
    if row_count() = 0 then
    SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Ledger is AlReady Deleted Or Not Found.';
    END IF;
    
     SELECT 'Ledger deactivated successfully.' AS message;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `EditFirm` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `EditFirm`(
    IN p_firm_id INT, 
    IN p_firm_name VARCHAR(255), 
    IN p_firm_email VARCHAR(255), 
    IN p_firm_gstno VARCHAR(50), 
    IN p_firm_address VARCHAR(255), 
    IN p_user_id INT
)
BEGIN
    -- Update the firm details in tbl_firm
    UPDATE tbl_firm 
    SET 
        firm_name = p_firm_name,
        firm_email = p_firm_email,
        firm_gstno = p_firm_gstno,
        firm_address = p_firm_address,
        updated_by = p_user_id
    WHERE firm_id = p_firm_id;

    -- Check if the update was successful
    IF ROW_COUNT() = 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Firm not found or no changes made.';
    END IF;
    
    -- Return a success message
    SELECT 'Firm updated successfully.' AS message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `EditLedger` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `EditLedger`(
    IN p_Ledger_Id INT,
    IN p_Ledger_Name VARCHAR(255), -- Added length for varchar
    IN p_User_Id INT
)
BEGIN
    UPDATE tbl_ledger 
    SET lgr_name = p_Ledger_Name, updated_by= p_User_Id
    WHERE lgr_id = p_Ledger_Id;
    
     IF ROW_COUNT() = 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Firm not found or no changes made.';
    END IF;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllFirmsByUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllFirmsByUserId`(IN userId INT)
BEGIN
    -- Query to get firm-specific details along with the total balance of all firms
    SELECT 
        f.firm_id, 
        f.firm_name, 
        f.firm_email, 
        f.firm_gstno, 
        f.firm_address, 
        f.firm_status,
        IFNULL(SUM(l.lgr_op_balance), 0) AS total_op_balance,
        (SELECT IFNULL(SUM(l2.lgr_op_balance), 0)
         FROM tbl_firm f2
         JOIN tbl_user_firm uf2 ON f2.firm_id = uf2.uf_firm_id
         LEFT JOIN tbl_ledger l2 ON f2.firm_id = l2.lgr_firm_id
         WHERE uf2.uf_user_id = userId 
         AND f2.firm_status = 1) AS total_balance_of_all_firms
    FROM 
        tbl_firm f
    JOIN 
        tbl_user_firm uf ON f.firm_id = uf.uf_firm_id
    LEFT JOIN
        tbl_ledger l ON f.firm_id = l.lgr_firm_id
    WHERE 
        uf.uf_user_id = userId 
        AND f.firm_status = 1
    GROUP BY 
        f.firm_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllGeneralLedger` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllGeneralLedger`()
BEGIN
    SELECT 
     gl.gl_id AS GLId,
gl.gl_name AS glName
    FROM 
        tbl_gl gl;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllLedgersByUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllLedgersByUserId`(
    IN p_UserId INT
)
BEGIN
    -- Select ledger details for the firms that the user is associated with
    SELECT 
        l.lgr_id AS LedgerId,
        l.lgr_name AS LedgerName,
        f.firm_id AS FirmId,
        f.firm_name AS FirmName
    FROM 
        tbl_user_firm uf
        JOIN tbl_firm f ON uf.uf_firm_id = f.firm_id
        JOIN tbl_ledger l ON f.firm_id = l.lgr_firm_id
    WHERE 
        uf.uf_user_id = p_UserId
    GROUP BY 
        l.lgr_id, f.firm_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllLedgersFromUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllLedgersFromUserId`(IN userId INT)
BEGIN

    SELECT 
        lgr_name AS Ledger_Name,
        lgr_id AS Ledger_Id,
        gl.gl_name AS General_Ledger_Name,
        lgr_gl_id AS Ledger_Gl_Id,
        f.firm_name AS FirmName,
        lgr_firm_id AS Firm_Id,
        lgr_op_balance AS Ledger_Balance, 
        balance_type AS Balance_Type
    FROM 
        tbl_ledger l
    JOIN 
        tbl_firm f ON l.lgr_firm_id = f.firm_id
    JOIN
    tbl_gl gl ON l.lgr_gl_id= gl.gl_id
    WHERE 
        l.created_by = userId AND l.ledger_status=1
    GROUP BY 
        lgr_firm_id, lgr_name, lgr_id, lgr_gl_id, balance_type;
        
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCompleteReportbyUserId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCompleteReportbyUserId`(
    IN p_user_id INT
)
BEGIN
   SELECT 
    JSON_OBJECT(
        'VoucherID', v.v_id,
        'fromLedgerID', l_from.lgr_id,
        'fromLedgerName', l_from.lgr_name,
        'fromFirmID', f_from.firm_id,
        'fromFirmName', f_from.firm_name,
        'Amount', CASE 
                    WHEN v.v_type = 1 THEN CONCAT('-', v.v_amount)
                    ELSE v.v_amount
                  END,
        'toLedgerID', l_to.lgr_id,
        'toLedgerName', l_to.lgr_name,
        'toFirmID', f_to.firm_id,
        'toFirmName', f_to.firm_name,
        'amountType', v.v_amount_type,
        -- Format the date directly
        'transactionDate', DATE_FORMAT(v.v_date, '%Y-%m-%d')
    )AS reportEntry
   FROM 
        tbl_vouchers v
   LEFT JOIN 
        tbl_ledger l_from ON v.v_from_ledger_id = l_from.lgr_id
   LEFT JOIN 
        tbl_firm f_from ON v.v_from_firm_id = f_from.firm_id
   LEFT JOIN 
        tbl_ledger l_to ON v.v_to_ledger_id = l_to.lgr_id
   LEFT JOIN 
        tbl_firm f_to ON v.v_to_firm_id = f_to.firm_id
   WHERE 
        v.created_by = p_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCompleteReportForUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCompleteReportForUser`(
    IN p_user_id INT)
BEGIN
SELECT 
    v.v_id AS VoucherID,
    l_from.lgr_id AS fromLedgerID,
    l_from.lgr_name AS fromLedgerName,
    f_from.firm_id AS fromFirmID,
    f_from.firm_name AS fromFirmName,
    CASE 
        WHEN uf.uf_firm_id = v.v_from_firm_id THEN CONCAT('-', v.v_amount)  -- Payment, show as negative
        WHEN uf.uf_firm_id = v.v_to_firm_id THEN v.v_amount  -- Receipt, show as positive
    END AS Amount,
    l_to.lgr_id AS toLedgerID,
    l_to.lgr_name AS toLedgerName,
    f_to.firm_id AS toFirmID,
    f_to.firm_name AS toFirmName,
    v.v_amount_type AS amountType,
    v.v_date AS transactionDate
FROM tbl_user_firm uf
INNER JOIN tbl_vouchers v 
    ON (uf.uf_firm_id = v.v_from_firm_id OR uf.uf_firm_id = v.v_to_firm_id)  -- Match firm in both from and to fields
LEFT JOIN tbl_firm f_from 
    ON v.v_from_firm_id = f_from.firm_id -- Join to get from firm details
LEFT JOIN tbl_firm f_to 
    ON v.v_to_firm_id = f_to.firm_id -- Join to get to firm details
LEFT JOIN tbl_ledger l_from 
    ON v.v_from_ledger_id = l_from.lgr_id -- Join to get from ledger details
LEFT JOIN tbl_ledger l_to 
    ON v.v_to_ledger_id = l_to.lgr_id -- Join to get to ledger details
WHERE uf.uf_user_id = p_user_id -- Replace 'givenUserID' with actual user ID
ORDER BY v.v_date DESC;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDistinctTransactionDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDistinctTransactionDetails`(
    IN p_firm_id INT,           -- Firm ID
    IN p_transaction_type INT    -- Transaction type
)
BEGIN
    -- Select all distinct trans_v_id associated with the given firm ID and transaction type
    SELECT 
        MIN(trans1.trans_id) AS fromTransactionID,  -- Use aggregation function to select a single ID
        trans1.trans_v_id AS fromVoucherID,
        MIN(trans1.trans_lgr_id) AS fromLedgerID,    -- Use aggregation function
        MIN(lgr1.lgr_name) AS fromLedgerName,         -- Use aggregation function
        MIN(firm1.firm_name) AS fromFirmName,         -- Use aggregation function
        MIN(trans1.trans_amt) AS fromAmount,          -- Use aggregation function for consistency
 
        MIN(trans2.trans_id) AS toTransactionID,      -- Use aggregation function
        trans2.trans_v_id AS toVoucherID,
        MIN(trans2.trans_lgr_id) AS toLedgerID,       -- Use aggregation function
        MIN(lgr2.lgr_name) AS toLedgerName,            -- Use aggregation function
        MIN(firm2.firm_name) AS toFirmName,            -- Use aggregation function
        MIN(trans2.trans_amt) AS toAmount              -- Use aggregation function for consistency
 
    FROM 
        tbl_transactions trans1
    JOIN 
        tbl_ledger lgr1 ON trans1.trans_lgr_id = lgr1.lgr_id  -- Join with ledger for 'from' transaction
    JOIN 
        tbl_firm firm1 ON trans1.trans_firm_id = firm1.firm_id  -- Join with firm for 'from' transaction
    JOIN 
        tbl_transactions trans2 ON trans1.trans_v_id = trans2.trans_v_id AND trans1.trans_id != trans2.trans_id  -- Join to get all matching transactions
    JOIN 
        tbl_ledger lgr2 ON trans2.trans_lgr_id = lgr2.lgr_id  -- Join with ledger for 'to' transaction
    JOIN 
        tbl_firm firm2 ON trans2.trans_firm_id = firm2.firm_id  -- Join with firm for 'to' transaction
    WHERE 
        trans1.trans_firm_id = p_firm_id  -- Filter by the specified firm ID
        AND trans1.trans_v_id IN (          -- Filter by transaction type
            SELECT v_id 
            FROM tbl_vouchers 
            WHERE v_type = p_transaction_type
        )
    GROUP BY 
        trans1.trans_v_id  -- Group by trans_v_id to get distinct results
    ORDER BY 
        trans1.trans_v_id, fromTransactionID;  -- Order by transaction type and ID
 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetFirmsPaymentsReceiptsBalanceForAdmin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetFirmsPaymentsReceiptsBalanceForAdmin`(



    IN p_user_id INT
)
BEGIN
    -- Step 1: Fetch the firms associated with the user
    SELECT 
        f.firm_id,
        f.firm_name,
        
        -- Step 2: Calculate total payments and receipts for each firm in the last 24 hours
        SUM(CASE WHEN t.trans_amt < 0 THEN ABS(t.trans_amt) ELSE 0 END) AS total_payments, -- Payments (negative amounts)
        SUM(CASE WHEN t.trans_amt > 0 THEN t.trans_amt ELSE 0 END) AS total_receipts,      -- Receipts (positive amounts)

        -- Step 3: Calculate the total balance from ledgers associated with the firm
        (
            SELECT 
                SUM(l.lgr_op_balance)
            FROM 
                tbl_ledger l
            WHERE 
                l.lgr_firm_id = f.firm_id
                AND l.ledger_status = 1 -- Only active ledgers
        ) AS total_firm_balance

    FROM 
        tbl_firm f
    JOIN 
        tbl_user_firm uf ON f.firm_id = uf.uf_firm_id
    LEFT JOIN 
        tbl_transactions t ON t.trans_firm_id = f.firm_id
    WHERE 
        uf.created_by = p_user_id
        AND t.created_at >= DATE_SUB(NOW(), INTERVAL 1 DAY) -- Filter transactions within the last 24 hours
    GROUP BY 
        f.firm_id, f.firm_name;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetFirmsPaymentsReceiptsBalanceForUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetFirmsPaymentsReceiptsBalanceForUser`(



    IN p_user_id INT
)
BEGIN
    -- Step 1: Fetch the firms associated with the user
    SELECT 
        f.firm_id,
        f.firm_name,
        
        -- Step 2: Calculate total payments and receipts for each firm in the last 24 hours
        SUM(CASE WHEN t.trans_amt < 0 THEN ABS(t.trans_amt) ELSE 0 END) AS total_payments, -- Payments (negative amounts)
        SUM(CASE WHEN t.trans_amt > 0 THEN t.trans_amt ELSE 0 END) AS total_receipts,      -- Receipts (positive amounts)

        -- Step 3: Calculate the total balance from ledgers associated with the firm
        (
            SELECT 
                SUM(l.lgr_op_balance)
            FROM 
                tbl_ledger l
            WHERE 
                l.lgr_firm_id = f.firm_id
                AND l.ledger_status = 1 -- Only active ledgers
        ) AS total_firm_balance

    FROM 
        tbl_firm f
    JOIN 
        tbl_user_firm uf ON f.firm_id = uf.uf_firm_id
    LEFT JOIN 
        tbl_transactions t ON t.trans_firm_id = f.firm_id
    WHERE 
        uf.uf_user_id = p_user_id
        AND t.created_at >= DATE_SUB(NOW(), INTERVAL 1 DAY) -- Filter transactions within the last 24 hours
    GROUP BY 
        f.firm_id, f.firm_name;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetLedgersForUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetLedgersForUsers`(
    IN p_user_id INT
)
BEGIN
    DECLARE p_admin_id INT;

    -- Fetch the admin ID (created_by field) for the given user ID
    SELECT created_by INTO p_admin_id
    FROM tbl_user 
    WHERE user_id = p_user_id 
    LIMIT 1;

    -- If the admin ID is found, fetch the ledgers and associated firm details
    IF p_admin_id IS NOT NULL THEN
        SELECT 
            lgr.lgr_id AS LedgerId,
            lgr.lgr_name AS LedgerName,
            lgr.lgr_op_balance,
            lgr.balance_type,
            firm.firm_id AS FirmId,
            firm.firm_name AS FirmName,
            firm.firm_email,
            firm.firm_gstno,
            firm.firm_address
        FROM 
            tbl_ledger lgr
        JOIN 
            tbl_firm firm ON lgr.lgr_firm_id = firm.firm_id  -- Join to get firm details
        WHERE 
            firm.created_by = p_admin_id  -- Filter firms created by the admin
        AND 
            lgr.created_by = p_admin_id  -- Filter ledgers created by the admin
        ORDER BY 
            lgr.lgr_name;
    ELSE
        -- Handle the case where no admin is found for the given user
        SELECT 'No admin found for the given user ID';
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetReportsForFirm` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetReportsForFirm`(
    IN p_firm_id INT,           -- Firm ID
    IN p_transaction_type INT    -- Transaction type
)
BEGIN
    -- Select all distinct trans_v_id associated with the given firm ID and transaction type
    SELECT 
        MIN(trans1.trans_id) AS fromTransactionID,  -- Use aggregation function to select a single ID
        trans1.trans_v_id AS fromVoucherID,
        MIN(trans1.trans_lgr_id) AS fromLedgerID,    -- Use aggregation function
        MIN(lgr1.lgr_name) AS fromLedgerName,         -- Use aggregation function
        MIN(firm1.firm_name) AS fromFirmName,         -- Use aggregation function
        MIN(trans1.trans_amt) AS fromAmount,          -- Use aggregation function for consistency
        MIN(trans2.trans_id) AS toTransactionID,      -- Use aggregation function
        trans2.trans_v_id AS toVoucherID,
        MIN(trans2.trans_lgr_id) AS toLedgerID,       -- Use aggregation function
        MIN(lgr2.lgr_name) AS toLedgerName,            -- Use aggregation function
        MIN(firm2.firm_name) AS toFirmName,            -- Use aggregation function
        MIN(trans2.trans_amt) AS toAmount              -- Use aggregation function for consistency
    FROM 
        tbl_transactions trans1
    JOIN 
        tbl_ledger lgr1 ON trans1.trans_lgr_id = lgr1.lgr_id  -- Join with ledger for 'from' transaction
    JOIN 
        tbl_firm firm1 ON trans1.trans_firm_id = firm1.firm_id  -- Join with firm for 'from' transaction
    JOIN 
        tbl_transactions trans2 ON trans1.trans_v_id = trans2.trans_v_id AND trans1.trans_id != trans2.trans_id  -- Join to get all matching transactions
    JOIN 
        tbl_ledger lgr2 ON trans2.trans_lgr_id = lgr2.lgr_id  -- Join with ledger for 'to' transaction
    JOIN 
        tbl_firm firm2 ON trans2.trans_firm_id = firm2.firm_id  -- Join with firm for 'to' transaction
    WHERE 
        trans1.trans_firm_id = p_firm_id  -- Filter by the specified firm ID
        AND trans1.trans_v_id IN (          -- Filter by transaction type
            SELECT v_id 
            FROM tbl_vouchers 
            WHERE v_type = p_transaction_type
        )
        -- Show rows with negative fromAmount if p_transaction_type is 1
        -- Show rows with positive fromAmount if p_transaction_type is 2
        AND (
            (p_transaction_type = 1 AND trans1.trans_amt < 0) OR
            (p_transaction_type = 2 AND trans1.trans_amt > 0) OR
            (p_transaction_type NOT IN (1, 2))  -- For other transaction types, no filtering on amount
        )
        AND trans1.trans_amt IS NOT NULL     -- Only show rows where fromAmount is not null
    GROUP BY 
        trans1.trans_v_id  -- Group by trans_v_id to get distinct results
    ORDER BY 
        trans1.trans_v_id, fromTransactionID;  -- Order by transaction type and ID
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetTransactionsFromFirmID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetTransactionsFromFirmID`(

    IN p_firm_id INT,  -- Input firm ID
    IN p_var INT       -- 1 for payment, 2 for receipt
)
BEGIN
    IF p_var = 1 THEN
        -- For payments, match with v_from_firm_id
        SELECT 
            v.v_id AS VoucherID,
            v.v_from_ledger_id AS fromLedgerID,
            MIN(lf.lgr_name) AS fromLedgerName,  -- Apply MIN() for non-grouped columns
            MIN(f_from.firm_name) AS fromFirmName,
            v.v_to_ledger_id AS ToLedgerID,
            MIN(lt.lgr_name) AS ToLedgerName,
            MIN(f_to.firm_name) AS ToFirmName,
            MIN(v.v_date) AS TransactionDate,
            
            -- Always apply negative amount for payments (p_var = 1)
            CASE 
                WHEN v.v_from_ledger_id = v.v_to_ledger_id THEN MIN(t1.trans_amt)  -- Same ledger, force negative
                ELSE Min(t1.trans_amt)  -- Different ledger, still force negative
            END AS Amount
       
        FROM tbl_vouchers v
        JOIN tbl_firm f_from ON v.v_from_firm_id = f_from.firm_id
        JOIN tbl_firm f_to ON v.v_to_firm_id = f_to.firm_id
        JOIN tbl_ledger lf ON v.v_from_ledger_id = lf.lgr_id
        JOIN tbl_ledger lt ON v.v_to_ledger_id = lt.lgr_id
        JOIN tbl_transactions t1 ON t1.trans_v_id = v.v_id AND t1.trans_lgr_id = v.v_from_ledger_id
        WHERE v.v_from_firm_id = p_firm_id
        GROUP BY v.v_id, v.v_from_ledger_id, v.v_to_ledger_id;
 
    ELSEIF p_var = 2 THEN
        -- For receipts, match with v_to_firm_id
        SELECT 
            v.v_id AS VoucherID,
            v.v_from_ledger_id AS FromLedgerID,
            MIN(lf.lgr_name) AS FromLedgerName,
            MIN(f_from.firm_name) AS FromFirmName,
            v.v_to_ledger_id AS ToLedgerID,
            MIN(lt.lgr_name) AS ToLedgerName,
            MIN(f_to.firm_name) AS ToFirmName,
            MIN(v.v_date) AS TransactionDate,
            
            -- Always apply positive amount for receipts (p_var = 2)
            CASE 
                WHEN v.v_from_ledger_id = v.v_to_ledger_id THEN -MIN(t2.trans_amt)  -- Same ledger, keep positive
                ELSE MIN(t2.trans_amt)  -- Different ledger, keep positive
            END AS Amount
        FROM tbl_vouchers v
        JOIN tbl_firm f_from ON v.v_from_firm_id = f_from.firm_id
        JOIN tbl_firm f_to ON v.v_to_firm_id = f_to.firm_id
        JOIN tbl_ledger lf ON v.v_from_ledger_id = lf.lgr_id
        JOIN tbl_ledger lt ON v.v_to_ledger_id = lt.lgr_id
        JOIN tbl_transactions t2 ON t2.trans_v_id = v.v_id AND t2.trans_lgr_id = v.v_to_ledger_id
        WHERE v.v_to_firm_id = p_firm_id
        GROUP BY v.v_id, v.v_from_ledger_id, v.v_to_ledger_id;
 
    END IF;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserInfoById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUserInfoById`(
    IN p_user_id INT
)
BEGIN
    -- Select user info based on the user ID
    SELECT 
        user_id AS userId,
        user_name AS userName,
        user_email AS userEmail,
        user_contact AS userContact,
        user_address AS userAddress,
        user_role_id AS userRoleID,
        created_at,
        updated_at,
        user_status
    FROM 
        tbl_user
    WHERE 
        user_id = p_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUsersWithFirmsAndBalanceOfAllLedgers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUsersWithFirmsAndBalanceOfAllLedgers`(IN p_UserId INT)
BEGIN
    SELECT 
      
        u.user_id AS UserId,
          u.user_name AS UserName,
        u.user_contact AS UserContact,
        u.user_address AS UserAddress,
        u.user_email AS UserEmail,
        u.user_password AS UserPassword,
        f.firm_name AS FirmName,
        f.firm_id AS FirmId,
        SUM(l.lgr_op_balance) AS TotalFirmBalance
    FROM 
        tbl_user u
    JOIN 
        tbl_user_firm uf ON u.user_id = uf.uf_user_id
    JOIN 
        tbl_firm f ON uf.uf_firm_id = f.firm_id
    LEFT JOIN 
        tbl_ledger l ON f.firm_id = l.lgr_firm_id
    WHERE 
        u.created_by = p_UserId AND u.user_status=1
    GROUP BY 
        u.user_id, f.firm_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUsersWithFirmsAndLedgers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUsersWithFirmsAndLedgers`(IN p_UserId INT)
BEGIN
    SELECT 
        u.user_name AS UserName,
        u.user_address AS UserAddress,
        u.user_email AS UserEmail,
        f.firm_name AS FirmName,
        SUM(l.lgr_op_balance) AS TotalFirmBalance
    FROM 
        tbl_user u
    JOIN 
        tbl_user_firm uf ON u.user_id = uf.uf_user_id
    JOIN 
        tbl_firm f ON uf.uf_firm_id = f.firm_id
    LEFT JOIN 
        tbl_ledger l ON f.firm_id = l.lgr_firm_id
    WHERE 
        u.created_by = p_UserId
    GROUP BY 
        u.user_id, f.firm_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetWeeklyAndDailyTransactionsForAdminn` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetWeeklyAndDailyTransactionsForAdminn`(
    IN p_user_id INT
)
BEGIN
    -- Calculate total payments and receipts for weekly and daily across all firms associated with the user
    SELECT 
        -- Weekly totals
        SUM(CASE WHEN t.trans_amt < 0 AND t.created_at >= DATE_SUB(NOW(), INTERVAL 1 WEEK) THEN ABS(t.trans_amt) ELSE 0 END) AS total_weekly_payments, 
        SUM(CASE WHEN t.trans_amt > 0 AND t.created_at >= DATE_SUB(NOW(), INTERVAL 1 WEEK) THEN t.trans_amt ELSE 0 END) AS total_weekly_receipts,

SUM(CASE 
    WHEN t.created_at >= CONCAT(CURDATE() - INTERVAL 1 DAY, ' 00:00:00') 
         AND t.created_at < CONCAT(CURDATE(), ' 00:00:00') 
    THEN t.trans_amt 
    ELSE 0 
END) AS total_daily_net_transactions
    FROM 
        tbl_transactions t
    JOIN 
        tbl_user_firm uf 
        ON t.trans_firm_id = uf.uf_firm_id
    WHERE 
        uf.created_by = p_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetWeeklyAndDailyTransactionsForUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetWeeklyAndDailyTransactionsForUser`(
    IN p_user_id INT
)
BEGIN
    -- Calculate total payments and receipts for weekly and net transactions for daily across all firms associated with the user
    SELECT 
        -- Weekly totals (separate payments and receipts)
        SUM(CASE WHEN t.trans_amt < 0 AND t.created_at >= DATE_SUB(NOW(), INTERVAL 1 WEEK) THEN ABS(t.trans_amt) ELSE 0 END) AS total_weekly_payments, 
        SUM(CASE WHEN t.trans_amt > 0 AND t.created_at >= DATE_SUB(NOW(), INTERVAL 1 WEEK) THEN t.trans_amt ELSE 0 END) AS total_weekly_receipts,

        -- Daily net transactions (sum of payments and receipts)
        SUM(CASE WHEN t.created_at >= DATE_SUB(NOW(), INTERVAL 1 DAY) THEN t.trans_amt ELSE 0 END) AS total_daily_net_transactions
    FROM 
        tbl_transactions t
    JOIN 
        tbl_user_firm uf 
        ON t.trans_firm_id = uf.uf_firm_id
    WHERE 
        uf.uf_user_id = p_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `LoginUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `LoginUser`(
    IN p_email VARCHAR(255)
)
BEGIN
    -- Fetch the user record based on the email provided
    SELECT user_id, user_password, user_role_id
    FROM tbl_user 
    WHERE user_email = p_email;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RegisterUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RegisterUser`(

    IN p_email VARCHAR(255), 
    IN p_name VARCHAR(255), 
    IN p_password VARCHAR(255)
)
BEGIN
    DECLARE userExists INT DEFAULT 0;
    DECLARE p_userId INT DEFAULT 0;
    DECLARE p_status TINYINT DEFAULT 0;
    DECLARE p_message VARCHAR(255);

    -- Check if the user already exists
    SELECT COUNT(*) INTO userExists FROM tbl_user WHERE user_email = p_email;

    IF userExists > 0 THEN
        SET p_status = 0;  -- User exists (false)
        SET p_message = 'User already exists';
    ELSE
        -- Insert new user
        INSERT INTO tbl_user (user_email, user_name, user_password, user_role_id)
        VALUES (p_email, p_name, p_password, 1);

        -- Get the last inserted ID
        SET p_userId = LAST_INSERT_ID();
        SET p_status = 1;  -- Success (true)
        SET p_message = 'User registered successfully';
    END IF;

    -- Return the status, message, and user ID using SELECT statement
    SELECT p_userId AS userId, p_status AS status, p_message AS message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetTransactionHistoryByLedgerId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetTransactionHistoryByLedgerId`(

    IN v_ledger_id INT
)
BEGIN
    SELECT 
        CASE 
            -- If it's a transaction from this ledger (to another firm/ledger)
            WHEN t1.trans_lgr_id = v_ledger_id THEN CONCAT(l1.lgr_name, ' to ', f2.firm_name, '-', l2.lgr_name)
            -- If it's a transaction to this ledger (from another firm/ledger)
            WHEN t2.trans_lgr_id = v_ledger_id THEN CONCAT(l2.lgr_name, ' from ', f1.firm_name, '-', l1.lgr_name)
        END AS transaction_description,
        
        CASE 
            -- If v_type is 1 (payment), show negative if not already negative
            WHEN t1.trans_lgr_id = v_ledger_id AND v.v_type = '1' THEN 
                IF(t1.trans_amt < 0, t1.trans_amt, CONCAT('-', t1.trans_amt))
            -- If v_type is 2 (receipt), always show positive
            WHEN t2.trans_lgr_id = v_ledger_id AND v.v_type = '2' THEN 
                IF(t2.trans_amt > 0, t2.trans_amt, CONCAT('+', ABS(t2.trans_amt)))
        END AS amount,
        
        t1.created_at AS transaction_time,
        t1.trans_v_id AS voucher_id
    FROM 
        tbl_transactions t1
    JOIN 
        tbl_transactions t2 
        ON t1.trans_v_id = t2.trans_v_id
        AND t1.trans_id != t2.trans_id
    JOIN 
        tbl_ledger l1 
        ON t1.trans_lgr_id = l1.lgr_id
    JOIN 
        tbl_ledger l2 
        ON t2.trans_lgr_id = l2.lgr_id
    JOIN 
        tbl_firm f1 
        ON l1.lgr_firm_id = f1.firm_id
    JOIN 
        tbl_firm f2 
        ON l2.lgr_firm_id = f2.firm_id
    JOIN 
        tbl_vouchers v 
        ON t1.trans_v_id = v.v_id
    WHERE 
        (t1.trans_lgr_id = v_ledger_id OR t2.trans_lgr_id = v_ledger_id)
        AND (
            -- If v_type is 1, filter only outgoing payments
            (v.v_type = '1' AND t1.trans_lgr_id = v_ledger_id) 
            -- If v_type is 2, filter only incoming receipts
            OR (v.v_type = '2' AND t2.trans_lgr_id = v_ledger_id)
        )
    -- Add all necessary columns to the GROUP BY clause
    GROUP BY t1.trans_v_id, t1.trans_amt, t1.created_at, l1.lgr_name, l2.lgr_name, f1.firm_name, f2.firm_name, v.v_type, t1.trans_lgr_id, t2.trans_lgr_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetTransactionHistoryByLedgerId22` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetTransactionHistoryByLedgerId22`(

    IN v_ledger_id INT
)
BEGIN
    SELECT 
        (SELECT lgr_name FROM tbl_ledger WHERE lgr_id = v_ledger_id) AS `Account`, 
        
        CASE 
            WHEN v.v_type = '1' AND t1.trans_lgr_id = v_ledger_id THEN 'To'
            WHEN v.v_type = '2' AND t2.trans_lgr_id = v_ledger_id THEN 'From'
            WHEN t1.trans_lgr_id = t2.trans_lgr_id AND t1.trans_lgr_id = v_ledger_id THEN 'To/From'
        END AS `From/To`,
        
        CASE 
            WHEN t1.trans_lgr_id = v_ledger_id THEN CONCAT(f2.firm_name, '-', l2.lgr_name)
            ELSE CONCAT(f1.firm_name, '-', l1.lgr_name)
        END AS `Transaction with Firm`, 
        
        CASE 
            WHEN t1.trans_lgr_id = v_ledger_id AND t1.trans_amt < 0 THEN CONCAT('De ', ABS(t1.trans_amt))
            WHEN t2.trans_lgr_id = v_ledger_id AND t2.trans_amt > 0 THEN CONCAT('Cr ', ABS(t2.trans_amt))
            WHEN t1.trans_lgr_id = t2.trans_lgr_id AND t1.trans_lgr_id = v_ledger_id THEN 
                CASE 
                    WHEN t1.trans_amt > 0 THEN CONCAT('Cr ', ABS(t1.trans_amt))
                    ELSE CONCAT('De ', ABS(t1.trans_amt))
                END
        END AS `Cr/De Amount`,
        
        t1.created_at AS `Date`,
        t1.trans_v_id AS `voucher_id`
    FROM 
        tbl_transactions t1
    JOIN 
        tbl_transactions t2 
        ON t1.trans_v_id = t2.trans_v_id
        AND t1.trans_id != t2.trans_id
    JOIN 
        tbl_ledger l1 
        ON t1.trans_lgr_id = l1.lgr_id
    JOIN 
        tbl_ledger l2 
        ON t2.trans_lgr_id = l2.lgr_id
    JOIN 
        tbl_firm f1 
        ON l1.lgr_firm_id = f1.firm_id
    JOIN 
        tbl_firm f2 
        ON l2.lgr_firm_id = f2.firm_id
    JOIN 
        tbl_vouchers v 
        ON t1.trans_v_id = v.v_id
    WHERE 
        (t1.trans_lgr_id = v_ledger_id OR t2.trans_lgr_id = v_ledger_id)
    GROUP BY 
        t1.trans_v_id, 
        t1.trans_lgr_id, 
        t2.trans_lgr_id, 
        l1.lgr_name, 
        l2.lgr_name, 
        f1.firm_name, 
        f2.firm_name, 
        t1.trans_amt, 
        t1.created_at, 
        v.v_type
    ORDER BY 
        t1.created_at;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Transactions` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Transactions`(


    IN p_Date DATE,
    IN p_amount_type VARCHAR(50),
    IN p_transaction_type INT,
    IN p_Amount DECIMAL(10,2),
    IN p_Remark VARCHAR(255),
    IN p_UserId INT,
    IN p_FromLedgerId INT,
    IN p_ToLedgerId INT,
    IN p_FromFirmId INT, 
    IN p_ToFirmId INT, 
    IN p_BankName VARCHAR(255), 
    IN p_ChequeNo VARCHAR(50) 
)
BEGIN
    DECLARE newVoucherId INT;
    DECLARE currentFromBalance DECIMAL(10,2);
    DECLARE currentToBalance DECIMAL(10,2);

    -- Step 1: Fetch the current balance of the "from" and "to" ledgers
    SELECT lgr_op_balance INTO currentFromBalance FROM tbl_ledger WHERE lgr_id = p_FromLedgerId;
    SELECT lgr_op_balance INTO currentToBalance FROM tbl_ledger WHERE lgr_id = p_ToLedgerId;

    -- Step 2: Update the ledger balances
    -- Decrease the balance of the "from" ledger
    UPDATE tbl_ledger
    SET lgr_op_balance = currentFromBalance - p_Amount
    WHERE lgr_id = p_FromLedgerId;

    -- Increase the balance of the "to" ledger
    UPDATE tbl_ledger
    SET lgr_op_balance = currentToBalance + p_Amount
    WHERE lgr_id = p_ToLedgerId;

    -- Step 3: Insert the voucher details into tbl_vouchers
    INSERT INTO tbl_vouchers (v_date, v_type, v_amount,v_from_firm_id,v_from_ledger_id,v_to_firm_id,v_to_ledger_id, created_by, v_remark, v_amount_type)
    VALUES (p_Date, p_transaction_type, p_Amount, p_FromFirmId,p_FromLedgerId,p_ToFirmId,p_ToLedgerId,p_UserId, p_Remark, p_amount_type);

    -- Get the last inserted voucher ID
    SET newVoucherId = LAST_INSERT_ID();

    -- Step 4: Insert the transaction for the "to" ledger with a positive amount
    INSERT INTO tbl_transactions (trans_v_id, trans_lgr_id, trans_amt, trans_firm_id)
    VALUES (newVoucherId, p_ToLedgerId, p_Amount, p_ToFirmId);

    -- Step 5: Insert the transaction for the "from" ledger with a negative amount
    INSERT INTO tbl_transactions (trans_v_id, trans_lgr_id, trans_amt, trans_firm_id)
    VALUES (newVoucherId, p_FromLedgerId, -p_Amount, p_FromFirmId);

    -- Step 6: Check if the payment type is CHEQUE and insert bank details if applicable
    IF p_amount_type = 'CHEQUE' THEN
        INSERT INTO tbl_bank_payments (bank_payments_voucher_id, bank_payments_bank_name, bank_payments_cheque_no)
        VALUES (newVoucherId, p_BankName, p_ChequeNo);
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateUserAndFirm` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUserAndFirm`(
    IN p_AdminId INT,
    IN p_UserId INT,
    IN p_FirmId INT, -- Firm ID in the parameters (old firm id)
    IN p_Name VARCHAR(255),
    IN p_Email VARCHAR(255),
    IN p_Password VARCHAR(255),
    IN p_Contact VARCHAR(255),
    IN p_Address VARCHAR(255),
    IN p_NewFirmId INT -- New firm ID in the body to replace the old one
)
BEGIN
    -- Update the user details in tbl_user
    UPDATE tbl_user
    SET 
        user_name = p_Name,
        user_email = p_Email,
        user_password = p_Password,
        user_contact = p_Contact,
        user_address = p_Address,
        updated_by = p_AdminId, -- Update the updated_by field with AdminId
        updated_at = NOW() -- Optional: Set a timestamp for when the update happened
    WHERE user_id = p_UserId;

    -- Update the firm ID in tbl_user_firm
    UPDATE tbl_user_firm
    SET 
        uf_firm_id = p_NewFirmId -- Update the firm ID to the new firm ID
    WHERE 
        uf_user_id = p_UserId
        AND uf_firm_id = p_FirmId; -- Match the old firm ID provided in the parameters

    -- Optional: Check if the row was updated and handle it (you can return a message or code if needed)
    IF ROW_COUNT() = 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'No matching firm-user record found for the provided user and firm IDs';
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateUserInfoById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUserInfoById`(
    IN p_user_id INT,
    IN p_user_name VARCHAR(255),
    IN p_user_email VARCHAR(45),
    IN p_user_contact VARCHAR(255),
    IN p_user_address VARCHAR(255)
)
BEGIN
    -- Update user info based on the provided user ID and new data
    UPDATE tbl_user
    SET 
        user_name = p_user_name,
        user_email = p_user_email,
        user_contact = p_user_contact,
        user_address = p_user_address,
        updated_at = CURRENT_TIMESTAMP
    WHERE 
        user_id = p_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-16 18:44:45
