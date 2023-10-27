import { test2 } from './actions';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const createItem = async (formData: FormData) => {
    await delay(1000);

    return formData.get('name') + '_123';
};

export default function Page() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    async function test(formData: FormData) {
        'use server';

        const id = await createItem(formData);

        console.log('test', id);
    }

    return (
        <>
            <form action={test}>
                <input className="text-black" name="name" type="text" />
                <button type="submit">Submit 1</button>
            </form>
            <form action={test2}>
                <button type="submit">Submit 2</button>
            </form>
            <form>
                <button
                    formAction={async () => {
                        'use server';

                        await delay(2000);

                        console.log('test 3');
                    }}
                    type="submit"
                >
                    Submit 4
                </button>
            </form>
        </>
    );
}
