USE bootcamp;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(50),
    first_name VARCHAR(50),
    birth_date DATE
);
INSERT INTO students (id, first_name, last_name, birth_date)
VALUES
    (1, 'Marc', 'Benichou', '1998-11-02'),
    (2, 'Yoan', 'Cohen', '2010-12-03'),
    (3, 'Lea', 'Benichou', '1987-07-27'),
    (4, 'Amelia', 'Dux', '1996-04-07'),
    (5, 'David', 'Grez', '2003-06-14'),
    (6, 'Omer', 'Simpson', '1980-10-03');
SELECT * FROM students;
SELECT first_name, last_name FROM students;
SELECT * FROM students WHERE id = 2;
SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';
SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';
SELECT * FROM students WHERE first_name LIKE '%a%';
SELECT * FROM students WHERE first_name LIKE 'a%';
SELECT * FROM students WHERE first_name LIKE '%a';
SELECT * FROM students WHERE first_name LIKE '%a_';
SELECT * FROM students WHERE id IN (1, 3);
SELECT * FROM students WHERE birth_date >= '2000-01-01';

