CREATE TABLE employees (
  id INT NOT NULL,
  name VARCHAR NOT NULL,
  boss_id INT
);

INSERT INTO 
  employees (id, name, boss_id) 
VALUES 
  (1, 'Big Boss', NULL),
  (2, 'Employee 1', 1),
  (3, 'Independent Guy', NULL);