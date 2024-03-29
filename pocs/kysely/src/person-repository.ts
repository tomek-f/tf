import { database } from './database';
import type { NewPerson, Person, PersonUpdate } from './types';

export async function findPersonById(id: number) {
    return await database
        .selectFrom('person')
        .where('id', '=', id)
        .selectAll()
        .executeTakeFirst(); // or just execute
}

export async function findPeople(criteria: Partial<Person>) {
    let query = database.selectFrom('person');

    if (criteria.id) {
        query = query.where('id', '=', criteria.id); // Kysely is immutable, you must re-assign!
    }

    if (criteria.first_name) {
        query = query.where('first_name', '=', criteria.first_name);
    }

    if (criteria.last_name !== undefined) {
        query = query.where(
            'last_name',
            criteria.last_name === null ? 'is' : '=',
            criteria.last_name,
        );
    }

    if (criteria.gender) {
        query = query.where('gender', '=', criteria.gender);
    }

    if (criteria.created_at) {
        query = query.where('created_at', '=', criteria.created_at);
    }

    return await query.selectAll().execute();
}

export async function updatePerson(id: number, updateWith: PersonUpdate) {
    await database
        .updateTable('person')
        .set(updateWith)
        .where('id', '=', id)
        .execute();
}

export async function createPerson(person: NewPerson) {
    return await database
        .insertInto('person')
        .values(person)
        .returningAll()
        .executeTakeFirstOrThrow();
}

export async function deletePerson(id: number) {
    return await database
        .deleteFrom('person')
        .where('id', '=', id)
        .returningAll()
        .executeTakeFirst();
}
