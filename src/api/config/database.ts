import SQLiteDatabase, { Database } from 'better-sqlite3';
let database: Database;

const connection = (): Promise<void> => {
    return new Promise((resolve) => {
        database = new SQLiteDatabase('leboncwoin.db');
        loadDatabase(database);
        return resolve();
    });
}

const loadDatabase = (database: Database): void => {
    database.prepare(
        `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            identifiant VarChar2(255) NOT NULL)`).run()

    database.prepare(
        `CREATE TABLE IF NOT EXISTS annonces (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titre VarChar2(255) NOT NULL,
            description VarChar2(255) NOT NULL,
            prix INTEGER NOT NULL,
            id_user INTEGER NOT NULL,
            FOREIGN KEY (id_user) REFERENCES users(id))`).run()
}

export { connection, database}