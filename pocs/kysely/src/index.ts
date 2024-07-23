import { sql } from 'kysely';

import { database } from './database';
import { findPersonById } from './person-repository';

// TODO ? fix this
(async () => {
    // create tables
    await database.schema
        .createTable('person')
        .addColumn('id', 'integer', (col) => col.primaryKey())
        .addColumn('first_name', 'text', (col) => col.notNull())
        .addColumn('last_name', 'text')
        .addColumn('gender', 'text', (col) => col.notNull())
        .addColumn('created_at', 'text', (col) =>
            col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull(),
        )
        .execute();

    await database.schema
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
    await database
        .insertInto('person')
        .values({
            first_name: 'Jennifer',
            gender: 'woman',
            last_name: 'Aniston',
        })
        .executeTakeFirst();

    // get all persons
    const persons = await database
        .selectFrom('person')
        .select(['person.id', 'first_name'])
        .execute();

    // get Jennifer Aniston
    const person = await database
        .selectFrom('person')
        .select(['id', 'first_name', 'last_name', 'created_at', 'gender'])
        .where('id', '=', 1)
        .execute();

    const person2 = await findPersonById(1);

    console.log({ person, person2, persons });
})();
