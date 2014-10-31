/*
SQLyog Community v10.51 
MySQL - 5.5.27 : Database - proyecto
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`proyecto` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `proyecto`;

/*Table structure for table `clientes` */

DROP TABLE IF EXISTS `clientes`;

CREATE TABLE `clientes` (
  `idc` int(11) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `activo` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `clientes` */

insert  into `clientes`(`idc`,`nombre`,`activo`) values (1,'pablo','si'),(2,'sofia','0');

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `idp` int(11) DEFAULT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `exist` int(11) DEFAULT NULL,
  `costo` int(11) DEFAULT NULL,
  `activo` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `productos` */

insert  into `productos`(`idp`,`nombre`,`exist`,`costo`,`activo`) values (1,'carros',5,12,'si'),(2,'pelotas',20,23,'si'),(3,'rines',54,54,'si');

/*Table structure for table `sucursal` */

DROP TABLE IF EXISTS `sucursal`;

CREATE TABLE `sucursal` (
  `ids` int(11) DEFAULT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `activo` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sucursal` */

insert  into `sucursal`(`ids`,`nombre`,`activo`) values (1,'toluca','si'),(2,'lerma','si');

/*Table structure for table `ventadetalle` */

DROP TABLE IF EXISTS `ventadetalle`;

CREATE TABLE `ventadetalle` (
  `idvd` int(11) NOT NULL AUTO_INCREMENT,
  `idv` int(11) DEFAULT NULL,
  `idp` int(11) DEFAULT NULL,
  `costo` int(11) DEFAULT NULL,
  `cant` int(11) DEFAULT NULL,
  KEY `idvd` (`idvd`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `ventadetalle` */

insert  into `ventadetalle`(`idvd`,`idv`,`idp`,`costo`,`cant`) values (1,1,1,3,2),(2,1,1,3,2),(3,1,1,3,2),(4,1,1,3,2),(5,1,1,3,10),(6,1,2,1,23);

/*Table structure for table `ventas` */

DROP TABLE IF EXISTS `ventas`;

CREATE TABLE `ventas` (
  `idv` int(11) DEFAULT NULL,
  `idc` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `ids` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `ventas` */

insert  into `ventas`(`idv`,`idc`,`fecha`,`ids`) values (1,1,'2013-10-15',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
