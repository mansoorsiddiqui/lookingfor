/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
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
import { changeSearchText, getProducts } from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  handleSearch = e => {
    if (e.target.value !== this.props.home.searchText) {
      this.props.onChangeSearchText(e.target.value);
      this.props.onGetProducts(e.target.value);
    }
  };

  render() {
    const { home } = this.props;

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
              focus
              icon={<Icon name="search" circular size="small" inverted />}
              value={home.searchText}
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

Home.propTypes = {
  home: PropTypes.any,
  onChangeSearchText: PropTypes.func,
  onGetProducts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchText: text => {
      dispatch(changeSearchText(text));
    },
    onGetProducts: text => {
      dispatch(getProducts(text));
    },
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
