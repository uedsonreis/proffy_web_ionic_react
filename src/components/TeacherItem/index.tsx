import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoWhatsapp } from 'ionicons/icons';

import { Class } from '../../domain/entities/class';
import { Teacher } from '../../domain/entities/teacher';

import './styles.css';
import api from '../../services/api';

interface Props { objClass: Class }

const TeacherItem: React.FC<Props> = (props) => {

    const { user: teacher, subject, cost } = props.objClass;

    function createNewConnection() {
        api.createNewConnection(teacher.id).then(data => console.log(data));
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Valor hora aula: <strong>R$ {Number(cost).toFixed(2)}</strong>
                </p>
                <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} target="_blank" >
                    <IonIcon icon={logoWhatsapp} size="large" />
                    <span>Entrar em contato</span>
                </a>
            </footer>

        </article>
    );
}

export default TeacherItem;