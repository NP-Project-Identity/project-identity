import {Button, Column, Content, Grid, Modal, Row, Table} from 'carbon-components-react';
import React, {useState} from 'react';
import './index.scss';

export const EventManagePage = ({eventId}: {eventId: string}) => {
  const [eventDeleteModalOpen, setEventDeleteModalOpen] = useState(false);
  return (
    <>
      <Content>
        <Grid>
          <Row>
            <Column lg={8}>
              <h1>Manage Event</h1>
              <dl className={'event-dl'}>
                <dt>Event name</dt>
                <dd>/ TODO /</dd><br />
                <dt>Event ID</dt>
                <dd>{eventId}</dd>
              </dl>
              <Button
                kind={'danger-tertiary'}
                dangerDescription={'This will halt all activities related to the event.'}
                onClick={() => {setEventDeleteModalOpen(true)}}>Halt event</Button>
            </Column>
          </Row>
          <Row>
            <Column md={16} lg={8}>
              <h2>Attendance</h2>
              <p>RSVP Quota: 25 / 53</p>
              <p>Check-ins: 23 / 25</p>
              <Table>
              </Table>
            </Column>
            <Column md={16} lg={8}>
              <h2>Posts</h2>
            </Column>
          </Row>
          <Row>
            <Column md={16} lg={8}>
              <h2>Shop activity</h2>
              <p>Item was sold for 5 currencies</p>
            </Column>
            <Column md={16} lg={8}>
              <h2>Posts</h2>
            </Column>
          </Row>
        </Grid>
      </Content>

      <Modal
        open={eventDeleteModalOpen}
        modalHeading='Halt event'
        modalLabel='Event management'
        onRequestClose={() => setEventDeleteModalOpen(false)}
        danger
        primaryButtonText='Halt'
        secondaryButtonText='Cancel'
        onSecondarySubmit={() => setEventDeleteModalOpen(false)}>
          <p>This will halt all event activities, <strong>including all administrative functionalities</strong>, including but not limited to:</p>
          <ul>
            <li>Shop
              <ul>
                <li>Management</li>
                <li>Transactions</li>
              </ul>
            </li>
            <li>Shop management</li>
          </ul>
          Only event administrators can resume the event.
      </Modal>
    </>
  );
}
