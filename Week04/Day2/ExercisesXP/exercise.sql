-- Active: 1710674884574@@127.0.0.1@5432@dvdrental@public
-- SELECT * FROM customer
-- SELECT concat(first_name, ' ', last_name) AS full_name from customer 
-- SELECT DISTINCT create_date FROM customer
-- SELECT * FROM customer ORDER BY first_name DESC
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate
-- SELECT address, phone FROM address WHERE district = 'Texas'
-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150 
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'In Bruges'
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'In%'
-- SELECT title, rental_rate from film ORDER BY rental_rate LIMIT 10
-- SELECT * FROM (SELECT title, rental_rate, ROW_NUMBER() OVER (ORDER BY rental_rate) AS rn FROM film) WHERE rn BETWEEN 11 and 20

-- SELECT c.first_name, c.last_name, p.amount, p.payment_date 
-- FROM customer AS c
-- INNER JOIN payment AS p
-- ON c.customer_id = p.customer_id
-- ORDER BY c.customer_id

-- SELECT film.title, inv.film_id, inv.store_id, inv.last_update FROM film as film 
-- LEFT JOIN inventory as inv
-- ON film.film_id = inv.film_id
-- WHERE inv.store_id IS NULL

-- SELECT city.city, country.country 
-- FROM city 
-- LEFT JOIN country
-- ON city.country_id = country.country_id

-- SELECT payment.staff_id, payment.amount, payment.payment_date, customer.customer_id, customer.first_name, customer.last_name 
-- FROM payment
-- INNER JOIN customer
-- ON payment.customer_id = customer.customer_id
-- ORDER BY staff_id