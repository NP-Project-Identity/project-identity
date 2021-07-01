import {Button, Column, Content, Dropdown, Form, Grid, Modal, Row, TextArea, TextInput} from 'carbon-components-react';
import React, {useState} from 'react';

export const EventRequestAccessPage = () => {
  const [eventRequestAccessModalOpen, setEventRequestAccessModalOpen] = useState(false);

  const sendEventRequest = () => {
    setEventRequestAccessModalOpen(true);
  }

  return (
    <>
      <Modal
        open={eventRequestAccessModalOpen}
        modalHeading='Confirm access request?'
        modalLabel='Request event access'
        onRequestClose={() => setEventRequestAccessModalOpen(false)}
        primaryButtonText='Confirm'
        secondaryButtonText='Abort'
        onSecondarySubmit={() => setEventRequestAccessModalOpen(false)}>
      </Modal>

      <Content>
        <Grid>
          <Row>
            <Column>
              <h1>Request Access</h1>
            </Column>
          </Row>
          <Row>
              <Column sm={16} lg={8}>
                <Form onSubmit={e => {sendEventRequest(); e.preventDefault()}}>
                    <TextInput id='eventID' labelText='Event ID' required />

                    <Dropdown
                      id='requestedRole'
                      titleText='Requested role'
                      label='Select a role'
                      items={['Attendance Taker', 'Shop Administrator', 'Event Administrator']}
                      defaultValue={'Attendance Taker'}
                    />

                    <TextArea id='requestMessage' labelText='Message (optional)' />
                    <Button type='submit'>Send request</Button>
                </Form>
              </Column>
          </Row>
        </Grid>
      </Content>
    </>
  )
}
