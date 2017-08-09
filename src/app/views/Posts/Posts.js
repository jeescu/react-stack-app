import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {
  Grid, Row, Col,
  FormControl, FormGroup, ControlLabel, HelpBlock, Button,
  ListGroup, ListGroupItem,
} from 'react-bootstrap';

import { postsActions } from '../../states/posts';
import { postActions } from '../../states/post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: '',
      selectedPost: {},
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSelectPost(post) {
    this.setState({
      selectedPost: post,
    });
    this.props.dispatch(postActions.selectPost(post));
    this.props.history.push(`/post/${post.id}`);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(postsActions.addPostRequest(this.state));
  }

  render() {
    // const postItemClass = id => classNames({
    //   active: (this.state.selectedPost.id === id),
    // });

    return (
      <Grid>
        <Row>
          <Col>
            <h2>Post</h2>
            <p>This is the post view description</p>
          </Col>
          <Col md={6}>
            <form onSubmit={this.handleSubmit}>
              <FormGroup
                controlId="postForm"
              >
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="Post name"
                  onChange={this.handleNameChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>

              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Content</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  value={this.state.value}
                  placeholder="textarea"
                  onChange={this.handleContentChange}
                />
              </FormGroup>

              <Button bsStyle="primary" type="submit">Submit</Button>
            </form>
          </Col>
          <Col md={6}>
            <ListGroup>
              {this.props.posts && this.props.posts.map(post => (
                <ListGroupItem
                  key={post.id}
                  header={post.name}
                  onClick={(e) => { e.preventDefault(); this.onSelectPost.call(this, post); }}
                  active={this.state.selectedPost.id === post.id}
                  style={{ pointer: 'cursor' }}
                >
                  {post.content}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Grid >
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapState(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapState)(Posts);
