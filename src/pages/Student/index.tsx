import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonButton, IonIcon } from '@ionic/react';
import { filter as filterIcon } from 'ionicons/icons';

import { Header, HeaderContent } from '../../components/Header';
import { classes, weekDays } from '../../utils/constants';
import { Class } from '../../domain/entities/class';

import api from '../../services/api';
import TeacherItem from '../../components/TeacherItem';
import ProffyInput from '../../components/ProffyInput';
import ProffySelect from '../../components/ProffySelect';

import './styles.css';

function StudentPage() {

    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [classList, setClassList] = useState<Class[]>([]);

    function filter() {
        api.getClasses({ subject, weekDay, time }).then(data => setClassList(data));
    }

    return (
        <IonPage>
            <Header />
            <IonContent>
                <HeaderContent title="Estes são os Proffys disponíveis." />

                <form id="search-teachers">
                    <ProffySelect
                        name="subject" label="Matéria" options={classes}
                        value={subject} onChange={event => setSubject(event.target.value)}
                    />

                    <ProffySelect
                        name="weekDay" label="Dia da semana" options={weekDays}
                        value={weekDay} onChange={event => setWeekDay(event.target.value)}
                    />

                    <ProffyInput
                        name="time" label="Hora" type="time" value={time}
                        onChange={event => setTime(event.target.value)}
                    />

                    <div className="buttonContainer">
                        <IonButton color="tertiary" expand="block" size="large" onClick={filter}>
                            <IonIcon icon={filterIcon} />
                        </IonButton>
                    </div>
                </form>

                <main>
                    {classList.map((objClass: any) => (
                        <TeacherItem key={objClass.id} objClass={objClass} />
                    ))}
                </main>

            </IonContent>
        </IonPage>
    );

}

export default StudentPage;