import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface Props { teacher: string, subject: string, description: string, price: number }

const TeacherItem: React.FC<Props> = ({ teacher, subject, description, price }) => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/7030518?s=460&u=6f68e22a665ea04c0353e606320cf4d934784d79&v=4" alt="Uedson Reis" />
                <div>
                    <strong>{teacher}</strong>
                    <span>{subject}</span>
                </div>
            </header>

            <p>{description}</p>

            <footer>
                <p>
                    Preço / Hora <strong>R$ {price.toFixed(2)}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;