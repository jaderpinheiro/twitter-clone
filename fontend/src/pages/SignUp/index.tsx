import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container, Content } from './styles';

const SignUp = ({ onClose = () => {} }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post('users', {
                email,
                password,
            });

            localStorage.setItem('EMAIL', email);

            alert(`Cadastro realizado com sucesso! ${response.data.id}`);

            setEmail('');
            setPassword('');

            return history.push('/');
        } catch (err) {
            alert(`Ocorreu algum erro! Conferir Email e Senha`);
            setEmail('');
            setPassword('');
        }
    };
    return (
        <Container>
            <Content>
                <div>
                    <header>
                        <button onClick={onClose}>
                            <RiCloseLine size={28} />
                        </button>
                        <p>Cadastrar novo usuário</p>
                    </header>
                    <form onSubmit={handleRegister}>
                        <label>Digite seu email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button>Cadastrar</button>
                    </form>
                </div>
            </Content>
        </Container>
    );
};

export default SignUp;
