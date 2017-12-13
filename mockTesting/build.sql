BEGIN;
DROP TABLE IF EXISTS mockTesting CASCADE;

CREATE TABLE mockTesting (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL
);

INSERT INTO mockTesting (name, location)
  VALUES ('Matt', 'Gaza'), ('Eoin', 'London');

COMMIT;
