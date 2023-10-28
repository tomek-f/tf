import { z } from 'zod';

export const BasicUserSchema = z.object({
    company: z.object({
        catchPhrase: z.string().optional(),
        name: z.string().trim().min(5, {
            message: 'Company name must be 5 or more characters long',
        }),
    }),
    email: z.string().email().trim().toLowerCase(),
    name: z
        .string()
        .trim()
        .min(2, { message: 'Name must be 2 or more characters long' }),
    phone: z
        .string()
        .min(10, { message: 'Phone numbers are a minimum of 10 digits' }),
    // .regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
    // .length(10, { message: "Ten numbers are required" })
    // .transform(val => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`)
    username: z
        .string()
        .trim()
        .toLowerCase()
        .min(4, { message: 'Username must be 4 or more characters long' }),
    //website: z.string().trim().toLowerCase().url().optional(),
    website: z
        .string()
        .trim()
        .toLowerCase()
        .min(5, { message: 'URLs must be a minimum of 5 characters' })
        .refine((value) => value.includes('.'), {
            message: 'Invalid URL',
        })
        .optional(),
});

const UserAddressSchema = z.object({
    city: z
        .string()
        .trim()
        .min(2, { message: 'City must be 2 or more characters long' }),
    street: z
        .string()
        .trim()
        .min(5, { message: 'Street must be 5 or more characters long' }),
    suite: z.string().trim().optional(),
    // TODO ? fix this
    // eslint-disable-next-line unicorn/better-regex
    zipcode: z.string().regex(/^\d{5}(?:[-\s]\d{4})?$/, {
        message: 'Must be 5 digit zip. Optional 4 digit extension allowed.',
    }),
});

const UserAddressSchemaWithGeo = UserAddressSchema.extend({
    geo: z.object({
        lat: z.string(),
        lng: z.string(),
    }),
});

const HasIDSchema = z.object({ id: z.number().int().positive() });

export const UserFormSchemaWithAddress = BasicUserSchema.extend({
    address: UserAddressSchema,
});

export const UserSchemaWithAddress =
    UserFormSchemaWithAddress.merge(HasIDSchema);

export const UserSchemaWithGeo = BasicUserSchema.extend({
    address: UserAddressSchemaWithGeo,
}).merge(HasIDSchema);

export type UserFormWithAddress = z.infer<typeof UserFormSchemaWithAddress>;

export type UserWithAddress = z.infer<typeof UserSchemaWithAddress>;

export type UserWithGeo = z.infer<typeof UserSchemaWithGeo>;
