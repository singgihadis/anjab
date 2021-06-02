/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50616
Source Host           : localhost:3306
Source Database       : anjab

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2021-02-11 14:08:37
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `abk`
-- ----------------------------
DROP TABLE IF EXISTS `abk`;
CREATE TABLE `abk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `anjab_tugas_pokok_tahapan_id` int(11) DEFAULT NULL,
  `hasil_kerja` varchar(255) DEFAULT NULL,
  `jumlah_hasil` int(11) DEFAULT '0',
  `waktu_penyelesaian` int(11) DEFAULT '0',
  `master_keterangan_waktu_id` int(11) DEFAULT '0',
  `waktu_efektif` int(11) DEFAULT '0',
  `kebutuhan_pegawai` double DEFAULT '0',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of abk
-- ----------------------------
INSERT INTO abk VALUES ('1', '1', '1', '-', '45', '1', '1', '72000', '0.0006', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('2', '1', '2', 'Hasil', '35', '7', '2', '6000', '0.0408', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('3', '1', '3', 'Konsep KAK', '10', '2', '5', '60', '0.3333', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('4', '1', '4', 'Resume Visi dan Misi', '60', '7', '1', '72000', '0.0058', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('5', '1', '5', '-', '60', '4', '1', '72000', '0.0033', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('6', '1', '6', '-', '60', '6', '1', '72000', '0.005', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('7', '1', '7', '-', '60', '4', '1', '72000', '0.0033', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('8', '1', '8', '-', '60', '8', '1', '72000', '0.0067', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('9', '1', '9', '-', '23', '2', '3', '1500', '0.0307', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('10', '1', '10', '-', '60', '3', '3', '1500', '0.12', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('11', '1', '11', '-', '60', '4', '3', '1500', '0.16', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('12', '1', '12', '-', '60', '5', '3', '1500', '0.2', '2020-11-13 14:36:10', '2020-11-13 14:36:10');
INSERT INTO abk VALUES ('13', '6', '13', 'dsadas', '7', '45', '1', '72000', '0.0044', '2021-01-16 05:19:52', '2021-01-16 05:19:52');

-- ----------------------------
-- Table structure for `anjab_bahan_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_bahan_kerja`;
CREATE TABLE `anjab_bahan_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `urutan` int(11) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `digunakan_dalam_tugas` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_bahan_kerja
-- ----------------------------
INSERT INTO anjab_bahan_kerja VALUES ('1', '1', '1', 'Program Kerja Unit (Eselon II)', 'Pengkoordinasian pelaksanaan tugas unit kerja (Eselon II)', '2020-11-13 13:21:41', null);
INSERT INTO anjab_bahan_kerja VALUES ('2', '1', '2', 'Renstra', 'Perumusan Program', '2020-11-13 13:21:48', null);
INSERT INTO anjab_bahan_kerja VALUES ('3', '1', '3', 'Data Pegawai', 'Pembinaan bawahan di lingkungan unit kerja', '2020-11-13 13:21:58', null);
INSERT INTO anjab_bahan_kerja VALUES ('4', '6', '4', 'asdccccccc', 'caccc', '2021-01-15 09:53:49', '2021-01-15 09:54:54');

-- ----------------------------
-- Table structure for `anjab_hasil_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_hasil_kerja`;
CREATE TABLE `anjab_hasil_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `anjab_tugas_pokok_id` int(11) DEFAULT NULL,
  `hasil_kerja` text,
  `master_satuan_kerja_id` int(11) DEFAULT '0',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_hasil_kerja
-- ----------------------------
INSERT INTO anjab_hasil_kerja VALUES ('1', '1', '1', 'Konsep RPJPD, RPJMD, RKPD  bidang manajemen kepegawaian', '1', '2020-11-13 13:21:23', '2020-11-13 13:21:23');
INSERT INTO anjab_hasil_kerja VALUES ('2', '1', '2', 'Bahan rencana strategis dan program kerja', '1', '2020-11-13 13:21:23', '2020-11-13 13:21:23');
INSERT INTO anjab_hasil_kerja VALUES ('3', '1', '3', 'Terlaksananya kegiatan-kegiatan', '1', '2020-11-13 13:21:23', '2020-11-13 13:21:23');
INSERT INTO anjab_hasil_kerja VALUES ('4', '6', '4', 'Harus Bagus', '1', '2021-01-15 09:53:35', '2021-01-15 09:53:35');

-- ----------------------------
-- Table structure for `anjab_ikhtisiar`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_ikhtisiar`;
CREATE TABLE `anjab_ikhtisiar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `ikhtisiar` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_ikhtisiar
-- ----------------------------
INSERT INTO anjab_ikhtisiar VALUES ('1', '1', 'Membantu Bupati dalam melaksanakan fungsi penunjang urusan pemerintahan di bidang kepegawaian, pendidikan dan pelatihan yang menjadi kewenangan daerah', '2020-11-13 13:16:52', '2020-11-13 13:16:52');
INSERT INTO anjab_ikhtisiar VALUES ('2', '6', 'Mantab Djiwa', '2021-01-15 09:52:19', '2021-01-15 09:52:19');

-- ----------------------------
-- Table structure for `anjab_kondisi_lingkungan_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_kondisi_lingkungan_kerja`;
CREATE TABLE `anjab_kondisi_lingkungan_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_kondisi_lingkungan_kerja_id` int(11) DEFAULT NULL,
  `faktor` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_kondisi_lingkungan_kerja
-- ----------------------------
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('1', '1', '1', '', '2020-11-13 13:27:42', '2020-11-13 13:27:42');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('2', '1', '2', 'suhu tidak menentu dan cuaca labil dalam rangka mengemban tugas tinjauan lapangan atau evaluasi dan pembinaan', '2020-11-13 13:27:42', '2020-11-13 13:27:42');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('3', '1', '3', '', '2020-11-13 13:27:42', '2020-11-13 13:27:42');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('4', '1', '4', 'Kadang-kadang diruangan sejuk, luas dan tertutup, kadang-kadang diruangan terbuka', '2020-11-13 13:27:42', '2020-11-13 13:27:42');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('5', '1', '5', '', '2020-11-13 13:27:42', '2020-11-13 13:27:42');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('6', '1', '6', '', '2020-11-13 13:27:42', '2020-11-13 13:27:42');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('7', '1', '7', '', '2020-11-13 13:27:42', '2020-11-13 13:27:42');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('8', '1', '8', '', '2020-11-13 13:27:42', '2020-11-13 13:27:42');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('9', '1', '9', '', '2020-11-13 13:27:42', '2020-11-13 13:27:42');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('10', '6', '1', 'adas', '2021-01-15 09:56:06', '2021-01-15 09:56:06');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('11', '6', '2', 'dsa', '2021-01-15 09:56:06', '2021-01-15 09:56:06');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('12', '6', '3', 'sadad', '2021-01-15 09:56:06', '2021-01-15 09:56:06');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('13', '6', '4', 'asd', '2021-01-15 09:56:06', '2021-01-15 09:56:06');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('14', '6', '5', '', '2021-01-15 09:56:06', '2021-01-15 09:56:06');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('15', '6', '6', '', '2021-01-15 09:56:06', '2021-01-15 09:56:06');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('16', '6', '7', '', '2021-01-15 09:56:06', '2021-01-15 09:56:06');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('17', '6', '8', '', '2021-01-15 09:56:06', '2021-01-15 09:56:06');
INSERT INTO anjab_kondisi_lingkungan_kerja VALUES ('18', '6', '9', '', '2021-01-15 09:56:06', '2021-01-15 09:56:06');

-- ----------------------------
-- Table structure for `anjab_korelasi`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_korelasi`;
CREATE TABLE `anjab_korelasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `urutan` int(11) DEFAULT NULL,
  `nama_jabatan` varchar(255) DEFAULT NULL,
  `unit_kerja` varchar(255) DEFAULT NULL,
  `dalam_hal` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_korelasi
-- ----------------------------
INSERT INTO anjab_korelasi VALUES ('1', '1', '1', 'Bupati Pati', 'Pemkab Pati', 'Konsultasi dan laporan dalam pelaksanaan tugas', '2020-11-13 13:27:05', '2020-11-13 13:27:05');
INSERT INTO anjab_korelasi VALUES ('2', '1', '2', 'Sekda Kab.Pati', 'Pemkab Pati', 'Konsultasi dan laporan dalam pelaksanaan tugas', '2020-11-13 13:27:24', '2020-11-13 13:27:24');
INSERT INTO anjab_korelasi VALUES ('3', '6', '3', 'aacccc', 'assasasasa', 'qqqq', '2021-01-15 09:55:49', '2021-01-15 09:55:49');

-- ----------------------------
-- Table structure for `anjab_kualifikasi_pelatihan`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_kualifikasi_pelatihan`;
CREATE TABLE `anjab_kualifikasi_pelatihan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_jenis_pelatihan_id` int(11) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL COMMENT 'Fakultas / Jurusan',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_kualifikasi_pelatihan
-- ----------------------------
INSERT INTO anjab_kualifikasi_pelatihan VALUES ('1', '1', '1', 'Diklat Manajemen Keolahragaan', '2020-11-13 13:17:53', '2020-11-13 13:17:53');
INSERT INTO anjab_kualifikasi_pelatihan VALUES ('2', '1', '2', 'Diklat Manajemen Pendidikan Dasar', '2020-11-13 13:18:00', '2020-11-13 13:18:00');
INSERT INTO anjab_kualifikasi_pelatihan VALUES ('3', '1', '3', 'Diklat Manajemen Kepemudaan', '2020-11-13 13:18:07', '2020-11-13 13:18:07');
INSERT INTO anjab_kualifikasi_pelatihan VALUES ('4', '6', '1', 'adadsd', '2021-01-15 09:53:03', '2021-01-15 09:53:03');

-- ----------------------------
-- Table structure for `anjab_kualifikasi_pendidikan`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_kualifikasi_pendidikan`;
CREATE TABLE `anjab_kualifikasi_pendidikan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_pendidikan_id` int(11) DEFAULT NULL,
  `jurusan` varchar(255) DEFAULT NULL COMMENT 'Fakultas / Jurusan',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_kualifikasi_pendidikan
-- ----------------------------
INSERT INTO anjab_kualifikasi_pendidikan VALUES ('1', '1', '8', 'S1 ILMU PEMERINTAHAN, S1 MANAJEMEN SDM', '2020-11-13 13:17:36', '2020-11-13 13:17:36');
INSERT INTO anjab_kualifikasi_pendidikan VALUES ('2', '6', '2', 'Apa Saja', '2021-01-15 09:52:35', '2021-01-15 09:52:35');

-- ----------------------------
-- Table structure for `anjab_kualifikasi_pengalaman_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_kualifikasi_pengalaman_kerja`;
CREATE TABLE `anjab_kualifikasi_pengalaman_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_kualifikasi_pengalaman_kerja
-- ----------------------------
INSERT INTO anjab_kualifikasi_pengalaman_kerja VALUES ('1', '1', 'Jabatan Administrator Bidang Pendidikan, Kepemudaan, Olahraga dan Pariwisata', '2020-11-13 13:18:19', '2020-11-13 13:18:19');
INSERT INTO anjab_kualifikasi_pengalaman_kerja VALUES ('2', '6', 'asdda', '2021-01-15 09:53:11', '2021-01-15 09:53:11');

-- ----------------------------
-- Table structure for `anjab_perangkat_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_perangkat_kerja`;
CREATE TABLE `anjab_perangkat_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `urutan` int(11) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `digunakan_dalam_tugas` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_perangkat_kerja
-- ----------------------------
INSERT INTO anjab_perangkat_kerja VALUES ('1', '1', '1', 'Tupoksi dan Kebijakan Pimpinan', 'Merumuskan program kerja', '2020-11-13 13:22:19', '2020-11-13 13:22:19');
INSERT INTO anjab_perangkat_kerja VALUES ('2', '1', '2', 'Program Kerja Unit', 'Mengkoordinasikan dan Mengarahkan pelaksanaan tugas', '2020-11-13 13:22:27', '2020-11-13 13:22:27');
INSERT INTO anjab_perangkat_kerja VALUES ('3', '6', '3', 'asd', 'sdadsadsa', '2021-01-15 09:53:58', '2021-01-15 09:53:58');
INSERT INTO anjab_perangkat_kerja VALUES ('4', '6', '4', 'asdccc', 'daxczcx', '2021-01-15 09:54:22', '2021-01-15 09:54:41');

-- ----------------------------
-- Table structure for `anjab_prestasi_kerja_diharapkan`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_prestasi_kerja_diharapkan`;
CREATE TABLE `anjab_prestasi_kerja_diharapkan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL COMMENT 'Nama prestasi',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_prestasi_kerja_diharapkan
-- ----------------------------
INSERT INTO anjab_prestasi_kerja_diharapkan VALUES ('1', '1', 'Meningkatkan capaian Standar Kurikulum Pendidikan Dasar', '2020-11-13 13:56:28', '2020-11-13 13:56:28');
INSERT INTO anjab_prestasi_kerja_diharapkan VALUES ('2', '1', 'Meningkatkan standar kompetensi tenaga pendidik', '2020-11-13 13:56:32', '2020-11-13 13:56:32');
INSERT INTO anjab_prestasi_kerja_diharapkan VALUES ('3', '6', 'asd', '2021-01-15 09:57:31', '2021-01-15 09:57:31');

-- ----------------------------
-- Table structure for `anjab_resiko_bahaya`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_resiko_bahaya`;
CREATE TABLE `anjab_resiko_bahaya` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `urutan` int(11) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `penyebab` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_resiko_bahaya
-- ----------------------------
INSERT INTO anjab_resiko_bahaya VALUES ('1', '1', '1', 'Kecelakaan Fisik', 'Tinjauan Lapangan dan evaluasi serta pembinaan', '2020-11-13 13:27:57', '2020-11-13 13:27:57');
INSERT INTO anjab_resiko_bahaya VALUES ('2', '6', '2', 'asd', 'dsaadssad', '2021-01-15 09:56:26', '2021-01-15 09:56:26');

-- ----------------------------
-- Table structure for `anjab_syarat_jabatan_bakat_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_syarat_jabatan_bakat_kerja`;
CREATE TABLE `anjab_syarat_jabatan_bakat_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_bakat_kerja_id` int(11) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_syarat_jabatan_bakat_kerja
-- ----------------------------
INSERT INTO anjab_syarat_jabatan_bakat_kerja VALUES ('2', '1', '2', '2020-11-13 13:28:54', '2020-11-13 13:28:54');
INSERT INTO anjab_syarat_jabatan_bakat_kerja VALUES ('3', '1', '1', '2020-11-13 13:28:56', '2020-11-13 13:28:56');
INSERT INTO anjab_syarat_jabatan_bakat_kerja VALUES ('4', '6', '1', '2021-01-15 09:57:04', '2021-01-15 09:57:04');
INSERT INTO anjab_syarat_jabatan_bakat_kerja VALUES ('5', '6', '4', '2021-01-15 09:57:11', '2021-01-15 09:57:11');

-- ----------------------------
-- Table structure for `anjab_syarat_jabatan_fungsi_pekerjaan`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_syarat_jabatan_fungsi_pekerjaan`;
CREATE TABLE `anjab_syarat_jabatan_fungsi_pekerjaan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_fungsi_pekerjaan_data_id` int(11) DEFAULT NULL,
  `master_fungsi_pekerjaan_orang_id` int(11) DEFAULT NULL,
  `master_fungsi_pekerjaan_benda_id` int(11) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_syarat_jabatan_fungsi_pekerjaan
-- ----------------------------
INSERT INTO anjab_syarat_jabatan_fungsi_pekerjaan VALUES ('1', '1', '1', '3', '5', '2020-11-13 13:56:09', '2020-11-13 13:56:09');

-- ----------------------------
-- Table structure for `anjab_syarat_jabatan_keterampilan_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_syarat_jabatan_keterampilan_kerja`;
CREATE TABLE `anjab_syarat_jabatan_keterampilan_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `aspek` varchar(255) DEFAULT NULL,
  `uraian` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_syarat_jabatan_keterampilan_kerja
-- ----------------------------
INSERT INTO anjab_syarat_jabatan_keterampilan_kerja VALUES ('1', '1', 'Aspek Fisik', 'kecakapan kerja pikiran', '2020-11-13 13:28:17', '2020-11-13 13:28:17');
INSERT INTO anjab_syarat_jabatan_keterampilan_kerja VALUES ('2', '1', 'Aspek Mental', '-', '2020-11-13 13:28:26', '2020-11-13 13:28:26');
INSERT INTO anjab_syarat_jabatan_keterampilan_kerja VALUES ('3', '6', 'mantab', 'cxcz', '2021-01-15 09:56:41', '2021-01-15 10:05:29');

-- ----------------------------
-- Table structure for `anjab_syarat_jabatan_kondisi_fisik`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_syarat_jabatan_kondisi_fisik`;
CREATE TABLE `anjab_syarat_jabatan_kondisi_fisik` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_kondisi_fisik_id` int(11) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_syarat_jabatan_kondisi_fisik
-- ----------------------------
INSERT INTO anjab_syarat_jabatan_kondisi_fisik VALUES ('1', '1', '1', 'Laki-laki/Perempuan', '2020-11-13 13:55:48', '2020-11-13 13:55:48');
INSERT INTO anjab_syarat_jabatan_kondisi_fisik VALUES ('2', '1', '2', 'tidak ada syarat khusus', '2020-11-13 13:55:49', '2020-11-13 13:55:49');
INSERT INTO anjab_syarat_jabatan_kondisi_fisik VALUES ('3', '1', '3', 'tidak ada syarat khusus', '2020-11-13 13:55:50', '2020-11-13 13:55:50');
INSERT INTO anjab_syarat_jabatan_kondisi_fisik VALUES ('4', '1', '4', 'tidak ada syarat khusus', '2020-11-13 13:55:52', '2020-11-13 13:55:52');
INSERT INTO anjab_syarat_jabatan_kondisi_fisik VALUES ('5', '1', '5', 'tidak ada syarat khusus', '2020-11-13 13:55:53', '2020-11-13 13:55:53');
INSERT INTO anjab_syarat_jabatan_kondisi_fisik VALUES ('6', '1', '6', 'tidak ada syarat khusus', '2020-11-13 13:55:55', '2020-11-13 13:55:55');

-- ----------------------------
-- Table structure for `anjab_syarat_jabatan_minat_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_syarat_jabatan_minat_kerja`;
CREATE TABLE `anjab_syarat_jabatan_minat_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_minat_kerja_id` int(11) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_syarat_jabatan_minat_kerja
-- ----------------------------
INSERT INTO anjab_syarat_jabatan_minat_kerja VALUES ('1', '1', '12', '2020-11-13 13:54:53', '2020-11-13 13:54:53');

-- ----------------------------
-- Table structure for `anjab_syarat_jabatan_temperamen_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_syarat_jabatan_temperamen_kerja`;
CREATE TABLE `anjab_syarat_jabatan_temperamen_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_temperamen_kerja_id` int(11) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_syarat_jabatan_temperamen_kerja
-- ----------------------------
INSERT INTO anjab_syarat_jabatan_temperamen_kerja VALUES ('1', '1', '1', '2020-11-13 13:44:34', '2020-11-13 13:44:34');
INSERT INTO anjab_syarat_jabatan_temperamen_kerja VALUES ('2', '6', '3', '2021-01-15 09:57:20', '2021-01-15 09:57:20');
INSERT INTO anjab_syarat_jabatan_temperamen_kerja VALUES ('3', '6', '2', '2021-01-15 09:57:21', '2021-01-15 09:57:21');

-- ----------------------------
-- Table structure for `anjab_syarat_jabatan_upaya_fisik`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_syarat_jabatan_upaya_fisik`;
CREATE TABLE `anjab_syarat_jabatan_upaya_fisik` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_upaya_fisik_id` int(11) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_syarat_jabatan_upaya_fisik
-- ----------------------------
INSERT INTO anjab_syarat_jabatan_upaya_fisik VALUES ('1', '1', '16', '2020-11-13 13:55:07', '2020-11-13 13:55:07');
INSERT INTO anjab_syarat_jabatan_upaya_fisik VALUES ('2', '1', '2', '2020-11-13 13:55:14', '2020-11-13 13:55:14');

-- ----------------------------
-- Table structure for `anjab_tanggung_jawab`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_tanggung_jawab`;
CREATE TABLE `anjab_tanggung_jawab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `anjab_tugas_pokok_id` int(11) DEFAULT NULL,
  `tanggung_jawab` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_tanggung_jawab
-- ----------------------------
INSERT INTO anjab_tanggung_jawab VALUES ('1', '1', '1', 'Keakuratan kebijakan', '2020-11-13 13:22:50', '2020-11-13 13:22:50');
INSERT INTO anjab_tanggung_jawab VALUES ('2', '1', '2', 'Keakuratan renstra dan program kerja', '2020-11-13 13:22:50', '2020-11-13 13:22:50');
INSERT INTO anjab_tanggung_jawab VALUES ('3', '1', '3', 'Keakuratan kebijakan', '2020-11-13 13:22:50', '2020-11-13 13:22:50');
INSERT INTO anjab_tanggung_jawab VALUES ('4', '6', '4', 'sadda', '2021-01-15 09:54:06', '2021-01-15 09:54:06');

-- ----------------------------
-- Table structure for `anjab_tugas_pokok`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_tugas_pokok`;
CREATE TABLE `anjab_tugas_pokok` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `urutan` int(11) DEFAULT NULL,
  `uraian` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_tugas_pokok
-- ----------------------------
INSERT INTO anjab_tugas_pokok VALUES ('1', '1', '1', 'Merumuskan kebijakan daerah dalam rangka penyusunan RPJPD, RPJMD, RKPD dan kebijakan daerah lainnya, menetapkan kebijakan teknis dan menyusun bahan untuk penetapan Standart Satuan Harga, Indikator Kinerja Utama, Perjanjian Kinerja dan bahan lainnya di bidang kepegawaian, pendidikan dan pelatihan', '2020-11-13 13:18:46', '2020-11-13 13:18:46');
INSERT INTO anjab_tugas_pokok VALUES ('2', '1', '2', 'Merumuskan Renstra, Renja, program kerja dan kegiatan anggaran di lingkungan Badan Kepegawaian, Pendidikan dan Pelatihan sebagai pedoman pelaksanaan tugas', '2020-11-13 13:19:23', '2020-11-13 13:19:23');
INSERT INTO anjab_tugas_pokok VALUES ('3', '1', '3', 'Menyelenggarakan kebijakan daerah terkait urusan bidang Kepegawaian, Pendidikan dan Pelatihan, kelembagaan, ketatausahaan, kepegawaian, pengelolaan anggaran dan pengelolaan barang', '2020-11-13 13:19:51', '2020-11-13 13:19:51');
INSERT INTO anjab_tugas_pokok VALUES ('4', '6', '4', 'asdccc', '2021-01-15 09:53:20', '2021-01-15 09:55:14');

-- ----------------------------
-- Table structure for `anjab_tugas_pokok_tahapan`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_tugas_pokok_tahapan`;
CREATE TABLE `anjab_tugas_pokok_tahapan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `anjab_tugas_pokok_id` int(11) DEFAULT NULL,
  `uraian` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_tugas_pokok_tahapan
-- ----------------------------
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('1', '1', 'Merumuskan dan menetapkan kebijakan di bidang kepegawaian, pendidikan dan pelatihan', '2020-11-13 13:19:10', '2020-11-13 13:19:10');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('2', '1', 'Mengkoordinasikan perumusan konsep kebijakan dibidang kepegawaian, pendidikan dan pelatihan dengan instansi terkait', '2020-11-13 13:19:10', '2020-11-13 13:19:10');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('3', '1', 'Merumuskan konsep kebijakan di bidang kepegawaian, pendidikan dan pelatihan', '2020-11-13 13:19:10', '2020-11-13 13:19:10');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('4', '1', 'Mempelajari peraturan - peraturan di bidang kepegawaian, pendidikan dan pelatihan', '2020-11-13 13:19:10', '2020-11-13 13:19:10');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('5', '2', 'Menjabarkan rencana strategis organisasi', '2020-11-13 13:19:45', '2020-11-13 13:19:45');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('6', '2', 'Menyusun target, output dan indikator-indikator untuk masing-masing program kerja yang akan dilakukan', '2020-11-13 13:19:45', '2020-11-13 13:19:45');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('7', '2', 'Merancang konsep program kerja berdasarkan hasil analisis sebagai solusi dalam pencapaian rencana strategis organisasi', '2020-11-13 13:19:45', '2020-11-13 13:19:45');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('8', '2', 'Memetakan peluang dan hambatan organisasi dalam pencapaian rencana strategis organisasi', '2020-11-13 13:19:45', '2020-11-13 13:19:45');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('9', '3', 'Menyelenggarakan pengawasan dan evaluasi', '2020-11-13 13:20:10', '2020-11-13 13:20:10');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('10', '3', 'Menyelenggarakan kegiatan terkait urusan bidang Kepegawaian, Pendidikan dan Pelatihan, kelembagaan, ketatausahaan, kepegawaian, pengelolaan anggaran dan pengelolaan barang', '2020-11-13 13:20:10', '2020-11-13 13:20:10');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('11', '3', 'Menyelenggarakan koordinasi perumusan kebijakan', '2020-11-13 13:20:10', '2020-11-13 13:20:10');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('12', '3', 'Merumuskan bahan kebijakan', '2020-11-13 13:20:10', '2020-11-13 13:20:10');
INSERT INTO anjab_tugas_pokok_tahapan VALUES ('13', '4', 'asddsa', '2021-01-15 09:55:18', '2021-01-15 09:55:18');

-- ----------------------------
-- Table structure for `anjab_verifikasi`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_verifikasi`;
CREATE TABLE `anjab_verifikasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `tahun` int(11) DEFAULT NULL,
  `verifikasi` int(11) DEFAULT '0' COMMENT '0 = Belum, 1 = Tolak, 2 = Setuju',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_verifikasi
-- ----------------------------
INSERT INTO anjab_verifikasi VALUES ('1', '6', '2021', '2', '2021-01-16 05:57:02', '2021-01-16 05:57:02');

-- ----------------------------
-- Table structure for `anjab_wewenang`
-- ----------------------------
DROP TABLE IF EXISTS `anjab_wewenang`;
CREATE TABLE `anjab_wewenang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `anjab_tugas_pokok_id` int(11) DEFAULT NULL,
  `wewenang` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of anjab_wewenang
-- ----------------------------
INSERT INTO anjab_wewenang VALUES ('1', '1', '1', 'Menentukan  teknik koordinasi tugas', '2020-11-13 13:26:39', '2020-11-13 13:26:39');
INSERT INTO anjab_wewenang VALUES ('2', '1', '2', 'Meminta bahan rencana strategis dan program kerja', '2020-11-13 13:26:39', '2020-11-13 13:26:39');
INSERT INTO anjab_wewenang VALUES ('3', '1', '3', 'Menentukan teknik kegiatan  ', '2020-11-13 13:26:39', '2020-11-13 13:26:39');
INSERT INTO anjab_wewenang VALUES ('4', '6', '4', 'cxzc', '2021-01-15 09:55:39', '2021-01-15 09:55:39');

-- ----------------------------
-- Table structure for `dokumen`
-- ----------------------------
DROP TABLE IF EXISTS `dokumen`;
CREATE TABLE `dokumen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `is_tampil` int(4) DEFAULT '0' COMMENT '0 = Tidak, 1 = Iya',
  `dokumen` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of dokumen
-- ----------------------------

-- ----------------------------
-- Table structure for `evjab`
-- ----------------------------
DROP TABLE IF EXISTS `evjab`;
CREATE TABLE `evjab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `tahun` int(11) DEFAULT NULL,
  `ruang_lingkup` text COMMENT 'Ruang lingkup / uraian',
  `dampak` text,
  `master_faktor_evjab_id` int(11) DEFAULT NULL,
  `master_faktor_evjab_level_id` int(11) DEFAULT NULL,
  `nilai` int(11) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of evjab
