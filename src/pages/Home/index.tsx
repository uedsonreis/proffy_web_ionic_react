import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import ExploreContainer from '../../components/ExploreContainer';

import './styles.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <ExploreContainer />
                
            </IonContent>

        </IonPage>
    );
};

export default Home;