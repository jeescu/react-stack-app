import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

export default function DashboardView(props) {
  return (
    <Grid fluid>
      <Row className="top-buffer">
        <Col md={12}>
          <h3 className="navigation">{ props.title }</h3>
        </Col>
      </Row>
      {props.children}
    </Grid>
  );
}

DashboardView.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
