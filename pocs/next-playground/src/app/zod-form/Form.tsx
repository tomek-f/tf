'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';

import {
    UserFormSchemaWithAddress,
    type UserFormWithAddress,
} from '../../models/User';

// TODO ? optimize tailwind classes and components

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
                className="bg-green-600 rounded p-2 mb-2 text-white"
                onClick={() => trigger()}
                type="button"
            >
                Display Data Requirements
            </button>
            <form
                className="flex flex-col max-w-screen-3xl gap-2 mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="text-xl text-white" htmlFor="name">
                    Name:
                </label>
                <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="John Doe"
                />
                {errors.name && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
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
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="johndoe90"
                />
                {errors.username && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
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
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="johndoe90@hotmail.com"
                />
                {errors.email && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
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
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="555 Sycamore St."
                />
                {errors?.address?.street && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
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
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="212 B"
                />
                {errors?.address?.suite && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
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
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="Kansas City"
                />
                {errors?.address?.city && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
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
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="55555-1234"
                />
                {errors?.address?.zipcode && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                        {errors.address.zipcode?.message}
                    </p>
                )}

                <label className="text-xl text-white" htmlFor="phone">
                    Phone:
                </label>
                <input
                    type="tel"
                    {...register('phone')}
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="555-555-5555"
                />
                {errors.phone && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
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
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="https://your-website.com"
                />
                {errors.website && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
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
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="Acme Co."
                />
                {errors?.company?.name && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
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
                    className="rounded-md text-xl p-2 text-black"
                    placeholder="Coyote's One Stop Shop"
                />
                {errors?.company?.catchPhrase && (
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                        {errors.company.catchPhrase?.message}
                    </p>
                )}

                <button
                    className="text-3xl bg-orange-600 p-2 rounded-md max-w-[10rem] text-white"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
