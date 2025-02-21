import PropTypes from 'prop-types';/*sin el, da error en la validación de props*/
import { useState } from 'react';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');/* cotrola los cambios del email */
    const [isValidEmail, setIsValidEmail] = useState(false);/* controla validacion del email y lo setea a falso o verdadero */
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);
    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(value);
        setIsValidEmail(isValid);
        setShowEmailTooltip(!isValid && value.length > 0);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        const isValid = passwordRegex.test(value);
        setIsValidPassword(isValid);
        setShowPasswordTooltip(!isValid && value.length > 0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValidEmail && isValidPassword) {
            onLogin();
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700" id="label-email">Email</label>
                        <div className="relative">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {showEmailTooltip && (
                                <div className="absolute top-full left-0 mt-1 bg-red-500 text-white text-sm px-2 py-1 rounded shadow-md">
                                    Please enter a valid email address
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700" id="label-password">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {showPasswordTooltip && (
                                <div className="absolute top-full left-0 mt-1 bg-red-500 text-white text-sm px-2 py-1 rounded shadow-md">
                                    Password must be at least 6 characters long, include uppercase and lowercase letters, and at least one number
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="button-login"
                        disabled={!isValidEmail || !isValidPassword}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

// Validación de props
Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;
