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
import StoreListContainer from 'components/StoreListContainer';
import Logo from 'components/Logo';
import Search from 'components/Search';

import {
  Input,
  Icon,
  Popup,
  Button,
  Dimmer,
  Loader,
  Segment,
  PopupHeader,
  PopupContent,
  Divider,
  Grid,
  GridColumn,
  List,
  Header,
} from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import {
  changeSearchText,
  getProducts,
  selectProduct,
  setPosition,
  getStores,
} from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.props.onSetPosition);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

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
          <Segment basic>
            <Dimmer active={home.searchingProducts === true}>
              <Loader>Getting Products</Loader>
            </Dimmer>

            {home.productList.map(
              p =>
                home.chosenProduct !== null &&
                home.chosenProduct.id === p.id ? (
                    <Button secondary onClick={() => onSelectProduct(null, null)}>
                      {p.name}
                    </Button>
                  ) : (
                    <Popup
                      wide
                      trigger={
                        <Button
                          inverted
                          key={p.id}
                          onClick={() => onSelectProduct(p, home.coords)}
                        >
                          {p.name}
                        </Button>
                      }
                    >
                      <PopupHeader>{p.name}</PopupHeader>
                      <PopupContent>
                        <strong>{p.origin}</strong>
                        <div>{p.tasting_note}</div>
                      </PopupContent>
                    </Popup>
                  ),
            )}
          </Segment>
        </ProductListContainer>
        {home.chosenProduct !== null && (
          <StoreListContainer>
            <Divider inverted />
            <Segment inverted>
              <Grid>
                <GridColumn width={4}>
                  <img
                    src={home.chosenProduct.image_thumb_url}
                    alt={home.chosenProduct.name}
                    height="190px"
                  />
                </GridColumn>
                <GridColumn width={12}>
                  <h2>{home.chosenProduct.name}</h2>
                  <h3>{home.chosenProduct.origin}</h3>
                  <p>{home.chosenProduct.tasting_note}</p>
                </GridColumn>
              </Grid>
            </Segment>
            {home.storeList.length > 0 && (
              <Segment>
                <Dimmer active={home.searchingStores === true}>
                  <Loader>Finding Stores</Loader>
                </Dimmer>
                <List>
                  <Header>Stores near you that carry this item:</Header>
                  {home.storeList.map(s => (
                    <List.Item key={s.id}>
                      <Icon name="marker" color="violet" />
                      <List.Content>
                        <List.Header>
                          <a
                            href={`https://www.google.com/search?q=${s.name
                              .split(' ')
                              .join('+')
                              .replace(/&/g, '%26')}+${s.address_line_1}+${
                              s.city
                            }`}
                            target="_blank"
                          >
                            {s.name}
                          </a>{' '}
                          ({s.distance_in_meters}m away)
                        </List.Header>
                        <List.Description>
                          {s.telephone} - {s.address_line_1}, {s.city}{' '}
                          {s.postal_code}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </Segment>
            )}
          </StoreListContainer>
        )}
      </Root>
    );
  }
}

Home.propTypes = {
  home: PropTypes.any,
  onChangeSearchText: PropTypes.func,
  onGetProducts: PropTypes.func,
  onSelectProduct: PropTypes.func,
  onSetPosition: PropTypes.func,
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
    onSelectProduct: (product, coords) => {
      dispatch(selectProduct(product));
      dispatch(getStores(product.id, coords));
    },
    onSetPosition: position => {
      dispatch(setPosition(position));
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