-- ----------------------------
INSERT INTO evjab VALUES ('1', '1', '2020', '<p>-<br></p>', '-', '1', '3', '550', '2020-11-13 15:27:21', '2020-11-13 15:27:21');
INSERT INTO evjab VALUES ('2', '1', '2020', '<p>-<br></p>', '-', '2', '7', '250', '2020-11-13 15:27:27', '2020-11-13 15:27:27');
INSERT INTO evjab VALUES ('3', '1', '2020', '<p>Kasubbag Kelembagaan berwenang :</p><ol><li>Merencanakan pekerjaan yang dilaksanakan oleh bawahan</li><li>Memberikan pekerjaan kepada bawahan</li><li>Mengevaluasi kinerja bawahan</li><li>Memberikan saran atau petunjuk kepada pegawai masalah pekerjaan dan administrasi</li></ol>', '-', '3', '9', '450', '2020-11-13 15:27:34', '2020-11-13 15:27:34');
INSERT INTO evjab VALUES ('4', '1', '2020', '<p>-<br></p>', '-', '4', '14', '75', '2020-11-13 15:27:38', '2020-11-13 15:27:38');
INSERT INTO evjab VALUES ('5', '1', '2020', '<p>-<br></p>', '-', '5', '17', '75', '2020-11-13 15:27:44', '2020-11-13 15:27:44');
INSERT INTO evjab VALUES ('6', '1', '2020', '<p>-<br></p>', '-', '6', '25', '800', '2020-11-13 15:27:49', '2020-11-13 15:27:49');
INSERT INTO evjab VALUES ('7', '1', '2020', '<p>-<br></p>', '-', '7', '28', '310', '2020-11-13 15:27:55', '2020-11-13 15:27:55');
INSERT INTO evjab VALUES ('8', '4', '2020', '<p>-<br></p>', '-', '8', '37', '550', '2020-11-14 11:01:43', '2020-11-14 11:10:04');
INSERT INTO evjab VALUES ('9', '4', '2020', '<p>-<br></p>', '-', '9', '47', '650', '2020-11-14 11:10:14', '2020-11-14 11:10:14');
INSERT INTO evjab VALUES ('10', '4', '2020', '<p>-<br></p>', '-', '11', '56', '225', '2020-11-14 11:10:23', '2020-11-14 11:10:23');
INSERT INTO evjab VALUES ('11', '6', '2021', '<p>asasdadsdas<br></p>', 'dsasd', '18', '79', '150', '2021-01-16 06:14:52', '2021-01-16 06:18:05');

-- ----------------------------
-- Table structure for `evjab_tim_analisis`
-- ----------------------------
DROP TABLE IF EXISTS `evjab_tim_analisis`;
CREATE TABLE `evjab_tim_analisis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `nama_ketua` varchar(255) DEFAULT NULL,
  `jabatan_pejabat_bersangkutan` varchar(255) DEFAULT NULL,
  `nama_pejabat_bersangkutan` varchar(255) DEFAULT NULL,
  `jabatan_pimpinan_unit_kerja` varchar(255) DEFAULT NULL,
  `nama_pimpinan_unit_kerja` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of evjab_tim_analisis
-- ----------------------------
INSERT INTO evjab_tim_analisis VALUES ('1', '1', 'Drs. Toni Junardi', 'KASUBBAG KELEMBAGAAN', 'ANIS Al-Amin, SH', 'KEPALA BAGIAN ORGANISASI DAN KEPEGAWAIAN', 'Dra. Rina Diniati', '2020-11-13 15:40:43', '2020-11-13 15:40:43');

-- ----------------------------
-- Table structure for `evjab_verifikasi`
-- ----------------------------
DROP TABLE IF EXISTS `evjab_verifikasi`;
CREATE TABLE `evjab_verifikasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `tahun` int(11) DEFAULT NULL,
  `verifikasi` int(11) DEFAULT '0' COMMENT '0 = Belum, 1 = Tolak, 2 = Setuju',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of evjab_verifikasi
-- ----------------------------

-- ----------------------------
-- Table structure for `jabatan`
-- ----------------------------
DROP TABLE IF EXISTS `jabatan`;
CREATE TABLE `jabatan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tahun` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `master_opd_id` int(11) DEFAULT NULL,
  `jabatan_id` int(11) DEFAULT '0' COMMENT 'Jabatan Atasan',
  `tingkat` int(11) DEFAULT '0' COMMENT 'Dimulai dari 0',
  `kode` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `master_jenis_jabatan_id` int(11) DEFAULT NULL,
  `master_eselon_id` int(11) DEFAULT NULL,
  `master_golongan_id` int(11) DEFAULT NULL,
  `master_urusan_pemerintahan_ids` varchar(255) DEFAULT NULL,
  `jml_pegawai` int(11) DEFAULT '0',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of jabatan
-- ----------------------------
INSERT INTO jabatan VALUES ('1', '2020', '1', '24', '0', '0', '1', 'Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Pegawai', 'Badan Kepegawaian, Pendidikan dan Pelatihan', '1', '2', '14', '12,22', '1', '2020-11-13 12:34:10', '2020-11-13 16:19:18');
INSERT INTO jabatan VALUES ('2', '2020', '1', '24', '1', '1', '-', 'Kepala Bidang Pengembangan, Pendidikan dan Pelatihan', 'Bidang Pengembangan , Pendidikan dan Pelatihan', '3', '4', '0', '', '3', '2020-11-13 12:35:25', '2020-11-13 16:32:30');
INSERT INTO jabatan VALUES ('3', '2020', '1', '24', '2', '2', '', 'Kasubbid Pengembangan Pegawai', 'Bidang Pengembangan, pendidikan dan Pelatihan', '4', '5', '0', '', '1', '2020-11-13 12:36:16', '2020-11-13 12:36:17');
INSERT INTO jabatan VALUES ('4', '2020', '1', '24', '3', '3', '', 'Analis Perencanaan SDM Aparatur', 'Subbid Pengembangan Pegawai', '5', '0', '0', '', '2', '2020-11-14 09:53:49', '2020-11-14 09:53:51');
INSERT INTO jabatan VALUES ('5', '2020', '2', '24', '3', '3', '', 'Pengelola Pengembangan Karir', 'Subbid Pengembangan Pegawai', '5', '0', '0', '', '3', '2020-11-14 11:00:10', '2020-11-14 11:00:11');
INSERT INTO jabatan VALUES ('6', '2021', '2', '1', '0', '0', 'SD', 'Penulis', 'Surat', '1', '1', '1', '1', '4', '2021-01-15 09:50:58', '2021-01-15 09:50:59');
INSERT INTO jabatan VALUES ('7', '2021', '1', '1', '6', '1', 'PP', 'Pembantu Penulis', 'Surat', '2', '1', '1', '1', '16', '2021-01-15 09:51:55', '2021-01-18 10:52:59');

-- ----------------------------
-- Table structure for `jabatan_jml_pegawai`
-- ----------------------------
DROP TABLE IF EXISTS `jabatan_jml_pegawai`;
CREATE TABLE `jabatan_jml_pegawai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_status_pegawai_id` int(11) DEFAULT NULL,
  `jml` int(11) DEFAULT '0',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique` (`jabatan_id`,`master_status_pegawai_id`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of jabatan_jml_pegawai
-- ----------------------------
INSERT INTO jabatan_jml_pegawai VALUES ('1', '1', '1', '0', '2020-11-13 12:34:11', '2020-11-13 12:34:11');
INSERT INTO jabatan_jml_pegawai VALUES ('2', '1', '2', '0', '2020-11-13 12:34:11', '2020-11-13 12:34:11');
INSERT INTO jabatan_jml_pegawai VALUES ('4', '1', '3', '0', '2020-11-13 12:34:11', '2020-11-13 12:34:11');
INSERT INTO jabatan_jml_pegawai VALUES ('7', '1', '4', '1', '2020-11-13 12:34:11', '2020-11-13 12:34:11');
INSERT INTO jabatan_jml_pegawai VALUES ('11', '1', '5', '0', '2020-11-13 12:34:11', '2020-11-13 12:34:11');
INSERT INTO jabatan_jml_pegawai VALUES ('16', '1', '6', '0', '2020-11-13 12:34:11', '2020-11-13 12:34:11');
INSERT INTO jabatan_jml_pegawai VALUES ('22', '2', '1', '0', '2020-11-13 12:35:26', '2020-11-13 12:35:26');
INSERT INTO jabatan_jml_pegawai VALUES ('23', '2', '2', '2', '2020-11-13 12:35:26', '2020-11-13 12:35:26');
INSERT INTO jabatan_jml_pegawai VALUES ('25', '2', '3', '0', '2020-11-13 12:35:26', '2020-11-13 12:35:26');
INSERT INTO jabatan_jml_pegawai VALUES ('28', '2', '4', '1', '2020-11-13 12:35:26', '2020-11-13 12:35:26');
INSERT INTO jabatan_jml_pegawai VALUES ('32', '2', '5', '0', '2020-11-13 12:35:26', '2020-11-13 12:35:26');
INSERT INTO jabatan_jml_pegawai VALUES ('37', '2', '6', '0', '2020-11-13 12:35:26', '2020-11-13 12:35:26');
INSERT INTO jabatan_jml_pegawai VALUES ('43', '3', '1', '0', '2020-11-13 12:36:17', '2020-11-13 12:36:17');
INSERT INTO jabatan_jml_pegawai VALUES ('44', '3', '2', '0', '2020-11-13 12:36:17', '2020-11-13 12:36:17');
INSERT INTO jabatan_jml_pegawai VALUES ('46', '3', '3', '0', '2020-11-13 12:36:17', '2020-11-13 12:36:17');
INSERT INTO jabatan_jml_pegawai VALUES ('49', '3', '4', '1', '2020-11-13 12:36:17', '2020-11-13 12:36:17');
INSERT INTO jabatan_jml_pegawai VALUES ('53', '3', '5', '0', '2020-11-13 12:36:17', '2020-11-13 12:36:17');
INSERT INTO jabatan_jml_pegawai VALUES ('58', '3', '6', '0', '2020-11-13 12:36:17', '2020-11-13 12:36:17');
INSERT INTO jabatan_jml_pegawai VALUES ('59', '4', '1', '0', '2020-11-14 09:53:51', '2020-11-14 09:53:51');
INSERT INTO jabatan_jml_pegawai VALUES ('60', '4', '2', '0', '2020-11-14 09:53:51', '2020-11-14 09:53:51');
INSERT INTO jabatan_jml_pegawai VALUES ('62', '4', '3', '0', '2020-11-14 09:53:51', '2020-11-14 09:53:51');
INSERT INTO jabatan_jml_pegawai VALUES ('65', '4', '4', '2', '2020-11-14 09:53:51', '2020-11-14 09:53:51');
INSERT INTO jabatan_jml_pegawai VALUES ('69', '4', '5', '0', '2020-11-14 09:53:51', '2020-11-14 09:53:51');
INSERT INTO jabatan_jml_pegawai VALUES ('74', '4', '6', '0', '2020-11-14 09:53:51', '2020-11-14 09:53:51');
INSERT INTO jabatan_jml_pegawai VALUES ('80', '5', '1', '0', '2020-11-14 11:00:11', '2020-11-14 11:00:11');
INSERT INTO jabatan_jml_pegawai VALUES ('81', '5', '2', '0', '2020-11-14 11:00:11', '2020-11-14 11:00:11');
INSERT INTO jabatan_jml_pegawai VALUES ('83', '5', '3', '0', '2020-11-14 11:00:11', '2020-11-14 11:00:11');
INSERT INTO jabatan_jml_pegawai VALUES ('86', '5', '4', '3', '2020-11-14 11:00:11', '2020-11-14 11:00:11');
INSERT INTO jabatan_jml_pegawai VALUES ('90', '5', '5', '0', '2020-11-14 11:00:11', '2020-11-14 11:00:11');
INSERT INTO jabatan_jml_pegawai VALUES ('95', '5', '6', '0', '2020-11-14 11:00:11', '2020-11-14 11:00:11');
INSERT INTO jabatan_jml_pegawai VALUES ('96', '6', '1', '4', '2021-01-15 09:50:59', '2021-01-15 09:50:59');
INSERT INTO jabatan_jml_pegawai VALUES ('97', '6', '2', '0', '2021-01-15 09:50:59', '2021-01-15 09:50:59');
INSERT INTO jabatan_jml_pegawai VALUES ('99', '6', '3', '0', '2021-01-15 09:50:59', '2021-01-15 09:50:59');
INSERT INTO jabatan_jml_pegawai VALUES ('102', '6', '4', '0', '2021-01-15 09:50:59', '2021-01-15 09:50:59');
INSERT INTO jabatan_jml_pegawai VALUES ('106', '6', '5', '0', '2021-01-15 09:50:59', '2021-01-15 09:50:59');
INSERT INTO jabatan_jml_pegawai VALUES ('111', '6', '6', '0', '2021-01-15 09:50:59', '2021-01-15 09:50:59');
INSERT INTO jabatan_jml_pegawai VALUES ('117', '7', '1', '6', '2021-01-15 09:51:55', '2021-01-18 10:52:59');
INSERT INTO jabatan_jml_pegawai VALUES ('118', '7', '2', '4', '2021-01-15 09:51:55', '2021-01-15 09:51:55');
INSERT INTO jabatan_jml_pegawai VALUES ('120', '7', '3', '0', '2021-01-15 09:51:55', '2021-01-15 09:51:55');
INSERT INTO jabatan_jml_pegawai VALUES ('123', '7', '4', '0', '2021-01-15 09:51:55', '2021-01-15 09:51:55');
INSERT INTO jabatan_jml_pegawai VALUES ('127', '7', '5', '6', '2021-01-15 09:51:55', '2021-01-18 10:52:59');
INSERT INTO jabatan_jml_pegawai VALUES ('132', '7', '6', '0', '2021-01-15 09:51:55', '2021-01-15 09:51:55');

-- ----------------------------
-- Table structure for `master_bakat_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `master_bakat_kerja`;
CREATE TABLE `master_bakat_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `uraian` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_bakat_kerja
-- ----------------------------
INSERT INTO master_bakat_kerja VALUES ('1', 'Intelegensia', 'Kemampuan belajar secara umum', '2020-11-09 16:09:53', '2020-11-09 16:09:53');
INSERT INTO master_bakat_kerja VALUES ('2', 'Bakat Verbal', 'Kemampuan untuk memahami kata-kata dan penggunaanya secarfa tepat dan efektif', '2020-11-09 16:10:01', '2020-11-09 16:10:01');
INSERT INTO master_bakat_kerja VALUES ('3', 'Numerik', 'Kemapuan untuk mengoperasikan aritmatik secara tepat dan akurat', '2020-11-09 16:10:09', '2020-11-09 16:10:09');
INSERT INTO master_bakat_kerja VALUES ('4', 'Pandang Ruang', 'Kemampuan berfikir secara visual mengenai bentu-bentuk geometris , untukmemahami gambar-gambar dari benda-benda tiga dimensi', '2020-11-09 16:10:18', '2020-11-09 16:10:18');
INSERT INTO master_bakat_kerja VALUES ('5', 'Penerapan Bentuk', 'Kemampuan menyerap perincian-perincian yang berkaitan dalam objek atau dalam gambar atau dalam gambar grafik', '2020-11-09 16:10:27', '2020-11-09 16:10:27');
INSERT INTO master_bakat_kerja VALUES ('6', 'Ketelitian', 'Kemampuan menyerap perincian yang berkaitan dalam bahan verbal atau dalam tebel', '2020-11-09 16:10:34', '2020-11-09 16:10:34');
INSERT INTO master_bakat_kerja VALUES ('7', 'Koordinasi Motor', 'Kemampuan untuk mengkoordinir mata dan tangan secara cepat dan cermat dalam membuat yang cepat', '2020-11-09 16:10:43', '2020-11-09 16:10:43');
INSERT INTO master_bakat_kerja VALUES ('8', 'Kecekatan Jari', 'Kemampuan menggerakkan jari-jemari dengan mudah dan perlu ketrampilan', '2020-11-09 16:10:51', '2020-11-09 16:10:51');
INSERT INTO master_bakat_kerja VALUES ('9', 'Koordinasi Mata Uang', 'Kemampuan menggerakkan tangan dan kaki secara koordinatif sesuai dengan rangsangan penglihatan', '2020-11-09 16:10:59', '2020-11-09 16:10:59');
INSERT INTO master_bakat_kerja VALUES ('10', 'Membedakan Warna', 'Kemampuan memadukan atau membedakan warnayang asli, yang gemerlapan', '2020-11-09 16:11:07', '2020-11-09 16:11:07');
INSERT INTO master_bakat_kerja VALUES ('11', 'Kecekatan Tangan', 'Kemampuan menggerakan tangan dengan mudah dan penuh keterampilan', '2020-11-09 16:11:16', '2020-11-09 16:11:16');

-- ----------------------------
-- Table structure for `master_eselon`
-- ----------------------------
DROP TABLE IF EXISTS `master_eselon`;
CREATE TABLE `master_eselon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `kelas` int(11) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_eselon
-- ----------------------------
INSERT INTO master_eselon VALUES ('1', 'II a', '2', '2020-11-09 15:42:56', '2020-11-09 15:42:56');
INSERT INTO master_eselon VALUES ('2', 'II b', '2', '2020-11-09 15:43:10', '2020-11-09 15:43:10');
INSERT INTO master_eselon VALUES ('3', 'III a', '3', '2020-11-09 15:43:19', '2020-11-09 15:43:19');
INSERT INTO master_eselon VALUES ('4', 'III b', '3', '2020-11-09 15:43:43', '2020-11-09 15:43:43');
INSERT INTO master_eselon VALUES ('5', 'IV a', '4', '2020-11-09 15:43:51', '2020-11-09 15:43:51');
INSERT INTO master_eselon VALUES ('6', 'IV b', '4', '2020-11-09 15:44:00', '2020-11-09 15:44:00');
INSERT INTO master_eselon VALUES ('7', 'V a', '5', '2020-11-09 15:44:09', '2020-11-09 15:44:09');

-- ----------------------------
-- Table structure for `master_faktor_evjab`
-- ----------------------------
DROP TABLE IF EXISTS `master_faktor_evjab`;
CREATE TABLE `master_faktor_evjab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tahun` int(11) DEFAULT NULL,
  `kode` varchar(100) DEFAULT NULL,
  `uraian` varchar(255) DEFAULT NULL,
  `tipe` int(4) DEFAULT '1' COMMENT '1 = Struktural, 2 = Fungsional / Pelaksana',
  `grup` int(4) DEFAULT '1' COMMENT '1 = Detail, 2 = Rangkuman',
  `panduan` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_faktor_evjab
-- ----------------------------
INSERT INTO master_faktor_evjab VALUES ('1', '2020', '1', 'Ruang Lingkup dan Dampak Program', '1', '1', '<p>Ratusan anggota Badan Permusyawaratan Desa (BPD)&nbsp;<a href=\"https://www.detik.com/tag/demo\">demo&nbsp;</a>di depan Kantor Bupati Kediri. Mereka menuntut kesejahteraan dan kenaikan honor.</p><p>Mereka\r\n menuntut kenaikan honor karena saat ini hanya menerima honor Rp 125 \r\nribu per bulan. Mereka menilai, padahal pekerjaannya berat. Yaitu \r\nmengawasi jalannya pembangunan di desa, dengan anggaran mencapai Rp 1 \r\nmiliar per tahun.</p><p>Salah seorang anggota BPD Pagu, Kecamatan Wates,\r\n Aji menjelaskan, keinginan mereka yakni adanya kenaikan kesejahteraan \r\nanggota. Minimal 25 persen dari penghasilan tetap kades yang sekitar Rp 3\r\n juta per bulan. Atau sekitar Rp 750 ribu per bulan.</p><p><img><img src=\"https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f\"><br></p>', '2020-11-11 10:45:04', '2020-11-11 10:45:13');
INSERT INTO master_faktor_evjab VALUES ('2', '2020', '2', 'Pengaturan Organisasi', '1', '2', '<p>Ini Panduan Struktur 2</p>', '2020-11-11 10:46:57', '2020-11-11 10:49:29');
INSERT INTO master_faktor_evjab VALUES ('3', '2020', '3', 'Wewenang Penyeliaan dan Manajerial', '1', '2', '<p>Ini Panduan Struktur 3</p>', '2020-11-11 10:49:49', '2020-11-11 10:57:35');
INSERT INTO master_faktor_evjab VALUES ('4', '2020', '4A', 'Sifat Hubungan', '1', '2', '<p>Ini Panduan Struktur 4A</p>', '2020-11-11 10:50:04', '2020-11-11 10:57:48');
INSERT INTO master_faktor_evjab VALUES ('5', '2020', '4B', 'Tujuan Hubungan', '1', '2', '<p>Ini Panduan Struktur 4B</p>', '2020-11-11 10:56:10', '2020-11-11 10:57:59');
INSERT INTO master_faktor_evjab VALUES ('6', '2020', '5', 'Kesulitan dalam Pengarahan Pekerjaan', '1', '2', '<p>Ini Panduan Struktur 5</p>', '2020-11-11 10:56:25', '2020-11-11 10:58:25');
INSERT INTO master_faktor_evjab VALUES ('7', '2020', '6', 'Kondisi Lain', '1', '2', '<p>Ini Panduan Struktur 6</p>', '2020-11-11 10:56:38', '2020-11-11 10:58:34');
INSERT INTO master_faktor_evjab VALUES ('8', '2020', '1', 'Pengetahuan yang Dibutuhkan Jabatan', '2', '2', '<h2 align=\"center\">FAKTOR 1: PENGETAHUAN YANG DIBUTUHKAN JABATAN</h2><p>Faktor\r\n ini mengukur sifat dan tingkat informasi atau fakta yang harus \r\ndiketahui pegawai untuk melaksanakan pekerjaan, antara lain: \r\nlangkah-langkah, prosedur, praktek, peraturan, kebijakan, teori, \r\nprinsip, dan konsep, dan sifat dan tingkat keahlian yang dibutuhkan \r\nuntuk menerapkan pengetahuan tersebut.</p><h2><em>Tingkat faktor</em><em>&nbsp;1-1 –&nbsp;</em><em>Nilai</em><em>&nbsp;50&nbsp;</em></h2><p>Pengetahuan\r\n tentang tugas atau operasi yang sederhana, rutin, atau berulang, yang \r\nsecara khusus&nbsp; mengikuti instruksi langkah demi langkah, dan sedikit \r\natau sama sekali tidak membutuhkan pelatihan atau pengalaman sebelumnya;</p><h2>ATAU</h2><p>Keterampilan\r\n untuk menjalankan peralatan sederhana atau peralatan yang beroperasi \r\nsecara berkala, yang sedikit atau sama sekali tidak membutuhkan \r\npelatihan atau pengalaman sebelumnya;</p><h2>ATAU</h2><p>Pengetahuan dan keterampilan yang setara.</p><h2><em>Tingkat faktor</em><em>&nbsp;1-2 – Nilai 200&nbsp;</em></h2><p>Pengetahuan\r\n tentang prosedur, peraturan, atau operasi dasar atau umum, yang secara \r\nkhusus membutuhkan sedikit pelatihan atau pengalaman sebelumnya;</p><h2>ATAU</h2><p>Keterampilan\r\n dasar untuk mengoperasikan peralatan yang membutuhkan sedikit pelatihan\r\n dan pengalaman sebelumnya, seperti peralatan keyboard;</p><h2>ATAU</h2><p>Pengetahuan dan keterampilan yang setara.</p><h2><em>Tingkat faktor</em><em>&nbsp;1-3 – Nilai 350&nbsp;</em></h2><p>Pengetahuan\r\n tentang sejumlah peraturan, prosedur, dan operasi, yang membutuhkan \r\npelatihan dan pengalaman yang cukup untuk melaksanakan pekerjaan klerek \r\ndan menyelesaikan masalah yang muncul;</p><h2>ATAU</h2><p>Keterampilan,\r\n yang membutuhkan pelatihan dan pengalaman yang cukup, untuk \r\nmengoperasikan dan menyesuaikan peralatan dalam berbagai tujuan, seperti\r\n melaksanakan sejumlah tes atau operasi standar;</p><h2>ATAU</h2><p>Pengetahuan dan keterampilan yang setara.</p><h2><em>Tingkat faktor</em><em>&nbsp;1-4 –&nbsp;</em><em>Nilai</em><em>&nbsp;550&nbsp;</em></h2><p>Pengetahuan\r\n tentang sejumlah peraturan, prosedur, atau operasi, yang membutuhkan \r\npelatihan dan pengalaman yang luas untuk melaksanakan berbagai pekerjaan\r\n yang tidak standar dan saling berhubungan, dan menyelesaikan berbagai \r\nmacam masalah;</p><h2>ATAU</h2><p>Pengetahuan praktis tentang standar prosedur dibidang teknik, yang membutuhkan pelatihan atau pengalaman luas, untuk:</p><ol><li>melaksanakan pekerjaan yang membutuhkan peralatan yang membutuhkan pertimbangan dan karakteristik tertentu;</li><li>menginterpretasikan\r\n hasil tes berdasarkan pengalaman dan observasi sebelumnya (tanpa \r\nmembaca langsung instrumen atau alat pengukur lainnya); atau</li><li>membuat\r\n intisari informasi dari berbagai sumber dan mempertimbangkan \r\nkarakteristik dan kualitas sumber informasi tersebut untuk diterapkan;</li></ol><h2>ATAU</h2><p>Pengetahuan dan keterampilan yang setara.</p><h2><em>Tingkat faktor</em><em>&nbsp;1-5 –&nbsp;</em><em>Nilai</em><em>&nbsp;750&nbsp;</em></h2><p>Pengetahuan\r\n (yang diperoleh melalui program pendidikan sarjana atau yang setara \r\ndalam pengalaman, pelatihan, atau belajar sendiri) dasar tentang \r\nprinsip, konsep, dan metodologi pekerjaan profesional atau pekerjaan \r\nadministratif, dan keterampilan dalam penerapan pengetahuan tersebut \r\nuntuk melaksanakan tugas, operasi, atau prosedur dasar;</p><h2>ATAU</h2><p>Sebagai\r\n tambahan pengetahuan praktis pada tingkat faktor 1-4, pengetahuan \r\npraktis tentang metode teknis melaksanakan pekerjaan seperti proyek yang\r\n membutuhkan teknik yang rumit dan khusus;</p><h2>ATAU</h2><p>Pengetahuan dan keterampilan yang setara.</p><p><strong><em>Tingkat faktor</em></strong><strong><em>&nbsp;1-6 – Nilai 950&nbsp;</em></strong></p><p>Pengetahuan\r\n tentang prinsip, konsep, dan metodologi pekerjaan profesional atau \r\npekerjaan administratif seperti pada tingkat faktor 1-5, yang: (a) \r\nditambah dengan keterampilan yang diperoleh melalui pengalaman \r\nmengerjakan sendiri pekerjaan yang berulang, atau (b) ditambah dengan \r\npengembangan pengetahuan profesional atau pengetahuan administratif yang\r\n diperoleh melalui pengalaman atau lulus sarjana yang relevan, yang \r\nmemberikan keahlian dalam pelaksanaan tugas, operasi dan prosedur \r\npekerjaan yang secara signifikan lebih sulit dan rumit dari yang dicakup\r\n pada tingkat faktor 1-5;</p><h2>ATAU</h2><p>Pengetahuan\r\n praktis dengan cakupan yang luas tentang metode, teknik, prinsip dan \r\npraktek yang serupa untuk pekerjaan profesional yang sempit, dan \r\nketerampilan dalam penerapan pengetahuan tersebut dalam pekerjaan desain\r\n dan perencanaan yang sulit tapi merupakan proyek yang dijadikan contoh;</p><h2>ATAU</h2><p>Pengetahuan dan keterampilan setara.</p><h2><em>Tingkat faktor</em><em>&nbsp;1-7</em><em>–</em>&nbsp;<em>Nilai</em><em>&nbsp;1250&nbsp;</em></h2><p>Pengetahuan\r\n tentang berbagai konsep, prinsip, dan praktek pekerjaan profesional \r\natau pekerjaan administratif, yang dapat diperoleh melalui pendidikan \r\ndiatas sarjana atau pengalaman yang luas, dan keterampilan didalam \r\npenerapan pengetahuan tersebut dalam pekerjaan yang sulit dan kompleks;</p><h2>ATAU</h2><p>Pengetahuan\r\n praktis yang komprehensif dan intensif dari suatu bidang teknik, dan \r\nketerampilan dalam penerapan pengetahuan tersebut dalam pengembangan \r\nmetode, pendekatan, atau prosedur baru;</p><h2>ATAU</h2><p>Pengetahuan dan keterampilan setara.</p><h2><em>Tingkat faktor</em><em>&nbsp;1-8&nbsp;</em><em>–&nbsp;</em><em>Nilai</em>&nbsp;<em>1550&nbsp;</em></h2><p>Pakar pekerjaan profesional atau pekerjaan administratif untuk:</p><ol><li>menerapkan teori eksperimental dan pengembangan baru dalam masalah yang tidak sesuai dengan metode yang telah dapat diterima;</li></ol><h2>ATAU</h2><ol><li value=\"2\">membuat\r\n keputusan atau rekomendasi yang secara signifikan merubah, menafsirkan,\r\n atau mengembangkan program atau kebijakan publik yang penting;</li></ol><h2>ATAU</h2><p>Pengetahuan dan keterampilan yang setara.</p><h2><em>Tingkat faktor</em><em>&nbsp;1-9&nbsp;</em><em>–&nbsp;</em><em>Nilai</em>&nbsp;<em>1850&nbsp;</em></h2><p>Pakar pekerjaan profesional untuk menciptakan dan mengembangkan teori dan hipotesa baru.</p><p><strong>ATAU</strong></p><p>Pengetahuan dan keterampilan yang setara.</p>', '2020-11-11 10:56:54', '2020-11-11 10:58:47');
INSERT INTO master_faktor_evjab VALUES ('9', '2020', '2', 'Pengawasan Penyelia', '2', '2', '<p>Ini Panduan Faktor 2</p>', '2020-11-11 10:57:07', '2020-11-14 11:02:56');
INSERT INTO master_faktor_evjab VALUES ('10', '2020', '3', 'Pedoman', '2', '2', '<p>Ini Panduan Faktor 3</p>', '2020-11-11 10:57:17', '2020-11-11 10:59:33');
INSERT INTO master_faktor_evjab VALUES ('11', '2020', '4', 'Kompleksitas', '2', '2', 'Ini Panduan Faktor 4', '2020-11-11 11:14:07', '2020-11-11 12:25:07');
INSERT INTO master_faktor_evjab VALUES ('12', '2020', '5', 'Ruang Lingkup dan Dampak', '2', '2', 'Ini Panduan Faktor 5', '2020-11-11 11:14:21', '2020-11-11 12:36:42');
INSERT INTO master_faktor_evjab VALUES ('13', '2020', '6', 'Hubungan Personal', '2', '2', 'Ini Panduan Faktor 6', '2020-11-11 11:14:42', '2020-11-11 12:36:55');
INSERT INTO master_faktor_evjab VALUES ('14', '2020', '7', 'Tujuan Hubungan', '2', '2', 'Ini Panduan Faktor 7', '2020-11-11 12:23:52', '2020-11-11 12:37:05');
INSERT INTO master_faktor_evjab VALUES ('15', '2020', '8', 'Persyaratan Fisik', '2', '2', 'Ini Panduan Faktor 8', '2020-11-11 12:24:39', '2020-11-11 12:37:15');
INSERT INTO master_faktor_evjab VALUES ('16', '2020', '9', 'Lingkungan Pekerjaan', '2', '2', 'Ini Panduan Faktor 9', '2020-11-11 12:24:52', '2020-11-11 12:37:24');
INSERT INTO master_faktor_evjab VALUES ('17', '2020', 'AB', 'Mencoba Saja', '1', '1', null, '2021-01-16 06:04:02', '2021-01-16 06:04:02');
INSERT INTO master_faktor_evjab VALUES ('18', '2021', 'AB', 'Mencoba AB', '1', '1', null, '2021-01-16 06:04:40', '2021-01-16 06:04:40');
INSERT INTO master_faktor_evjab VALUES ('19', '2021', 'CC', 'COOCOC', '1', '1', null, '2021-01-16 08:16:09', '2021-01-16 08:16:09');

