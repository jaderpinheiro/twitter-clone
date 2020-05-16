import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '../../services/api';

import { Container } from './styles';

const Avatar = (props) => {
    const { defaultValue, registerField } = useField('avatar');
    const [avatar, setPreview] = useState(defaultValue && defaultValue.url);
    const [avatar_id, setFile] = useState(defaultValue && defaultValue.id);
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'avatar_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);

    async function handleChange(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('avatar', e.target.files[0]);
        const response = await api.post('users', data);
        const { id, url } = response.data;
        setFile(id);
        setPreview(url);
    }
    return (
        <Container>
            <label htmlFor="avatar">
                <img
                    src="https://pbs.twimg.com/profile_banners/1115956420539760640/1554910006/600x200"
                    alt=""
                />

                <input type="file" id="banner" accept="image/*" />
            </label>
        </Container>
    );
};

export default Avatar;
