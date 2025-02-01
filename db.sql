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