-- ----------------------------
-- Table structure for `master_faktor_evjab_level`
-- ----------------------------
DROP TABLE IF EXISTS `master_faktor_evjab_level`;
CREATE TABLE `master_faktor_evjab_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `master_faktor_evjab_id` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `nilai` int(11) DEFAULT NULL,
  `uraian` text,
  `dampak` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_faktor_evjab_level
-- ----------------------------
INSERT INTO master_faktor_evjab_level VALUES ('1', '1', '1', '175', '<p>-<br></p>', '-', '2020-11-11 10:45:49', '2020-11-11 10:45:49');
INSERT INTO master_faktor_evjab_level VALUES ('2', '1', '2', '350', '<p>-<br></p>', '-', '2020-11-11 10:46:03', '2020-11-11 10:46:03');
INSERT INTO master_faktor_evjab_level VALUES ('3', '1', '3', '550', '<p>-<br></p>', '-', '2020-11-11 10:46:12', '2020-11-11 10:46:12');
INSERT INTO master_faktor_evjab_level VALUES ('4', '1', '4', '775', '<p>-<br></p>', '-', '2020-11-11 10:46:23', '2020-11-11 10:46:23');
INSERT INTO master_faktor_evjab_level VALUES ('5', '1', '5', '900', '<p>-<br></p>', '-', '2020-11-11 10:46:33', '2020-11-11 10:46:33');
INSERT INTO master_faktor_evjab_level VALUES ('6', '2', '1', '100', '<p>-<br></p>', '-', '2020-11-11 11:03:08', '2020-11-11 11:03:08');
INSERT INTO master_faktor_evjab_level VALUES ('7', '2', '2', '250', '<p>-<br></p>', '-', '2020-11-11 11:03:21', '2020-11-11 11:03:21');
INSERT INTO master_faktor_evjab_level VALUES ('8', '2', '3', '350', '<p>-<br></p>', '-', '2020-11-11 11:03:32', '2020-11-11 11:03:32');
INSERT INTO master_faktor_evjab_level VALUES ('9', '3', '1', '450', '<p>Kasubbag Kelembagaan berwenang :</p><ol><li>Merencanakan pekerjaan yang dilaksanakan oleh bawahan</li><li>Memberikan pekerjaan kepada bawahan</li><li>Mengevaluasi kinerja bawahan</li><li>Memberikan saran atau petunjuk kepada pegawai masalah pekerjaan dan administrasi</li></ol>', '-', '2020-11-11 11:04:00', '2020-11-11 11:04:00');
INSERT INTO master_faktor_evjab_level VALUES ('10', '3', '2', '775', '<p>-<br></p>', '-', '2020-11-11 11:04:14', '2020-11-11 11:04:14');
INSERT INTO master_faktor_evjab_level VALUES ('11', '3', '3', '900', '<p>-<br></p>', '-', '2020-11-11 11:04:23', '2020-11-11 11:04:23');
INSERT INTO master_faktor_evjab_level VALUES ('12', '4', '1', '25', '<p>-<br></p>', '-', '2020-11-11 11:05:05', '2020-11-11 11:05:05');
INSERT INTO master_faktor_evjab_level VALUES ('13', '4', '2', '50', '<p>-<br></p>', '-', '2020-11-11 11:05:16', '2020-11-11 11:05:16');
INSERT INTO master_faktor_evjab_level VALUES ('14', '4', '3', '75', '<p>-<br></p>', '-', '2020-11-11 11:05:27', '2020-11-11 11:05:27');
INSERT INTO master_faktor_evjab_level VALUES ('15', '4', '4', '100', '<p>-<br></p>', '-', '2020-11-11 11:05:42', '2020-11-11 11:05:42');
INSERT INTO master_faktor_evjab_level VALUES ('16', '5', '1', '30', '<p>-<br></p>', '-', '2020-11-11 11:06:08', '2020-11-11 11:06:08');
INSERT INTO master_faktor_evjab_level VALUES ('17', '5', '2', '75', '<p>-<br></p>', '-', '2020-11-11 11:06:20', '2020-11-11 11:06:20');
INSERT INTO master_faktor_evjab_level VALUES ('18', '5', '3', '100', '<p>-<br></p>', '-', '2020-11-11 11:06:32', '2020-11-11 11:06:32');
INSERT INTO master_faktor_evjab_level VALUES ('19', '5', '4', '125', '<p>-<br></p>', '-', '2020-11-11 11:06:43', '2020-11-11 11:06:43');
INSERT INTO master_faktor_evjab_level VALUES ('20', '6', '1', '75', '<p>-<br></p>', '-', '2020-11-11 11:07:15', '2020-11-11 11:07:15');
INSERT INTO master_faktor_evjab_level VALUES ('21', '6', '2', '205', '<p>-<br></p>', '-', '2020-11-11 11:07:26', '2020-11-11 11:07:26');
INSERT INTO master_faktor_evjab_level VALUES ('22', '6', '3', '340', '<p>-<br></p>', '-', '2020-11-11 11:07:36', '2020-11-11 11:07:36');
INSERT INTO master_faktor_evjab_level VALUES ('23', '6', '4', '505', '<p>-<br></p>', '-', '2020-11-11 11:07:47', '2020-11-11 11:07:47');
INSERT INTO master_faktor_evjab_level VALUES ('24', '6', '5', '650', '<p>-<br></p>', '-', '2020-11-11 11:07:58', '2020-11-11 11:07:58');
INSERT INTO master_faktor_evjab_level VALUES ('25', '6', '6', '800', '<p>-<br></p>', '-', '2020-11-11 11:08:10', '2020-11-11 11:08:10');
INSERT INTO master_faktor_evjab_level VALUES ('26', '6', '7', '930', '<p>-<br></p>', '-', '2020-11-11 11:08:23', '2020-11-11 11:08:23');
INSERT INTO master_faktor_evjab_level VALUES ('27', '6', '8', '1030', '<p>-<br></p>', '-', '2020-11-11 11:08:34', '2020-11-11 11:08:34');
INSERT INTO master_faktor_evjab_level VALUES ('28', '7', '1', '310', '<p>-<br></p>', '-', '2020-11-11 11:08:54', '2020-11-11 11:08:54');
INSERT INTO master_faktor_evjab_level VALUES ('29', '7', '2', '575', '<p>-<br></p>', '-', '2020-11-11 11:09:03', '2020-11-11 11:09:03');
INSERT INTO master_faktor_evjab_level VALUES ('30', '7', '3', '975', '<p>-<br></p>', '-', '2020-11-11 11:09:10', '2020-11-11 11:09:10');
INSERT INTO master_faktor_evjab_level VALUES ('31', '7', '4', '1120', '<p>-<br></p>', '-', '2020-11-11 11:09:18', '2020-11-11 11:09:18');
INSERT INTO master_faktor_evjab_level VALUES ('32', '7', '5', '1225', '<p>-<br></p>', '-', '2020-11-11 11:09:26', '2020-11-11 11:09:26');
INSERT INTO master_faktor_evjab_level VALUES ('33', '7', '6', '1325', '<p>-<br></p>', '-', '2020-11-11 11:09:38', '2020-11-11 11:09:38');
INSERT INTO master_faktor_evjab_level VALUES ('34', '8', '1', '50', '<p>-<br></p>', '-', '2020-11-11 11:10:03', '2020-11-11 11:10:03');
INSERT INTO master_faktor_evjab_level VALUES ('35', '8', '2', '200', '<p>-<br></p>', '-', '2020-11-11 11:10:14', '2020-11-11 11:10:14');
INSERT INTO master_faktor_evjab_level VALUES ('36', '8', '3', '350', '<p>-<br></p>', '-', '2020-11-11 11:10:23', '2020-11-11 11:10:23');
INSERT INTO master_faktor_evjab_level VALUES ('37', '8', '4', '550', '<p>-<br></p>', '-', '2020-11-11 11:10:31', '2020-11-14 11:03:19');
INSERT INTO master_faktor_evjab_level VALUES ('38', '8', '5', '750', '<p>-<br></p>', '-', '2020-11-11 11:10:43', '2020-11-14 11:03:28');
INSERT INTO master_faktor_evjab_level VALUES ('39', '8', '6', '950', '<p>-<br></p>', '-', '2020-11-11 11:10:52', '2020-11-11 11:10:52');
INSERT INTO master_faktor_evjab_level VALUES ('40', '8', '7', '1250', '<p>-<br></p>', '-', '2020-11-11 11:11:03', '2020-11-11 11:11:03');
INSERT INTO master_faktor_evjab_level VALUES ('41', '8', '8', '1550', '<p>-<br></p>', '-', '2020-11-11 11:11:14', '2020-11-11 11:11:14');
INSERT INTO master_faktor_evjab_level VALUES ('42', '8', '9', '1850', '<p>-<br></p>', '-', '2020-11-11 11:11:24', '2020-11-11 11:11:24');
INSERT INTO master_faktor_evjab_level VALUES ('43', '9', '1', '25', '<p>-<br></p>', '-', '2020-11-11 11:11:42', '2020-11-11 11:11:42');
INSERT INTO master_faktor_evjab_level VALUES ('44', '9', '2', '125', '<p>-<br></p>', '-', '2020-11-11 11:11:49', '2020-11-11 11:11:49');
INSERT INTO master_faktor_evjab_level VALUES ('45', '9', '3', '275', '<p>-<br></p>', '-', '2020-11-11 11:11:57', '2020-11-11 11:11:57');
INSERT INTO master_faktor_evjab_level VALUES ('46', '9', '4', '450', '<p>-<br></p>', '-', '2020-11-11 11:12:06', '2020-11-11 11:12:06');
INSERT INTO master_faktor_evjab_level VALUES ('47', '9', '5', '650', '<p>-<br></p>', '-', '2020-11-11 11:12:14', '2020-11-11 11:12:24');
INSERT INTO master_faktor_evjab_level VALUES ('48', '10', '3', '25', '<p>-<br></p>', '-', '2020-11-11 11:13:09', '2020-11-11 11:13:09');
INSERT INTO master_faktor_evjab_level VALUES ('49', '10', '2', '125', '<p>-<br></p>', '-', '2020-11-11 11:13:17', '2020-11-11 11:13:17');
INSERT INTO master_faktor_evjab_level VALUES ('50', '10', '3', '275', '<p>-<br></p>', '-', '2020-11-11 11:13:25', '2020-11-11 11:13:25');
INSERT INTO master_faktor_evjab_level VALUES ('51', '10', '4', '450', '<p>-<br></p>', '-', '2020-11-11 11:13:32', '2020-11-11 11:13:32');
INSERT INTO master_faktor_evjab_level VALUES ('52', '10', '5', '650', '<p>-<br></p>', '-', '2020-11-11 11:13:41', '2020-11-11 11:13:41');
INSERT INTO master_faktor_evjab_level VALUES ('53', '11', '1', '25', '<p>-<br></p>', '-', '2020-11-11 12:37:57', '2020-11-11 12:37:57');
INSERT INTO master_faktor_evjab_level VALUES ('54', '11', '2', '75', '<p>-<br></p>', '-', '2020-11-11 12:38:06', '2020-11-11 12:38:06');
INSERT INTO master_faktor_evjab_level VALUES ('55', '11', '3', '150', '<p>-<br></p>', '-', '2020-11-11 12:38:15', '2020-11-11 12:38:15');
INSERT INTO master_faktor_evjab_level VALUES ('56', '11', '4', '225', '<p>-<br></p>', '-', '2020-11-11 12:38:25', '2020-11-11 12:38:25');
INSERT INTO master_faktor_evjab_level VALUES ('57', '11', '5', '325', '<p>-<br></p>', '-', '2020-11-11 12:38:33', '2020-11-11 12:38:33');
INSERT INTO master_faktor_evjab_level VALUES ('58', '11', '6', '450', '<p>-<br></p>', '-', '2020-11-11 12:38:41', '2020-11-11 12:38:41');
INSERT INTO master_faktor_evjab_level VALUES ('59', '12', '1', '25', '<p>-<br></p>', '-', '2020-11-11 12:39:47', '2020-11-11 12:39:47');
INSERT INTO master_faktor_evjab_level VALUES ('60', '12', '2', '75', '<p>-<br></p>', '-', '2020-11-11 12:39:55', '2020-11-11 12:39:55');
INSERT INTO master_faktor_evjab_level VALUES ('61', '12', '3', '150', '<p>-<br></p>', '-', '2020-11-11 12:40:05', '2020-11-11 12:40:05');
INSERT INTO master_faktor_evjab_level VALUES ('62', '12', '4', '225', '<p>-<br></p>', '-', '2020-11-11 12:40:14', '2020-11-11 12:40:14');
INSERT INTO master_faktor_evjab_level VALUES ('63', '12', '5', '325', '<p>-<br></p>', '-', '2020-11-11 12:40:24', '2020-11-11 12:40:24');
INSERT INTO master_faktor_evjab_level VALUES ('64', '12', '6', '450', '<p>-<br></p>', '-', '2020-11-11 12:40:36', '2020-11-11 12:40:36');
INSERT INTO master_faktor_evjab_level VALUES ('65', '13', '1', '10', '<p>-<br></p>', '-', '2020-11-11 12:41:02', '2020-11-11 12:41:02');
INSERT INTO master_faktor_evjab_level VALUES ('66', '13', '2', '25', '<p>-<br></p>', '-', '2020-11-11 12:41:10', '2020-11-11 12:41:10');
INSERT INTO master_faktor_evjab_level VALUES ('67', '13', '3', '60', '<p>-<br></p>', '-', '2020-11-11 12:41:19', '2020-11-11 12:41:19');
INSERT INTO master_faktor_evjab_level VALUES ('68', '13', '4', '110', '<p>-<br></p>', '-', '2020-11-11 12:41:29', '2020-11-11 12:41:29');
INSERT INTO master_faktor_evjab_level VALUES ('69', '14', '1', '20', '<p>-<br></p>', '-', '2020-11-11 12:41:57', '2020-11-11 12:41:57');
INSERT INTO master_faktor_evjab_level VALUES ('70', '14', '2', '50', '<p>-<br></p>', '-', '2020-11-11 12:42:05', '2020-11-11 12:42:05');
INSERT INTO master_faktor_evjab_level VALUES ('71', '14', '3', '120', '<p>-<br></p>', '-', '2020-11-11 12:42:16', '2020-11-11 12:42:16');
INSERT INTO master_faktor_evjab_level VALUES ('72', '14', '4', '220', '<p>-<br></p>', '-', '2020-11-11 12:42:27', '2020-11-11 12:42:27');
INSERT INTO master_faktor_evjab_level VALUES ('73', '15', '1', '5', '<p>-<br></p>', '-', '2020-11-11 12:42:49', '2020-11-11 12:42:49');
INSERT INTO master_faktor_evjab_level VALUES ('74', '15', '2', '20', '<p>-<br></p>', '-', '2020-11-11 12:42:58', '2020-11-11 12:42:58');
INSERT INTO master_faktor_evjab_level VALUES ('75', '15', '3', '50', '<p>-<br></p>', '-', '2020-11-11 12:43:08', '2020-11-11 12:43:08');
INSERT INTO master_faktor_evjab_level VALUES ('76', '16', '1', '5', '<p>-<br></p>', '-', '2020-11-11 12:43:29', '2020-11-11 12:43:29');
INSERT INTO master_faktor_evjab_level VALUES ('77', '16', '2', '20', '<p>-<br></p>', '-', '2020-11-11 12:43:38', '2020-11-11 12:43:38');
INSERT INTO master_faktor_evjab_level VALUES ('78', '16', '3', '50', '<p>-<br></p>', '-', '2020-11-11 12:43:48', '2020-11-11 12:43:48');
INSERT INTO master_faktor_evjab_level VALUES ('79', '18', '1', '150', '<p>asasdadsdas<br></p>', 'dsasd', '2021-01-16 06:07:55', '2021-01-16 06:17:32');
INSERT INTO master_faktor_evjab_level VALUES ('80', '19', '2', '233', '<p>sdds<br></p>', 'sdds', '2021-01-16 08:16:42', '2021-01-16 08:16:42');

-- ----------------------------
-- Table structure for `master_fungsi_pekerjaan_benda`
-- ----------------------------
DROP TABLE IF EXISTS `master_fungsi_pekerjaan_benda`;
CREATE TABLE `master_fungsi_pekerjaan_benda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_fungsi_pekerjaan_benda
-- ----------------------------
INSERT INTO master_fungsi_pekerjaan_benda VALUES ('1', 'B0 : Merakit/Melakukan instalasi mesin', '2020-11-09 16:09:02', '2020-11-09 16:09:02');
INSERT INTO master_fungsi_pekerjaan_benda VALUES ('2', 'B1 : Mengolah benda secara Presisi/akurat', '2020-11-09 16:09:07', '2020-11-09 16:09:07');
INSERT INTO master_fungsi_pekerjaan_benda VALUES ('3', 'B2 : Mengontrol / melakukan pengaturan mesin', '2020-11-09 16:09:13', '2020-11-09 16:09:13');
INSERT INTO master_fungsi_pekerjaan_benda VALUES ('4', 'B3 : Mengemudikan / menjalankan mesin', '2020-11-09 16:09:18', '2020-11-09 16:09:18');
INSERT INTO master_fungsi_pekerjaan_benda VALUES ('5', 'B4 : Mengolah benda dengan tangan atau peralatan khusus', '2020-11-09 16:09:26', '2020-11-09 16:09:26');
INSERT INTO master_fungsi_pekerjaan_benda VALUES ('6', 'B5 : Melayani mesin', '2020-11-09 16:09:31', '2020-11-09 16:09:31');
INSERT INTO master_fungsi_pekerjaan_benda VALUES ('7', 'B6 : Memasukkan, mengeluarkan barang ke/dari mesin', '2020-11-09 16:09:35', '2020-11-09 16:09:35');
INSERT INTO master_fungsi_pekerjaan_benda VALUES ('8', 'B7 : Memegang', '2020-11-09 16:09:40', '2020-11-09 16:09:40');

-- ----------------------------
-- Table structure for `master_fungsi_pekerjaan_data`
-- ----------------------------
DROP TABLE IF EXISTS `master_fungsi_pekerjaan_data`;
CREATE TABLE `master_fungsi_pekerjaan_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_fungsi_pekerjaan_data
-- ----------------------------
INSERT INTO master_fungsi_pekerjaan_data VALUES ('1', 'D0 : Memadukan data', '2020-11-09 16:07:28', '2020-11-09 16:07:28');
INSERT INTO master_fungsi_pekerjaan_data VALUES ('2', 'D2 : Menganalisis data', '2020-11-09 16:07:33', '2020-11-09 16:07:33');
INSERT INTO master_fungsi_pekerjaan_data VALUES ('3', 'D3 : Menyusun data', '2020-11-09 16:07:38', '2020-11-09 16:07:38');
INSERT INTO master_fungsi_pekerjaan_data VALUES ('4', 'D4 : Menghitung data', '2020-11-09 16:07:42', '2020-11-09 16:07:42');
INSERT INTO master_fungsi_pekerjaan_data VALUES ('5', 'D5 : Membandingkan/mencocokkan data', '2020-11-09 16:07:47', '2020-11-09 16:07:47');
INSERT INTO master_fungsi_pekerjaan_data VALUES ('6', 'D6 : Menyalin data', '2020-11-09 16:07:52', '2020-11-09 16:07:52');

-- ----------------------------
-- Table structure for `master_fungsi_pekerjaan_orang`
-- ----------------------------
DROP TABLE IF EXISTS `master_fungsi_pekerjaan_orang`;
CREATE TABLE `master_fungsi_pekerjaan_orang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_fungsi_pekerjaan_orang
-- ----------------------------
INSERT INTO master_fungsi_pekerjaan_orang VALUES ('1', 'O0 : Menasehati', '2020-11-09 16:08:06', '2020-11-09 16:08:06');
INSERT INTO master_fungsi_pekerjaan_orang VALUES ('2', 'O2 : Mengajar', '2020-11-09 16:08:11', '2020-11-09 16:08:11');
INSERT INTO master_fungsi_pekerjaan_orang VALUES ('3', 'O3 : Menyelia', '2020-11-09 16:08:16', '2020-11-09 16:08:16');
INSERT INTO master_fungsi_pekerjaan_orang VALUES ('4', 'O4 : Menghibur', '2020-11-09 16:08:22', '2020-11-09 16:08:22');
INSERT INTO master_fungsi_pekerjaan_orang VALUES ('5', 'O5 : Mempengaruhi', '2020-11-09 16:08:30', '2020-11-09 16:08:30');
INSERT INTO master_fungsi_pekerjaan_orang VALUES ('6', 'O6 : Berbicara/Memberi tanda', '2020-11-09 16:08:34', '2020-11-09 16:08:34');
INSERT INTO master_fungsi_pekerjaan_orang VALUES ('7', 'O7 : Melayani orang', '2020-11-09 16:08:39', '2020-11-09 16:08:39');
INSERT INTO master_fungsi_pekerjaan_orang VALUES ('8', 'O8 : Menerima instruksi', '2020-11-09 16:08:45', '2020-11-09 16:08:45');

-- ----------------------------
-- Table structure for `master_golongan`
-- ----------------------------
DROP TABLE IF EXISTS `master_golongan`;
CREATE TABLE `master_golongan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(100) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `pangkat` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_golongan
-- ----------------------------
INSERT INTO master_golongan VALUES ('1', '11', 'I/a', 'Juru Muda', '2020-11-09 15:54:59', '2020-11-09 15:54:59');
INSERT INTO master_golongan VALUES ('2', '12', 'I/b', 'Juru Muda Tk.I', '2020-11-09 15:55:14', '2020-11-09 15:55:14');
INSERT INTO master_golongan VALUES ('3', '13', 'I/c', 'Juru', '2020-11-09 15:55:28', '2020-11-09 15:55:28');
INSERT INTO master_golongan VALUES ('4', '14', 'I/d', 'Juru Tk.I', '2020-11-09 15:55:43', '2020-11-09 15:55:43');
INSERT INTO master_golongan VALUES ('5', '21', 'II/a', 'Pengatur Muda', '2020-11-09 15:55:56', '2020-11-09 15:55:56');
INSERT INTO master_golongan VALUES ('6', '22', 'II/b', 'Pengatur Muda Tk.I', '2020-11-09 15:56:09', '2020-11-09 15:56:09');
INSERT INTO master_golongan VALUES ('7', '23', 'II/c', 'Pengatur', '2020-11-09 15:56:22', '2020-11-09 15:56:22');
INSERT INTO master_golongan VALUES ('8', '24', 'II/d', 'Pengatur Tk.I', '2020-11-09 15:56:36', '2020-11-09 15:56:36');
INSERT INTO master_golongan VALUES ('9', '31', 'III/a', 'Penata Muda', '2020-11-09 15:56:50', '2020-11-09 15:56:50');
INSERT INTO master_golongan VALUES ('10', '32', 'III/b', 'Penata Muda Tk.I', '2020-11-09 15:57:08', '2020-11-09 15:57:08');
INSERT INTO master_golongan VALUES ('11', '33', 'III/c', 'Penata', '2020-11-09 15:57:29', '2020-11-09 15:57:29');
INSERT INTO master_golongan VALUES ('12', '34', 'III/d', 'Penata Tk.I', '2020-11-09 15:57:42', '2020-11-09 15:57:42');
INSERT INTO master_golongan VALUES ('13', '41', 'IV/a', 'Pembina', '2020-11-09 15:57:55', '2020-11-09 15:57:55');
INSERT INTO master_golongan VALUES ('14', '42', 'IV/b', 'Pembina Tk.I', '2020-11-09 15:58:09', '2020-11-09 15:58:09');
INSERT INTO master_golongan VALUES ('15', '43', 'IV/c', 'Pembina Utama Muda', '2020-11-09 15:58:21', '2020-11-09 15:58:21');
INSERT INTO master_golongan VALUES ('16', '44', 'IV/d', 'Pembina Utama Madya', '2020-11-09 15:58:34', '2020-11-09 15:58:34');
INSERT INTO master_golongan VALUES ('17', '45', 'IV/e', 'Pembina Utama', '2020-11-09 15:58:48', '2020-11-09 15:58:48');

-- ----------------------------
-- Table structure for `master_jenis_jabatan`
-- ----------------------------
DROP TABLE IF EXISTS `master_jenis_jabatan`;
CREATE TABLE `master_jenis_jabatan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `urutan` int(11) DEFAULT NULL,
  `tipe` int(4) DEFAULT '1' COMMENT '1 = Struktural, 2 = Fungsional/Pelaksana',
  `abk` int(4) DEFAULT NULL COMMENT '1 = Rumusan, 2 = Inputan',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_jenis_jabatan
