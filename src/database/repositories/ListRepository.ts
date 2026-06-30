import { db } from "../connection";
import { List } from "../models/List";

export async function createList(list: List) {
    await db.runAsync(
        `
        INSERT INTO list
        (name, description, color, type)
        VALUES (?, ?, ?, ?)
        `,
        [
            list.name,
            list.description ?? null,
            list.color ?? null,
            list.type
        ]
    );
}