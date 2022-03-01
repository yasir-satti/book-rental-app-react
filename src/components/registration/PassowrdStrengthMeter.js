import zxcvbn from 'zxcvbn';
import './PasswordStrengthMeter.css';

const PasswordStrengthMeter = (props) => {
	const { password } = props;
	const testedResult = zxcvbn(password);

	const createPasswordLabel = (result) => {
		switch (result.score) {
			case 0:
				return 'Weak';
			case 1:
				return 'Weak';
			case 2:
				return 'Fair';
			case 3:
				return 'Good';
			case 4:
				return 'Strong';
			default:
				return 'Weak';
		}
	};

	return (
		<>
			<div>
				<progress
					className={`password-strength-meter-progress strength-${createPasswordLabel(
						testedResult,
					)}`}
					value={testedResult.score}
					max="4"
				/>
				<br />
				<strong>Password strength:</strong> {createPasswordLabel(testedResult)}
			</div>
			<label>{password}</label>
		</>
	);
};

export default PasswordStrengthMeter;
