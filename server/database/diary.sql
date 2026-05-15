DROP TABLE IF EXISTS diary;


CREATE TABLE diary (
    id int GENERATED ALWAYS AS IDENTITY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    category varchar(20),
    entry varchar(500) NOT NULL,
    PRIMARY KEY (id)
);