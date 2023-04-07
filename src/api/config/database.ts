import SQLiteDatabase, { Database } from 'better-sqlite3';
let database: Database;

const connection = (): Promise<void> => {
    return new Promise((resolve) => {
        database = new SQLiteDatabase('kwiz.db');
        loadDatabase(database);
        return resolve();
    });
}

const loadDatabase = (database: Database): void => {
    database.prepare(
        `CREATE TABLE IF NOT EXISTS kwizs
         (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             title VARCHAR NOT NULL
         )`
    ).run();
    database.prepare(
        `CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            kwizId INTEGER NOT NULL,
            question VARCHAR NOT NULL,
            FOREIGN KEY (kwizId) REFERENCES kwizs(id)
            )`).run();
    database.prepare(
        `CREATE TABLE IF NOT EXISTS responses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            questionId INTEGER NOT NULL,
            response VARCHAR NOT NULL,
            correct BOOLEAN NOT NULL,
            FOREIGN KEY (questionId) REFERENCES questions(id)
            )`).run();
}

export { connection, database}