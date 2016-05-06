-- phpMyAdmin SQL Dump
-- version 4.6.0
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 05, 2016 at 11:08 AM
-- Server version: 5.6.30-0ubuntu0.14.04.1
-- PHP Version: 5.6.21-1+donate.sury.org~trusty+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nature`
--
CREATE DATABASE IF NOT EXISTS `nature` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `nature`;

-- --------------------------------------------------------

--
-- Table structure for table `animals`
--

DROP TABLE IF EXISTS `animals`;
CREATE TABLE `animals` (
  `id` int(11) NOT NULL,
  `type` varchar(32) NOT NULL,
  `name` varchar(64) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `animals`
--

INSERT INTO `animals` (`id`, `type`, `name`, `age`) VALUES
(1, 'elephant', 'Surus', 18),
(2, 'elephant', 'Mahmud', 11),
(3, 'elephant', 'Abdul-Abbas', 20),
(4, 'cat', 'Garfield', 30),
(5, 'cat', 'Morris', 9),
(6, 'monkey', 'King Louie', 33),
(7, 'monkey', 'King Kong', 100),
(8, 'monkey', 'Curious George', 3),
(9, 'monkey', 'Clyde', 28),
(10, 'tiger', 'Tony The Tiger', 80),
(11, 'tiger', 'Tigger', 4),
(12, 'tiger', 'Shere Khan', 44),
(13, 'tiger', 'Diego', 19),
(14, 'zebra', 'Marty', 14),
(15, 'zebra', 'Stripes', 22),
(16, 'zebra', 'Khumba', 17),
(17, 'elephant', 'Jumbo', 17),
(18, 'elephant', 'Echo', 27),
(19, 'elephant', 'Dumbo', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `animals`
--
ALTER TABLE `animals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