-- ----------------------------
INSERT INTO master_jenis_jabatan VALUES ('1', 'Struktural', '1', '1', '1', '2020-11-11 09:41:13', '2020-11-13 14:43:57');
INSERT INTO master_jenis_jabatan VALUES ('2', 'Pimpinan Tinggi Pratama', '2', '1', '1', '2020-11-11 09:41:29', '2020-11-13 14:43:57');
INSERT INTO master_jenis_jabatan VALUES ('3', 'Administrator', '3', '1', '1', '2020-11-11 09:41:36', '2020-11-11 09:41:36');
INSERT INTO master_jenis_jabatan VALUES ('4', 'Pengawas', '4', '1', '1', '2020-11-11 09:41:48', '2020-11-11 09:41:48');
INSERT INTO master_jenis_jabatan VALUES ('5', 'Pelaksana', '5', '2', '1', '2020-11-11 09:46:41', '2020-11-11 09:46:41');
INSERT INTO master_jenis_jabatan VALUES ('6', 'Fungsional (JF)', '6', '2', '2', '2020-11-11 09:46:53', '2020-11-11 09:46:53');
INSERT INTO master_jenis_jabatan VALUES ('7', '-', '7', '2', '1', '2020-11-11 09:47:02', '2020-11-11 09:47:02');

-- ----------------------------
-- Table structure for `master_jenis_pelatihan`
-- ----------------------------
DROP TABLE IF EXISTS `master_jenis_pelatihan`;
CREATE TABLE `master_jenis_pelatihan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_jenis_pelatihan
-- ----------------------------
INSERT INTO master_jenis_pelatihan VALUES ('1', 'FUNGSIONAL', '2020-11-11 09:47:45', '2020-11-11 09:47:45');
INSERT INTO master_jenis_pelatihan VALUES ('2', 'MANAJERIAL', '2020-11-11 09:47:50', '2020-11-11 09:47:50');
INSERT INTO master_jenis_pelatihan VALUES ('3', 'TEKNIS', '2020-11-11 09:47:55', '2020-11-11 09:47:55');

-- ----------------------------
-- Table structure for `master_kamus_kompetensi_skj`
-- ----------------------------
DROP TABLE IF EXISTS `master_kamus_kompetensi_skj`;
CREATE TABLE `master_kamus_kompetensi_skj` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `master_standar_kompetensi_id` int(11) DEFAULT NULL,
  `kode` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `uraian` text,
  `master_urusan_pemerintahan_id` int(11) DEFAULT '0',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_kamus_kompetensi_skj
-- ----------------------------
INSERT INTO master_kamus_kompetensi_skj VALUES ('1', '1', 'M.1', 'INTEGRITAS', 'Konsisten berperilaku selaras dengan nilai, norma dan/atau etika organisasi, dan jujur dalam hubungan dengan manajemen, rekan kerja, bawahan langsung, dan pemangku kepentingan, menciptakan budaya etika tinggi, bertanggungjawab atas tindakan atau keputusan beserta risiko yang menyertainya', '0', '2020-11-11 10:05:23', '2020-11-11 10:05:23');
INSERT INTO master_kamus_kompetensi_skj VALUES ('2', '1', 'M.2', 'KERJA SAMA', 'Kemampuan menjalin, membina, mempertahankan hubungan kerja yang efektif, memiliki komitmen saling membantu dalam penyelesaian tugas, dan mengoptimalkan segala sumberdaya untuk mencapai tujuan strategis organisasi', '0', '2020-11-11 10:05:40', '2020-11-11 10:05:40');
INSERT INTO master_kamus_kompetensi_skj VALUES ('3', '1', 'M.3', 'KOMUNIKASI', 'Kemampuan untuk menerangkan pandangan dan gagasan secara jelas, sistematis disertai argumentasi yang logis dengan cara-cara yang sesuai baik secara lisan maupun tertulis; memastikan pemahaman; mendengarkan secara aktif dan efektif; mempersuasi, meyakinkan dan membujuk orang lain dalam rangka mencapai tujuan organisasi', '0', '2020-11-11 10:05:54', '2020-11-11 10:05:54');
INSERT INTO master_kamus_kompetensi_skj VALUES ('4', '1', 'M.4', 'ORIENTASI PADA HASIL', 'Kemampuan mempertahankan komitmen pribadi yang tinggi untuk menyelesaikan tugas, dapat diandalkan, bertanggung jawab, mampu secara sistimatis mengidentifikasi risiko dan peluang dengan memperhatikan keterhubungan antara perencanaan dan hasil, untuk keberhasilan organisasi', '0', '2020-11-11 10:06:08', '2020-11-11 10:06:08');
INSERT INTO master_kamus_kompetensi_skj VALUES ('5', '1', 'M.5', 'PELAYANAN PUBLIK', 'Kemampuan dalam melaksanakan tugas-tugas pemerintahan, pembangunan dan kegiatan pemenuhan kebutuhan pelayanan publik secara profesional, transparan, mengikuti standar pelayanan yang objektif, netral, tidak memihak, tidak diskriminatif, serta tidak terpengaruh kepentingan pribadi/kelompok/golongan/partai politik', '0', '2020-11-11 10:06:22', '2020-11-11 10:06:22');
INSERT INTO master_kamus_kompetensi_skj VALUES ('6', '1', 'M.6', 'PENGEMBANGAN DIRI DAN ORANG LAIN ', 'Kemampuan untuk meningkatkan pengetahuan dan menyempurnakan keterampilan diri; menginspirasi orang lain untuk mengembangkan dan menyempurnakan pengetahuan dan keterampilan yang relevan dengan pekerjaan dan pengembangan karir jangka panjang, mendorong kemauan belajar sepanjang hidup, memberikan saran/bantuan, umpan balik, bimbingan untuk membantu orang lain untuk mengembangkan potensi dirinya', '0', '2020-11-11 10:06:36', '2020-11-11 10:06:36');
INSERT INTO master_kamus_kompetensi_skj VALUES ('7', '1', 'M.7', 'MENGELOLA PERUBAHAN', 'Kemampuan dalam menyesuaikan diri dengan situasi yang baru atau berubah dan tidak bergantung secara berlebihan pada metode dan proses lama, mengambil tindakan untuk mendukung dan melaksanakan insiatif perubahan, memimpin usaha perubahan, mengambil tanggung jawab pribadi untuk memastikan perubahan berhasil diimplementasikan secara efektif', '0', '2020-11-11 10:06:48', '2020-11-11 10:06:48');
INSERT INTO master_kamus_kompetensi_skj VALUES ('8', '1', 'M.8', 'PENGAMBILAN KEPUTUSAN', 'Kemampuan membuat keputusan yang baik secara tepat waktu dan dengan keyakinan diri setelah mempertimbangkan prinsip kehati-hatian, dirumuskan secara sistematis dan seksama berdasarkan berbagai informasi, alternatif pemecahan masalah dan konsekuensinya, serta bertanggung jawab atas keputusan yang diambil', '0', '2020-11-11 10:07:02', '2020-11-11 10:07:02');
INSERT INTO master_kamus_kompetensi_skj VALUES ('9', '2', 'SK.1', 'PEREKAT BANGSA', 'Kemampuan dalam mempromosikan sikap toleransi, keterbukaan, peka terhadap perbedaan individu/kelompok masyarakat; mampu menjadi perpanjangan tangan pemerintah dalam mempersatukan masyarakat dan membangun hubungan sosial psikologis dengan masyarakat di tengah kemajemukan Indonesia sehingga menciptakan kelekatan yang kuat antara ASN dan para pemangku kepentingan serta diantara para pemangku kepentingan itu sendiri; menjaga, mengembangkan, dan mewujudkan rasa persatuan dan kesatuan dalam kehidupan bermasyarakat, berbangsa dan bernegara Indonesia', '0', '2020-11-11 10:07:20', '2020-11-11 10:07:20');
INSERT INTO master_kamus_kompetensi_skj VALUES ('10', '3', 'T.1', 'ADVOKASI KEBIJAKAN KEBUDAYAAN DAN PARIWISATA', '-', '22', '2020-11-13 16:44:56', '2020-11-13 16:45:54');
INSERT INTO master_kamus_kompetensi_skj VALUES ('11', '3', 'T.2', 'ADVOKASI KEBIJAKAN OTONOMI DAERAH', '-', '22', '2020-11-13 16:45:30', '2020-11-13 16:46:10');
INSERT INTO master_kamus_kompetensi_skj VALUES ('12', '3', 'DD', 'Coba Saja', 'Test Saja', '1', '2021-01-16 06:22:33', '2021-01-16 06:22:33');

-- ----------------------------
-- Table structure for `master_kamus_kompetensi_skj_level`
-- ----------------------------
DROP TABLE IF EXISTS `master_kamus_kompetensi_skj_level`;
CREATE TABLE `master_kamus_kompetensi_skj_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `master_kamus_kompetensi_skj_id` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `deskripsi` text,
  `indikator_kompetensi` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_kamus_kompetensi_skj_level
-- ----------------------------
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('1', '1', '1', 'Mampu bertindak sesuai nilai, norma, etika organisasi dalam kapasitas pribadi', '<ol><li>Bertingkah laku sesuai dengan perkataan; berkata sesuai dengan fakta;</li><li>Melaksanakan peraturan, kode etik organisasi dalam lingkungan kerja sehari-hari, pada tataran individu/pribadi;<br></li><li>Tidak menjanjikan/memberikan sesuatu yang bertentangan dengan aturan organisasi. <br></li></ol>', '2020-11-11 10:15:04', '2020-11-11 10:15:04');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('2', '1', '2', 'Mampu mengingatkan, mengajak rekan kerja untuk bertindak sesuai nilai, norma, dan etika organisasi', '<ol><li>Mengingatkan rekan kerja untuk bertindak sesuai dengan nilai, norma, dan etika organisasi dalam segala situasi dan kondisi; </li><li>Mengajak orang lain untuk bertindak sesuai etika dan kode etik.</li><li>Menerapkan norma-norma secara konsisten dalam setiap situasi, pada unit kerja terkecil/kelompok kerjanya.</li><li>Memberikan informasi yang dapat dipercaya sesuai dengan etika organisasi.</li></ol>', '2020-11-11 10:15:16', '2020-11-11 10:15:16');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('3', '1', '3', 'Mampu memastikan, menanamkan keyakinan bersama agar anggota yang dipimpin bertindak sesuai nilai, norma, dan etika organisasi, dalam lingkup formal', '<ol><li>Memastikan anggota yang dipimpin bertindak sesuai dengan nilai, norma, dan etika organisasi dalam segala situasi dan kondisi.</li><li>Mampu\r\n untuk memberi apresiasi dan teguran bagi anggota yang dipimpin agar \r\nbertindak selaras dengan nilai, norma, dan etika organisasi dalam segala\r\n situasi dan kondisi.</li><li>Melakukan monitoring dan evaluasi terhadap penerapan sikap integritas di dalam unit kerja yang dipimpin.</li></ol>', '2020-11-11 10:15:29', '2020-11-11 10:15:29');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('4', '1', '4', 'Mampu menciptakan situasi kerja yang mendorong kepatuhan pada nilai, norma, dan etika organisasi', '<ol><li>Menciptakan situasi kerja yang mendorong seluruh pemangku \r\nkepentingan mematuhi nilai, norma, dan etika organisasi dalam segala \r\nsituasi dan kondisi.</li><li>Mendukung dan menerapkan prinsip moral dan standar etika yang tinggi, serta berani menanggung konsekuensinya.</li><li>Berani\r\n melakukan koreksi atau mengambil tindakan atas penyimpangan kode \r\netik/nilai-nilai yang dilakukan oleh orang lain, pada tataran lingkup \r\nkerja setingkat instansi meskipun ada resiko</li></ol>', '2020-11-11 10:15:40', '2020-11-11 10:15:40');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('5', '1', '5', 'Mampu menjadi role model dalam penerapan standar keadilan dan etika di tingkat nasional', '<ol><li>Mempertahankan tingkat standar keadilan dan etika yang tinggi \r\ndalam perkataan dan tindakan sehari-hari yang dipatuhi oleh seluruh \r\npemangku kepentingan pada lingkup instansi yang dipimpinnya.</li><li>Menjadi “role model” /keteladanan dalam penerapan standar keadilan dan etika yang tinggi di tingkat nasional.</li><li>Membuat\r\n konsep kebijakan dan strategi penerapan sikap integritas dalam \r\npelaksanaan tugas dan norma-norma yang sejalan dengan nilai strategis \r\norganisasi.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br></li></ol>', '2020-11-11 10:15:55', '2020-11-11 10:15:55');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('6', '2', '1', 'Berpartisipasi dalam kelompok kerja', '<ol><li>Berpartisipasi sebagai anggota tim yang baik, melakukan tugas/bagiannya, dan mendukung keputusan tim;</li><li>Mendengarkan dan menghargai masukan dari orang lain dan memberikan usulan-usulan bagi kepentingan tim;</li><li>Mampu menjalin interaksi sosial untuk penyelesaian tugas</li></ol>', '2020-11-11 10:16:20', '2020-11-11 10:16:31');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('7', '2', '2', 'Menumbuhkan tim kerja yang partisipatif dan efektif', '<ol><li>Membantu orang lain dalam menyelesaikan tugas-tugas mereka untuk mendukung sasaran tim;</li><li>Berbagi\r\n informasi yang relevan atau bermanfaat pada anggota tim; \r\nmempertimbangkan masukan dan keahlian anggota dalam tim/kelompok kerja \r\nserta bersedia untuk belajar dari orang lain</li><li>Membangun komitmen yang tinggi untuk menyelesaikan tugas tim</li></ol>', '2020-11-11 10:16:39', '2020-11-11 10:16:39');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('8', '2', '3', 'Efektif membangun tim kerja untuk peningkatan kinerja organisasi', '<ol><li>Melihat kekuatan/kelemahan anggota tim, membentuk tim yang \r\ntepat, mengantisipasi kemungkinan hambatan, dan mencari solusi yang \r\noptimal</li><li>Mengupayakan dan mengutamakan pengambilan keputusan \r\nberdasarkan usulan-usulan anggota tim/kelompok, bernegosiasi secara \r\nefektif untuk upaya penyelesaikan pekerjaan yang menjadi target kinerja \r\nkelompok dan/atau unit kerja</li><li>Membangun aliansi dengan para pemangku kepentingan dalam rangka mendukung penyelesaian target kerja kelompok</li></ol>', '2020-11-11 10:16:52', '2020-11-11 10:16:52');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('9', '2', '4', 'Membangun komitmen tim, sinergi', '<ol><li>Membangun sinergi antar unit kerja di lingkup instansi yang dipimpin</li><li>Memfasilitasi\r\n kepentingan yang berbeda dari unit kerja lain sehingga tercipta sinergi\r\n dalam rangka pencapaian target kerja organisasi</li><li>Mengembangkan \r\nsistem yang menghargai kerja sama antar unit, memberikan dukungan / \r\nsemangat untuk memastikan tercapainya sinergi dalam rangka pencapaian \r\ntarget kerja organisasi</li></ol>', '2020-11-11 10:17:03', '2020-11-11 10:17:03');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('10', '2', '5', 'Menciptakan situasi kerja sama secara konsisten, baik di dalam maupun di luar instansi', '<ol><li>Menciptakan hubungan kerja yang konstruktif dengan menerapkan \r\nnorma / etos / nilai-nilai kerja yang baik di dalam dan di luar \r\norganisasi; meningkatkan produktivitas dan menjadi panutan dalam \r\norganisasi</li><li>Secara konsisten menjaga sinergi agar pemangku kepentingan dapat bekerja sama dengan orang di dalam maupun di luar organisasi</li><li>Membangun konsensus untuk menggabungkan sumberdaya dari berbagai pemangku kepentingan untuk tujuan bangsa dan negara</li></ol>', '2020-11-11 10:17:14', '2020-11-11 10:17:14');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('11', '3', '1', 'Menyampaikan informasi dengan jelas, lengkap, pemahaman yang sama', '<ol><li>Menyampaikan informasi (data), pikiran atau pendapat dengan \r\njelas, singkat dan tepat dengan menggunakan cara/media yang sesuai dan \r\nmengikuti alur yang logis</li><li>Memastikan pemahaman yang sama atas instruksi yang diterima/diberikan</li><li>Mampu melaksanakan kegiatan surat menyurat sesuai tata naskah organisasi</li></ol>', '2020-11-11 10:17:37', '2020-11-11 10:17:37');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('12', '3', '2', 'Aktif menjalankan komunikasi secara formal dan informal; Bersedia mendengarkan orang lain, menginterpretasikan pesan dengan respon yang sesuai, mampu menyusun materi presentasi, pidato, naskah, laporan, dll', '<ol><li>Menggunakan gaya komunikasi informal untuk meningkatkan hubungan profesional</li><li>Mendengarkan\r\n pihak lain secara aktif; menangkap dan menginterpretasikan pesan-pesan \r\ndari orang lain, serta memberikan respon yang sesuai</li><li>Membuat materi presentasi, pidato, draft naskah, laporan dll sesuai arahan pimpinan</li></ol>', '2020-11-11 10:17:47', '2020-11-11 10:17:47');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('13', '3', '3', 'Berkomunikasi secara asertif, terampil berkomunikasi lisan/ tertulis untuk menyampaikan informasi yang sensitif/ rumit/ kompleks', '<ol><li>Menyampaikan suatu informasi yang sensitif/rumit dengan cara \r\npenyampaian dan kondisi yang tepat, sehingga dapat dipahami dan diterima\r\n oleh pihak lain</li><li>Menyederhanakan topik yang rumit dan sensitif sehingga lebih mudah dipahami dan diterima orang lain</li><li>Membuat\r\n laporan tahunan/periodik/naskah/dokumen/proposal yang kompleks; Membuat\r\n surat resmi yang sistematis dan tidak menimbulkan pemahaman yang \r\nberbeda; membuat proposal yang rinci dan lengkap</li></ol>', '2020-11-11 10:17:58', '2020-11-11 10:17:58');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('14', '3', '4', 'Mampu mengemukakan pemikiran multidimensi secara lisan dan tertulis untuk mendorong kesepakatan dengan tujuan meningkatkan kinerja secara keseluruhan', '<ol><li>Mengintegrasikan informasi-informasi penting dari berbagai sumber dengan pihak lain untuk mendapatkan pemahaman yang sama</li><li>Menuangkan pemikiran/konsep dari berbagai sudut pandang/multidimensi dalam bentuk tulisan formal</li><li>Menyampaikan\r\n informasi secara persuasif untuk mendorong pemangku kepentingan sepakat\r\n pada langkah-langkah bersama dengan tujuan meningkatkan kinerja secara \r\nkeseluruhan</li></ol>', '2020-11-11 10:18:09', '2020-11-11 10:18:09');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('15', '3', '5', 'Menggagas sistem komunikasi yang terbuka secara strategis untuk mencari solusi dengan tujuan meningkatkan kinerja', '<ol><li>Menghilangkan hambatan komunikasi, mampu berkomunikasi dalam \r\nisu-isu nasional yang memiliki resiko tinggi, menggalang hubungan dalam \r\nskala strategis di tingkat nasional</li><li>Menggunakan saluran \r\nkomunikasi formal dan non formal guna mencapai kesepakatan dengan tujuan\r\n meningkatkan kinerja di tingkat instansi/nasional</li><li>Menggagas \r\nsistem komunikasi dengan melibatkan pemangku kepentingan sejak dini \r\nuntuk mencari solusi dengan tujuan meningkatkan kinerja di tingkat \r\ninstansi/nasional</li></ol>', '2020-11-11 10:18:20', '2020-11-11 10:18:20');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('16', '4', '1', 'Bertanggung jawab untuk memenuhi standar kerja', '<ol><li>Menyelesaikan tugas dengan tuntas; dapat diandalkan</li><li>Bekerja dengan teliti dan hati-hati guna meminimalkan kesalahan dengan mengacu pada standar kualitas (SOP)</li><li>Bersedia menerima masukan, mengikuti contoh cara bekerja yang lebih efektif, efisien di lingkungan kerjanya</li></ol>', '2020-11-11 10:18:45', '2020-11-11 10:18:45');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('17', '4', '2', 'Berupaya meningkatkan hasil kerja pribadi yang lebih tinggi dari standar yang ditetapkan, mencari, mencoba metode alternatif untuk peningkatan kinerja', '<ol><li>Menetapkan dan berupaya mencapai standar kerja pribadi yang lebih tinggi dari standar kerja yang ditetapkan organisasi</li><li>Mencari, mencoba metode kerja alternatif untuk meningkatkan hasil kerjanya</li><li>Memberi\r\n contoh kepada orang-orang di unit kerjanya untuk mencoba menerapkan \r\nmetode kerja yang lebih efektif yang sudah dilakukannya</li></ol>', '2020-11-11 10:18:55', '2020-11-11 10:18:55');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('18', '4', '3', 'Menetapkan target kerja yang menantang bagi unit kerja, memberi apresiasi dan teguran untuk mendorong kinerja', '<ol><li>Menetapkan target kinerja unit yang lebih tinggi dari target yang ditetapkan organisasi</li><li>Memberikan apresiasi dan teguran untuk mendorong pencapaian hasil unit kerjanya</li><li>Mengembangkan metode kerja yang lebih efektif dan efisien untuk mencapai target kerja unitnya</li></ol>', '2020-11-11 10:19:07', '2020-11-11 10:19:07');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('19', '4', '4', 'Mendorong unit kerja mencapai target yang ditetapkan atau melebihi hasil kerja sebelumnya', '<ol><li>Mendorong unit kerja di tingkat instansi untuk mencapai kinerja yang melebihi target yang ditetapkan</li><li>Memantau dan mengevaluasi hasil kerja unitnya agar selaras dengan sasaran strategis instansi</li><li>Mendorong\r\n pemanfaatan sumber daya bersama antar unit kerja dalam rangka \r\nmeningkatkan efektifitas dan efisiensi pencaian target organisasi</li></ol>', '2020-11-11 10:19:19', '2020-11-11 10:19:19');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('20', '4', '5', 'Meningkatkan mutu pencapaian kerja organisasi', '<ol><li>Memastikan kualitas sesuai standar dan keberlanjutan hasil kerja\r\n organisasi yang memberi kontribusi pada pencapaian target prioritas \r\nnasional</li><li>Memastikan tersedianya sumber daya organisasi untuk menjamin tercapainya target prioritas instansi/nasional</li><li>Membuat kebijakan untuk menerapkan metode kerja yang lebih efektif-efisien dalam mencapai tujuan prioritas nasional</li></ol>', '2020-11-11 10:19:32', '2020-11-11 10:19:32');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('21', '5', '1', 'Menjalankan tugas mengikuti standar pelayanan', '<ol><li>Mampu mengerjakan tugas-tugas dengan mengikuti standar pelayanan\r\n yang objektif, netral, tidak memihak, tidak diskriminatif, transparan \r\ndan tidak terpengaruh kepentingan pribadi/kelompo /partai politik</li><li>Melayani kebutuhan, permintaan dan keluhan pemangku kepentingan</li><li>Menyelesaikan masalah dengan tepat tanpa bersikap membela diri dalam kapasitas sebagai pelaksana pelayanan publik</li></ol>', '2020-11-11 10:20:00', '2020-11-11 10:20:00');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('22', '5', '2', 'Mampu mensupervisi/mengawasi/menyelia dan menjelaskan proses pelaksanaan tugas-tugas pemerintahan/pelayanan publik secara transparan', '<ol><li>&nbsp;Menunjukan sikap yakin dalam mengerjakan tugas-tugas \r\npemerintahan/pelayanan publik, mampu menyelia dan menjelaskan secara \r\nobyektif bila ada yang mempertanyakan kebijakan yang diambil</li><li>Secara\r\n aktif mencari informasi untuk mengenali kebutuhan pemangku kepentingan \r\nagar dapat menjalankan pelaksanaan tugas pemerintahan, pembangunan dan \r\npelayanan publik secara cepat dan tanggap</li><li>Mampu mengenali dan \r\nmemanfaatkan kebiasaan, tatacara, situasi tertentu sehingga apa yang \r\ndisampaikan menjadi perhatian pemangku kepentingan dalam hal \r\npenyelesaian tugas-tugas pemerintahan, pembangunan dan pelayanan publik</li></ol>', '2020-11-11 10:25:44', '2020-11-11 10:25:44');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('23', '5', '3', 'Mampu memanfaatkan kekuatan kelompok serta memperbaiki standar pelayanan publik di lingkup unit kerja', '<ol><li>Memahami, mendeskripsikan pengaruh dan hubungan/kekuatan \r\nkelompok yang sedang berjalan di organisasi (aliansi atau persaingan), \r\ndan dampaknya terhadap unit kerja untuk menjalankan tugas pemerintahan \r\nsecara profesional dan netral, tidak memihak</li><li>Menggunakan \r\nketerampilan dan pemahaman lintas organisasi untuk secara efektif \r\nmemfasilitasi kebutuhan kelompok yang lebih besar dengan cara-cara yang \r\nmengikuti standar objektif, transparan, profesional, sehingga tidak \r\nmerugikan para pihak di lingkup pelayanan publik unit kerjanya</li><li>Mengimplementasikan\r\n cara-cara yang efektif untuk memantau dan mengevaluasi masalah yang \r\ndihadapi pemangku kepentingan/masyarakat serta mengantisipasi kebutuhan \r\nmereka saat menjalankan tugas pelayanan publik di unit kerjanya</li></ol>', '2020-11-11 10:25:56', '2020-11-11 10:25:56');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('24', '5', '4', 'Mampu memonitor, mengevaluasi, memperhitungkan dan mengantisipasi dampak dari isu-isu jangka panjang, kesempatan, atau kekuatan politik dalam hal pelayanan kebutuhan pemangku kepentingan yang transparan, objektif, dan profesional', '<ol><li>Memahami dan memberi perhatian kepada isu-isu jangka panjang, \r\nkesempatan atau kekuatan politik yang mempengaruhi organisasi dalam \r\nhubungannya dengan dunia luar, memperhitungkan dan mengantisipasi dampak\r\n terhadap pelaksanaan tugastugas pelayanan publik secara objektif, \r\ntransparan, dan professional dalam lingkup organisasi</li><li>Menjaga \r\nagar kebijakan pelayanan publik yang diselenggarakan oleh instansinya \r\ntelah selaras dengan standar pelayanan yang objektif, netral, tidak \r\nmemihak, tidak diskriminatif, serta tidak terpengaruh kepentingan \r\npribadi/kelompok/partai politik</li><li>Menerapkan strategi jangka \r\npanjang yang berfokus pada pemenuhan kebutuhan pemangku kepentingan \r\ndalam menyusun kebijakan dengan mengikuti standar objektif, netral, \r\ntidak memihak, tidak diskriminatif, transparan, tidak terpengaruh \r\nkepentingan pribadi/kelompok</li></ol>', '2020-11-11 10:26:09', '2020-11-11 10:26:09');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('25', '5', '5', 'Mampu memastikan kebijakan kebijakan pelayanan publik yang menjamin terselenggaranya pelayanan publik yang objektif, netral, tidak memihak, tidak diskriminatif, serta tidak terpengaruh kepentingan pribadi/kelompok/partai politik', '<ol><li>Mampu menciptakan kebijakan kebijakan pelayanan publik yang \r\nmenjamin terselenggaranya pelayanan publik yang objektif, netral, tidak \r\nmemihak, tidak diskriminatif, serta tidak terpengaruh kepentingan \r\npribadi/kelompok/partai politik</li><li>Menginternalisasikan nilai dan \r\nsemangat pelayanan publik yang mengikuti standar objektif, netral, tidak\r\n memihak, tidak diskriminatif, transparan, tidak terpengaruh kepentingan\r\n pribadi/kelompok kepada setiap individu di lingkungan instansi/nasional</li><li>Menjamin\r\n terselenggaranya pelayanan publik yang objektif, netral, tidak memihak,\r\n tidak diskriminatif, serta tidak terpengaruh kepentingan \r\npribadi/kelompok/partai politik</li></ol>', '2020-11-11 10:26:21', '2020-11-11 10:26:21');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('26', '6', '1', 'Pengembangan diri', '<ol><li>Mengidentifikasi kebutuhan pengembangan diri dan menyeleksi sumber serta metodologi pembelajaran yang diperlukan</li><li>Menunjukkan usaha mandiri untuk mempelajari keterampilan atau kemampuan baru dari berbagai media pembelajaran</li><li>Berupaya meningkatkan diri dengan belajar dari orang-orang lain yang berwawasan luas di dalam organisasi</li></ol>', '2020-11-11 10:26:51', '2020-11-11 10:26:51');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('27', '6', '2', 'Meningkatkan kemampuan bawahan dengan memberikan contoh dan penjelasan cara melaksanakan suatu pekerjaan', '<ol><li>Meningkatkan kemampuan bawahan dengan memberikan contoh, \r\ninstruksi, penjelasan dan petunjuk praktis yang jelas kepada bawahan \r\ndalam menyelesaikan suatu pekerjaan</li><li>Membantu bawahan untuk mempelajari proses, program atau sistem baru</li><li>Menggunakan metode lain untuk meyakinkan bahwa orang lain telah memahami penjelasan atau pengarahan</li></ol>', '2020-11-11 10:27:03', '2020-11-11 10:27:03');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('28', '6', '3', 'Memberikan umpan balik, membimbing', '<ol><li>Memberikan tugas-tugas yang menantang pada bawahan sebagai media belajar untuk mengembangkan kemampuannya</li><li>Mengamati\r\n bawahan dalam mengerjakan tugasnya dan memberikan umpan balik yang \r\nobjektif dan jujur; melakukan diskusi dengan bawahan untuk memberikan \r\nbimbingan dan umpan balik yang berguna bagi bawahan</li><li>Mendorong \r\nkepercayaan diri bawahan; memberikan kepercayaan penuh pada bawahan \r\nuntuk mengerjakan tugas dengan caranya sendiri; memberi kesempatan dan \r\nmembantu bawahan menemukan peluang untuk berkembang</li></ol>', '2020-11-11 10:27:17', '2020-11-11 10:27:17');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('29', '6', '4', 'Menyusun program pengembangan jangka panjang dalam rangka mendorong manajemen pembelajaran', '<ol><li>Menyusun program pengembangan jangka panjang bersama-sama dengan\r\n bawahan, termasuk didalamnya penetapan tujuan, bimbingan, penugasan dan\r\n pengalaman lainnya, serta mengalokasikan waktu untuk mengikuti \r\npelatihan/pendidikan/pengembangan kompetensi dan karir</li><li>Melaksanakan manajemen pembelajaran termasuk evaluasi dan umpan balik pada tataran organisasi</li><li>Mengembangkan orang-orang disekitarnya secara konsisten, melakukan kaderisasi untuk posisi-posisi di unit kerjanya</li></ol>', '2020-11-11 10:27:27', '2020-11-11 10:27:27');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('30', '6', '5', 'Menciptakan situasi yang mendorong organisasi untuk mengembangkan kemampuan belajar secara berkelanjutan dalam rangka mendukung pencapaian hasil', '<ol><li>Menciptakan situasi yang mendorong individu, kelompok, unit \r\nkerja untuk mengembangkan kemampuan belajar secara berkelanjutan di \r\ntingkat instansi</li><li>Merekomendasikan/memberikan penghargaan bagi \r\nupaya pengembangan yang berhasil, memastikan dukungan bagi orang lain \r\ndalam mengembangkan kemampuan dalam unit kerja di tingkat instansi</li><li>Memberikan inspirasi kepada individu atau kelompok untuk belajar secara berkelanjutan dalam penerapan di tingkat instansi</li></ol>', '2020-11-11 10:27:40', '2020-11-11 10:27:40');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('31', '7', '1', 'Mengikuti perubahan dengan arahan', '<ol><li>Sadar mengenai perubahan yang terjadi di organisasi dan berusaha menyesuaikan diri dengan perubahan tersebut</li><li>Mengikuti perubahan secara terbuka sesuai petunjuk/pedoman</li><li>Menyesuaikan cara kerja lama dengan menerapkan metode/proses baru dengan bimbingan orang lain</li></ol>', '2020-11-11 10:28:04', '2020-11-11 10:28:04');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('32', '7', '2', 'Proaktif beradaptasi mengikuti perubahan', '<ol><li>Menyesuaikan cara kerja lama dengan menerapkan metode/proses baru selaras dengan ketentuan yang berlaku tanpa arahan orang lain</li><li>Mengembangkan kemampuan diri untuk menghadapi perubahan</li><li>Cepat dan tanggap dalam menerima perubahan</li></ol>', '2020-11-11 10:28:16', '2020-11-11 10:28:16');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('33', '7', '3', 'Membantu orang lain mengikuti perubahan, mengantisipasi perubahan secara tepat', '<ol><li>Membantu orang lain dalam melakukan perubahan</li><li>Menyesuaikan prioritas kerja secara berulang-ulang jika diperlukan</li><li>Mengantisipasi\r\n perubahan yang dibutuhkan oleh unit kerjanya secara tepat. Memberikan \r\nsolusi efektif terhadap masalah yang ditimbulkan oleh adanya perubahan</li></ol>', '2020-11-11 10:28:28', '2020-11-11 10:28:28');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('34', '7', '4', 'Memimpin perubahan pada unit kerja', '<ol><li>Mengarahkan unit kerja untuk lebih siap dalam menghadapi perubahan termasuk memitigasi risiko yang mungkin terjadi</li><li>Memastikan perubahan sudah diterapkan secara aktif di lingkup unit kerjanya secara berkala</li><li>Memimpin dan memastikan penerapan program-program perubahan selaras antar unit kerja</li></ol>', '2020-11-11 10:28:40', '2020-11-11 10:28:40');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('35', '7', '5', 'Memimpin, menggalang dan menggerakkan dukungan pemangku kepentingan untuk menjalankan perubahan secara berkelanjutan pada tingkat instansi/nasional', '<ol><li>Membuat kebijakan-kebijakan yang mendorong perubahan yang berdampak pada pencapaian sasaran prioritas nasional</li><li>Menggalang dan menggerakkan dukungan para pemangku kepentingan untuk mengimplementasikan perubahan yang telah ditetapkan</li><li>Secara\r\n berkelanjutan, mencari cara-cara baru untuk memberi nilai tambah bagi \r\nperubahan yang tengah dijalankan agar memberi manfaat yang lebih besar \r\nbagi para pemangku kepentingan</li></ol>', '2020-11-11 10:28:57', '2020-11-11 10:28:57');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('36', '8', '1', 'Mengumpulkan informasi untuk bertindak sesuai kewenangan', '<ol><li>Mengumpulkan dan mempertimbangkan informasi yang dibutuhkan dalam mencari solusi.</li><li>Mengenali situasi/pilihan yang tepat untuk bertindak sesuai kewenangan.</li><li>Mempertimbangkan\r\n kemungkinan solusi yang dapat diterapkan dalam pekerjaan rutin \r\nberdasarkan kebijakan dan prosedur yang telah ditentukan.</li></ol>', '2020-11-11 10:29:30', '2020-11-11 10:29:30');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('37', '8', '2', 'Menganalisis masalah secara mendalam', '<ol><li>Melakukan analisis secara mendalam terhadap informasi yang tersedia dalam upaya mencari solusi.</li><li>Mempertimbangkan berbagai alternatif yang ada sebelum membuat kesimpulan;</li><li>Membuat keputusan operasional berdasarkan kesimpulan dari berbagai sumber informasi sesuai dengan pedoman yang ada.</li></ol>', '2020-11-11 10:29:41', '2020-11-11 10:29:41');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('38', '8', '3', 'Membandingkan berbagai alternatif, menyeimbangkan risiko keberhasilan dalam implementasi', '<ol><li>Membandingkan berbagai alternatif tindakan dan implikasinya,</li><li>Memilih\r\n alternatif solusi yang terbaik, membuat keputusan operasional mengacu \r\npada alternatif solusi terbaik yang didasarkan pada analisis data yang \r\nsistematis, seksama, mengikuti prinsip kehati-hatian.</li><li>Menyeimbangkan antara kemungkinan risiko dan keberhasilan dalam implementasinya.</li></ol>', '2020-11-11 10:29:53', '2020-11-11 10:29:53');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('39', '8', '4', 'Menyelesaikan masalah yang mengandung risiko tinggi, mengantisipasi dampak keputusan, membuat tindakan pengamanan; mitigasi risiko', '<ol><li>Menyusun dan/atau memutuskan konsep penyelesaian masalah yang melibatkan beberapa/seluruh fungsi dalam organisasi.</li><li>Menghasilkan solusi dari berbagai masalah yang kompleks, terkait dengan bidang kerjanya yang berdampak pada pihak lain.</li><li>Membuat keputusan dan mengantisipasi dampak keputusannya serta menyiapkan tindakan penanganannya (mitigasi risiko)</li></ol>', '2020-11-11 10:30:05', '2020-11-11 10:30:05');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('40', '8', '5', 'Menghasilkan solusi dan mengambil keputusan untuk mengatasi permasalahan jangka panjang/strategis, berdampak nasional', '<ol><li>Menghasilkan solusi yang dapat mengatasi permasalahan jangka panjang.</li><li>Menghasilkan solusi strategis yang berdampak pada tataran instansi/nasional.</li><li>Membuat keputusan atau kebijakan yang berdampak nasional dengan memitigasi risiko yang mungkin timbul.</li></ol>', '2020-11-11 10:30:21', '2020-11-11 10:30:21');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('41', '9', '1', 'Peka memahami dan menerima kemajemukan', '<ol><li>Mampu memahami, menerima, peka terhadap perbedaan individu/kelompok masyarakat;</li><li>Terbuka, ingin belajar tentang perbedaan/kemajemukan masyarakat;</li><li>Mampu bekerja bersama dengan individu yang berbeda latar belakang dengan-nya.</li></ol>', '2020-11-11 10:30:45', '2020-11-11 10:30:45');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('42', '9', '2', 'Aktif mengembangkan sikap saling menghargai, menekankan persamaan dan persatuan', '<ol><li>Menampilkan sikap dan perilaku yang peduli akan nilai-nilai keberagaman dan menghargai perbedaan;</li><li>Membangun hubungan baik antar individu dalam organisasi, mitra kerja, pemangku kepentingan;</li><li>Bersikap\r\n tenang, mampu mengendalikan emosi, kemarahan dan frustasi dalam \r\nmenghadapi pertentangan yang ditimbulkan oleh perbedaan latar belakang, \r\nagama/kepercayaan, suku, jender, sosial ekonomi, preferensi politik di \r\nlingkungan unit kerjanya.</li></ol>', '2020-11-11 10:30:56', '2020-11-11 10:30:56');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('43', '9', '3', 'Mempromosikan, mengembangkan sikap toleransi dan persatuan', '<ol><li>Mempromosikan sikap menghargai perbedaan di antara orang-orang yang mendorong toleransi dan keterbukaan.</li><li>Melakukan\r\n pemetaan sosial di masyarakat sehingga dapat memberikan respon yang \r\nsesuai dengan budaya yang berlaku. Mengidentifikasi potensi \r\nkesalahpahaman yang diakibatkan adanya keragaman budaya yang ada</li><li>Menjadi mediator untuk menyelesaikan konflik atau mengurangi dampak negatif dari konflik atau potensi konflik</li></ol>', '2020-11-11 10:31:07', '2020-11-11 10:31:07');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('44', '9', '4', 'Mendayagunakan perbedaan secara konstruktif dan kreatif untuk meningkatkan efektifitas organisasi', '<ol><li>Menginisiasi dan merepresentasikan pemerintah di lingkungan \r\nkerja dan masyarakat untuk senantiasa menjaga persatuan dan kesatuan \r\ndalam keberagaman dan menerima segala bentuk perbedaan dalam kehidupan \r\nbermasyarakat;</li><li>Mampu mendayagunakan perbedaan latar belakang, \r\nagama/kepercayaan, suku, jender, sosial ekonomi, preferensi politik \r\nuntuk mencapai kelancaran pencapaian tujuan organisasi.</li><li>Mampu \r\nmembuat program yang mengakomodasi perbedaan latar belakang, \r\nagama/kepercayaan, suku, jender, sosial ekonomi, preferensi politik</li></ol>', '2020-11-11 10:31:18', '2020-11-11 10:31:18');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('45', '9', '5', 'Wakil pemerintah untuk membangun hubungan sosial psikologis', '<ol><li>Menjadi wakil pemerintah yang mampu membangun hubungan sosial \r\npsikologis dengan masyarakat sehingga menciptakan kelekatan yang kuat \r\nantara ASN dan para pemangku kepentingan serta diantara para pemangku \r\nkepentingan itu sendiri.</li><li>Mampu mengkomunikasikan dampak risiko \r\nyang teridentifikasi dan merekomendasikan tindakan korektif berdasarkan \r\npertimbangan perbedaan latar belakang, agama/kepercayaan, suku, jender, \r\nsosial ekonomi, preferensi politik untuk membangun hubungan jangka \r\npanjang</li><li>Mampu membuat kebijakan yang mengakomodasi perbedaan \r\nlatar belakang, agama/kepercayaan, suku, jender, sosial ekonomi, \r\npreferensi politik yang berdampak positif secara nasional</li></ol>', '2020-11-11 10:31:30', '2020-11-11 10:31:30');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('46', '10', '1', '-', '<p>-<br></p>', '2020-11-13 16:46:43', '2020-11-13 16:46:43');
INSERT INTO master_kamus_kompetensi_skj_level VALUES ('47', '12', '1', 'sdds', '<p>sddsds<br></p>', '2021-01-16 06:23:16', '2021-01-16 06:23:16');

