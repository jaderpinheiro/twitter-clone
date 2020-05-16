import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBell, AiOutlineGif, AiOutlineHeart } from 'react-icons/ai';
import { FaTwitter, FaBusinessTime } from 'react-icons/fa';
import {
    RiHome7Line,
    RiFlag2Line,
    RiFileList2Line,
    RiArrowDownSLine,
    RiImageLine,
    RiBarChartGroupedLine,
    RiChat1Line,
    RiSearchLine,
} from 'react-icons/ri';
import { FiHash, FiMail, FiMoreHorizontal } from 'react-icons/fi';
import { MdPermIdentity, MdStarBorder } from 'react-icons/md';
import { GrEmoji } from 'react-icons/gr';
import { GiRecycle } from 'react-icons/gi';
import { BsUpload } from 'react-icons/bs';

import api from '../../services/api';
import Modal from '../../components/modal';
import Search from '../../components/search';

import { Container, Sidebar, Content, Context, Menu } from './styles';

const Dashboard: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [content, setContent] = useState('');
    const [tweet, setTweets] = useState([]);
    const token = localStorage.getItem('SESSION_TOKEN');
    const onCreateTweet = async (e) => {
        e.preventDefault();
        try {
            // const token = localStorage.getItem('SESSION_TOKEN');
            const email = localStorage.getItem('EMAIL');

            const response = await api.post(
                'tweets',
                {
                    content,
                    email,
                },
                {
                    headers: { SESSION_TOKEN: token },
                },
            );
            alert('Twitter criado!');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        api.get('tweets', {
            headers: { SESSION_TOKEN: token },
        }).then((response) => {
            setTweets(response.data.id);
        });
    }, []);

    return (
        <Container>
            <Sidebar>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Dashboard/Dashboard">
                                <span>
                                    <FaTwitter style={{ color: '#1da1f2' }} />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Dashboard"
                                style={{ textDecoration: 'none' }}
                            >
                                <span>
                                    <i>
                                        <RiHome7Line />
                                    </i>
                                    <b>Página Inicial</b>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Dashboard"
                                style={{ textDecoration: 'none' }}
                            >
                                <span>
                                    <FiHash />
                                    Explorar
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Dashboard"
                                style={{ textDecoration: 'none' }}
                            >
                                <span>
                                    <AiOutlineBell />
                                    Notificações
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Dashboard"
                                style={{ textDecoration: 'none' }}
                            >
                                <span>
                                    <FiMail />
                                    Mensagens
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Dashboard"
                                style={{ textDecoration: 'none' }}
                            >
                                <span>
                                    <RiFlag2Line />
                                    Itens salvos
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Dashboard"
                                style={{ textDecoration: 'none' }}
                            >
                                <span>
                                    <RiFileList2Line />
                                    Listas
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Dashboard"
                                style={{ textDecoration: 'none' }}
                            >
                                <span>
                                    <MdPermIdentity />
                                    Perfil
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Dashboard"
                                style={{ textDecoration: 'none' }}
                            >
                                <span>
                                    <FiMoreHorizontal />
                                    Mais
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <button>Tweetear</button>
                    <footer>
                        <Link
                            to="/Dashboard"
                            style={{ textDecoration: 'none' }}
                        >
                            <img src="https://api.adorable.io/avatars/114/.png" />
                            <span>
                                <strong>Jader Borges ...</strong>
                                <p>@JaderBorgesP...</p>
                            </span>
                            <i>
                                <RiArrowDownSLine size={30} />
                            </i>
                        </Link>
                    </footer>
                </nav>
            </Sidebar>

            <Content>
                <Context>
                    <header>
                        <p>Página Inicial</p>
                        <i>
                            <button>
                                <MdStarBorder size={25} />
                            </button>
                        </i>
                    </header>
                    <body>
                        <Link
                            to="/Dashboard"
                            onClick={() => setIsModalVisible(true)}
                        >
                            <img src="https://api.adorable.io/avatars/114/.png" />
                        </Link>
                        <form onSubmit={onCreateTweet}>
                            <textarea
                                placeholder="O que está acontecendo?"
                                rows={4}
                                maxLength={150}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />

                            <p>
                                <i>
                                    <h1>
                                        <Link to="/Dashboard">
                                            <RiImageLine size={26} />
                                        </Link>
                                    </h1>
                                    <h2>
                                        <AiOutlineGif size={22} />
                                    </h2>
                                    <h3>
                                        <RiBarChartGroupedLine size={26} />
                                    </h3>
                                    <h4>
                                        <GrEmoji size={25} />
                                    </h4>
                                    <h5>
                                        <FaBusinessTime size={28} />
                                    </h5>
                                </i>
                                <button>Tweetar</button>
                            </p>
                        </form>
                    </body>
                    <div>
                        <footer>
                            <header>
                                <Link to="/Dashboard">
                                    <img src="https://api.adorable.io/avatars/114/.png" />
                                </Link>
                                <h4>
                                    <b>Adorable Avatar</b>
                                    <span>@AdorableAvatar</span>
                                    <strong>14 H</strong>
                                </h4>

                                <i>
                                    <RiArrowDownSLine size={20} />
                                </i>
                            </header>

                            <p>
                                Lorem ipsum vel scelerisque tempus litora diam
                                primis sapien aliquam, himenaeos porttitor
                                aenean dui praesent neque vulputate torquent
                                euismod, aenean platea diam inceptos euismod ut
                                duis in.
                            </p>
                            <b>
                                <RiChat1Line size={22} />
                                <GiRecycle size={22} />
                                <AiOutlineHeart size={22} />
                                <BsUpload size={22} />
                            </b>
                        </footer>
                    </div>
                </Context>
                {isModalVisible ? (
                    <Modal onClose={() => setIsModalVisible(false)} />
                ) : null}
                <Menu>
                    <Search
                        icon={RiSearchLine}
                        type="text"
                        placeholder="Buscar no Tweitter"
                    />
                    <header>
                        <p>Assuntos para você</p>
                        <Link to="/Dashboard">
                            <span>Assunto do momento</span>
                            <strong>#John Doe</strong>
                            <h1>43,3 mil Tweets</h1>
                        </Link>
                        <Link to="/Dashboard">
                            <span>Assunto do momento</span>
                            <strong>#John Doe</strong>
                            <h1>43,3 mil Tweets</h1>
                        </Link>
                        <Link to="/Dashboard">
                            <span>Assunto do momento</span>
                            <strong>#John Doe</strong>
                            <h1>43,3 mil Tweets</h1>
                        </Link>
                        <Link to="/Dashboard">
                            <span>Assunto do momento</span>
                            <strong>#John Doe</strong>
                            <h1>43,3 mil Tweets</h1>
                        </Link>
                        <Link to="/Dashboard">
                            <span>Assunto do momento</span>
                            <strong>#John Doe</strong>
                            <h1>43,3 mil Tweets</h1>
                        </Link>
                    </header>
                </Menu>
            </Content>
        </Container>
    );
};

export default Dashboard;
