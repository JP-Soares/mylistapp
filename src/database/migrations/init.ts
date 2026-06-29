import { db } from "../connection";

export async function initDatabase() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS list (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      color INTEGER,
      type INTEGER
    );

    CREATE TABLE IF NOT EXISTS ItemToDo (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_list INTEGER NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      done INTEGER DEFAULT 0,
      color INTEGER,
      created_at TEXT,
      FOREIGN KEY(id_list) REFERENCES list(id)
      ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS SubItemToDo (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_item INTEGER NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      done INTEGER DEFAULT 0,
      created_at TEXT,
      FOREIGN KEY(id_item) REFERENCES ItemToDo(id)
      ON DELETE CASCADE
    );
  `);
}