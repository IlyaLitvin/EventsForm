import { Button, Layout, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: React.FC = () => {
  const [modalVisible, setMoalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(state => state.event);
  const { user } = useTypedSelector(state => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewEvent = (ev: IEvent) => {
    setMoalVisible(false);
    createEvent(ev);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setMoalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        visible={modalVisible}
        footer={null}
        onCancel={() => setMoalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
