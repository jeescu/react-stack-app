import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid, Row, Col, HelpBlock,
} from 'react-bootstrap';

const Posts = ({ post }) => (
  <Grid>
    <Row>
      <Col>
        <h4>{ post.name }</h4>
        <HelpBlock>Date MM/DD/YYYY</HelpBlock>
      </Col>
      <Col md={12}>
        <p>{ post.content }</p>
      </Col>
    </Row>
  </Grid>
);

Posts.propTypes = {
  post: PropTypes.object.isRequired, // eslint-disable-line
};

function mapState(state) {
  return {
    post: state.post,
  };
}

export default connect(mapState)(Posts);
