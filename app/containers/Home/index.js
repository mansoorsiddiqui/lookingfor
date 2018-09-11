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
import Main from 'components/Main';
import ProductListContainer from 'components/ProductListContainer';
import Logo from 'components/Logo';
import Search from 'components/Search';

import { Input, Icon, Popup, Button } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import { changeSearchText, getProducts, selectProduct } from './actions';
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
    const { home, onSelectProduct } = this.props;

    return (
      <Root>
        <Main>
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
        </Main>
        <ProductListContainer>
          {home.chosenProduct !== null ? (
            <Button inverted icon labelPosition="right">
              {home.chosenProduct.name}
              <Icon name="check" />
            </Button>
          ) : (
            home.productList.map(p => (
              <Button inverted key={p.id} onClick={() => onSelectProduct(p)}>
                {p.name}
              </Button>
            ))
          )}
        </ProductListContainer>
      </Root>
    );
  }
}

Home.propTypes = {
  home: PropTypes.any,
  onChangeSearchText: PropTypes.func,
  onGetProducts: PropTypes.func,
  onSelectProduct: PropTypes.func,
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
    onSelectProduct: product => {
      dispatch(selectProduct(product));
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
