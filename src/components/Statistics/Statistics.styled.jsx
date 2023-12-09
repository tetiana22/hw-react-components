import styled from 'styled-components';

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export const StatSection = styled.section`
margin: 24px auto;
padding: 12px;
background:  #F0FCFF;;
border-radius: 18px;
`;

export const StatTitle = styled.h2`
font-size: 24px;    
margin:0;
margin-bottom: 18px;
color: #000000;
`;

export const StatList = styled.ul`
display: flex;
list-style: none;
padding: 0;
margin: 0;
`;

export const StatItem = styled.li`
display: grid;
justify-items: center;
width: 128px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: ${props => generateRandomColor()};
`;

export const StatNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;