import React from 'react';
import { useForm } from 'react-hook-form';
import { type SignUpFormData, SignUpPageSchema } from './SignUpPage.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import apiService from '../../utils/apiService';

const SignUpPage = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<SignUpFormData>({
		resolver: yupResolver(SignUpPageSchema),
	});

	const onSubmit = async (data: SignUpFormData) => {
		try {
			await apiService.create(data);
		} catch (e: unknown) {
			alert(e);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>First Name</label>
				</div>
				<input
					aria-label="firstName"
					type="text"
					placeholder={'placeholder'}
					{...register('firstName')}
				></input>
				{errors.firstName != null && <div>{errors.firstName.message}</div>}
				<div>
					<label>Middle Name</label>
				</div>
				<input
					aria-label="middleName"
					type="text"
					placeholder={'placeholder'}
					{...register('middleName')}
				></input>
				{errors.middleName != null && <div>{errors.middleName.message}</div>}
				<div>
					<label>Surname</label>
				</div>
				<input
					aria-label="surName"
					type="text"
					placeholder={'placeholder'}
					{...register('surName')}
				></input>
				{errors.surName != null && <div>{errors.surName.message}</div>}
				<div>
					<label>Email</label>
				</div>
				<input
					aria-label="email"
					type="text"
					placeholder={'placeholder'}
					{...register('email')}
				></input>
				{errors.email != null && <div>{errors.email.message}</div>}
				<div>
					<label>Confirm email</label>
				</div>
				<input
					aria-label="confirmEmail"
					type="text"
					placeholder={'placeholder'}
					{...register('confirmEmail')}
				></input>
				{errors.confirmEmail != null && (
					<div>{errors.confirmEmail.message}</div>
				)}
				<div>
					<label>Address 1</label>
				</div>
				<input
					aria-label="address1"
					type="text"
					placeholder={'placeholder'}
					{...register('address1')}
				></input>
				{errors.address1 != null && <div>{errors.address1.message}</div>}
				<div>
					<label>Address 2</label>
				</div>
				<input
					aria-label="address2"
					type="text"
					placeholder={'placeholder'}
					{...register('address2')}
				></input>
				{errors.address2 != null && <div>{errors.address2.message}</div>}
				<div>
					<label>Postcode</label>
				</div>
				<input
					aria-label="postcode"
					type="text"
					placeholder={'placeholder'}
					{...register('postcode')}
				></input>
				{errors.postcode != null && <div>{errors.postcode.message}</div>}
				<div>
					<label>City / Town</label>
				</div>
				<input
					aria-label="cityTown"
					type="text"
					placeholder={'placeholder'}
					{...register('cityTown')}
				></input>
				{errors.cityTown != null && <div>{errors.cityTown.message}</div>}
				<div>
					<label>Password</label>
				</div>
				<input
					aria-label="password"
					type="text"
					placeholder={'placeholder'}
					{...register('password')}
				></input>
				{errors.password != null && <div>{errors.password.message}</div>}
				<div>
					<label>Confirm password</label>
				</div>
				<input
					aria-label="confirmPassword"
					type="text"
					placeholder={'placeholder'}
					{...register('confirmPassword')}
				></input>
				{errors.confirmPassword != null && (
					<div>{errors.confirmPassword.message}</div>
				)}
				<div>
					<input type="submit" />
				</div>
			</form>
		</div>
	);
};

export default SignUpPage;
