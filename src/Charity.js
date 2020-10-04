import React from 'react';
import styled from 'styled-components';

const LeftMargin = styled.div`
margin-left: 15vw;
`;

const Charity = () => {
    return (
      <LeftMargin>
         <div>
            <h1>Charity</h1>
            <p>This page is about Charity</p>
         </div>
      </LeftMargin>
    );
}
 
export default Charity;