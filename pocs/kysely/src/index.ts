import { sql } from 'kysely';

import { db } from './database';

(async () => {
    // create tables
    await db.schema
        .createTable('person')
        .addColumn('id', 'integer', (col) => col.primaryKey())
        .addColumn('first_name', 'text', (col) => col.notNull())
        .addColumn('last_name', 'text')
        .addColumn('gender', 'text', (col) => col.notNull())
        .addColumn('created_at', 'text', (col) =>
            col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
        )
        .execute();

    await db.schema
        .createTable('pet')
        .addColumn('id', 'integer', (col) => col.primaryKey())
        .addColumn('name', 'text', (col) => col.notNull().unique())
        .addColumn('owner_id', 'integer', (col) =>
            col.references('person.id').onDelete('cascade').notNull(),
        )
        .addColumn('species', 'text', (col) => col.notNull())
        .execute();

    // await db.schema
    //     .createIndex('pet_owner_id_index')
    //     .on('pet')
    //     .column('owner_id')
    //     .execute();

    // add Jennifer Aniston
    await db
        .insertInto('person')
        .values({
            first_name: 'Jennifer',
            last_name: 'Aniston',
            gender: 'woman',
        })
        .executeTakeFirst();

    // get all persons
    const persons = await db
        .selectFrom('person')
        .select(['person.id', 'first_name'])
        .execute();

    // get Jennifer Aniston
    const person = await db
        .selectFrom('person')
        .select(['id', 'first_name', 'last_name', 'created_at', 'gender'])
        .where('id', '=', 1)
        .execute();

    const person2 = await db
        .selectFrom('person')
        .selectAll()
        .where('first_name', '=', 'Jennifer')
        .execute();

    console.log({ persons, person, person2 });
})();
