import * as yup from 'yup';

export const RegistrationPageSchema = yup.object({
    firstName: yup.string()
                .required('First name is required')
                .min(2, 'First name must be at least 2 characters')
                .max(30, 'First name must not exceed 30 characters'),
    middleName: yup.string().notRequired(),
    surName: yup.string()
                .required('Surname is Required')
                .min(2, 'Surname must be at least 2 characters')
                .max(30, 'Surname must not exceed 30 characters'),
    email: yup.string()
                .required('Email is required')
                .email('Email is invalid')
                .matches(
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                    'Enter valid email'),
    confirmEmail: yup.string()
                .required('Email confirmation is required')
                .email('Email invalid')
                .oneOf([yup.ref('email')], 'Confirm Email does not match'),
    address1: yup.string()
                .required('Address 1 is required')
                .min(2, 'Address 1 must be at least 2 characters')
                .max(30, 'Address 1 must not exceed 30 characters'),
    address2: yup.string()
                .required('Address 2 is required')
                .min(2, 'Address 2 must be at least 2 characters')
                .max(30, 'Address 2 must not exceed 30 characters'),
    cityTown: yup.string()
                .required('City / Town is required')
                .min(2, 'CityTown must be at least 2 characters')
                .max(30, 'CityTwn must not exceed 30 characters'),
    postcode: yup.string()
                .required('Postcode is required')
                .matches(
                    /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/,
                    'Post code must confirm to UK post code format with letters in CAPITAL'
                ),
    password: yup.string()
                .required('Password is required'),
                // .matches(
                //     /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
                //     'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
                //   ),
    confirmPassword: yup.string()
                    .required('Password confirmation is required')
                    .oneOf([yup.ref('password')], 'Confirm Password does not match'),
});

export type RegistrationFormData = yup.InferType<typeof RegistrationPageSchema>;
