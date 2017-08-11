import React from 'react';
import PropTypes from 'prop-types';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import Header from '../Components/Header';
import LeftDrawer from '../Components/LeftDrawer';
import Data from '../Config/data';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true,
    };

    this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  render() {
    const { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 260;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
      },
      container: {
        margin: '64px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0,
      },
    };
    return (
      <div>
        <Header
          styles={styles.header}
          handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer}
        />

        <LeftDrawer
          navDrawerOpen={navDrawerOpen}
          menus={Data.menus}
          username="Administrator"
        />

        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.number.isRequired,
};

export default withWidth()(App);
