import { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

export default function Loggin() {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);

    const toggleForm = () => {
        setShowRegistrationForm(!showRegistrationForm);
    };

    return (
        <div>
            {showRegistrationForm ? (
                <RegistrationForm toggleForm={toggleForm} />
            ) : (
                <LoginForm toggleForm={toggleForm} />
            )}
        </div>
    );
}
