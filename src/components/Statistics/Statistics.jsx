import {
    StatSection,
    StatTitle,
    StatList,
    StatItem,
    StatNumber,
  } from './Statistics.styled';
  
  export const Statistics = ({ data, title }) => {
    return (
      <StatSection>
        {title && <StatTitle>{title}</StatTitle>}
        <StatList>
          {data.map(({ id, label, percentage }) => (
            <StatItem key={id}>
              <span>{label}</span>
              <StatNumber>{percentage}%</StatNumber>
            </StatItem>
          ))}
        </StatList>
      </StatSection>
    );
  };