import { db } from './database';

(async () => {
    const result = await db
        .insertInto('person')
        .values({
            first_name: 'Jennifer',
            last_name: 'Aniston',
            gender: 'woman',
        })
        .executeTakeFirst();

    console.log(result.insertId, result);
})();
