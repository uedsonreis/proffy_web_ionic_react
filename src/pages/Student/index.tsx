import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

import { Header, HeaderContent } from '../../components/Header';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';

function StudentPage() {

    return (
        <IonPage>
            <Header />

            <IonContent>
                <HeaderContent title="Estes são os Proffys disponíveis." />

                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input id="subject" type="text" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input id="week_day" type="text" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input id="time" type="text" />
                    </div>
                </form>

                <main>
                    <TeacherItem
                        teacher="Uedson Reis" subject="Programação" price={90}
                        description="Entusiasta das melhores tecnologias de desenvolvimento para web e mobile. Apaixonado por mudar a vida das pessoas através da tecnologia."
                    />

                    <TeacherItem
                        teacher="Uedson Reis" subject="Programação" price={90}
                        description="Entusiasta das melhores tecnologias de desenvolvimento para web e mobile. Apaixonado por mudar a vida das pessoas através da tecnologia."
                    />

                    <TeacherItem
                        teacher="Uedson Reis" subject="Programação" price={90}
                        description="Entusiasta das melhores tecnologias de desenvolvimento para web e mobile. Apaixonado por mudar a vida das pessoas através da tecnologia."
                    />

                    <TeacherItem
                        teacher="Uedson Reis" subject="Programação" price={90}
                        description="Entusiasta das melhores tecnologias de desenvolvimento para web e mobile. Apaixonado por mudar a vida das pessoas através da tecnologia."
                    />

                    <TeacherItem
                        teacher="Uedson Reis" subject="Programação" price={90}
                        description="Entusiasta das melhores tecnologias de desenvolvimento para web e mobile. Apaixonado por mudar a vida das pessoas através da tecnologia."
                    />

                    <TeacherItem
                        teacher="Uedson Reis" subject="Programação" price={90}
                        description="Entusiasta das melhores tecnologias de desenvolvimento para web e mobile. Apaixonado por mudar a vida das pessoas através da tecnologia."
                    />

                    <TeacherItem
                        teacher="Uedson Reis" subject="Programação" price={90}
                        description="Entusiasta das melhores tecnologias de desenvolvimento para web e mobile. Apaixonado por mudar a vida das pessoas através da tecnologia."
                    />
                </main>

            </IonContent>

        </IonPage>
    );

}

export default StudentPage;