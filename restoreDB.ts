import db from './src/models/connection';

(async () => {
  await db.execute('DROP SCHEMA IF EXISTS Trybesmith;');
  await db.execute('CREATE SCHEMA IF NOT EXISTS Trybesmith');

  await db.execute(`
  CREATE TABLE
      Trybesmith.Users (
          id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
          username TEXT NOT NULL,
          classe TEXT NOT NULL,
          level INTEGER NOT NULL,
          password TEXT NOT NULL
      );`);

  await db.execute(`
  CREATE TABLE
      Trybesmith.Orders (
          id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
          userId INTEGER,
          FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
      );
  `);

  await db.execute(`
  CREATE TABLE
      Trybesmith.Products (
          id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          amount TEXT NOT NULL,
          orderId INTEGER,
          FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
      );
  `);

  await db.execute(`
  INSERT INTO
      Trybesmith.Users (
          username,
          classe,
          level,
          password
      )
  VALUES (
          "reigal",
          "Guerreiro",
          10,
          "1dragaonoceu"
      );
  `);

  await db.execute(`
  INSERT INTO
      Trybesmith.Users (
          username,
          classe,
          level,
          password
      )
  VALUES (
          "vyrion",
          "Inventor",
          8,
          "pagandodividas"
      );
  `);

  await db.execute(`
  INSERT INTO
      Trybesmith.Users (
          username,
          classe,
          level,
          password
      )
  VALUES (
          "yraa",
          "Ladina",
          5,
          "valarmorg"
      );
  `);

  await db.execute('INSERT INTO Trybesmith.Orders (userId) VALUES (1);');
  await db.execute('INSERT INTO Trybesmith.Orders (userId) VALUES (3);');
  await db.execute('INSERT INTO Trybesmith.Orders (userId) VALUES (2);');

  await db.execute(`
  INSERT INTO
      Trybesmith.Products (name, amount)
  VALUES (
          "Espada curta",
          "10 peças de ouro"
      );
  `);

  await db.execute(`
  INSERT INTO
      Trybesmith.Products (name, amount, orderId)
  VALUES (
          "Escudo desnecessariamente grande",
          "20 peças de ouro",
          1
      );
  `);

  await db.execute(`
  INSERT INTO
      Trybesmith.Products (name, amount, orderId)
  VALUES (
          "Adaga de Aço Valírico",
          "1 peça de ouro",
          2
      );
  `);

  await db.execute(`
  INSERT INTO
      Trybesmith.Products (name, amount, orderId)
  VALUES (
          "Engenhoca aleatória",
          "15 peças de ouro",
          3
      );
  `);

  console.log('Banco restaurado');
  db.end();
})();