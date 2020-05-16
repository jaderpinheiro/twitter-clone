import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { Container, Content } from './styles';
import Banner from '../banner';
import Avatar from '../avatar';
import api from '../../services/api';

const Modal = ({ onClose = () => {} }) => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [site, setSite] = useState('');
    const [dta_nascimento, setDta_nacimento] = useState('');

    const handlePerfil = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post('perfil', {
                name,
                bio,
                localizacao,
                site,
                dta_nascimento,
            });

            alert('Cadastro salvo com sucesso!');
        } catch (err) {
            alert(`Ocorreu algum erro! Conferir Cadastro`);
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
                        <p>Editar perfil</p>
                    </header>
                </div>

                <div>
                    <body>
                        <Banner name="avatar_id" />
                        <Avatar name="avatar_id" />
                    </body>
                </div>

                <div>
                    <form onSubmit={handlePerfil}>
                        <p>Nome</p>
                        <input
                            placeholder="Adicione seu nome"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p>Bio</p>
                        <input
                            placeholder="Adicione sua Bio"
                            type="text"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                        <p>Localização</p>
                        <input
                            placeholder="Adicione sua localização"
                            type="text"
                            value={localizacao}
                            onChange={(e) => setLocalizacao(e.target.value)}
                        />
                        <p>Site</p>
                        <input
                            placeholder="Adicione seu site"
                            type="text"
                            value={site}
                            onChange={(e) => setSite(e.target.value)}
                        />

                        <p>Data de nascimento</p>
                        <input
                            placeholder="Adicione sua data de nascimento"
                            type="text"
                            value={dta_nascimento}
                            onChange={(e) => setDta_nacimento(e.target.value)}
                        />
                        <button>Salvar</button>
                    </form>
                </div>
            </Content>
        </Container>
    );
};

export default Modal;
