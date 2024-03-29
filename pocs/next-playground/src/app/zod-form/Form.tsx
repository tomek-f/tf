'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';

import {
    UserFormSchemaWithAddress,
    type UserFormWithAddress,
} from '../../models/user';

export default function Form() {
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors, isValid },
    } = useForm<UserFormWithAddress>({
        resolver: zodResolver(UserFormSchemaWithAddress),
    });

    const onSubmit: SubmitHandler<UserFormWithAddress> = (data) => {
        console.log(data.name);
        console.log(data);
    };

    console.log(isValid);

    return (
        <>
            <button
                className="mb-2 rounded bg-green-600 p-2 text-white"
                onClick={() => trigger()}
                type="button"
            >
                Display Data Requirements
            </button>
            <form
                className="max-w-screen-3xl mx-auto flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="text-xl text-white" htmlFor="name">
                    Name:
                </label>
                <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="John Doe"
                />
                {errors.name && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.name?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="username">
                    Username:
                </label>
                <input
                    id="username"
                    type="text"
                    {...register('username')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="johndoe90"
                />
                {errors.username && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.username?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="email">
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="johndoe90@hotmail.com"
                />
                {errors.email && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.email?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="street">
                    Street:
                </label>
                <input
                    id="street"
                    type="text"
                    {...register('address.street')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="555 Sycamore St."
                />
                {errors?.address?.street && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.address.street?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="suite">
                    Suite/Apt:
                </label>
                <input
                    id="suite"
                    type="text"
                    {...register('address.suite')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="212 B"
                />
                {errors?.address?.suite && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.address.suite?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="city">
                    City:
                </label>
                <input
                    id="city"
                    type="text"
                    {...register('address.city')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="Kansas City"
                />
                {errors?.address?.city && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.address.city?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="zipcode">
                    Zip Code:
                </label>
                <input
                    id="zipcode"
                    type="text"
                    {...register('address.zipcode')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="55555-1234"
                />
                {errors?.address?.zipcode && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.address.zipcode?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="phone">
                    Phone:
                </label>
                <input
                    type="tel"
                    {...register('phone')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="555-555-5555"
                />
                {errors.phone && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.phone?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="website">
                    Website:
                </label>
                <input
                    id="website"
                    type="text"
                    {...register('website')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="https://your-website.com"
                />
                {errors.website && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.website?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="company-name">
                    Company Name:
                </label>
                <input
                    id="company-name"
                    type="text"
                    {...register('company.name')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="Acme Co."
                />
                {errors?.company?.name && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.company.name?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="company-slogan">
                    Company Slogan:
                </label>
                <input
                    id="company-slogan"
                    type="text"
                    {...register('company.catchPhrase')}
                    className="rounded-md p-2 text-xl text-black"
                    placeholder="Coyote's One Stop Shop"
                />
                {errors?.company?.catchPhrase && (
                    <p className="self-start rounded-md bg-yellow-100 px-2 py-1 italic text-red-500">
                        {errors.company.catchPhrase?.message}
                    </p>
                )}

                <button
                    className="max-w-[10rem] rounded-md bg-orange-600 p-2 text-3xl text-white"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
