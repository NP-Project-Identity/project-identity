import {Add20, RequestQuote20} from '@carbon/icons-react';
import {
  Button, ButtonSet, Column, Content,
  Grid,
  Row, Tile
} from 'carbon-components-react';
import React from 'react';

export const DashboardPage = () => (
  <>
    <Content>
      <Grid>
        <Row>
          <Column lg={16}>
            <h1 className='page-header'>Dashboard</h1>
          </Column>
        </Row>

        {/* <Row>
          <Column lg={16}>
            <p>Welcome to the NP-ID Event Management Platform.</p>
          </Column>
          <Column md={4} lg={{offset: 1, span: 8}}>8/16</Column>
        </Row> */}

        <Row className={'events-row'}>
          <Column sm={16} xlg={8}>
            <Tile light>
                <h3>Add event</h3>
                <p className='description'>Manage the complete lifecycle of a short or long-term event with points, feed, and attendance management.</p>
                <ButtonSet>
                  <Button kind='secondary' renderIcon={RequestQuote20}>Request access</Button>
                  <Button renderIcon={Add20}>New</Button>
                </ButtonSet>
            </Tile>
          </Column>
        </Row>
      </Grid>
    </Content>
  </>
)
