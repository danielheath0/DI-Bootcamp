-- CREATE TABLE students(
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (100 ) NOT NULL,
-- 	last_name VARCHAR (100) NOT NULL,
-- 	birth_date DATE NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Mark','Benichou', (to_date('02111998', 'DDMMYYYY')))

-- SELECT * FROM students

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES 
-- ('Yoan','Cohen', (to_date('03122010', 'DDMMYYYY'))),
-- ('Lea','Benichou', (to_date('27071987', 'DDMMYYYY'))),
-- ('Amelia','Dux', (to_date('07041996', 'DDMMYYYY'))),
-- ('David','Grez', (to_date('14062003', 'DDMMYYYY'))),
-- ('Omer','Simpson', (to_date('03101980', 'DDMMYYYY')));

-- DELETE FROM students
-- WHERE id >= 8

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES 
-- ('Daniel','Heath', (to_date('16061986', 'DDMMYYYY')))

-- SELECT * FROM students

-- SELECT first_name, last_name FROM students

-- UPDATE students
-- SET first_name = 'Marc' where first_name = 'Mark'

-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'
-- 
-- SELECT * FROM students
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_'
-- SELECT first_name, last_name FROM students WHERE id = 1 AND id = 3

-- SELECT * FROM students WHERE birth_date >= '2000-01-01'