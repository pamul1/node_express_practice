-- Active: 1738290964632@@127.0.0.1@5432@neondb@public
create table users 
(
    user_id SERIAL PRIMARY Key,
    name Text not null,
    email Text unique not null
);

create table products
(
    product_id SERIAL PRIMARY Key,
    name Text not null,
    description Text,
    price Decimal not null,
    stock Integer not null
);

create table orders
(
    order_id SERIAL PRIMARY Key,
    user_id int REFERENCES users(user_id),
    order_date Date DEFAULT current_date,
    status Text check (status in ('Pending', 'Completed'))
);

create table details
(
    detail_id SERIAL PRIMARY Key,
    order_id int REFERENCES orders(order_id),
    product_id int REFERENCES products(product_id),
    quantity Integer not null,
    price Decimal not null
)