/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Root from 'components/Root';
import Logo from 'components/Logo';
import Search from 'components/Search';

import { Input, Icon, Popup } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
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
            content={<Icon name="github" color="white" size="big" />}
            position="top center"
            inverted
          />
          a
          <Search>
            <Input
              icon={<Icon name="search" circular size="small" inverted />}
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
