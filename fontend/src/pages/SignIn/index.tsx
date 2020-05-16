import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { Container } from './styles';
import SignUp from '../SignUp';
import api from '../../services/api';

const SignIn: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setIsEmail] = useState('');
    const [password, setIsPassword] = useState('');
    const history = useHistory();
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post('sessions', {
                email,
                password,
            });
            console.log(response.data.email);

            localStorage.setItem('SESSION_TOKEN', response.data.token);
            localStorage.setItem('EMAIL', email);

            return history.push('/Dashboard');
        } catch (err) {
            alert('Falha no login, gentileza tente novamente.');
        }
    };

    return (
        <Container>
            <div>
                <FaTwitter size={37} />
                <h1>Entrar no Twitter</h1>
                <form onSubmit={handleLogin}>
                    <label>Entre com seu e-mail</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setIsEmail(e.target.value)}
                    />
                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setIsPassword(e.target.value)}
                    />

                    <button>Entrar</button>
                </form>
                <span>Esqueceu sua senha?</span>
                <Link to="/" onClick={() => setIsSignUp(true)}>
                    <strong>Inscrever-se no Twitter</strong>
                </Link>
                {isSignUp ? (
                    <SignUp onClose={() => setIsSignUp(false)} />
                ) : null}
            </div>
        </Container>
    );
};

export default SignIn;
