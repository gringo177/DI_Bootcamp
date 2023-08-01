CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);
SELECT * FROM actors WHERE last_name LIKE '%mon%';
SELECT * FROM actors LIMIT 1;
SELECT * FROM actors WHERE age > '1960-01-01' LIMIT 1;
SELECT * FROM actors WHERE age > '1960-01-01' LIMIT 3 OFFSET 2;
UPDATE actors 
SET age='1970-01-01' 
WHERE first_name='Matt' AND last_name='Damon'
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age;
	DELETE FROM actors WHERE actor_id=4
RETURNING actor_id, first_name, last_name, number_oscars;

 

SELECT COUNT(*) AS actor_count FROM actors;
INSERT INTO actors (first_name, last_name) VALUES ('John', '');