-- ----------------------------
-- Table structure for `master_kelas_jabatan`
-- ----------------------------
DROP TABLE IF EXISTS `master_kelas_jabatan`;
CREATE TABLE `master_kelas_jabatan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tahun` int(11) DEFAULT NULL,
  `kelas` varchar(255) DEFAULT NULL,
  `batas_awal` int(11) DEFAULT '0',
  `batas_akhir` int(11) DEFAULT '0',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_kelas_jabatan
-- ----------------------------
INSERT INTO master_kelas_jabatan VALUES ('1', '2020', '1', '190', '240', '2020-11-11 10:34:09', '2020-11-11 10:34:09');
INSERT INTO master_kelas_jabatan VALUES ('2', '2020', '2', '241', '300', '2020-11-11 10:34:21', '2020-11-11 10:34:21');
INSERT INTO master_kelas_jabatan VALUES ('3', '2020', '3', '301', '370', '2020-11-11 10:39:09', '2020-11-11 10:39:09');
INSERT INTO master_kelas_jabatan VALUES ('4', '2020', '4', '371', '450', '2020-11-11 10:39:19', '2020-11-11 10:39:19');
INSERT INTO master_kelas_jabatan VALUES ('5', '2020', '5', '451', '650', '2020-11-11 10:39:30', '2020-11-11 10:39:30');
INSERT INTO master_kelas_jabatan VALUES ('6', '2020', '6', '651', '850', '2020-11-11 10:39:40', '2020-11-11 10:39:40');
INSERT INTO master_kelas_jabatan VALUES ('7', '2020', '7', '851', '1100', '2020-11-11 10:39:56', '2020-11-11 10:39:56');
INSERT INTO master_kelas_jabatan VALUES ('8', '2020', '8', '1101', '1350', '2020-11-11 10:40:13', '2020-11-11 10:40:13');
INSERT INTO master_kelas_jabatan VALUES ('9', '2020', '9', '1351', '1600', '2020-11-11 10:40:24', '2020-11-11 10:40:24');
INSERT INTO master_kelas_jabatan VALUES ('10', '2020', '10', '1601', '1850', '2020-11-11 10:40:35', '2020-11-11 10:40:35');
INSERT INTO master_kelas_jabatan VALUES ('11', '2020', '11', '1851', '2100', '2020-11-11 10:40:49', '2020-11-11 10:40:49');
INSERT INTO master_kelas_jabatan VALUES ('12', '2020', '12', '2101', '2350', '2020-11-11 10:41:01', '2020-11-11 10:41:01');
INSERT INTO master_kelas_jabatan VALUES ('13', '2020', '13', '2351', '2750', '2020-11-11 10:41:11', '2020-11-11 10:41:11');
INSERT INTO master_kelas_jabatan VALUES ('14', '2020', '14', '2751', '3150', '2020-11-11 10:41:24', '2020-11-11 10:41:24');
INSERT INTO master_kelas_jabatan VALUES ('15', '2020', '15', '3151', '3600', '2020-11-11 10:41:34', '2020-11-11 10:41:34');
INSERT INTO master_kelas_jabatan VALUES ('16', '2020', '16', '3601', '4050', '2020-11-11 10:41:47', '2020-11-11 10:41:47');
INSERT INTO master_kelas_jabatan VALUES ('17', '2020', '17', '4051', '999999', '2020-11-11 10:42:00', '2020-11-11 10:42:00');
INSERT INTO master_kelas_jabatan VALUES ('19', '2021', '1', '100', '200', '2021-01-16 06:05:57', '2021-01-16 06:05:57');

-- ----------------------------
-- Table structure for `master_keterangan_waktu`
-- ----------------------------
DROP TABLE IF EXISTS `master_keterangan_waktu`;
CREATE TABLE `master_keterangan_waktu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `jml` int(11) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_keterangan_waktu
-- ----------------------------
INSERT INTO master_keterangan_waktu VALUES ('1', 'Per Tahun', '72000', '2020-11-09 16:19:01', '2020-11-09 16:28:04');
INSERT INTO master_keterangan_waktu VALUES ('2', 'Per Bulan', '6000', '2020-11-09 16:19:26', '2020-11-09 16:19:26');
INSERT INTO master_keterangan_waktu VALUES ('3', 'Per Minggu', '1500', '2020-11-09 16:19:35', '2020-11-09 16:19:35');
INSERT INTO master_keterangan_waktu VALUES ('4', 'Per Hari', '300', '2020-11-09 16:19:41', '2020-11-09 16:19:41');
INSERT INTO master_keterangan_waktu VALUES ('5', 'Per Jam', '60', '2020-11-09 16:19:49', '2020-11-11 09:29:18');

-- ----------------------------
-- Table structure for `master_kondisi_fisik`
-- ----------------------------
DROP TABLE IF EXISTS `master_kondisi_fisik`;
CREATE TABLE `master_kondisi_fisik` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_kondisi_fisik
-- ----------------------------
INSERT INTO master_kondisi_fisik VALUES ('1', 'Jenis Kelamin', '2020-11-11 09:40:35', '2020-11-11 09:40:35');
INSERT INTO master_kondisi_fisik VALUES ('2', 'Umur', '2020-11-11 09:40:39', '2020-11-11 09:40:39');
INSERT INTO master_kondisi_fisik VALUES ('3', 'Tinggi Badan', '2020-11-11 09:40:44', '2020-11-11 09:40:44');
INSERT INTO master_kondisi_fisik VALUES ('4', 'Berat Badan', '2020-11-11 09:40:48', '2020-11-11 09:40:48');
INSERT INTO master_kondisi_fisik VALUES ('5', 'Postur Badan', '2020-11-11 09:40:54', '2020-11-11 09:40:54');
INSERT INTO master_kondisi_fisik VALUES ('6', 'Penampilan', '2020-11-11 09:40:58', '2020-11-11 09:40:58');

-- ----------------------------
-- Table structure for `master_kondisi_lingkungan_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `master_kondisi_lingkungan_kerja`;
CREATE TABLE `master_kondisi_lingkungan_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_kondisi_lingkungan_kerja
-- ----------------------------
INSERT INTO master_kondisi_lingkungan_kerja VALUES ('1', 'Tempat Kerja', '2020-11-09 16:06:39', '2020-11-09 16:06:39');
INSERT INTO master_kondisi_lingkungan_kerja VALUES ('2', 'Suhu', '2020-11-09 16:06:43', '2020-11-09 16:06:43');
INSERT INTO master_kondisi_lingkungan_kerja VALUES ('3', 'Udara', '2020-11-09 16:06:49', '2020-11-09 16:06:49');
INSERT INTO master_kondisi_lingkungan_kerja VALUES ('4', 'Keadaan Ruangan', '2020-11-09 16:06:54', '2020-11-09 16:06:54');
INSERT INTO master_kondisi_lingkungan_kerja VALUES ('5', 'Letak', '2020-11-09 16:06:59', '2020-11-09 16:06:59');
INSERT INTO master_kondisi_lingkungan_kerja VALUES ('6', 'Penerangan', '2020-11-09 16:07:04', '2020-11-09 16:07:04');
INSERT INTO master_kondisi_lingkungan_kerja VALUES ('7', 'Suara', '2020-11-09 16:07:09', '2020-11-09 16:07:09');
INSERT INTO master_kondisi_lingkungan_kerja VALUES ('8', 'Keadaan Tempat Kerja', '2020-11-09 16:07:15', '2020-11-09 16:07:15');
INSERT INTO master_kondisi_lingkungan_kerja VALUES ('9', 'Getaran', '2020-11-09 16:07:20', '2020-11-09 16:07:20');

-- ----------------------------
-- Table structure for `master_minat_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `master_minat_kerja`;
CREATE TABLE `master_minat_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `uraian` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_minat_kerja
-- ----------------------------
INSERT INTO master_minat_kerja VALUES ('1', '1.a', 'Pilihan melakukan kegiatan-kegiatan yang berhubungan dengan benda-benda dan obyek-obyek.', '2020-11-09 16:11:41', '2020-11-09 16:11:41');
INSERT INTO master_minat_kerja VALUES ('2', '1.b', 'Pilihan melakukan kegiatan yang berhubungan dengan komunikasi data.', '2020-11-09 16:11:52', '2020-11-09 16:11:52');
INSERT INTO master_minat_kerja VALUES ('3', '2.a', 'Pilihan melakukan kegiatan yang berhubungan dengan orang dalam niaga.', '2020-11-09 16:12:02', '2020-11-09 16:12:02');
INSERT INTO master_minat_kerja VALUES ('4', '2.b', 'Pilihan melakukan kegiatan-kegiatan yang bersifat ilmiah dan teknik.', '2020-11-09 16:12:12', '2020-11-09 16:12:12');
INSERT INTO master_minat_kerja VALUES ('5', '3.a', 'Pilihan melakukan kegiatan-kegiatan rutin, konkrit & teratur.', '2020-11-09 16:12:20', '2020-11-09 16:12:20');
INSERT INTO master_minat_kerja VALUES ('6', '3.b', 'Pilihan melakukan kegiatan yang bersifat abstrak dan kreatif.', '2020-11-09 16:12:29', '2020-11-09 16:12:29');
INSERT INTO master_minat_kerja VALUES ('7', '4.a', 'Pilihan melakukan kegiatan-kegiatan yang di anggap baik bagi orang lain.', '2020-11-09 16:12:38', '2020-11-09 16:12:38');
INSERT INTO master_minat_kerja VALUES ('8', '4.b', 'Pilihan melakukan kegiatan-kegiatan yang berhubungan dengan mesindan teknik.', '2020-11-09 16:12:47', '2020-11-09 16:12:47');
INSERT INTO master_minat_kerja VALUES ('9', '5.a', 'Pilihan melakukan kegiatan yang menghasilkan penghargaan dari pihak orang lain.', '2020-11-09 16:12:56', '2020-11-09 16:12:56');
INSERT INTO master_minat_kerja VALUES ('10', '5.b', 'Pilihan melakukan kegiatan yang menghasilkan kepuasan nyata dan dengan proses.', '2020-11-09 16:13:06', '2020-11-09 16:13:06');
INSERT INTO master_minat_kerja VALUES ('11', 'Realistik', 'Aktivitas yang memerlukan manipulasi eksplisit, teratur atau sistematik terhadap obyek/alat/benda/mesin.', '2020-11-09 16:13:15', '2020-11-09 16:13:15');
INSERT INTO master_minat_kerja VALUES ('12', 'Kewirausahaan', 'Aktifitas yang melibatkan kegiatan pengelolaan/manajerial untuk pencapaian tujuan organisasi.', '2020-11-09 16:13:24', '2020-11-09 16:13:24');
INSERT INTO master_minat_kerja VALUES ('13', 'Sosial', 'Aktifitas yang bersifat sosial atau memerlukan keterampilan berkomunikasi dengan orang lain.', '2020-11-09 16:13:39', '2020-11-09 16:13:39');
INSERT INTO master_minat_kerja VALUES ('14', 'Konvensional', 'Aktifitas yang memerlukan manipulasi data yang eksplisit, kegiatan administrasi rutin dan klerikal.', '2020-11-09 16:13:50', '2020-11-09 16:13:50');

-- ----------------------------
-- Table structure for `master_opd`
-- ----------------------------
DROP TABLE IF EXISTS `master_opd`;
CREATE TABLE `master_opd` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_opd
-- ----------------------------
INSERT INTO master_opd VALUES ('1', 'SEKRETARIAT DAERAH', '2020-11-09 15:20:18', '2020-11-09 15:20:37');
INSERT INTO master_opd VALUES ('2', 'SEKRETARIAT DPRD', '2020-11-09 15:20:30', '2020-11-09 15:20:30');
INSERT INTO master_opd VALUES ('3', 'INSPEKTORAT DAERAH', '2020-11-09 15:20:56', '2020-11-09 15:20:56');
INSERT INTO master_opd VALUES ('4', 'DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL', '2020-11-09 15:25:33', '2020-11-09 15:25:33');
INSERT INTO master_opd VALUES ('5', 'DINAS KEARSIPAN DAN PERPUSTAKAAN', '2020-11-09 15:25:47', '2020-11-09 15:25:47');
INSERT INTO master_opd VALUES ('6', 'DINAS KELAUTAN DAN PERIKANAN', '2020-11-09 15:25:58', '2020-11-09 15:25:58');
INSERT INTO master_opd VALUES ('7', 'DINAS KEPEMUDAAAN, OLAHRAGA DAN PARIWISATA', '2020-11-09 15:26:09', '2020-11-09 15:26:09');
INSERT INTO master_opd VALUES ('8', 'DINAS KESEHATAN', '2020-11-09 15:26:17', '2020-11-09 15:26:17');
INSERT INTO master_opd VALUES ('9', 'SATUAN POLISI PAMONG PRAJA', '2020-11-09 15:26:29', '2020-11-09 15:26:29');
INSERT INTO master_opd VALUES ('10', 'DINAS KOMUNIKASI DAN INFORMATIKA', '2020-11-09 15:26:37', '2020-11-09 15:26:43');
INSERT INTO master_opd VALUES ('11', 'DINAS KOPERASI, USAHA MIKRO, KECIL DAN MENENGAH', '2020-11-09 15:26:55', '2020-11-09 15:26:55');
INSERT INTO master_opd VALUES ('12', 'DINAS LINGKUNGAN HIDUP', '2020-11-09 15:27:11', '2020-11-09 15:27:11');
INSERT INTO master_opd VALUES ('13', 'DINAS KETAHANAN PANGAN', '2020-11-09 15:27:19', '2020-11-09 15:27:19');
INSERT INTO master_opd VALUES ('14', 'DINAS PEKERJAAN UMUM DAN PENATAAN RUANG', '2020-11-09 15:27:28', '2020-11-09 15:27:28');
INSERT INTO master_opd VALUES ('15', 'DINAS PERUMAHAN DAN KAWASAN PERMUKIMAN', '2020-11-09 15:27:39', '2020-11-09 15:27:39');
INSERT INTO master_opd VALUES ('16', 'DINAS PEMBERDAYAAN MASYARAKAT DAN DESA', '2020-11-09 15:27:49', '2020-11-09 15:27:49');
INSERT INTO master_opd VALUES ('17', 'DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU', '2020-11-09 15:27:59', '2020-11-09 15:27:59');
INSERT INTO master_opd VALUES ('18', 'DINAS PENDIDIKAN DAN KEBUDAYAAN', '2020-11-09 15:28:15', '2020-11-09 15:28:15');
INSERT INTO master_opd VALUES ('19', 'DINAS PERDAGANGAN DAN PERINDUSTRIAN', '2020-11-09 15:28:25', '2020-11-09 15:28:25');
INSERT INTO master_opd VALUES ('20', 'DINAS PERHUBUNGAN', '2020-11-09 15:28:33', '2020-11-09 15:28:33');
INSERT INTO master_opd VALUES ('21', 'DINAS PERTANIAN', '2020-11-09 15:28:42', '2020-11-09 15:28:42');
INSERT INTO master_opd VALUES ('22', 'DINAS SOSIAL, PEMBERDAYAAN PEREMPUAN, PERLINDUNGAN ANAK DAN KELUARGA BERENCAN', '2020-11-09 15:28:50', '2020-11-09 15:28:50');
INSERT INTO master_opd VALUES ('23', 'DINAS TENAGA KERJA', '2020-11-09 15:28:57', '2020-11-09 15:28:57');
INSERT INTO master_opd VALUES ('24', 'BADAN KEPEGAWAIAN, PENDIDIKAN DAN PELATIHAN', '2020-11-09 15:29:05', '2020-11-09 15:29:05');
INSERT INTO master_opd VALUES ('25', 'BADAN PENGELOLAAN KEUANGAN DAN ASET DAERAH', '2020-11-09 15:29:15', '2020-11-09 15:29:15');
INSERT INTO master_opd VALUES ('26', 'BADAN PERENCANAAN PEMBANGUNAN DAERAH', '2020-11-09 15:29:25', '2020-11-09 15:29:25');
INSERT INTO master_opd VALUES ('27', 'BADAN PENANGGULANGAN BENCANA DAERAH', '2020-11-09 15:29:35', '2020-11-09 15:29:35');
INSERT INTO master_opd VALUES ('28', 'BADAN KESATUAN BANGSA DAN POLITIK', '2020-11-09 15:29:43', '2020-11-09 15:29:43');
INSERT INTO master_opd VALUES ('29', 'KECAMATAN BATANGAN', '2020-11-09 15:29:53', '2020-11-09 15:29:53');
INSERT INTO master_opd VALUES ('30', 'KECAMATAN CLUWAK', '2020-11-09 15:30:01', '2020-11-09 15:30:01');
INSERT INTO master_opd VALUES ('31', 'KECAMATAN DUKUHSETI', '2020-11-09 15:30:08', '2020-11-09 15:30:08');
INSERT INTO master_opd VALUES ('32', 'KECAMATAN GABUS', '2020-11-09 15:30:18', '2020-11-09 15:30:18');
INSERT INTO master_opd VALUES ('33', 'KECAMATAN GEMBONG', '2020-11-09 15:30:26', '2020-11-09 15:30:26');
INSERT INTO master_opd VALUES ('34', 'KECAMATAN GUNUNGWUNGKAL', '2020-11-09 15:30:33', '2020-11-09 15:30:33');
INSERT INTO master_opd VALUES ('35', 'KECAMATAN JAKEN', '2020-11-09 15:30:44', '2020-11-09 15:30:44');
INSERT INTO master_opd VALUES ('36', 'KECAMATAN JAKENAN', '2020-11-09 15:31:08', '2020-11-09 15:31:08');
INSERT INTO master_opd VALUES ('37', 'KECAMATA JUWANA', '2020-11-09 15:31:20', '2020-11-09 15:31:20');
INSERT INTO master_opd VALUES ('38', 'KECAMATAN KAYEN', '2020-11-09 15:31:30', '2020-11-09 15:31:30');
INSERT INTO master_opd VALUES ('39', 'KECAMATAN MARGOREJO', '2020-11-09 15:31:38', '2020-11-09 15:31:38');
INSERT INTO master_opd VALUES ('40', 'KECAMATAN MARGOYOSO', '2020-11-09 15:31:46', '2020-11-09 15:31:46');
INSERT INTO master_opd VALUES ('41', 'KECAMATAN PATI', '2020-11-09 15:31:56', '2020-11-09 15:32:15');
INSERT INTO master_opd VALUES ('42', 'KECAMATAN PUCAKWANGI', '2020-11-09 15:32:25', '2020-11-09 15:32:25');
INSERT INTO master_opd VALUES ('43', 'KECAMATAN SUKOLILO', '2020-11-09 15:32:34', '2020-11-09 15:32:34');
INSERT INTO master_opd VALUES ('44', 'KECAMATAN TAMBAKROMO', '2020-11-09 15:32:41', '2020-11-09 15:32:41');
INSERT INTO master_opd VALUES ('45', 'KECAMATAN TAYU', '2020-11-09 15:32:50', '2020-11-09 15:32:50');
INSERT INTO master_opd VALUES ('46', 'KECAMATAN TLOGOWUNGU', '2020-11-09 15:32:59', '2020-11-09 15:32:59');
INSERT INTO master_opd VALUES ('47', 'KECAMATAN TRANGKIL', '2020-11-09 15:33:08', '2020-11-09 15:33:08');
INSERT INTO master_opd VALUES ('48', 'KECAMATAN WEDARIJAKSA', '2020-11-09 15:33:16', '2020-11-09 15:33:16');
INSERT INTO master_opd VALUES ('49', 'KECAMATAN WINONG', '2020-11-09 15:33:24', '2020-11-09 15:33:24');
INSERT INTO master_opd VALUES ('50', 'UPT. RSUD RAA. SOEWONDO PATI', '2020-11-09 15:33:33', '2020-11-09 15:33:33');
INSERT INTO master_opd VALUES ('51', 'UPT. RSUD KAYEN', '2020-11-09 15:33:42', '2020-11-09 15:33:42');

-- ----------------------------
-- Table structure for `master_pendidikan`
-- ----------------------------
DROP TABLE IF EXISTS `master_pendidikan`;
CREATE TABLE `master_pendidikan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT NULL,
  `last_update` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_pendidikan
