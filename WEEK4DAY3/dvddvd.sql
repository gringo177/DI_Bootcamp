
SELECT COUNT(return_date) FROM rental; --15861


SELECT COUNT(*) FROM rental
WHERE return_date IS NULL  --183


SELECT film.title, film.replacement_cost
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
ORDER BY replacement_cost DESC
LIMIT 30



SELECT title, description, fulltext
FROM film
INNER JOIN film_actor AS fa ON film.film_id = fa.film_id
INNER JOIN actor ON actor.actor_id = fa.actor_id
WHERE description ILIKE '%sumo wrestler%'
AND first_name ILIKE '%penelope%'
AND last_name ILIKE '%monroe%'


SELECT title,  category.name, film.length
FROM film
INNER JOIN film_category AS fc ON film.film_id = fc.film_id
INNER JOIN category ON category.category_id = fc.category_id
WHERE category.name ILIKE '%documentary%'
AND film.length < 60
AND rating = 'R'


SELECT film.title, payment.amount, customer.first_name, customer.last_name 
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
INNER JOIN payment ON rental.rental_id = payment.rental_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE payment.amount > 4 AND
customer.first_name = 'Matthew' AND
customer.last_name = 'Mahan'
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'


SELECT film.title, film.replacement_cost
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer ON customer.customer_id = rental.customer_id
WHERE 
customer.first_name = 'Matthew' 
AND
customer.last_name = 'Mahan'
AND (title ILIKE '%boat%' OR description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC