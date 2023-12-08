-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-08-2023 a las 21:01:43
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
-- Base de datos: `p04cont-act`
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
(10, '2023-08-16', 'Exposicion', 2, 2, 'Una gran exposicion! asistan');

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
(8, '1222100427', 10);

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
(4, 'TSU en Administración Área Capital Humano', 'EA'),
(5, 'TSU en Desarrollo de Negocios Área Mercadotécnia', 'EA'),
(6, 'TSU en Contaduría ', 'EA'),
(7, 'TSU en Turismo', 'EA'),
(8, 'Licenciatura en Gestión del Capital Humano', 'EA'),
(9, 'Licenciatura en Innovación de Negocios y Mercadotecnia', 'EA'),
(10, 'Licenciatura en Contaduría', 'EA'),
(11, 'TSU en Desarrollo de Software Multiplataforma', 'TI'),
(12, 'Ingeniería en Desarrollo y Gestión de Software', 'TI'),
(13, 'TSU en Infraestructura de Redes Digitales ', 'TI'),
(14, 'Ingeniería en Redes Inteligentes y Ciberseguridad', 'TI'),
(15, 'TSU en Entornos Virtuales y Negocios Digitales', 'TI'),
(16, 'Ingeniería en Entornos Virtuales y Negocios Digitales', 'TI'),
(17, 'TSU en Diseño Digital ', 'TI'),
(18, 'Licenciatura en Diseño Digital y Producción Audiovisual', 'TI'),
(19, 'TSU en Mecatrónica Área Instalaciones Eléctricas Eficientes', 'IEE'),
(20, 'TSU en Procesos Industriales Área Manufactura', 'IEE'),
(21, 'TSU en Energias Renovables Área Calidad y Ahorro de Energía', 'IEE'),
(22, 'Ingeniería en Mecatrónica', 'IEE'),
(23, 'Ingeniería en Tecnologías de la Producción', 'IEE');

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
(1, 'Cancha de Futbol'),
(2, 'Sala de Ajedrez'),
(3, 'Cancha de Basket'),
(4, 'Pista de Atletismo'),
(5, 'Salon deTaekwondo'),
(6, 'Gimanasio ');

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
('1222100427', 'Juan', 'GDS0533', 11);

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
(2, 'Diego', '4321', 'usr'),
(32, 'Adm', '1111', 'adm');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vis_act`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `vis_act` (
`idAct` int(11)
,`fecha` date
,`nomAct` varchar(50)
,`usr` varchar(50)
,`idUsr` int(11)
,`nomLug` varchar(50)
,`idLug` int(11)
,`descripcion` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vis_act`
--
DROP TABLE IF EXISTS `vis_act`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vis_act`  AS SELECT `a`.`idAct` AS `idAct`, `a`.`fecha` AS `fecha`, `a`.`nomAct` AS `nomAct`, `u`.`usr` AS `usr`, `u`.`idUsr` AS `idUsr`, `l`.`nomLug` AS `nomLug`, `l`.`idLug` AS `idLug`, `a`.`descripcion` AS `descripcion` FROM ((`actividades` `a` join `usuarios` `u` on(`a`.`idUsr` = `u`.`idUsr`)) join `lugares` `l` on(`l`.`idLug` = `a`.`idLug`)) ORDER BY `a`.`fecha` ASC ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`idAct`),
  ADD KEY `fk_idLug` (`idLug`),
  ADD KEY `fk_idUsr` (`idUsr`);

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`idAsi`),
  ADD KEY `fk_idAct` (`idAct`),
  ADD KEY `fk_numCon` (`numCon`);

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
  MODIFY `idAct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `idAsi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `idCar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `lugares`
--
ALTER TABLE `lugares`
  MODIFY `idLug` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `fk_idLug` FOREIGN KEY (`idLug`) REFERENCES `lugares` (`idLug`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_idUsr` FOREIGN KEY (`idUsr`) REFERENCES `usuarios` (`idUsr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `fk_idAct` FOREIGN KEY (`idAct`) REFERENCES `actividades` (`idAct`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_numCon` FOREIGN KEY (`numCon`) REFERENCES `partipantes` (`numCon`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `partipantes`
--
ALTER TABLE `partipantes`
  ADD CONSTRAINT `fk_idCar` FOREIGN KEY (`idCar`) REFERENCES `carrera` (`idCar`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