-- ----------------------------
INSERT INTO master_pendidikan VALUES ('1', '-', null, null);
INSERT INTO master_pendidikan VALUES ('2', 'SD / Sederajat', null, null);
INSERT INTO master_pendidikan VALUES ('3', 'SMP / Sederajat', null, null);
INSERT INTO master_pendidikan VALUES ('4', 'SMA / sederajat', null, null);
INSERT INTO master_pendidikan VALUES ('5', 'D.I', null, '2020-11-09 16:03:36');
INSERT INTO master_pendidikan VALUES ('6', 'D.II', null, '2020-11-09 16:03:43');
INSERT INTO master_pendidikan VALUES ('7', 'D.II', null, '2020-11-09 16:03:49');
INSERT INTO master_pendidikan VALUES ('8', 'S.1', null, null);
INSERT INTO master_pendidikan VALUES ('9', 'S.2', null, null);
INSERT INTO master_pendidikan VALUES ('10', 'S.3', null, null);

-- ----------------------------
-- Table structure for `master_satuan_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `master_satuan_kerja`;
CREATE TABLE `master_satuan_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_satuan_kerja
-- ----------------------------
INSERT INTO master_satuan_kerja VALUES ('1', 'Kegiatan', '2020-11-09 16:18:08', '2020-11-09 16:18:08');
INSERT INTO master_satuan_kerja VALUES ('2', 'Dokumen', '2020-11-09 16:18:15', '2020-11-09 16:18:15');
INSERT INTO master_satuan_kerja VALUES ('3', 'Laporan', '2020-11-09 16:18:30', '2020-11-09 16:18:30');

-- ----------------------------
-- Table structure for `master_standar_kompetensi`
-- ----------------------------
DROP TABLE IF EXISTS `master_standar_kompetensi`;
CREATE TABLE `master_standar_kompetensi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `tipe` int(11) DEFAULT '1' COMMENT '1 = Non Urusan pemerintahan, 2 = Urusan Pemerintahan',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_standar_kompetensi
-- ----------------------------
INSERT INTO master_standar_kompetensi VALUES ('1', 'M', 'KOMPETENSI MANAJERIAL', '1', '2020-11-11 09:48:08', '2020-11-11 09:48:08');
INSERT INTO master_standar_kompetensi VALUES ('2', 'SK', 'KOMPETENSI SOSIAL KULTURAL', '1', '2020-11-11 09:48:18', '2020-11-11 09:48:18');
INSERT INTO master_standar_kompetensi VALUES ('3', 'T', 'KOMPETENSI TEKNIS', '2', '2020-11-11 09:48:29', '2020-11-11 09:48:29');

-- ----------------------------
-- Table structure for `master_status_pegawai`
-- ----------------------------
DROP TABLE IF EXISTS `master_status_pegawai`;
CREATE TABLE `master_status_pegawai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `order` int(11) DEFAULT '0',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_status_pegawai
-- ----------------------------
INSERT INTO master_status_pegawai VALUES ('1', 'BLUD', '1', '2020-11-09 16:04:15', '2020-11-09 16:04:15');
INSERT INTO master_status_pegawai VALUES ('2', 'PPPK', '2', '2020-11-09 16:04:22', '2020-11-09 16:04:22');
INSERT INTO master_status_pegawai VALUES ('3', 'Kontrak', '3', '2020-11-09 16:04:26', '2020-11-09 16:04:26');
INSERT INTO master_status_pegawai VALUES ('4', 'PNS', '4', '2020-11-09 16:04:32', '2020-11-09 16:04:32');
INSERT INTO master_status_pegawai VALUES ('5', 'PHD', '5', '2020-11-09 16:04:37', '2020-11-09 16:04:37');
INSERT INTO master_status_pegawai VALUES ('6', 'Outsourcing', '6', '2020-11-09 16:04:41', '2020-11-09 16:04:41');

-- ----------------------------
-- Table structure for `master_temperamen_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `master_temperamen_kerja`;
CREATE TABLE `master_temperamen_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `uraian` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_temperamen_kerja
-- ----------------------------
INSERT INTO master_temperamen_kerja VALUES ('1', 'D', 'Kemampuan menyesuaikan diri menerima tanggung jawabuntuk kegiatan memimpin,mengendalikan atau merencanakan.', '2020-11-09 16:16:28', '2020-11-09 16:16:28');
INSERT INTO master_temperamen_kerja VALUES ('2', 'F', 'Kemampuan menyesuaikan diri dengan kegiatan yang mengandung penafsiran perasaan, gagasan atau fakta dari sudut pandang pribadi.', '2020-11-09 16:16:36', '2020-11-09 16:16:36');
INSERT INTO master_temperamen_kerja VALUES ('3', 'I', 'Kemampuan menyesuaikan diri untuk pekerjaan-pekerjaan mempengaruhi orang lain dalam pendapat, sikap atau gagasan mengenai pendapat.', '2020-11-09 16:16:46', '2020-11-09 16:16:46');
INSERT INTO master_temperamen_kerja VALUES ('4', 'J', 'Kemampuan menyesuaikan diri pada kegiatan perbuatan kesimpulan penilaian atau pembuatan peraturan berdasarkan kriteria rangsangan indera atau atas dasar pertimbangan pribadi.', '2020-11-09 16:16:54', '2020-11-09 16:16:54');
INSERT INTO master_temperamen_kerja VALUES ('5', 'M', 'Kemampuan menyesuaikan diri dengan kegiatan pengambilan peraturan,pembuatan, pertimbangan atau pembuatan peraturanberdasarkan kriteria yang di ukur atau yang dapat di uji', '2020-11-09 16:17:04', '2020-11-09 16:17:04');
INSERT INTO master_temperamen_kerja VALUES ('6', 'P', 'Kemampuan menyesuaikan diri dalam berhubungan dengan orang lain lebih dari hanya penerimaan dan pembuatan instruksi.', '2020-11-09 16:17:13', '2020-11-09 16:17:13');
INSERT INTO master_temperamen_kerja VALUES ('7', 'R', 'Kemampuan menyesuaikan diri dalam kegiatan yang berulang, atau secara terus-menerus melakukan kegiatan yang sama, sesuai dengan perangkat prosedur, urutan atau kecepatan yang tertentu.', '2020-11-09 16:17:25', '2020-11-09 16:17:25');
INSERT INTO master_temperamen_kerja VALUES ('8', 'S', 'Kemampuan menyesuaikan diri untuk bekerja dengan ketegangan jiwa jika berhadapan dengan keadaan darurat, kritis, tidak biasa atau bahaya, atau bekerja dengan kecepatan kerja dan perhatian terus-menerus merupakan keseluruhan atau sebagian aspek pekerjaan.', '2020-11-09 16:17:34', '2020-11-09 16:17:34');
INSERT INTO master_temperamen_kerja VALUES ('9', 'T', 'Kemampuan menyesuaikan diri dengan situasi yang menghendaki pencapaian dengan tepat menurut perangkat batas, toleransi atau standar-standar tertentu.', '2020-11-09 16:17:48', '2020-11-09 16:17:48');
INSERT INTO master_temperamen_kerja VALUES ('10', 'V', 'Kemampuan menyesuaikan diri untuk melaksanakan berbagai tugas, seiring berganti dari tugas satu ke tugas yang lainnya yang ”berbeda” sifatnya, tanpa kehilangan efisiensi atau ketenangan diri.', '2020-11-09 16:17:56', '2020-11-09 16:17:56');

-- ----------------------------
-- Table structure for `master_upaya_fisik`
-- ----------------------------
DROP TABLE IF EXISTS `master_upaya_fisik`;
CREATE TABLE `master_upaya_fisik` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_upaya_fisik
-- ----------------------------
INSERT INTO master_upaya_fisik VALUES ('1', 'Berdiri', '2020-11-11 09:37:31', '2020-11-11 09:37:31');
INSERT INTO master_upaya_fisik VALUES ('2', 'Berjalan', '2020-11-11 09:37:35', '2020-11-11 09:37:35');
INSERT INTO master_upaya_fisik VALUES ('3', 'Duduk', '2020-11-11 09:37:40', '2020-11-11 09:37:40');
INSERT INTO master_upaya_fisik VALUES ('4', 'Mengangkat', '2020-11-11 09:37:45', '2020-11-11 09:37:45');
INSERT INTO master_upaya_fisik VALUES ('5', 'Membawa', '2020-11-11 09:37:50', '2020-11-11 09:37:50');
INSERT INTO master_upaya_fisik VALUES ('6', 'Mendorong', '2020-11-11 09:37:55', '2020-11-11 09:37:55');
INSERT INTO master_upaya_fisik VALUES ('7', 'Menarik', '2020-11-11 09:38:00', '2020-11-11 09:38:00');
INSERT INTO master_upaya_fisik VALUES ('8', 'Memanjat', '2020-11-11 09:38:06', '2020-11-11 09:38:06');
INSERT INTO master_upaya_fisik VALUES ('9', 'Menyimpan imbangan/mengatur imbangan', '2020-11-11 09:38:12', '2020-11-11 09:38:12');
INSERT INTO master_upaya_fisik VALUES ('10', 'Menunduk', '2020-11-11 09:38:17', '2020-11-11 09:38:17');
INSERT INTO master_upaya_fisik VALUES ('11', 'Berlutut', '2020-11-11 09:38:23', '2020-11-11 09:38:23');
INSERT INTO master_upaya_fisik VALUES ('12', 'Membungkuk', '2020-11-11 09:38:29', '2020-11-11 09:38:29');
INSERT INTO master_upaya_fisik VALUES ('13', 'Merangkak', '2020-11-11 09:38:34', '2020-11-11 09:38:34');
INSERT INTO master_upaya_fisik VALUES ('14', 'Menjangkau', '2020-11-11 09:38:39', '2020-11-11 09:38:39');
INSERT INTO master_upaya_fisik VALUES ('15', 'Memegang', '2020-11-11 09:38:44', '2020-11-11 09:38:44');
INSERT INTO master_upaya_fisik VALUES ('16', 'Bekerja dengan jari', '2020-11-11 09:38:49', '2020-11-11 09:38:49');
INSERT INTO master_upaya_fisik VALUES ('17', 'Meraba', '2020-11-11 09:38:57', '2020-11-11 09:38:57');
INSERT INTO master_upaya_fisik VALUES ('18', 'Berbicara', '2020-11-11 09:39:04', '2020-11-11 09:39:04');
INSERT INTO master_upaya_fisik VALUES ('19', 'Mendengar', '2020-11-11 09:39:09', '2020-11-11 09:39:09');
INSERT INTO master_upaya_fisik VALUES ('20', 'Melihat', '2020-11-11 09:39:13', '2020-11-11 09:39:13');
INSERT INTO master_upaya_fisik VALUES ('21', 'Ketajaman jarak jauh', '2020-11-11 09:39:19', '2020-11-11 09:39:19');
INSERT INTO master_upaya_fisik VALUES ('22', 'ketajaman jarak dekat', '2020-11-11 09:39:23', '2020-11-11 09:39:23');
INSERT INTO master_upaya_fisik VALUES ('23', 'Pengamatan secara mendalam', '2020-11-11 09:39:28', '2020-11-11 09:39:28');
INSERT INTO master_upaya_fisik VALUES ('24', 'Penyesuaian lensa mata', '2020-11-11 09:39:34', '2020-11-11 09:39:34');
INSERT INTO master_upaya_fisik VALUES ('25', 'Melihat berbagai warna', '2020-11-11 09:39:45', '2020-11-11 09:39:45');
INSERT INTO master_upaya_fisik VALUES ('26', 'Berdiri lama dalam rangka pembinaan', '2020-11-11 09:39:51', '2020-11-11 09:39:51');
INSERT INTO master_upaya_fisik VALUES ('27', 'Berjalan lama dalam rangka investigasi lapangan', '2020-11-11 09:39:56', '2020-11-11 09:39:56');
INSERT INTO master_upaya_fisik VALUES ('28', 'Berbicara lama dalam rangka penyuluhan dan pembinaan', '2020-11-11 09:40:14', '2020-11-11 09:40:14');

-- ----------------------------
-- Table structure for `master_urusan_pemerintahan`
-- ----------------------------
DROP TABLE IF EXISTS `master_urusan_pemerintahan`;
CREATE TABLE `master_urusan_pemerintahan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of master_urusan_pemerintahan
-- ----------------------------
INSERT INTO master_urusan_pemerintahan VALUES ('1', 'URUSAN PEMERINTAHAN BIDANG PENDIDIKAN', '2020-11-09 15:34:54', '2020-11-09 15:34:54');
INSERT INTO master_urusan_pemerintahan VALUES ('2', 'URUSAN PEMERINTAHAN BIDANG KESEHATAN', '2020-11-09 15:35:06', '2020-11-09 15:35:06');
INSERT INTO master_urusan_pemerintahan VALUES ('3', 'URUSAN PEMERINTAHAN BIDANG PEKERJAAN UMUM DAN PENATAAN RUANG', '2020-11-09 15:35:16', '2020-11-09 15:35:16');
INSERT INTO master_urusan_pemerintahan VALUES ('4', 'URUSAN PEMERINTAHAN BIDANG PERUMAHAN DAN KAWASAN PERMUKIMAN', '2020-11-09 15:35:34', '2020-11-09 15:35:34');
INSERT INTO master_urusan_pemerintahan VALUES ('5', 'URUSAN PEMERINTAHAN BIDANG KETENTERAMAN DAN KETERTIBAN UMUM SERTA PERLINDUNGAN MASYARAKAT', '2020-11-09 15:35:46', '2020-11-09 15:35:46');
INSERT INTO master_urusan_pemerintahan VALUES ('6', 'URUSAN PEMERINTAHAN BIDANG SOSIAL', '2020-11-09 15:35:56', '2020-11-09 15:35:56');
INSERT INTO master_urusan_pemerintahan VALUES ('7', 'URUSAN PEMERINTAHAN BIDANG TENAGA KERJA', '2020-11-09 15:36:05', '2020-11-09 15:36:05');
INSERT INTO master_urusan_pemerintahan VALUES ('8', 'URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN PEREMPUAN DAN PELINDUNGAN ANAK', '2020-11-09 15:37:26', '2020-11-09 15:37:26');
INSERT INTO master_urusan_pemerintahan VALUES ('9', 'URUSAN PEMERINTAHAN BIDANG PANGAN', '2020-11-09 15:37:36', '2020-11-09 15:37:36');
INSERT INTO master_urusan_pemerintahan VALUES ('10', 'URUSAN PEMERINTAHAN BIDANG PERTANAHAN', '2020-11-09 15:37:44', '2020-11-09 15:37:44');
INSERT INTO master_urusan_pemerintahan VALUES ('11', 'URUSAN PEMERINTAHAN BIDANG LINGKUNGAN HIDUP', '2020-11-09 15:37:53', '2020-11-09 15:37:53');
INSERT INTO master_urusan_pemerintahan VALUES ('12', 'URUSAN PEMERINTAHAN BIDANG ADMINISTRASI KEPENDUDUKAN DAN PENCATATAN SIPIL', '2020-11-09 15:38:03', '2020-11-09 15:38:03');
INSERT INTO master_urusan_pemerintahan VALUES ('13', 'URUSAN PEMERINTAHAN BIDANG PEMBERDAYAAN MASYARAKAT DAN DESA', '2020-11-09 15:38:12', '2020-11-09 15:38:12');
INSERT INTO master_urusan_pemerintahan VALUES ('14', 'URUSAN PEMERINTAHAN BIDANG PENGENDALIAN PENDUDUK DAN KELUARGA BERENCANA', '2020-11-09 15:38:20', '2020-11-09 15:38:20');
INSERT INTO master_urusan_pemerintahan VALUES ('15', 'URUSAN PEMERINTAHAN BIDANG PERHUBUNGAN', '2020-11-09 15:38:28', '2020-11-09 15:38:28');
INSERT INTO master_urusan_pemerintahan VALUES ('16', 'URUSAN BIDANG KOMUNIKASI DAN INFORMATIKA', '2020-11-09 15:38:36', '2020-11-09 15:38:36');
INSERT INTO master_urusan_pemerintahan VALUES ('17', 'URUSAN PEMERINTAHAN BIDANG KOPERASI, USAHA KECIL, DAN MENENGAH', '2020-11-09 15:38:44', '2020-11-09 15:38:44');
INSERT INTO master_urusan_pemerintahan VALUES ('18', 'URUSAN PEMERINTAHAN BIDANG PENANAMAN MODAL', '2020-11-09 15:38:52', '2020-11-09 15:38:52');
INSERT INTO master_urusan_pemerintahan VALUES ('19', 'URUSAN PEMERINTAHAN BIDANG KEPEMUDAAN DAN OLAHRAGA', '2020-11-09 15:39:01', '2020-11-09 15:39:01');
INSERT INTO master_urusan_pemerintahan VALUES ('20', 'URUSAN PEMERINTAHAN BIDANG STATISTIK', '2020-11-09 15:39:10', '2020-11-09 15:39:10');
INSERT INTO master_urusan_pemerintahan VALUES ('21', 'URUSAN PEMERINTAHAN BIDANG PERSANDIAN', '2020-11-09 15:39:18', '2020-11-09 15:39:18');
INSERT INTO master_urusan_pemerintahan VALUES ('22', 'URUSAN PEMERINTAHAN BIDANG KEBUDAYAAN', '2020-11-09 15:39:29', '2020-11-09 15:39:29');
INSERT INTO master_urusan_pemerintahan VALUES ('23', 'URUSAN PEMERINTAHAN BIDANG PERPUSTAKAAN', '2020-11-09 15:39:38', '2020-11-09 15:39:38');
INSERT INTO master_urusan_pemerintahan VALUES ('24', 'URUSAN PEMERINTAHAN BIDANG KEARSIPAN', '2020-11-09 15:39:49', '2020-11-09 15:39:49');
INSERT INTO master_urusan_pemerintahan VALUES ('25', 'URUSAN BIDANG KELAUTAN DAN PERIKANAN', '2020-11-09 15:39:59', '2020-11-09 15:39:59');
INSERT INTO master_urusan_pemerintahan VALUES ('26', 'URUSAN PEMERINTAHAN BIDANG PARIWISATA', '2020-11-09 15:40:09', '2020-11-09 15:40:09');
INSERT INTO master_urusan_pemerintahan VALUES ('27', 'URUSAN PEMERINTAHAN BIDANG PERTANIAN', '2020-11-09 15:40:23', '2020-11-09 15:40:23');
INSERT INTO master_urusan_pemerintahan VALUES ('28', 'URUSAN PEMERINTAHAN BIDANG PERDAGANGAN', '2020-11-09 15:40:32', '2020-11-09 15:40:32');
INSERT INTO master_urusan_pemerintahan VALUES ('29', 'URUSAN PEMERINTAHAN BIDANG PERINDUSTRIAN', '2020-11-09 15:40:40', '2020-11-09 15:40:40');
INSERT INTO master_urusan_pemerintahan VALUES ('30', 'URUSAN BIDANG TRANSMIGRASI', '2020-11-09 15:40:47', '2020-11-09 15:40:55');

-- ----------------------------
-- Table structure for `menu`
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_string` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of menu
-- ----------------------------

-- ----------------------------
-- Table structure for `menu_sub`
-- ----------------------------
DROP TABLE IF EXISTS `menu_sub`;
CREATE TABLE `menu_sub` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id_string` varchar(255) DEFAULT '',
  `id_string` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of menu_sub
-- ----------------------------

-- ----------------------------
-- Table structure for `skj`
-- ----------------------------
DROP TABLE IF EXISTS `skj`;
CREATE TABLE `skj` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tahun` int(11) DEFAULT NULL,
  `jabatan_id` int(11) DEFAULT NULL,
  `master_kamus_kompetensi_skj_id` int(11) DEFAULT NULL,
  `master_kamus_kompetensi_skj_level_id` int(11) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of skj
-- ----------------------------
INSERT INTO skj VALUES ('1', '2020', '1', '1', '3', '2020-11-13 16:14:41', '2020-11-13 16:14:41');
INSERT INTO skj VALUES ('2', '2020', '1', '2', '9', '2020-11-13 16:14:47', '2020-11-13 16:14:47');
INSERT INTO skj VALUES ('3', '2020', '1', '3', '12', '2020-11-13 16:14:51', '2020-11-13 16:14:51');
INSERT INTO skj VALUES ('4', '2020', '1', '4', '18', '2020-11-13 16:14:57', '2020-11-13 16:14:57');
INSERT INTO skj VALUES ('5', '2020', '1', '5', '23', '2020-11-13 16:15:02', '2020-11-13 16:15:02');
INSERT INTO skj VALUES ('6', '2020', '1', '6', '30', '2020-11-13 16:15:06', '2020-11-13 16:15:06');
INSERT INTO skj VALUES ('7', '2020', '1', '7', '32', '2020-11-13 16:16:03', '2020-11-13 16:16:03');
INSERT INTO skj VALUES ('8', '2020', '1', '8', '37', '2020-11-13 16:16:07', '2020-11-13 16:16:07');
INSERT INTO skj VALUES ('9', '2020', '1', '9', '44', '2020-11-13 16:16:19', '2020-11-13 16:16:24');
INSERT INTO skj VALUES ('10', '2020', '1', '10', '46', '2020-11-13 17:05:00', '2020-11-13 17:05:11');
INSERT INTO skj VALUES ('11', '2020', '1', '11', null, '2020-11-13 17:05:26', '2020-11-13 17:05:26');
INSERT INTO skj VALUES ('12', '2021', '6', '1', '1', '2021-01-16 06:20:23', '2021-01-16 06:20:23');
INSERT INTO skj VALUES ('13', '2021', '6', '2', '8', '2021-01-16 06:20:28', '2021-01-16 06:20:28');
INSERT INTO skj VALUES ('14', '2021', '6', '3', '13', '2021-01-16 06:20:32', '2021-01-16 06:20:32');
INSERT INTO skj VALUES ('15', '2021', '6', '4', '20', '2021-01-16 06:20:37', '2021-01-16 06:20:37');
INSERT INTO skj VALUES ('16', '2021', '6', '5', '23', '2021-01-16 06:20:41', '2021-01-16 06:20:41');
INSERT INTO skj VALUES ('17', '2021', '6', '6', '27', '2021-01-16 06:20:47', '2021-01-16 06:20:47');
INSERT INTO skj VALUES ('18', '2021', '6', '7', '31', '2021-01-16 06:20:55', '2021-01-16 06:20:55');
INSERT INTO skj VALUES ('19', '2021', '6', '8', '40', '2021-01-16 06:21:01', '2021-01-16 06:21:01');
INSERT INTO skj VALUES ('20', '2021', '6', '9', '41', '2021-01-16 06:21:13', '2021-01-16 06:21:13');
INSERT INTO skj VALUES ('21', '2021', '6', '12', '47', '2021-01-16 06:22:54', '2021-01-16 06:23:31');

-- ----------------------------
-- Table structure for `skj_indikator_kinerja_jabatan`
-- ----------------------------
DROP TABLE IF EXISTS `skj_indikator_kinerja_jabatan`;
CREATE TABLE `skj_indikator_kinerja_jabatan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `uraian` text,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of skj_indikator_kinerja_jabatan
-- ----------------------------
INSERT INTO skj_indikator_kinerja_jabatan VALUES ('1', '6', 'dsdsadda', '2021-01-16 06:23:56', '2021-01-16 06:23:56');

-- ----------------------------
-- Table structure for `skj_syarat_jabatan_pelatihan`
-- ----------------------------
DROP TABLE IF EXISTS `skj_syarat_jabatan_pelatihan`;
CREATE TABLE `skj_syarat_jabatan_pelatihan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `anjab_kualifikasi_pelatihan_id` int(11) DEFAULT NULL,
  `tingkat_penting` int(4) DEFAULT '0' COMMENT '0 = Kosong, 1 = Mutlak, 2 = Penting, 3 = Perlu',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of skj_syarat_jabatan_pelatihan
-- ----------------------------
INSERT INTO skj_syarat_jabatan_pelatihan VALUES ('1', '1', '1', '2020-11-13 16:11:07', '2020-11-13 16:11:07');
INSERT INTO skj_syarat_jabatan_pelatihan VALUES ('2', '2', '2', '2020-11-13 16:11:08', '2020-11-13 16:11:08');
INSERT INTO skj_syarat_jabatan_pelatihan VALUES ('3', '3', '3', '2020-11-13 16:11:12', '2020-11-13 16:14:02');
INSERT INTO skj_syarat_jabatan_pelatihan VALUES ('4', '4', '2', '2021-01-16 06:23:43', '2021-01-16 06:23:43');

