import React from 'react';
import PropTypes from 'prop-types';
import {TabContainer, TabLink} from "components/atoms/tab/tab.style";

Tab.propTypes = {
  title: PropTypes.string
};

function Tab(props) {
  const {title} = props;
  return (
    <TabContainer>
      <TabLink>{title}</TabLink>
    </TabContainer>
  );
}

export default Tab;