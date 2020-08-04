import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';

import { Header, HeaderContent } from '../../components/Header';

import './styles.css';

function TeacherPage() {

    return (
        <IonPage>
            <Header />

            <IonContent>
                <HeaderContent title="Que incrível que você quer dar aulas." />
                
                
                
            </IonContent>

        </IonPage>
    );

}

export default TeacherPage;