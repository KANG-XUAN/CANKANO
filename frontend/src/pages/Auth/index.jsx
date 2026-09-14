/* pages/Auth/index.jsx */

import './index.css';

import Background from './Background';
import AuthCards from './AuthCards';

const Auth = () => {
	return (
		<main className="auth-page">

			<Background />

			<div className="auth-page__content">
				<AuthCards />
			</div>

		</main>
	);
};

export default Auth;
