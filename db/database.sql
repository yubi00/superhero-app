/* create db superhero */
CREATE DATABASE superhero;

/*create table superheroes */
CREATE TABLE superheroes (
    id serial NOT NULL PRIMARY KEY,
	superhero json NOT NULL
);

/* insert superhero into table superheroes (featured) */
INSERT INTO superheroes (superhero)
VALUES ('{"id": "4",
      "name": "Abomination",
      "powerstats": {
        "intelligence": "63",
        "strength": "80",
        "speed": "53",
        "durability": "90",
        "power": "62",
        "combat": "95"
      },
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/1.jpg"}');

/* query to select particular superhero based on their superhero id*/
SELECT * FROM superheroes WHERE superhero ->> 'id' = '4';

