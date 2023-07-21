-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-07-2023 a las 06:44:57
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `p03cont-act`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `idAct` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `nomAct` varchar(50) NOT NULL,
  `idUsr` int(11) NOT NULL,
  `idLug` int(11) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`idAct`, `fecha`, `nomAct`, `idUsr`, `idLug`, `descripcion`) VALUES
(1, '2023-07-21', 'Torneo Ajedrez', 4, 2, 'Gran torneo de ajedrez ven y diviertete'),
(2, '2023-07-21', 'Partido de Futbol', 2, 1, 'Partido de seleccion'),
(3, '2023-07-21', 'Ajedrez II', 4, 1, 'Gran torneo 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `idAsi` int(11) NOT NULL,
  `numCon` varchar(10) NOT NULL,
  `idAct` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `asistencia`
--

INSERT INTO `asistencia` (`idAsi`, `numCon`, `idAct`) VALUES
(1, '1222100426', 1),
(2, '1222100426', 2),
(3, '1222100413', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `idCar` int(11) NOT NULL,
  `nomCar` varchar(60) NOT NULL,
  `area` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrera`
--

INSERT INTO `carrera` (`idCar`, `nomCar`, `area`) VALUES
(1, 'TSU en Desarrollo de Software Multiplataforma', 'TI'),
(2, 'TSU en Desarrollo de Negocios Área Mercadotécnia', 'EA'),
(3, 'TSU en Mecatrónica Área Instalaciones Eléctricas Eficientes', 'IEE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugares`
--

CREATE TABLE `lugares` (
  `idLug` int(11) NOT NULL,
  `nomLug` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lugares`
--

INSERT INTO `lugares` (`idLug`, `nomLug`) VALUES
(1, 'Cancha de Futboll'),
(2, 'Sala de Ajedrez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partipantes`
--

CREATE TABLE `partipantes` (
  `numCon` varchar(10) NOT NULL,
  `nomPar` varchar(50) NOT NULL,
  `grupo` varchar(7) NOT NULL,
  `idCar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `partipantes`
--

INSERT INTO `partipantes` (`numCon`, `nomPar`, `grupo`, `idCar`) VALUES
('1222100413', 'Miguel', 'GMI0532', 3),
('1222100426', 'Alan', 'GDS0533', 1),
('1222100485', 'Josue', 'GDN0533', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsr` int(11) NOT NULL,
  `usr` varchar(50) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `rol` char(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsr`, `usr`, `pwd`, `rol`) VALUES
(1, 'Alan', '1234', 'adm'),
(2, 'Miguel', '4321', 'usr'),
(3, 'Josue', '5678', 'usr'),
(4, 'Pelusa', '123', 'usr');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`idAct`),
  ADD KEY `fk_idUsr` (`idUsr`),
  ADD KEY `fk_idLug` (`idLug`);

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`idAsi`),
  ADD KEY `fk_numCon` (`numCon`),
  ADD KEY `fk_idAct` (`idAct`);

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`idCar`);

--
-- Indices de la tabla `lugares`
--
ALTER TABLE `lugares`
  ADD PRIMARY KEY (`idLug`);

--
-- Indices de la tabla `partipantes`
--
ALTER TABLE `partipantes`
  ADD PRIMARY KEY (`numCon`),
  ADD KEY `fk_idCar` (`idCar`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsr`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `idAct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `idAsi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `idCar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `lugares`
--
ALTER TABLE `lugares`
  MODIFY `idLug` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `fk_idLug` FOREIGN KEY (`idLug`) REFERENCES `lugares` (`idLug`),
  ADD CONSTRAINT `fk_idUsr` FOREIGN KEY (`idUsr`) REFERENCES `usuarios` (`idUsr`);

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `fk_idAct` FOREIGN KEY (`idAct`) REFERENCES `actividades` (`idAct`),
  ADD CONSTRAINT `fk_numCon` FOREIGN KEY (`numCon`) REFERENCES `partipantes` (`numCon`);

--
-- Filtros para la tabla `partipantes`
--
ALTER TABLE `partipantes`
  ADD CONSTRAINT `fk_idCar` FOREIGN KEY (`idCar`) REFERENCES `carrera` (`idCar`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
