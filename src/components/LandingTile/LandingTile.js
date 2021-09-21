import React from 'react';

import {
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
          <span role="img" aria-label="Hand with peace sign">✌</span>&#xFE0E;
          </Hand>
          <span role="img" aria-label="Smiley face">☺</span>&#xFE0E;
        </Header>
        <Subheader>
          Hi, I'm a Frontend Web Engineer based in Stavanger, Norway.
        </Subheader>
        <p>
          I build web applications using tools like
          React, Vue and plain JavaScript.
        </p>
        <p>
          Find me on {this.renderLink(linkedIn)}, {this.renderLink(gitHub)} or {this.renderLink(email)}.
        </p>
      </Wrapper>
    );
  }
};
