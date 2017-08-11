import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import { grey400, cyan600, white } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import { typography } from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import DashboardView from '../../Layouts/DashboardView';
import PostForm from './PostForm';

import { postsActions } from '../../../states/posts';
import { postActions } from '../../../states/post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: '',
      selectedPost: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSelectPost(post) {
    this.setState({
      selectedPost: post,
    });
    this.props.dispatch(postActions.selectPost(post));
  }

  handleSubmit(post) {
    this.props.dispatch(postsActions.addPostRequest(post));
  }

  render() {
    const styles = {
      subheader: {
        fontSize: 24,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan600,
        color: white,
      },
      toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5,
      },
      toggleLabel: {
        color: grey400,
        fontWeight: 100,
      },
    };

    const iconButtonElement = (
      <IconButton
        touch
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>View</MenuItem>
      </IconMenu>
    );

    return (
      <DashboardView title="Form Page">
        <Row>
          <Col xs={12} md={6}>
            <PostForm handleSubmit={this.handleSubmit} />
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <List>
                <Subheader style={styles.subheader}>Posts</Subheader>
                {this.props.posts && this.props.posts.map(item =>
                  (<div key={item.id}>
                    <ListItem
                      onClick={() => this.onSelectPost.call(this, item)}
                      leftAvatar={<Avatar icon={<Wallpaper />} />}
                      primaryText={item.name}
                      secondaryText={item.content}
                      rightIconButton={rightIconMenu}
                    />
                    <Divider inset />
                  </div>),
                )}
              </List>
            </Paper>
          </Col>
        </Row>
      </DashboardView>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapState(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapState)(Posts);
