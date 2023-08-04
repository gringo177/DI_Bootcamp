UPDATE film
SET language_id = new_language_id
WHERE film_id = specific_film_id;
SELECT constraint_name, table_name, column_name, referenced_table_name, referenced_column_name
FROM information_schema.key_column_usage
WHERE referenced_table_name = 'customer';
DROP TABLE customer_review;
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;
SELECT film.title, film.rental_rate
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;
SELECT title
FROM film
WHERE description LIKE '%sumo wrestler%' AND film_id IN (
    SELECT film_id
    FROM film_actor
    WHERE actor_id IN (
        SELECT actor_id
        FROM actor
        WHERE first_name = 'Penelope' AND last_name = 'Monroe'
    )
);
SELECT title
FROM film
WHERE length < 60 AND rating = 'R';
SELECT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
    AND rental.rental_rate > 4.00
    AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';
SELECT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
    AND (film.title LIKE '%boat%' OR film.description LIKE '%boat%')
    AND film.replacement_cost > 30.00;
