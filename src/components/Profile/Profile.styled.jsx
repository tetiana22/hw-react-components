import styled from 'styled-components';

export const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;

margin: auto;
margin-top: 50px;
width: min-content;

background: linear-gradient(180deg, transparent 50%, rgba(230,230,250) 50%);
box-shadow: 0px 10px 30px rgba(230,230,250);
border-radius: 18px;
`;

export const UserWrapper = styled.div`
position: relative;
text-align: center;

width: 100%;
padding: 16px;

border-radius: 28px;
background:  #F0FCFF;
box-shadow: 0px 10px 30px rgba(230,230,250);
`;

export const UserAvatar = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 8px;
`;

export const Username = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const StatisticList = styled.ul`
list-style: none;
display: flex;
padding: 12px;
margin: 0;
 li{
  display: grid;
  width: 80px;
  justify-items: center;
  :not(:last-child){
    border-right: 1px solid #999999;
  }
`;

export const StatisticItem = styled.li`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #f3f6f9;
  gap: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StatNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;