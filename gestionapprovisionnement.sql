-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  mer. 06 juil. 2022 à 19:40
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gestionapprovisionnement`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id`, `nom`, `prenom`, `email`, `pass`) VALUES
(13, 'beirouk', 'mohamed', 'servidiv@gmai.com', '11111'),
(14, 'beirouk', 'mohamed', 'mbeirouck@gmail.com', '22222'),
(16, 'beirouk', 'mohamed', 'ygtuhijk@tgjhk.com', '11111');

-- --------------------------------------------------------

--
-- Structure de la table `commandee`
--

DROP TABLE IF EXISTS `commandee`;
CREATE TABLE IF NOT EXISTS `commandee` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `id_fournisseur` bigint(11) NOT NULL,
  `date` date NOT NULL,
  `etat` varchar(50) NOT NULL,
  `libelle` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commandee`
--

INSERT INTO `commandee` (`id`, `id_fournisseur`, `date`, `etat`, `libelle`) VALUES
(24, 1, '2022-07-05', 'en route', 'appro'),
(25, 1, '2022-07-05', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `entree`
--

DROP TABLE IF EXISTS `entree`;
CREATE TABLE IF NOT EXISTS `entree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `description` varchar(87) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `entree`
--

INSERT INTO `entree` (`id`, `date`, `description`) VALUES
(1, '2022-05-16', 'hgjkm');

-- --------------------------------------------------------

--
-- Structure de la table `entree_detail`
--

DROP TABLE IF EXISTS `entree_detail`;
CREATE TABLE IF NOT EXISTS `entree_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_produit` int(11) NOT NULL,
  `id_entree` int(11) NOT NULL,
  `quantite` float NOT NULL,
  `pu` float DEFAULT NULL,
  PRIMARY KEY (`id`,`id_produit`,`id_entree`),
  KEY `id_produit` (`id_produit`),
  KEY `id_entree` (`id_entree`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `entree_detail`
--

INSERT INTO `entree_detail` (`id`, `id_produit`, `id_entree`, `quantite`, `pu`) VALUES
(1, 1, 1, 100, 12);

-- --------------------------------------------------------

--
-- Structure de la table `fournisseurs`
--

DROP TABLE IF EXISTS `fournisseurs`;
CREATE TABLE IF NOT EXISTS `fournisseurs` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `fournisseurs`
--

INSERT INTO `fournisseurs` (`id`, `nom`, `prenom`, `email`, `pass`) VALUES
(1, 'clientnom', 'clientprenom', 'client@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Structure de la table `produitt`
--

DROP TABLE IF EXISTS `produitt`;
CREATE TABLE IF NOT EXISTS `produitt` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) NOT NULL,
  `libelle` varchar(60) NOT NULL,
  `prix` float NOT NULL,
  `date_Expiration` date NOT NULL,
  `quantite` int(11) DEFAULT NULL,
  `id_stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_stock` (`id_stock`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `produitt`
--

INSERT INTO `produitt` (`id`, `code`, `libelle`, `prix`, `date_Expiration`, `quantite`, `id_stock`) VALUES
(6, 'a', 'p1', 111, '2022-07-05', 0, 1),
(7, 'a', 'p1', 11, '2022-07-05', 0, 1),
(8, 'a', 'p2', 11, '2022-07-05', 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `produit_commander`
--

DROP TABLE IF EXISTS `produit_commander`;
CREATE TABLE IF NOT EXISTS `produit_commander` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_produit` int(11) NOT NULL,
  `id_commande` int(11) NOT NULL,
  `quantite` float NOT NULL,
  PRIMARY KEY (`id`,`id_produit`,`id_commande`),
  KEY `id_produit` (`id_produit`),
  KEY `id_commande` (`id_commande`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `produit_commander`
--

INSERT INTO `produit_commander` (`id`, `id_produit`, `id_commande`, `quantite`) VALUES
(1, 1, 1, 100),
(2, 2, 1, 1000);

-- --------------------------------------------------------

--
-- Structure de la table `sortie`
--

DROP TABLE IF EXISTS `sortie`;
CREATE TABLE IF NOT EXISTS `sortie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `description` varchar(87) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `sortie`
--

INSERT INTO `sortie` (`id`, `date`, `description`) VALUES
(1, '2022-05-21', 'ytguhjlk');

-- --------------------------------------------------------

--
-- Structure de la table `sortie_detail`
--

DROP TABLE IF EXISTS `sortie_detail`;
CREATE TABLE IF NOT EXISTS `sortie_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_produit` int(11) NOT NULL,
  `id_sortie` int(11) NOT NULL,
  `quantite` float NOT NULL,
  `pu` float DEFAULT NULL,
  PRIMARY KEY (`id`,`id_produit`,`id_sortie`),
  KEY `id_produit` (`id_produit`),
  KEY `id_sortie` (`id_sortie`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `sortie_detail`
--

INSERT INTO `sortie_detail` (`id`, `id_produit`, `id_sortie`, `quantite`, `pu`) VALUES
(1, 1, 1, 50, 13);

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `localisation` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`id`, `nom`, `localisation`) VALUES
(1, 'Magasin 1', 'capital-boutique 123'),
(2, 'Magasin 2', 'capital-boutique 123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
