import React from 'react';

import {
  Arrow,
  Hand,
  Header,
  Subheader,
  Wrapper,
} from './styled';
import ExternalLink from '../ExternalLink';
import contact from '../../data/contact';

export default class LandingTile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isHeaderHovered: false,
    };

    this.onHeaderMouseOver = this.onHeaderMouseOver.bind(this);
    this.onHeaderMouseOut = this.onHeaderMouseOut.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isHeaderHovered: true }), 1000);
    setTimeout(() => this.setState({ isHeaderHovered: false }), 2200);
  }

  onHeaderMouseOver() {
    this.setState({
      isHeaderHovered: true,
    });
  }

  onHeaderMouseOut() {
    this.setState({
      isHeaderHovered: false,
    });
  }

  renderLink(link) {
    return <ExternalLink {...link} />;
  }

  render() {
    const { onClickScroll } = this.props;
    const { isHeaderHovered } = this.state;

    const {
      email,
      gitHub,
      linkedIn,
    } = contact;

    return (
      <Wrapper>
        <Header
          onMouseEnter={this.onHeaderMouseOver}
          onMouseLeave={this.onHeaderMouseOut}
        >
          <Hand isHovered={isHeaderHovered}>
            ✌&#xFE0E;
          </Hand>
          ☺&#xFE0E;
        </Header>
        <Subheader>
          Hi, I'm a Front-End Web Engineer based in New York.
        </Subheader>
        <p>
          I build web applications using technologies like
          React, Redux, ES6, Webpack, and more.
        </p>
        <p>
          Find me on {this.renderLink(linkedIn)}, {this.renderLink(gitHub)}, or {this.renderLink(email)},
          or scroll down to see some recent work.
        </p>
        <Arrow onClick={onClickScroll}>
          ➝&#xFE0E;
        </Arrow>
      </Wrapper>
    );
  }
};
