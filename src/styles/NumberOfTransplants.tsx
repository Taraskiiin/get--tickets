import styled from 'styled-components';

export const NumberOfTransplantsBlock = styled.div`
  height: max-content;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: #fff;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 20px;

  > label {
    width: max-content;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 20px 10px;
  }
  @media (max-width: 574px) {
    font-size: 14px;
    padding: 20px;
  }
`;

export const TitleNumberOfTransplantsBlock = styled.h3`
  font-size: 14px;
  font-weight: normal;
  line-height: 10px;
  margin-bottom: 20px;
`;
