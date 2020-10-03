import React from 'react'
import styled from 'styled-components';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'

import { Link } from 'react-router-dom';
import SidebarItems from './SidebarItems';

const SidebarParent = styled.div`
  position: absolute;
  background-color: gray;
  color: white;
  border-radius: 10px;
  margin: 10px 10px;
  box-shadow: 5px 10px #d8d5d5;
  left: 0;
  padding: 10px 10px;
  z-index: 10;
  width: 10vw;
  border: 1px solid rgba(0,0,0,0.1);
`;

const SidebarItem = styled.div`
  padding: 5px 10px;
  text-align: center;
  font-weight: bold;
  color: ${props => props.active ? "#FFFF00" : ""};
  transition: all 0.25s ease-in-out;
`;


function Sidebar(props, {defaultActive}) {
    
    const [activeIndex, setActiveIndex] = React.useState(defaultActive || 0);

    return (
      <SidebarParent>
        {
          SidebarItems.map((item, index) => {
            return (
              <Link to={item.route}>
                <SidebarItem key={item.name} active={index === activeIndex}>
                  <p>{item.name}</p>
                </SidebarItem>
              </Link>
            );
          })
        }
      </SidebarParent>
    );
  }

export default Sidebar