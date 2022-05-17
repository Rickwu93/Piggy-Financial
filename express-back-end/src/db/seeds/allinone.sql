INSERT INTO users(username, email, password)
  VALUES
  ('Alvin', 'alvintest@hotmail.com', 'test123'),
  ('Ricky', 'ricky2test@hotmail.com', 'test123'),
  ('Kevin', 'kevin3test@hotmail.com', 'test123');

INSERT INTO categories(name)
  VALUES
  ('eating out'),
  ('entertainment'),
  ('fuel'),
  ('groceries'),
  ('income'),
  ('insurance'),
  ('rent'),
  ('savings'),
  ('shopping'),
  ('other');

INSERT INTO expenses (user_id, created_at, amount, category_id)
  VALUES 
  (1, '2021-12-29 07:57:54', 9928, 6),
  (3, '2022-03-31 14:55:30', 190, 10),
  (3, '2021-11-16 21:54:17', 4257, 5),
  (3, '2021-06-29 19:15:20', 9048, 9),
  (1, '2021-03-22 19:36:16', 8329, 3),
  (3, '2021-06-05 05:00:10', 6810, 3),
  (1, '2021-08-27 11:58:41', 6745, 8),
  (3, '2021-10-26 11:20:30', 1501, 7),
  (2, '2021-03-08 15:27:59', 3435, 4),
  (3, '2021-01-29 00:59:51', 9655, 8),
  (1, '2021-10-18 06:15:17', 9488, 9),
  (3, '2022-04-16 11:59:29', 8400, 8),
  (2, '2022-02-16 17:50:00', 2943, 9),
  (3, '2022-03-16 14:43:26', 3037, 5),
  (1, '2021-03-04 09:35:23', 8109, 8),
  (2, '2021-10-24 22:58:13', 2888, 9),
  (1, '2021-09-23 14:38:34', 6176, 1),
  (1, '2021-08-11 13:14:07', 8094, 1),
  (1, '2021-12-10 14:23:20', 655, 4),
  (3, '2022-04-29 13:54:49', 6272, 9),
  (2, '2022-04-20 13:37:34', 090, 7),
  (2, '2021-10-29 03:01:36', 4201, 10),
  (2, '2022-01-28 08:42:48', 6016, 8),
  (3, '2022-01-01 18:03:52', 755, 5),
  (2, '2022-02-20 08:43:35', 5958, 10),
  (3, '2022-03-24 08:53:23', 9894, 2),
  (3, '2022-01-08 10:33:45', 5867, 4),
  (1, '2022-05-06 00:17:34', 9858, 5),
  (1, '2021-02-13 05:10:22', 1240, 5),
  (3, '2021-03-15 00:18:09', 2608, 5),
  (3, '2022-01-07 14:35:18', 5558, 10),
  (2, '2021-01-05 04:20:19', 6068, 9),
  (1, '2021-04-22 02:30:02', 9039, 8),
  (1, '2021-09-05 15:56:59', 1252, 8),
  (2, '2021-01-18 08:18:34', 8840, 10),
  (2, '2021-08-22 02:10:05', 5633, 4),
  (2, '2021-04-13 02:12:50', 9470, 3),
  (3, '2021-08-30 08:23:42', 1110, 3),
  (2, '2021-11-16 21:23:48', 228, 9),
  (3, '2021-08-13 19:48:47', 397, 5),
  (3, '2022-03-13 10:44:19', 1200, 9),
  (1, '2021-08-05 03:46:51', 9986, 4),
  (2, '2022-03-09 10:36:14', 631, 10),
  (3, '2021-10-11 04:38:11', 8590, 2),
  (3, '2022-03-27 08:15:50', 240, 9),
  (1, '2021-02-21 00:34:58', 3392, 5),
  (1, '2021-06-07 18:11:50', 6417, 6),
  (2, '2021-06-18 19:54:57', 6767, 1),
  (3, '2022-05-02 16:15:39', 6018, 8),
  (1, '2021-10-18 04:52:19', 055, 7),
  (3, '2021-12-02 03:59:04', 6993, 3),
  (2, '2021-09-02 12:18:18', 8406, 5),
  (2, '2021-07-07 21:11:42', 7042, 1),
  (3, '2022-03-30 03:50:04', 7889, 1),
  (1, '2021-08-08 08:03:39', 7780, 3),
  (2, '2021-01-04 06:07:50', 7387, 3),
  (2, '2021-02-24 04:50:46', 3739, 9),
  (2, '2021-11-17 12:05:53', 7803, 2),
  (1, '2021-03-16 09:48:07', 3561, 10),
  (3, '2022-03-21 06:25:45', 4892, 4),
  (1, '2022-01-06 01:39:32', 8957, 5),
  (1, '2022-04-17 06:15:21', 5315, 2),
  (2, '2021-03-08 06:27:18', 4998, 2),
  (1, '2022-04-12 06:57:05', 4411, 3),
  (2, '2021-03-19 03:40:09', 8092, 9),
  (2, '2021-07-24 16:43:19', 8149, 1),
  (3, '2022-02-17 13:20:52', 1709, 4),
  (2, '2021-08-30 20:56:00', 8750, 6),
  (3, '2021-10-14 02:16:26', 4865, 4),
  (2, '2021-05-07 21:09:37', 9121, 8),
  (1, '2021-10-04 11:07:32', 4160, 4),
  (2, '2021-07-05 23:17:46', 8075, 8),
  (2, '2021-05-25 13:14:54', 7060, 8),
  (2, '2021-05-22 07:31:40', 2332, 2),
  (1, '2022-05-05 18:42:31', 1659, 10),
  (2, '2021-08-30 12:48:09', 7100, 8),
  (3, '2021-02-27 16:22:36', 4744, 9),
  (2, '2021-03-28 13:34:49', 2144, 1),
  (2, '2021-10-17 21:59:38', 1112, 10),
  (3, '2022-03-15 09:09:45', 6346, 1),
  (3, '2021-11-13 16:51:06', 9696, 1),
  (3, '2021-01-01 12:26:34', 3623, 3),
  (3, '2021-03-18 17:33:43', 2132, 7),
  (3, '2021-12-14 03:21:51', 5396, 8),
  (1, '2021-01-20 10:45:52', 3409, 8),
  (2, '2022-05-01 19:58:05', 017, 2),
  (1, '2021-01-02 20:34:41', 2804, 1),
  (2, '2021-07-23 03:17:32', 8644, 8),
  (3, '2021-09-21 05:27:31', 312, 4),
  (3, '2021-03-28 07:35:42', 6786, 3),
  (3, '2021-04-11 03:00:04', 3815, 7),
  (3, '2021-05-03 08:13:43', 8512, 1),
  (1, '2021-02-21 23:59:24', 5699, 8),
  (3, '2022-03-09 22:42:52', 8441, 2),
  (2, '2021-10-08 14:58:08', 406, 8),
  (1, '2021-07-30 05:01:40', 2193, 6),
  (3, '2021-08-01 17:22:29', 8321, 5),
  (3, '2021-10-27 00:04:46', 5539, 9),
  (3, '2022-03-27 05:21:19', 4751, 3),
  (1, '2021-04-21 13:35:42', 506, 5);

INSERT INTO goals (user_id, end_date, amount)
  VALUES
  (1, '2023-02-08 07:25:00', 3284932),
  (2, '2023-05-04 21:05:50', 219638673),
  (3, '2022-12-21 16:52:43', 323618);