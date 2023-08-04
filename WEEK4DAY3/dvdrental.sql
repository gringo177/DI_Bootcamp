SELECT * FROM language;
SELECT film.title, film.description, language.name AS language_name
FROM film
LEFT JOIN language ON film.language_id = language.id;
SELECT film.title, film.description, language.name AS language_name
FROM language
LEFT JOIN film ON language.id = film.language_id;
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
INSERT INTO new_film (name) VALUES
    ('Film 1'),
    ('Film 2'),
    ('Film 3');
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(id),
    title VARCHAR(255),
    score INTEGER CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP
);
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES
    (1, 1, 'Great Movie', 9, 'This movie was amazing!', NOW()),
    (2, 2, 'Could be better', 6, 'The movie had its moments, but it could be improved.', NOW());
