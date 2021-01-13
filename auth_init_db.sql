CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar,
  password_hash varchar,
  logged_in_token varchar -- less of a hustle than JWT management
);
