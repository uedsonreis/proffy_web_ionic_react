import React, { useState, ChangeEvent } from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

import { Header, HeaderContent } from '../../components/Header';
import { classes, weekDays } from '../../utils/constants';

import api from '../../services/api';
import ProffyInput from '../../components/ProffyInput';
import ProffySelect from '../../components/ProffySelect';
import ProffyTextArea from '../../components/ProffyTextArea';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherPage() {

    const history = useHistory();

    const [teacher, setTeacher] = useState({ name: '', avatar: '', whatsapp: '', bio: '' });
    const [objClass, setClass] = useState({ subject: '', cost: 0 });

    const createNewItem = () => ({ weekDay: '', from: '', to: '' });
    const [scheduleItems, setScheduleItems] = useState([createNewItem()]);

    function onChangeTeacher(event: ChangeEvent<any>) {
        setTeacher({ ...teacher, [event.target.name]: event.target.value } as any);
    }

    function onChangeClass(event: ChangeEvent<any>) {
        setClass({ ...objClass, [event.target.name]: event.target.value } as any);
    }

    function onChangeScheduleItems(position: number, event: ChangeEvent<any>) {
        const updatedItems = scheduleItems.map((item, index) => {
            if (index === position) {
                return { ...item, [event.target.name]: event.target.value };
            } else {
                return item;
            }
        });
        
        setScheduleItems(updatedItems);
    }

    function addNewScheduleItem() {
        setScheduleItems([ ...scheduleItems, createNewItem() ]);
    }

    function save() {
        api.createNewClass(teacher, objClass, scheduleItems).then(result => {
            if (result) {
                console.log('Saved: ', result);
                alert('Aula salva com sucesso!');
                history.push('/landing');
            } else {
                alert('Erro ao tentar salvar a nova Aula.');
            }
        });
    }

    return (
        <IonPage>
            <Header />

            <IonContent>
                <HeaderContent
                    title="Que incrível que você quer dar aulas."
                    description="O primeiro passo é preencher esse formuário de inscrição"
                />

                <div id="page-teacher-form">
                    <main>
                        <fieldset>
                            <legend>Seus dados</legend>
                            <ProffyInput name="name" label="Nome completo" value={teacher.name} onChange={onChangeTeacher} />
                            <ProffyInput name="avatar" label="Avatar" value={teacher.avatar} onChange={onChangeTeacher} />
                            <ProffyInput name="whatsapp" label="WhatsApp" value={teacher.whatsapp} onChange={onChangeTeacher} />
                            <ProffyTextArea name="bio" label="Biografia" value={teacher.bio} onChange={onChangeTeacher} />
                        </fieldset>

                        <fieldset>
                            <legend>Sobre a aula</legend>
                            <ProffySelect
                                name="subject" label="Matéria" options={classes}
                                value={objClass.subject} onChange={onChangeClass}
                            />
                            <ProffyInput
                                name="cost" label="Custo da sua hora aula" type="number"
                                value={objClass.cost} onChange={onChangeClass}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>
                                Horários disponíveis
                                <IonButton color="tertiary" fill="clear" expand="block" onClick={addNewScheduleItem}>
                                    Novo horário
                                </IonButton>
                            </legend>

                            {scheduleItems.map((item, index) => (
                                <div key={index} className="schedule-item">
                                    <ProffySelect
                                        name="weekDay" label="Dia da semana" options={weekDays}
                                        value={item.weekDay} onChange={event => onChangeScheduleItems(index, event)}
                                    />
                                    <ProffyInput
                                        name="from" label="Das" type="time" value={item.from}
                                        onChange={event => onChangeScheduleItems(index, event) }
                                    />
                                    <ProffyInput
                                        name="to" label="até" type="time" value={item.to}
                                        onChange={event => onChangeScheduleItems(index, event) }
                                    />
                                </div>
                            ))}
                        </fieldset>

                        <footer>
                            <p>
                                <img src={warningIcon} alt="Aviso importante" />
                                Importante! <br />
                                Preencha todos os dados
                            </p>
                            <IonButton color="tertiary" expand="block" onClick={save}>
                                Salvar cadastro
                            </IonButton>
                        </footer>
                    </main>
                </div>

            </IonContent>
        </IonPage>
    );

}

export default TeacherPage;