-- ----------------------------
-- Table structure for `skj_syarat_jabatan_pengalaman_kerja`
-- ----------------------------
DROP TABLE IF EXISTS `skj_syarat_jabatan_pengalaman_kerja`;
CREATE TABLE `skj_syarat_jabatan_pengalaman_kerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `anjab_kualifikasi_pengalaman_kerja_id` int(11) DEFAULT NULL,
  `tingkat_penting` int(11) DEFAULT '0' COMMENT '0 = Kosong, 1 = Mutlak, 2 = Penting, 3 = Perlu',
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of skj_syarat_jabatan_pengalaman_kerja
-- ----------------------------
INSERT INTO skj_syarat_jabatan_pengalaman_kerja VALUES ('1', '1', '2', '2020-11-13 16:14:08', '2020-11-13 16:11:25');
INSERT INTO skj_syarat_jabatan_pengalaman_kerja VALUES ('2', '2', '2', '2021-01-16 06:23:48', '2021-01-16 06:23:48');

-- ----------------------------
-- Table structure for `skj_verifikasi`
-- ----------------------------
DROP TABLE IF EXISTS `skj_verifikasi`;
CREATE TABLE `skj_verifikasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jabatan_id` int(11) DEFAULT NULL,
  `tahun` int(11) DEFAULT NULL,
  `verifikasi` int(11) DEFAULT '0' COMMENT '0 = Belum, 1 = Tolak, 2 = Setuju',
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of skj_verifikasi
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT '',
  `password` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT '',
  `level` int(11) DEFAULT '0' COMMENT '1 = Admin, 2 = OPD',
  `jabatan` varchar(255) DEFAULT NULL,
  `master_opd_id` int(11) DEFAULT '1' COMMENT '0 = Tidak aktif, 1 = Aktif',
  `status` int(4) DEFAULT '1',
  `tgl_insert` timestamp NULL DEFAULT NULL,
  `last_update` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO user VALUES ('1', 'admin', 'admin@gmail.com', 'c6d19bddcfae6ca2b9dc0b90685ba2b590912955', 'Administrator', '1', 'Administrator', '0', '1', null, '2020-11-09 11:14:33');
INSERT INTO user VALUES ('2', 'admin2', 'admin2@gmail.com', 'c6d19bddcfae6ca2b9dc0b90685ba2b590912955', 'Administrator 2', '1', 'Admin', '0', '1', null, '2020-11-02 14:30:01');

-- ----------------------------
-- Table structure for `user_log`
-- ----------------------------
DROP TABLE IF EXISTS `user_log`;
CREATE TABLE `user_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `aksi` varchar(255) DEFAULT NULL,
  `parameter` text,
  `ip` varchar(50) DEFAULT NULL,
  `browser` varchar(100) DEFAULT NULL,
  `os` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=186 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user_log
