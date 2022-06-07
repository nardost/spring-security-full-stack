create table users(
    id uuid not null unique,
    email varchar(320) not null unique,
    phone varchar(15) not null,
    full_name varchar(255) not null,
    password_hash varchar(60),
    primary key (id)
);
