import React from 'react';
import PropTypes from 'prop-types';
import {Tab} from "components/atoms/tab";
import {TabListContainer} from "components/molecules/tablist/tablist.style";

TabList.propTypes = {
  lists: PropTypes.array
};

function TabList(props) {
  const {lists} = props;
  return (
    <TabListContainer>
      {lists.map((item, index) => <Tab title={item} key={index}/>)}
    </TabListContainer>
  );
}



export default TabList;