-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

-- Q1 Result: 3
-- Q2 Result: 2
-- Q3 Result: 3
-- Q4 Result: ERROR