-- ----------------------------
INSERT INTO user_log VALUES ('1', '1', 'Logout', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-09 15:10:29', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('2', '1', 'Login', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-09 15:10:35', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('3', '1', 'Login', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-11 08:38:01', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('4', '1', 'Login', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-12 09:07:00', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('5', '1', 'Logout', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-12 09:07:07', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('6', '1', 'Login', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-12 13:48:51', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('7', '1', 'Logout', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-12 15:49:16', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('8', '1', 'Login', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-12 15:51:58', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('9', '1', 'Login', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 09:04:44', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('10', '1', 'Login', '', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 12:09:07', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('11', '1', 'Tambah Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"master_opd_id\":\"24\",\"jabatan_id\":\"\",\"kode\":\"1\",\"nama\":\"Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Pegawai\",\"unit\":\"Badan Kepegawaian, Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"1\",\"master_eselon_id\":\"2\",\"master_golongan_id\":\"14\",\"master_urusan_pemerintahan_ids\":\"12,22\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 12:34:11', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('12', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[1,\\\"1\\\",\\\"0\\\"],[1,\\\"2\\\",\\\"0\\\"],[1,\\\"3\\\",\\\"0\\\"],[1,\\\"4\\\",\\\"1\\\"],[1,\\\"5\\\",\\\"0\\\"],[1,\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"1\",\"jabatan_id\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 12:34:12', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('13', '1', 'Tambah Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"master_opd_id\":\"24\",\"jabatan_id\":\"1\",\"kode\":\"-\",\"nama\":\"Kepala Bidang Pengembangan, Pendidikan dan Pelatihan\",\"unit\":\"Bidang Pengembangan , Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"3\",\"master_eselon_id\":\"4\",\"master_golongan_id\":\"\",\"master_urusan_pemerintahan_ids\":\"\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 12:35:25', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('14', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[2,\\\"1\\\",\\\"0\\\"],[2,\\\"2\\\",\\\"2\\\"],[2,\\\"3\\\",\\\"0\\\"],[2,\\\"4\\\",\\\"1\\\"],[2,\\\"5\\\",\\\"0\\\"],[2,\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"3\",\"jabatan_id\":\"2\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 12:35:26', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('15', '1', 'Tambah Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"master_opd_id\":\"24\",\"jabatan_id\":\"2\",\"kode\":\"\",\"nama\":\"Kasubbid Pengembangan Pegawai\",\"unit\":\"Bidang Pengembangan, pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"4\",\"master_eselon_id\":\"5\",\"master_golongan_id\":\"\",\"master_urusan_pemerintahan_ids\":\"\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 12:36:16', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('16', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[3,\\\"1\\\",\\\"0\\\"],[3,\\\"2\\\",\\\"0\\\"],[3,\\\"3\\\",\\\"0\\\"],[3,\\\"4\\\",\\\"1\\\"],[3,\\\"5\\\",\\\"0\\\"],[3,\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"1\",\"jabatan_id\":\"3\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 12:36:17', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('17', '1', 'Update Ikhtisiar Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"ikhtisiar\":\"Membantu Bupati dalam melaksanakan fungsi penunjang urusan pemerintahan di bidang kepegawaian, pendidikan dan pelatihan yang menjadi kewenangan daerah\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:16:53', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('18', '1', 'Update Pendidikan Formal Kualifikasi Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_pendidikan_id\":\"8\",\"jurusan\":\"S1 ILMU PEMERINTAHAN, S1 MANAJEMEN SDM\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:17:37', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('19', '1', 'Tambah Pendidikan dan Pelatihan Kualifikasi Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_jenis_pelatihan_id\":\"1\",\"nama\":\"Diklat Manajemen Keolahragaan\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:17:53', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('20', '1', 'Tambah Pendidikan dan Pelatihan Kualifikasi Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_jenis_pelatihan_id\":\"2\",\"nama\":\"Diklat Manajemen Pendidikan Dasar\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:18:00', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('21', '1', 'Tambah Pendidikan dan Pelatihan Kualifikasi Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_jenis_pelatihan_id\":\"3\",\"nama\":\"Diklat Manajemen Kepemudaan\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:18:07', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('22', '1', 'Tambah Pengalaman Kerja Kualifikasi Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama\":\"Jabatan Administrator Bidang Pendidikan, Kepemudaan, Olahraga dan Pariwisata\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:18:20', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('23', '1', 'Tambah Tugas Pokok Tahapan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"uraian\":\"Merumuskan kebijakan daerah dalam rangka penyusunan RPJPD, RPJMD, RKPD dan kebijakan daerah lainnya, menetapkan kebijakan teknis dan menyusun bahan untuk penetapan Standart Satuan Harga, Indikator Kinerja Utama, Perjanjian Kinerja dan bahan lainnya di bidang kepegawaian, pendidikan dan pelatihan\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:18:46', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('24', '1', 'Update Tugas Pokok Tahapan Anjab', '{\"anjab_tugas_pokok_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"uraian_json\":\"[\\\"Merumuskan dan menetapkan kebijakan di bidang kepegawaian, pendidikan dan pelatihan\\\",\\\"Mengkoordinasikan perumusan konsep kebijakan dibidang kepegawaian, pendidikan dan pelatihan dengan instansi terkait\\\",\\\"Merumuskan konsep kebijakan di bidang kepegawaian, pendidikan dan pelatihan\\\",\\\"Mempelajari peraturan - peraturan di bidang kepegawaian, pendidikan dan pelatihan\\\"]\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:19:10', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('25', '1', 'Tambah Tugas Pokok Tahapan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"uraian\":\"Merumuskan Renstra, Renja, program kerja dan kegiatan anggaran di lingkungan Badan Kepegawaian, Pendidikan dan Pelatihan sebagai pedoman pelaksanaan tugas\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:19:23', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('26', '1', 'Update Tugas Pokok Tahapan Anjab', '{\"anjab_tugas_pokok_id\":\"2\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"uraian_json\":\"[\\\"Menjabarkan rencana strategis organisasi\\\",\\\"Menyusun target, output dan indikator-indikator untuk masing-masing program kerja yang akan dilakukan\\\",\\\"Merancang konsep program kerja berdasarkan hasil analisis sebagai solusi dalam pencapaian rencana strategis organisasi\\\",\\\"Memetakan peluang dan hambatan organisasi dalam pencapaian rencana strategis organisasi\\\"]\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:19:46', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('27', '1', 'Tambah Tugas Pokok Tahapan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"uraian\":\"Menyelenggarakan kebijakan daerah terkait urusan bidang Kepegawaian, Pendidikan dan Pelatihan, kelembagaan, ketatausahaan, kepegawaian, pengelolaan anggaran dan pengelolaan barang\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:19:52', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('28', '1', 'Update Tugas Pokok Tahapan Anjab', '{\"anjab_tugas_pokok_id\":\"3\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"uraian_json\":\"[\\\"Menyelenggarakan pengawasan dan evaluasi\\\",\\\"Menyelenggarakan kegiatan terkait urusan bidang Kepegawaian, Pendidikan dan Pelatihan, kelembagaan, ketatausahaan, kepegawaian, pengelolaan anggaran dan pengelolaan barang\\\",\\\"Menyelenggarakan koordinasi perumusan kebijakan\\\",\\\"Merumuskan bahan kebijakan\\\"]\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:20:10', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('29', '1', 'Hapus Hasil Kerja Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"param_json\":\"[{\\\"anjab_tugas_pokok_id\\\":\\\"1\\\",\\\"hasil_kerja\\\":\\\"Konsep RPJPD, RPJMD, RKPD  bidang manajemen kepegawaian\\\",\\\"master_satuan_kerja_id\\\":\\\"1\\\"},{\\\"anjab_tugas_pokok_id\\\":\\\"2\\\",\\\"hasil_kerja\\\":\\\"Bahan rencana strategis dan program kerja\\\",\\\"master_satuan_kerja_id\\\":\\\"1\\\"},{\\\"anjab_tugas_pokok_id\\\":\\\"3\\\",\\\"hasil_kerja\\\":\\\"Terlaksananya kegiatan-kegiatan\\\",\\\"master_satuan_kerja_id\\\":\\\"1\\\"}]\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:21:23', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('30', '1', 'Tambah Bahan Kerja Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama\":\"Program Kerja Unit (Eselon II)\",\"digunakan_dalam_tugas\":\"Pengkoordinasian pelaksanaan tugas unit kerja (Eselon II)\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:21:41', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('31', '1', 'Tambah Bahan Kerja Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama\":\"Renstra\",\"digunakan_dalam_tugas\":\"Perumusan Program\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:21:48', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('32', '1', 'Tambah Bahan Kerja Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama\":\"Data Pegawai\",\"digunakan_dalam_tugas\":\"Pembinaan bawahan di lingkungan unit kerja\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:21:58', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('33', '1', 'Tambah Perangkat Kerja Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama\":\"Tupoksi dan Kebijakan Pimpinan\",\"digunakan_dalam_tugas\":\"Merumuskan program kerja\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:22:20', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('34', '1', 'Tambah Perangkat Kerja Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama\":\"Program Kerja Unit\",\"digunakan_dalam_tugas\":\"Mengkoordinasikan dan Mengarahkan pelaksanaan tugas\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:22:27', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('35', '1', 'Update Tanggung Jawab Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"param_json\":\"[{\\\"anjab_tugas_pokok_id\\\":\\\"1\\\",\\\"tanggung_jawab\\\":\\\"Keakuratan kebijakan\\\"},{\\\"anjab_tugas_pokok_id\\\":\\\"2\\\",\\\"tanggung_jawab\\\":\\\"Keakuratan renstra dan program kerja\\\"},{\\\"anjab_tugas_pokok_id\\\":\\\"3\\\",\\\"tanggung_jawab\\\":\\\"Keakuratan kebijakan\\\"}]\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:22:51', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('36', '1', 'Update Wewenang Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"param_json\":\"[{\\\"anjab_tugas_pokok_id\\\":\\\"1\\\",\\\"wewenang\\\":\\\"Menentukan  teknik koordinasi tugas\\\"},{\\\"anjab_tugas_pokok_id\\\":\\\"2\\\",\\\"wewenang\\\":\\\"Meminta bahan rencana strategis dan program kerja\\\"},{\\\"anjab_tugas_pokok_id\\\":\\\"3\\\",\\\"wewenang\\\":\\\"Menentukan teknik kegiatan  \\\"}]\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:26:40', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('37', '1', 'Tambah Korelasi Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama_jabatan\":\"Bupati Pati\",\"unit_kerja\":\"Pemkab Pati\",\"dalam_hal\":\"Konsultasi dan laporan dalam pelaksanaan tugas\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:27:05', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('38', '1', 'Tambah Korelasi Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama_jabatan\":\"Sekda Kab.Pati\",\"unit_kerja\":\"Pemkab Pati\",\"dalam_hal\":\"Konsultasi dan laporan dalam pelaksanaan tugas\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:27:24', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('39', '1', 'Update Kondisi Lingkungan Kerja Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"param_json\":\"[{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"1\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"2\\\",\\\"faktor\\\":\\\"suhu tidak menentu dan cuaca labil dalam rangka mengemban tugas tinjauan lapangan atau evaluasi dan pembinaan\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"3\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"4\\\",\\\"faktor\\\":\\\"Kadang-kadang diruangan sejuk, luas dan tertutup, kadang-kadang diruangan terbuka\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"5\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"6\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"7\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"8\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"9\\\",\\\"faktor\\\":\\\"\\\"}]\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:27:43', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('40', '1', 'Tambah Resiko Bahaya Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama\":\"Kecelakaan Fisik\",\"penyebab\":\"Tinjauan Lapangan dan evaluasi serta pembinaan\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:27:58', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('41', '1', 'Tambah Keterampilan Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"aspek\":\"Aspek Fisik\",\"uraian\":\"kecakapan kerja pikiran\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:28:18', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('42', '1', 'Tambah Keterampilan Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"aspek\":\"Aspek Mental\",\"uraian\":\"-\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:28:27', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('43', '1', 'Tambah Bakat Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_bakat_kerja_id\":\"2\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:28:41', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('44', '1', 'Tambah Bakat Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_bakat_kerja_id\":\"2\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:28:54', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('45', '1', 'Tambah Bakat Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_bakat_kerja_id\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:28:57', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('46', '1', 'Tambah Bakat Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_bakat_kerja_id\":\"5\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:31:05', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('47', '1', 'Hapus Bakat Kerja Syarat Jabatan Anjab', '{\"id\":null,\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_bakat_kerja_id\":\"5\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:31:22', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('48', '1', 'Tambah Bakat Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_bakat_kerja_id\":\"3\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:33:07', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('49', '1', 'Hapus Bakat Kerja Syarat Jabatan Anjab', '{\"id\":null,\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_bakat_kerja_id\":\"3\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:33:13', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('50', '1', 'Tambah Bakat Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_bakat_kerja_id\":\"5\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:36:00', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('51', '1', 'Hapus Bakat Kerja Syarat Jabatan Anjab', '{\"id\":null,\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_bakat_kerja_id\":\"5\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:36:07', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('52', '1', 'Tambah Temperamen Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_temperamen_kerja_id\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:44:35', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('53', '1', 'Tambah Minat Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_minat_kerja_id\":\"12\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:54:54', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('54', '1', 'Tambah Upaya Fisik Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_upaya_fisik_id\":\"16\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:55:07', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('55', '1', 'Tambah Upaya Fisik Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_upaya_fisik_id\":\"2\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:55:15', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('56', '1', 'Update Kondisi Fisik Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_kondisi_fisik_id\":\"1\",\"keterangan\":\"Laki-laki\\/Perempuan\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:55:49', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('57', '1', 'Update Kondisi Fisik Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_kondisi_fisik_id\":\"2\",\"keterangan\":\"tidak ada syarat khusus\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:55:50', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('58', '1', 'Update Kondisi Fisik Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_kondisi_fisik_id\":\"3\",\"keterangan\":\"tidak ada syarat khusus\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:55:51', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('59', '1', 'Update Kondisi Fisik Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_kondisi_fisik_id\":\"4\",\"keterangan\":\"tidak ada syarat khusus\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:55:52', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('60', '1', 'Update Kondisi Fisik Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_kondisi_fisik_id\":\"5\",\"keterangan\":\"tidak ada syarat khusus\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:55:54', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('61', '1', 'Update Kondisi Fisik Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_kondisi_fisik_id\":\"6\",\"keterangan\":\"tidak ada syarat khusus\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:55:55', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('62', '1', 'Update Fungsi Pekerjaan Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"master_fungsi_pekerjaan_data_id\":\"1\",\"master_fungsi_pekerjaan_orang_id\":\"3\",\"master_fungsi_pekerjaan_benda_id\":\"5\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:56:10', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('63', '1', 'Tambah Prestasi Kerja Yang Diharapkan Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama\":\"Meningkatkan capaian Standar Kurikulum Pendidikan Dasar\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:56:28', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('64', '1', 'Tambah Prestasi Kerja Yang Diharapkan Syarat Jabatan Anjab', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"nama\":\"Meningkatkan standar kompetensi tenaga pendidik\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 13:56:33', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('65', '1', 'Update Analisa Beban Kerja', '{\"jabatan_id\":\"1\",\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"json\":\"[{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"1\\\",\\\"hasil_kerja\\\":\\\"-\\\",\\\"jumlah_hasil\\\":45,\\\"waktu_penyelesaian\\\":1,\\\"master_keterangan_waktu_id\\\":1,\\\"waktu_efektif\\\":72000,\\\"kebutuhan_pegawai\\\":\\\"0.0006\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"2\\\",\\\"hasil_kerja\\\":\\\"Hasil\\\",\\\"jumlah_hasil\\\":35,\\\"waktu_penyelesaian\\\":7,\\\"master_keterangan_waktu_id\\\":2,\\\"waktu_efektif\\\":6000,\\\"kebutuhan_pegawai\\\":\\\"0.0408\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"3\\\",\\\"hasil_kerja\\\":\\\"Konsep KAK\\\",\\\"jumlah_hasil\\\":10,\\\"waktu_penyelesaian\\\":2,\\\"master_keterangan_waktu_id\\\":5,\\\"waktu_efektif\\\":60,\\\"kebutuhan_pegawai\\\":\\\"0.3333\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"4\\\",\\\"hasil_kerja\\\":\\\"Resume Visi dan Misi\\\",\\\"jumlah_hasil\\\":60,\\\"waktu_penyelesaian\\\":7,\\\"master_keterangan_waktu_id\\\":1,\\\"waktu_efektif\\\":72000,\\\"kebutuhan_pegawai\\\":\\\"0.0058\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"5\\\",\\\"hasil_kerja\\\":\\\"-\\\",\\\"jumlah_hasil\\\":60,\\\"waktu_penyelesaian\\\":4,\\\"master_keterangan_waktu_id\\\":1,\\\"waktu_efektif\\\":72000,\\\"kebutuhan_pegawai\\\":\\\"0.0033\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"6\\\",\\\"hasil_kerja\\\":\\\"-\\\",\\\"jumlah_hasil\\\":60,\\\"waktu_penyelesaian\\\":6,\\\"master_keterangan_waktu_id\\\":1,\\\"waktu_efektif\\\":72000,\\\"kebutuhan_pegawai\\\":\\\"0.0050\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"7\\\",\\\"hasil_kerja\\\":\\\"-\\\",\\\"jumlah_hasil\\\":60,\\\"waktu_penyelesaian\\\":4,\\\"master_keterangan_waktu_id\\\":1,\\\"waktu_efektif\\\":72000,\\\"kebutuhan_pegawai\\\":\\\"0.0033\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"8\\\",\\\"hasil_kerja\\\":\\\"-\\\",\\\"jumlah_hasil\\\":60,\\\"waktu_penyelesaian\\\":8,\\\"master_keterangan_waktu_id\\\":1,\\\"waktu_efektif\\\":72000,\\\"kebutuhan_pegawai\\\":\\\"0.0067\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"9\\\",\\\"hasil_kerja\\\":\\\"-\\\",\\\"jumlah_hasil\\\":23,\\\"waktu_penyelesaian\\\":2,\\\"master_keterangan_waktu_id\\\":3,\\\"waktu_efektif\\\":1500,\\\"kebutuhan_pegawai\\\":\\\"0.0307\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"10\\\",\\\"hasil_kerja\\\":\\\"-\\\",\\\"jumlah_hasil\\\":60,\\\"waktu_penyelesaian\\\":3,\\\"master_keterangan_waktu_id\\\":3,\\\"waktu_efektif\\\":1500,\\\"kebutuhan_pegawai\\\":\\\"0.1200\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"11\\\",\\\"hasil_kerja\\\":\\\"-\\\",\\\"jumlah_hasil\\\":60,\\\"waktu_penyelesaian\\\":4,\\\"master_keterangan_waktu_id\\\":3,\\\"waktu_efektif\\\":1500,\\\"kebutuhan_pegawai\\\":\\\"0.1600\\\"},{\\\"jabatan_id\\\":\\\"1\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"12\\\",\\\"hasil_kerja\\\":\\\"-\\\",\\\"jumlah_hasil\\\":60,\\\"waktu_penyelesaian\\\":5,\\\"master_keterangan_waktu_id\\\":3,\\\"waktu_efektif\\\":1500,\\\"kebutuhan_pegawai\\\":\\\"0.2000\\\"}]\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 14:36:10', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('66', '1', 'Update Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"id\":\"1\",\"kode\":\"1\",\"nama\":\"Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Pegawai\",\"unit\":\"Badan Kepegawaian, Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"6\",\"master_eselon_id\":\"2\",\"master_golongan_id\":\"14\",\"master_urusan_pemerintahan_ids\":\"\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 14:42:29', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('67', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[\\\"1\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"2\\\",\\\"0\\\"],[\\\"1\\\",\\\"3\\\",\\\"0\\\"],[\\\"1\\\",\\\"4\\\",\\\"1\\\"],[\\\"1\\\",\\\"5\\\",\\\"0\\\"],[\\\"1\\\",\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"1\",\"jabatan_id\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 14:42:30', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('68', '1', 'Update Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"id\":\"1\",\"kode\":\"1\",\"nama\":\"Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Pegawai\",\"unit\":\"Badan Kepegawaian, Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"1\",\"master_eselon_id\":\"2\",\"master_golongan_id\":\"14\",\"master_urusan_pemerintahan_ids\":\"\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 14:42:51', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('69', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[\\\"1\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"2\\\",\\\"0\\\"],[\\\"1\\\",\\\"3\\\",\\\"0\\\"],[\\\"1\\\",\\\"4\\\",\\\"1\\\"],[\\\"1\\\",\\\"5\\\",\\\"0\\\"],[\\\"1\\\",\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"1\",\"jabatan_id\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 14:42:51', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('70', '1', 'Update Evaluasi Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"1\",\"master_faktor_evjab_level_id\":\"3\",\"nilai\":\"550\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 15:27:22', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('71', '1', 'Update Evaluasi Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"2\",\"master_faktor_evjab_level_id\":\"7\",\"nilai\":\"250\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 15:27:28', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('72', '1', 'Update Evaluasi Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"ruang_lingkup\":\"<p>Kasubbag Kelembagaan berwenang :<\\/p><ol><li>Merencanakan pekerjaan yang dilaksanakan oleh bawahan<\\/li><li>Memberikan pekerjaan kepada bawahan<\\/li><li>Mengevaluasi kinerja bawahan<\\/li><li>Memberikan saran atau petunjuk kepada pegawai masalah pekerjaan dan administrasi<\\/li><\\/ol>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"3\",\"master_faktor_evjab_level_id\":\"9\",\"nilai\":\"450\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 15:27:34', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('73', '1', 'Update Evaluasi Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"4\",\"master_faktor_evjab_level_id\":\"14\",\"nilai\":\"75\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 15:27:39', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('74', '1', 'Update Evaluasi Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"5\",\"master_faktor_evjab_level_id\":\"17\",\"nilai\":\"75\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 15:27:44', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('75', '1', 'Update Evaluasi Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"6\",\"master_faktor_evjab_level_id\":\"25\",\"nilai\":\"800\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 15:27:49', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('76', '1', 'Update Evaluasi Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"7\",\"master_faktor_evjab_level_id\":\"28\",\"nilai\":\"310\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 15:27:56', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('77', '1', 'Update Tim Analisis Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"jabatan_id\":\"1\",\"nama_ketua\":\"Drs. Toni Junardi\",\"jabatan_pejabat_bersangkutan\":\"KASUBBAG KELEMBAGAAN\",\"nama_pejabat_bersangkutan\":\"ANIS Al-Amin, SH\",\"jabatan_pimpinan_unit_kerja\":\"KEPALA BAGIAN ORGANISASI DAN KEPEGAWAIAN\",\"nama_pimpinan_unit_kerja\":\"Dra. Rina Diniati\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 15:40:43', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('78', '1', 'Update Pendidikan/Pelatihan Syarat Jabatan SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"anjab_kualifikasi_pelatihan_id\":\"1\",\"tingkat_penting\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:11:07', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('79', '1', 'Update Pendidikan/Pelatihan Syarat Jabatan SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"anjab_kualifikasi_pelatihan_id\":\"2\",\"tingkat_penting\":\"2\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:11:09', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('80', '1', 'Update Pendidikan/Pelatihan Syarat Jabatan SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"anjab_kualifikasi_pelatihan_id\":\"3\",\"tingkat_penting\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:11:13', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('81', '1', 'Update Pengalaman Kerja Syarat Jabatan SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"anjab_kualifikasi_pengalaman_kerja_id\":\"1\",\"tingkat_penting\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:11:26', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('82', '1', 'Update Pendidikan/Pelatihan Syarat Jabatan SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"anjab_kualifikasi_pelatihan_id\":\"3\",\"tingkat_penting\":\"3\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:14:03', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('83', '1', 'Update Pengalaman Kerja Syarat Jabatan SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"anjab_kualifikasi_pengalaman_kerja_id\":\"1\",\"tingkat_penting\":\"2\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:14:09', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('84', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"1\",\"master_kamus_kompetensi_skj_level_id\":\"3\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:14:42', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('85', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"2\",\"master_kamus_kompetensi_skj_level_id\":\"9\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:14:47', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('86', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"3\",\"master_kamus_kompetensi_skj_level_id\":\"12\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:14:52', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('87', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"4\",\"master_kamus_kompetensi_skj_level_id\":\"18\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:14:57', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('88', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"5\",\"master_kamus_kompetensi_skj_level_id\":\"23\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:15:02', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('89', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"6\",\"master_kamus_kompetensi_skj_level_id\":\"30\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:15:07', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('90', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"7\",\"master_kamus_kompetensi_skj_level_id\":\"32\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:16:04', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('91', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"8\",\"master_kamus_kompetensi_skj_level_id\":\"37\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:16:08', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('92', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"9\",\"master_kamus_kompetensi_skj_level_id\":\"42\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:16:20', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('93', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"9\",\"master_kamus_kompetensi_skj_level_id\":\"44\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:16:26', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('94', '1', 'Update Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"id\":\"1\",\"kode\":\"1\",\"nama\":\"Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Pegawai\",\"unit\":\"Badan Kepegawaian, Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"1\",\"master_eselon_id\":\"2\",\"master_golongan_id\":\"14\",\"master_urusan_pemerintahan_ids\":\"12,22\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:19:19', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('95', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[\\\"1\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"2\\\",\\\"0\\\"],[\\\"1\\\",\\\"3\\\",\\\"0\\\"],[\\\"1\\\",\\\"4\\\",\\\"1\\\"],[\\\"1\\\",\\\"5\\\",\\\"0\\\"],[\\\"1\\\",\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"1\",\"jabatan_id\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:19:22', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('96', '1', 'Update Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"id\":\"1\",\"kode\":\"1\",\"nama\":\"Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Pegawai\",\"unit\":\"Badan Kepegawaian, Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"1\",\"master_eselon_id\":\"2\",\"master_golongan_id\":\"14\",\"master_urusan_pemerintahan_ids\":\"12,22\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:20:02', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('97', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[\\\"1\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"2\\\",\\\"0\\\"],[\\\"1\\\",\\\"3\\\",\\\"0\\\"],[\\\"1\\\",\\\"4\\\",\\\"1\\\"],[\\\"1\\\",\\\"5\\\",\\\"0\\\"],[\\\"1\\\",\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"1\",\"jabatan_id\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:20:04', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('98', '1', 'Update Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"id\":\"1\",\"kode\":\"1\",\"nama\":\"Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Pegawai\",\"unit\":\"Badan Kepegawaian, Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"1\",\"master_eselon_id\":\"2\",\"master_golongan_id\":\"14\",\"master_urusan_pemerintahan_ids\":\"12,22\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:21:15', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('99', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[\\\"1\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"2\\\",\\\"0\\\"],[\\\"1\\\",\\\"3\\\",\\\"0\\\"],[\\\"1\\\",\\\"4\\\",\\\"1\\\"],[\\\"1\\\",\\\"5\\\",\\\"0\\\"],[\\\"1\\\",\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"1\",\"jabatan_id\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:21:18', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('100', '1', 'Update Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"id\":\"1\",\"kode\":\"1\",\"nama\":\"Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Pegawai\",\"unit\":\"Badan Kepegawaian, Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"1\",\"master_eselon_id\":\"2\",\"master_golongan_id\":\"14\",\"master_urusan_pemerintahan_ids\":\"12,22\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:22:53', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('101', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[\\\"1\\\",\\\"1\\\",\\\"0\\\"],[\\\"1\\\",\\\"2\\\",\\\"0\\\"],[\\\"1\\\",\\\"3\\\",\\\"0\\\"],[\\\"1\\\",\\\"4\\\",\\\"1\\\"],[\\\"1\\\",\\\"5\\\",\\\"0\\\"],[\\\"1\\\",\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"1\",\"jabatan_id\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:22:56', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('102', '1', 'Update Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"id\":\"1\",\"kode\":\"1\",\"nama\":\"Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Pegawai\",\"unit\":\"Badan Kepegawaian, Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"1\",\"master_eselon_id\":\"2\",\"master_golongan_id\":\"14\",\"master_urusan_pemerintahan_ids\":\"12,22\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:23:43', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('103', '1', 'Update Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"id\":\"2\",\"kode\":\"-\",\"nama\":\"Kepala Bidang Pengembangan, Pendidikan dan Pelatihan\",\"unit\":\"Bidang Pengembangan , Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"3\",\"master_eselon_id\":\"4\",\"master_golongan_id\":\"\",\"master_urusan_pemerintahan_ids\":\"1\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:31:55', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('104', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[\\\"2\\\",\\\"1\\\",\\\"0\\\"],[\\\"2\\\",\\\"2\\\",\\\"2\\\"],[\\\"2\\\",\\\"3\\\",\\\"0\\\"],[\\\"2\\\",\\\"4\\\",\\\"1\\\"],[\\\"2\\\",\\\"5\\\",\\\"0\\\"],[\\\"2\\\",\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"3\",\"jabatan_id\":\"2\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:31:57', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('105', '1', 'Update Jabatan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"id\":\"2\",\"kode\":\"-\",\"nama\":\"Kepala Bidang Pengembangan, Pendidikan dan Pelatihan\",\"unit\":\"Bidang Pengembangan , Pendidikan dan Pelatihan\",\"master_jenis_jabatan_id\":\"3\",\"master_eselon_id\":\"4\",\"master_golongan_id\":\"\",\"master_urusan_pemerintahan_ids\":\"\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:32:31', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('106', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"input_array\":\"[[\\\"2\\\",\\\"1\\\",\\\"0\\\"],[\\\"2\\\",\\\"2\\\",\\\"2\\\"],[\\\"2\\\",\\\"3\\\",\\\"0\\\"],[\\\"2\\\",\\\"4\\\",\\\"1\\\"],[\\\"2\\\",\\\"5\\\",\\\"0\\\"],[\\\"2\\\",\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"3\",\"jabatan_id\":\"2\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 16:32:35', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('107', '1', 'Tambah Kompetensi SKJ Urusan Pemerintahan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"10\",\"master_kamus_kompetensi_skj_level_id\":\"\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 17:05:02', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('108', '1', 'Update SKJ', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"10\",\"master_kamus_kompetensi_skj_level_id\":\"46\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 17:05:12', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('109', '1', 'Tambah Kompetensi SKJ Urusan Pemerintahan', '{\"token\":\"ba5b70fbc146e0e2c1bb1395f81ff217\",\"tahun\":\"2020\",\"jabatan_id\":\"1\",\"master_kamus_kompetensi_skj_id\":\"11\",\"master_kamus_kompetensi_skj_level_id\":\"\"}', '202.80.217.88', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-13 17:05:28', '2020-11-13 17:27:36');
INSERT INTO user_log VALUES ('110', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 09:24:24', '2020-11-14 09:24:24');
INSERT INTO user_log VALUES ('111', '1', 'Tambah Jabatan', '{\"token\":\"840bfbd564938541906a147e7b9d4691\",\"tahun\":\"2020\",\"master_opd_id\":\"24\",\"jabatan_id\":\"3\",\"kode\":\"\",\"nama\":\"Analis Perencanaan SDM Aparatur\",\"unit\":\"Subbid Pengembangan Pegawai\",\"master_jenis_jabatan_id\":\"5\",\"master_eselon_id\":\"\",\"master_golongan_id\":\"\",\"master_urusan_pemerintahan_ids\":\"\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 09:53:50', '2020-11-14 09:53:50');
INSERT INTO user_log VALUES ('112', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"840bfbd564938541906a147e7b9d4691\",\"input_array\":\"[[4,\\\"1\\\",\\\"0\\\"],[4,\\\"2\\\",\\\"0\\\"],[4,\\\"3\\\",\\\"0\\\"],[4,\\\"4\\\",\\\"2\\\"],[4,\\\"5\\\",\\\"0\\\"],[4,\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"2\",\"jabatan_id\":\"4\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 09:53:51', '2020-11-14 09:53:51');
INSERT INTO user_log VALUES ('113', '1', 'Tambah Jabatan', '{\"token\":\"840bfbd564938541906a147e7b9d4691\",\"tahun\":\"2020\",\"master_opd_id\":\"24\",\"jabatan_id\":\"3\",\"kode\":\"\",\"nama\":\"Pengelola Pengembangan Karir\",\"unit\":\"Subbid Pengembangan Pegawai\",\"master_jenis_jabatan_id\":\"5\",\"master_eselon_id\":\"\",\"master_golongan_id\":\"\",\"master_urusan_pemerintahan_ids\":\"\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 11:00:11', '2020-11-14 11:00:11');
INSERT INTO user_log VALUES ('114', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"840bfbd564938541906a147e7b9d4691\",\"input_array\":\"[[5,\\\"1\\\",\\\"0\\\"],[5,\\\"2\\\",\\\"0\\\"],[5,\\\"3\\\",\\\"0\\\"],[5,\\\"4\\\",\\\"3\\\"],[5,\\\"5\\\",\\\"0\\\"],[5,\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"3\",\"jabatan_id\":\"5\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 11:00:12', '2020-11-14 11:00:12');
INSERT INTO user_log VALUES ('115', '1', 'Update Evaluasi Jabatan', '{\"token\":\"840bfbd564938541906a147e7b9d4691\",\"tahun\":\"2020\",\"jabatan_id\":\"4\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"8\",\"master_faktor_evjab_level_id\":\"36\",\"nilai\":\"350\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 11:01:43', '2020-11-14 11:01:43');
INSERT INTO user_log VALUES ('116', '1', 'Update Evaluasi Jabatan', '{\"token\":\"840bfbd564938541906a147e7b9d4691\",\"tahun\":\"2020\",\"jabatan_id\":\"4\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"8\",\"master_faktor_evjab_level_id\":\"37\",\"nilai\":\"550\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 11:10:04', '2020-11-14 11:10:04');
INSERT INTO user_log VALUES ('117', '1', 'Update Evaluasi Jabatan', '{\"token\":\"840bfbd564938541906a147e7b9d4691\",\"tahun\":\"2020\",\"jabatan_id\":\"4\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"9\",\"master_faktor_evjab_level_id\":\"47\",\"nilai\":\"650\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 11:10:14', '2020-11-14 11:10:14');
INSERT INTO user_log VALUES ('118', '1', 'Update Evaluasi Jabatan', '{\"token\":\"840bfbd564938541906a147e7b9d4691\",\"tahun\":\"2020\",\"jabatan_id\":\"4\",\"ruang_lingkup\":\"<p>-<br><\\/p>\",\"dampak\":\"-\",\"master_faktor_evjab_id\":\"11\",\"master_faktor_evjab_level_id\":\"56\",\"nilai\":\"225\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 11:10:23', '2020-11-14 11:10:23');
INSERT INTO user_log VALUES ('119', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 13:23:48', '2020-11-14 13:23:48');
INSERT INTO user_log VALUES ('120', '1', 'Logout', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 13:56:03', '2020-11-14 13:56:03');
INSERT INTO user_log VALUES ('121', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 14:00:35', '2020-11-14 14:00:35');
INSERT INTO user_log VALUES ('122', '1', 'Logout', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 16:14:02', '2020-11-14 16:14:02');
INSERT INTO user_log VALUES ('123', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 16:26:30', '2020-11-14 16:26:30');
INSERT INTO user_log VALUES ('124', '1', 'Logout', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 16:45:10', '2020-11-14 16:45:10');
INSERT INTO user_log VALUES ('125', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-14 16:51:07', '2020-11-14 16:51:07');
INSERT INTO user_log VALUES ('126', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-16 15:51:08', '2020-11-16 15:51:08');
INSERT INTO user_log VALUES ('127', '1', 'Logout', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-16 16:03:41', '2020-11-16 16:03:41');
INSERT INTO user_log VALUES ('128', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2020-11-16 16:03:48', '2020-11-16 16:03:48');
INSERT INTO user_log VALUES ('129', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:47:10', '2021-01-15 09:47:10');
INSERT INTO user_log VALUES ('130', '1', 'Tambah Jabatan', '{\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"tahun\":\"2021\",\"master_opd_id\":\"1\",\"jabatan_id\":\"\",\"kode\":\"SD\",\"nama\":\"Penulis\",\"unit\":\"Surat\",\"master_jenis_jabatan_id\":\"1\",\"master_eselon_id\":\"1\",\"master_golongan_id\":\"1\",\"master_urusan_pemerintahan_ids\":\"1\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:50:58', '2021-01-15 09:50:58');
INSERT INTO user_log VALUES ('131', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"input_array\":\"[[6,\\\"1\\\",\\\"4\\\"],[6,\\\"2\\\",\\\"0\\\"],[6,\\\"3\\\",\\\"0\\\"],[6,\\\"4\\\",\\\"0\\\"],[6,\\\"5\\\",\\\"0\\\"],[6,\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"4\",\"jabatan_id\":\"6\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:50:59', '2021-01-15 09:50:59');
INSERT INTO user_log VALUES ('132', '1', 'Tambah Jabatan', '{\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"tahun\":\"2021\",\"master_opd_id\":\"1\",\"jabatan_id\":\"6\",\"kode\":\"PP\",\"nama\":\"Pembantu Penulis\",\"unit\":\"Surat\",\"master_jenis_jabatan_id\":\"2\",\"master_eselon_id\":\"1\",\"master_golongan_id\":\"1\",\"master_urusan_pemerintahan_ids\":\"1\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:51:55', '2021-01-15 09:51:55');
INSERT INTO user_log VALUES ('133', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"input_array\":\"[[7,\\\"1\\\",\\\"0\\\"],[7,\\\"2\\\",\\\"4\\\"],[7,\\\"3\\\",\\\"0\\\"],[7,\\\"4\\\",\\\"0\\\"],[7,\\\"5\\\",\\\"0\\\"],[7,\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"4\",\"jabatan_id\":\"7\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:51:56', '2021-01-15 09:51:56');
INSERT INTO user_log VALUES ('134', '1', 'Update Ikhtisiar Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"ikhtisiar\":\"Mantab Djiwa\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:52:19', '2021-01-15 09:52:19');
INSERT INTO user_log VALUES ('135', '1', 'Update Pendidikan Formal Kualifikasi Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"master_pendidikan_id\":\"2\",\"jurusan\":\"Apa Saja\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:52:35', '2021-01-15 09:52:35');
INSERT INTO user_log VALUES ('136', '1', 'Tambah Pendidikan dan Pelatihan Kualifikasi Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"master_jenis_pelatihan_id\":\"1\",\"nama\":\"adadsd\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:53:03', '2021-01-15 09:53:03');
INSERT INTO user_log VALUES ('137', '1', 'Tambah Pengalaman Kerja Kualifikasi Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"nama\":\"asdda\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:53:12', '2021-01-15 09:53:12');
INSERT INTO user_log VALUES ('138', '1', 'Tambah Tugas Pokok Tahapan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"uraian\":\"asd\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:53:20', '2021-01-15 09:53:20');
INSERT INTO user_log VALUES ('139', '1', 'Hapus Hasil Kerja Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"param_json\":\"[{\\\"anjab_tugas_pokok_id\\\":\\\"4\\\",\\\"hasil_kerja\\\":\\\"Harus Bagus\\\",\\\"master_satuan_kerja_id\\\":\\\"1\\\"}]\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:53:36', '2021-01-15 09:53:36');
INSERT INTO user_log VALUES ('140', '1', 'Tambah Bahan Kerja Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"nama\":\"asd\",\"digunakan_dalam_tugas\":\"caccc\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:53:49', '2021-01-15 09:53:49');
INSERT INTO user_log VALUES ('141', '1', 'Tambah Perangkat Kerja Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"nama\":\"asd\",\"digunakan_dalam_tugas\":\"sdadsadsa\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:53:58', '2021-01-15 09:53:58');
INSERT INTO user_log VALUES ('142', '1', 'Update Tanggung Jawab Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"param_json\":\"[{\\\"anjab_tugas_pokok_id\\\":\\\"4\\\",\\\"tanggung_jawab\\\":\\\"sadda\\\"}]\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:54:06', '2021-01-15 09:54:06');
INSERT INTO user_log VALUES ('143', '1', 'Tambah Perangkat Kerja Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"nama\":\"asd\",\"digunakan_dalam_tugas\":\"daxczcx\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:54:23', '2021-01-15 09:54:23');
INSERT INTO user_log VALUES ('144', '1', 'Update Perangkat Kerja Anjab', '{\"jabatan_id\":\"6\",\"id\":\"4\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"nama\":\"asdccc\",\"digunakan_dalam_tugas\":\"daxczcx\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:54:41', '2021-01-15 09:54:41');
INSERT INTO user_log VALUES ('145', '1', 'Update Bahan Kerja Anjab', '{\"jabatan_id\":\"6\",\"id\":\"4\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"nama\":\"asdccccccc\",\"digunakan_dalam_tugas\":\"caccc\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:54:54', '2021-01-15 09:54:54');
INSERT INTO user_log VALUES ('146', '1', 'Update Tugas Pokok Tahapan Anjab', '{\"id\":\"4\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"uraian\":\"asdccc\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:55:14', '2021-01-15 09:55:14');
INSERT INTO user_log VALUES ('147', '1', 'Update Tugas Pokok Tahapan Anjab', '{\"anjab_tugas_pokok_id\":\"4\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"uraian_json\":\"[\\\"asddsa\\\"]\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:55:19', '2021-01-15 09:55:19');
INSERT INTO user_log VALUES ('148', '1', 'Update Wewenang Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"param_json\":\"[{\\\"anjab_tugas_pokok_id\\\":\\\"4\\\",\\\"wewenang\\\":\\\"cxzc\\\"}]\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:55:39', '2021-01-15 09:55:39');
INSERT INTO user_log VALUES ('149', '1', 'Tambah Korelasi Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"nama_jabatan\":\"aacccc\",\"unit_kerja\":\"assasasasa\",\"dalam_hal\":\"qqqq\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:55:49', '2021-01-15 09:55:49');
INSERT INTO user_log VALUES ('150', '1', 'Update Kondisi Lingkungan Kerja Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"param_json\":\"[{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"1\\\",\\\"faktor\\\":\\\"adas\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"2\\\",\\\"faktor\\\":\\\"dsa\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"3\\\",\\\"faktor\\\":\\\"sadad\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"4\\\",\\\"faktor\\\":\\\"asd\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"5\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"6\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"7\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"8\\\",\\\"faktor\\\":\\\"\\\"},{\\\"master_kondisi_lingkungan_kerja_id\\\":\\\"9\\\",\\\"faktor\\\":\\\"\\\"}]\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:56:06', '2021-01-15 09:56:06');
INSERT INTO user_log VALUES ('151', '1', 'Tambah Resiko Bahaya Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"nama\":\"asd\",\"penyebab\":\"dsaadssad\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:56:26', '2021-01-15 09:56:26');
INSERT INTO user_log VALUES ('152', '1', 'Tambah Keterampilan Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"aspek\":\"asdads\",\"uraian\":\"cxcz\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:56:42', '2021-01-15 09:56:42');
INSERT INTO user_log VALUES ('153', '1', 'Tambah Bakat Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"master_bakat_kerja_id\":\"1\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:57:04', '2021-01-15 09:57:04');
INSERT INTO user_log VALUES ('154', '1', 'Tambah Bakat Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"master_bakat_kerja_id\":\"4\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:57:11', '2021-01-15 09:57:11');
INSERT INTO user_log VALUES ('155', '1', 'Tambah Temperamen Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"master_temperamen_kerja_id\":\"3\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:57:21', '2021-01-15 09:57:21');
INSERT INTO user_log VALUES ('156', '1', 'Tambah Temperamen Kerja Syarat Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"master_temperamen_kerja_id\":\"2\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:57:21', '2021-01-15 09:57:21');
INSERT INTO user_log VALUES ('157', '1', 'Tambah Prestasi Kerja Yang Diharapkan Syarat Jabatan Anjab', '{\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"nama\":\"asd\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 09:57:31', '2021-01-15 09:57:31');
INSERT INTO user_log VALUES ('158', '1', 'Update Keterampilan Kerja Syarat Jabatan Anjab', '{\"id\":\"\",\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"aspek\":\"mantab\",\"uraian\":\"cxcz\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 10:02:30', '2021-01-15 10:02:30');
INSERT INTO user_log VALUES ('159', '1', 'Update Keterampilan Kerja Syarat Jabatan Anjab', '{\"id\":\"\",\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"aspek\":\"mantab\",\"uraian\":\"cxcz\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 10:03:54', '2021-01-15 10:03:54');
INSERT INTO user_log VALUES ('160', '1', 'Update Keterampilan Kerja Syarat Jabatan Anjab', '{\"id\":\"\",\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"aspek\":\"mantab\",\"uraian\":\"cxcz\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 10:04:08', '2021-01-15 10:04:08');
INSERT INTO user_log VALUES ('161', '1', 'Update Keterampilan Kerja Syarat Jabatan Anjab', '{\"id\":\"3\",\"jabatan_id\":\"6\",\"token\":\"f9888ad6d53f7945528538a5db04eb32\",\"aspek\":\"mantab\",\"uraian\":\"cxcz\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-15 10:05:30', '2021-01-15 10:05:30');
INSERT INTO user_log VALUES ('162', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 05:04:00', '2021-01-16 05:04:00');
INSERT INTO user_log VALUES ('163', '1', 'Update Analisa Beban Kerja', '{\"jabatan_id\":\"6\",\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"json\":\"[{\\\"jabatan_id\\\":\\\"6\\\",\\\"anjab_tugas_pokok_tahapan_id\\\":\\\"13\\\",\\\"hasil_kerja\\\":\\\"dsadas\\\",\\\"jumlah_hasil\\\":7,\\\"waktu_penyelesaian\\\":45,\\\"master_keterangan_waktu_id\\\":1,\\\"waktu_efektif\\\":72000,\\\"kebutuhan_pegawai\\\":\\\"0.0044\\\"}]\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 05:19:53', '2021-01-16 05:19:53');
INSERT INTO user_log VALUES ('164', '1', 'Verifikasi Analisa Jabatan dan Beban Kerja', '{\"jabatan_id\":\"6\",\"tahun\":\"2021\",\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"verifikasi\":\"2\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 05:57:02', '2021-01-16 05:57:02');
INSERT INTO user_log VALUES ('165', '1', 'Update Evaluasi Jabatan', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"ruang_lingkup\":\"<p>asasdadsdas<br><\\/p>\",\"dampak\":\"dsasd\",\"master_faktor_evjab_id\":\"18\",\"master_faktor_evjab_level_id\":\"79\",\"nilai\":\"20\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:14:52', '2021-01-16 06:14:52');
INSERT INTO user_log VALUES ('166', '1', 'Update Evaluasi Jabatan', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"ruang_lingkup\":\"<p>asasdadsdas<br><\\/p>\",\"dampak\":\"dsasd\",\"master_faktor_evjab_id\":\"18\",\"master_faktor_evjab_level_id\":\"79\",\"nilai\":\"150\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:18:05', '2021-01-16 06:18:05');
INSERT INTO user_log VALUES ('167', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"1\",\"master_kamus_kompetensi_skj_level_id\":\"1\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:20:24', '2021-01-16 06:20:24');
INSERT INTO user_log VALUES ('168', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"2\",\"master_kamus_kompetensi_skj_level_id\":\"8\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:20:28', '2021-01-16 06:20:28');
INSERT INTO user_log VALUES ('169', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"3\",\"master_kamus_kompetensi_skj_level_id\":\"13\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:20:33', '2021-01-16 06:20:33');
INSERT INTO user_log VALUES ('170', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"4\",\"master_kamus_kompetensi_skj_level_id\":\"20\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:20:37', '2021-01-16 06:20:37');
INSERT INTO user_log VALUES ('171', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"5\",\"master_kamus_kompetensi_skj_level_id\":\"23\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:20:42', '2021-01-16 06:20:42');
INSERT INTO user_log VALUES ('172', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"6\",\"master_kamus_kompetensi_skj_level_id\":\"27\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:20:48', '2021-01-16 06:20:48');
INSERT INTO user_log VALUES ('173', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"7\",\"master_kamus_kompetensi_skj_level_id\":\"31\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:20:55', '2021-01-16 06:20:55');
INSERT INTO user_log VALUES ('174', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"8\",\"master_kamus_kompetensi_skj_level_id\":\"40\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:21:02', '2021-01-16 06:21:02');
INSERT INTO user_log VALUES ('175', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"9\",\"master_kamus_kompetensi_skj_level_id\":\"41\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:21:14', '2021-01-16 06:21:14');
INSERT INTO user_log VALUES ('176', '1', 'Tambah Kompetensi SKJ Urusan Pemerintahan', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"12\",\"master_kamus_kompetensi_skj_level_id\":\"\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:22:54', '2021-01-16 06:22:54');
INSERT INTO user_log VALUES ('177', '1', 'Update SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"tahun\":\"2021\",\"jabatan_id\":\"6\",\"master_kamus_kompetensi_skj_id\":\"12\",\"master_kamus_kompetensi_skj_level_id\":\"47\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:23:32', '2021-01-16 06:23:32');
INSERT INTO user_log VALUES ('178', '1', 'Update Pendidikan/Pelatihan Syarat Jabatan SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"anjab_kualifikasi_pelatihan_id\":\"4\",\"tingkat_penting\":\"2\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:23:44', '2021-01-16 06:23:44');
INSERT INTO user_log VALUES ('179', '1', 'Update Pengalaman Kerja Syarat Jabatan SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"anjab_kualifikasi_pengalaman_kerja_id\":\"2\",\"tingkat_penting\":\"2\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:23:49', '2021-01-16 06:23:49');
INSERT INTO user_log VALUES ('180', '1', 'Update Indikator Kinerja Jabatan Syarat Jabatan SKJ', '{\"token\":\"c62f642c9300a31f2b005c6c5522d915\",\"jabatan_id\":\"6\",\"uraian\":\"dsdsadda\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-16 06:23:57', '2021-01-16 06:23:57');
INSERT INTO user_log VALUES ('181', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-18 10:03:24', '2021-01-18 10:03:24');
INSERT INTO user_log VALUES ('182', '1', 'Update Jabatan', '{\"token\":\"00f551de676aed5b11df1f8f1037581d\",\"id\":\"7\",\"kode\":\"PP\",\"nama\":\"Pembantu Penulis\",\"unit\":\"Surat\",\"master_jenis_jabatan_id\":\"2\",\"master_eselon_id\":\"1\",\"master_golongan_id\":\"1\",\"master_urusan_pemerintahan_ids\":\"1\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-18 10:52:59', '2021-01-18 10:52:59');
INSERT INTO user_log VALUES ('183', '1', 'Update Jabatan Jml Pegawai', '{\"token\":\"00f551de676aed5b11df1f8f1037581d\",\"input_array\":\"[[\\\"7\\\",\\\"1\\\",\\\"6\\\"],[\\\"7\\\",\\\"2\\\",\\\"4\\\"],[\\\"7\\\",\\\"3\\\",\\\"0\\\"],[\\\"7\\\",\\\"4\\\",\\\"0\\\"],[\\\"7\\\",\\\"5\\\",\\\"6\\\"],[\\\"7\\\",\\\"6\\\",\\\"0\\\"]]\",\"jml_pegawai\":\"16\",\"jabatan_id\":\"7\"}', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-18 10:53:00', '2021-01-18 10:53:00');
INSERT INTO user_log VALUES ('184', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-18 18:05:43', '2021-01-18 18:05:43');
INSERT INTO user_log VALUES ('185', '1', 'Login', '', '127.0.0.1', 'Mozilla Firefox 81.0', 'Windows 10', '2021-01-20 08:37:04', '2021-01-20 08:37:04');

-- ----------------------------
-- Table structure for `user_token`
-- ----------------------------
DROP TABLE IF EXISTS `user_token`;
CREATE TABLE `user_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `tgl_insert` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user_token
-- ----------------------------
INSERT INTO user_token VALUES ('1', '1', 'b9aed7bff5de4e98a1cb208e6fba3fd6', '2020-11-09 15:10:34', '2020-11-09 15:10:34');
INSERT INTO user_token VALUES ('2', '1', '4f6934aa1ffa7d015f82d7fa55c8f58d', '2020-11-11 08:38:00', '2020-11-11 08:38:00');
INSERT INTO user_token VALUES ('4', '1', '2bb3785aea9b81e02f2394dfaef788b8', '2020-11-12 15:51:58', '2020-11-12 15:51:58');
INSERT INTO user_token VALUES ('5', '1', 'b6208d618e62a67f0dd3bb63d6c5e72b', '2020-11-13 09:04:44', '2020-11-13 09:04:44');
INSERT INTO user_token VALUES ('6', '1', 'ba5b70fbc146e0e2c1bb1395f81ff217', '2020-11-13 12:09:07', '2020-11-13 12:09:07');
INSERT INTO user_token VALUES ('7', '1', '840bfbd564938541906a147e7b9d4691', '2020-11-14 09:24:24', '2020-11-14 09:24:24');
INSERT INTO user_token VALUES ('11', '1', '39000db4884cc666e483287e06cce6b0', '2020-11-14 16:51:06', '2020-11-14 16:51:06');
INSERT INTO user_token VALUES ('13', '1', 'bb92075cc1de683c6472f202b70df76c', '2020-11-16 16:03:47', '2020-11-16 16:03:47');
INSERT INTO user_token VALUES ('14', '1', 'f9888ad6d53f7945528538a5db04eb32', '2021-01-15 09:47:10', '2021-01-15 09:47:10');
INSERT INTO user_token VALUES ('15', '1', 'c62f642c9300a31f2b005c6c5522d915', '2021-01-16 05:03:59', '2021-01-16 05:03:59');
INSERT INTO user_token VALUES ('16', '1', '00f551de676aed5b11df1f8f1037581d', '2021-01-18 10:03:24', '2021-01-18 10:03:24');
INSERT INTO user_token VALUES ('17', '1', '0ea0d1a6d0c376035cdb73fdfb5c792d', '2021-01-18 18:05:42', '2021-01-18 18:05:42');
INSERT INTO user_token VALUES ('18', '1', '10d05b779660988e7de8da6967a775ca', '2021-01-20 08:37:04', '2021-01-20 08:37:04');
