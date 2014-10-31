/*
SQLyog Community v10.51 
MySQL - 5.5.27 : Database - exam
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`exam` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `exam`;

/*Table structure for table `categoria` */

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `idc` int(11) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `categoria` */

insert  into `categoria`(`idc`,`cat`) values (1,'Plasticos'),(2,'Metales'),(3,'Liquidos');

/*Table structure for table `producto` */

DROP TABLE IF EXISTS `producto`;

CREATE TABLE `producto` (
  `idp` int(11) DEFAULT NULL,
  `producto` varchar(255) DEFAULT NULL,
  `idc` int(11) DEFAULT NULL,
  `costo` int(11) DEFAULT NULL,
  `existencia` int(11) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `producto` */

insert  into `producto`(`idp`,`producto`,`idc`,`costo`,`existencia`,`tipo`) values (1,'pelotas',1,10,30,'A'),(2,'carritos',1,50,40,'A'),(3,'latas',2,30,40,'B'),(4,'cubetas',2,30,30,'B'),(5,'limpiador',3,40,30,'A');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
