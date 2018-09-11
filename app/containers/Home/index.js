/**
 *
 * Home
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Root from 'components/Root';
import Logo from 'components/Logo';
import Search from 'components/Search';

import { Input, Icon, Popup } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  handleSearch = e => {
    if (e.target.value !== '') {
      // donothingyet
    }
  };

  render() {
    return (
      <Root>
        <div>
          I am
          <Popup
            trigger={
              <Logo
                href="https://github.com/mansoorsiddiqui/lookingfor"
                target="_blank"
              >
                LookingFor
              </Logo>
            }
            content={<Icon name="github" size="big" />}
            position="top center"
            inverted
          />
          a
          <Search>
            <Input
              icon={<Icon name="search" circular size="small" inverted />}
              onChange={this.handleSearch}
              placeholder="Search..."
              size="mini"
              transparent
            />
          </Search>
        </div>
      </Root>
    );
  }
}

// Home.propTypes = {};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
