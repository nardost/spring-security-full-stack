create table users(
    id uuid not null unique,
    email varchar(320) not null unique,
    country_code(6) not null,
    phone_number varchar(13) not null,
    full_name varchar(255) not null,
    password_hash varchar(60),
    primary key (id)
);
