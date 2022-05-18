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
  (1, '2021-12-29', 9928, 6),
  (3, '2022-03-31', 190, 10),
  (3, '2021-11-16', 4257, 5),
  (3, '2021-06-29', 9048, 9),
  (1, '2021-03-22', 8329, 3),
  (3, '2021-06-05', 6810, 3),
  (1, '2021-08-27', 6745, 8),
  (3, '2021-10-26', 1501, 7),
  (2, '2021-03-08', 3435, 4),
  (3, '2021-01-29', 9655, 8),
  (1, '2021-10-18', 9488, 9),
  (3, '2022-04-16', 8400, 8),
  (2, '2022-02-16', 2943, 9),
  (3, '2022-03-16', 3037, 5),
  (1, '2021-03-04', 8109, 8),
  (2, '2021-10-24', 2888, 9),
  (1, '2021-09-23', 6176, 1),
  (1, '2021-08-11', 8094, 1),
  (1, '2021-12-10', 655, 4),
  (3, '2022-04-29', 6272, 9),
  (2, '2022-04-20', 090, 7),
  (2, '2021-10-29', 4201, 10),
  (2, '2022-01-28', 6016, 8),
  (3, '2022-01-01', 755, 5),
  (2, '2022-02-20', 5958, 10),
  (3, '2022-03-24', 9894, 2),
  (3, '2022-01-08', 5867, 4),
  (1, '2022-05-06', 9858, 5),
  (1, '2021-02-13', 1240, 5),
  (3, '2021-03-15', 2608, 5),
  (3, '2022-01-07', 5558, 10),
  (2, '2021-01-05', 6068, 9),
  (1, '2021-04-22', 9039, 8),
  (1, '2021-09-05', 1252, 8),
  (2, '2021-01-18', 8840, 10),
  (2, '2021-08-22', 5633, 4),
  (2, '2021-04-13', 9470, 3),
  (3, '2021-08-30', 1110, 3),
  (2, '2021-11-16', 228, 9),
  (3, '2021-08-13', 397, 5),
  (3, '2022-03-13', 1200, 9),
  (1, '2021-08-05', 9986, 4),
  (2, '2022-03-09', 631, 10),
  (3, '2021-10-11', 8590, 2),
  (3, '2022-03-27', 240, 9),
  (1, '2021-02-21', 3392, 5),
  (1, '2021-06-07', 6417, 6),
  (2, '2021-06-18', 6767, 1),
  (3, '2022-05-02', 6018, 8),
  (1, '2021-10-18', 055, 7),
  (3, '2021-12-02', 6993, 3),
  (2, '2021-09-02', 8406, 5),
  (2, '2021-07-07', 7042, 1),
  (3, '2022-03-30', 7889, 1),
  (1, '2021-08-08', 7780, 3),
  (2, '2021-01-04', 7387, 3),
  (2, '2021-02-24', 3739, 9),
  (2, '2021-11-17', 7803, 2),
  (1, '2021-03-16', 3561, 10),
  (3, '2022-03-21', 4892, 4),
  (1, '2022-01-06', 8957, 5),
  (1, '2022-04-17', 5315, 2),
  (2, '2021-03-08', 4998, 2),
  (1, '2022-04-12', 4411, 3),
  (2, '2021-03-19', 8092, 9),
  (2, '2021-07-24', 8149, 1),
  (3, '2022-02-17', 1709, 4),
  (2, '2021-08-30', 8750, 6),
  (3, '2021-10-14', 4865, 4),
  (2, '2021-05-07', 9121, 8),
  (1, '2021-10-04', 4160, 4),
  (2, '2021-07-05', 8075, 8),
  (2, '2021-05-25', 7060, 8),
  (2, '2021-05-22', 2332, 2),
  (1, '2022-05-05', 1659, 10),
  (2, '2021-08-30', 7100, 8),
  (3, '2021-02-27', 4744, 9),
  (2, '2021-03-28', 2144, 1),
  (2, '2021-10-17', 1112, 10),
  (3, '2022-03-15', 6346, 1),
  (3, '2021-11-13', 9696, 1),
  (3, '2021-01-01', 3623, 3),
  (3, '2021-03-18', 2132, 7),
  (3, '2021-12-14', 5396, 8),
  (1, '2021-01-20', 3409, 8),
  (2, '2022-05-01', 017, 2),
  (1, '2021-01-02', 2804, 1),
  (2, '2021-07-23', 8644, 8),
  (3, '2021-09-21', 312, 4),
  (3, '2021-03-28', 6786, 3),
  (3, '2021-04-11', 3815, 7),
  (3, '2021-05-03', 8512, 1),
  (1, '2021-02-21', 5699, 8),
  (3, '2022-03-09', 8441, 2),
  (2, '2021-10-08', 406, 8),
  (1, '2021-07-30', 2193, 6),
  (3, '2021-08-01', 8321, 5),
  (3, '2021-10-27', 5539, 9),
  (3, '2022-03-27', 4751, 3),
  (1, '2021-04-21', 506, 5);

INSERT INTO goals (user_id, end_date, amount)
  VALUES
  (1, '2023-02-08 07:25:00', 3284932),
  (2, '2023-05-04 21:05:50', 219638673),
  (3, '2022-12-21 16:52:43', 323618);