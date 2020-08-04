import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface Props { title: string; }

export const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start"><IonBackButton /></IonButtons>
                <IonButtons slot="end">
                    <img src={logoImg} alt="Proffy" width="80px" className="logoImg" />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}

export const HeaderContent: React.FC<Props> = ({ title, children }) => {
    return (
        <IonHeader>
            <IonToolbar>                        
                <div className="header-content">
                    <strong>{title}</strong>
                    {children}
                </div>
            </IonToolbar>
        </IonHeader>
    );
}
