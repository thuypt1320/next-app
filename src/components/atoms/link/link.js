import React from 'react';
import PropTypes from 'prop-types';
import LinkStyle from "components/atoms/link/link.style";

const Link = props => {
  const {title, href} = props;
  return (
    <LinkStyle>
      <a href={href}>{title}</a>
    </LinkStyle>
  );
};

Link.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string
};

export default Link;