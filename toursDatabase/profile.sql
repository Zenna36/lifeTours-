CREATE TABLE IF NOT EXISTS profile (
    id INT UNSIGNED AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    user_name VARCHAR(50),
    phone_number VARCHAR(30),
    email VARCHAR(50),
    CONSTRAINT PRIMARY KEY (id)
);

INSERT INTO profile
    (first_name, last_name, user_name, phone_number, email)
VALUES
    ('charles', 'wells', 'zenna36', '769-798-5891', 'cvwellsiv@gmail.com')