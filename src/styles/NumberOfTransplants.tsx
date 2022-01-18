import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';

export const NumberOfTransplantsBlock = styled.div`
  height: max-content;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props) => props.theme.fontSizes.m};
  margin-bottom: 20px;
  box-shadow: 3px 3px 2px 1px ${(props) => props.theme.colors.athensGray};

}
  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.fontSizes.s};
    padding: 10px;
  }
  @media ${(props) => props.theme.device.mobileL} {
    font-size: ${(props) => props.theme.fontSizes.m};
    padding: 20px;
  }
`;

export const TitleNumberOfTransplantsBlock = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: normal;
  line-height: 10px;
  margin-bottom: 20px;
`;

export const FormStyled = styled(Form)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  > label {
    width: max-content;
  }
`;

export const CustomCheckbox = styled(Field)`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props) => props.theme.colors.white};
  width: 14px;
  height: 14px;
  border: 0.5px solid ${(props) => props.theme.colors.dodgerBlue};
  cursor: pointer;
  margin-bottom: 5px;

  &::after {
    content: '✓';
    color: ${(props) => props.theme.colors.dodgerBlue};
    margin-left: 1px;
    opacity: 0;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.catskillWhite};
  }
  &:checked:after {
    opacity: 1;
  }
`;

export const LabeltoCustomCheckbox = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.colors.codGray};
`;

export const SubmitBtn = styled(Button)`
height: max-content;
  max-width: 20px 
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors.whitecodGray};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.s};
  text-transform: uppercase;
  
  @media ${(props) => props.theme.device.tablet} {
    max-width: 90%;
    padding: 2px 3px 2px 3px
  }
  @media ${(props) => props.theme.device.mobileL} {
    font-size: ${(props) => props.theme.fontSizes.m};
    padding: 5px 10px 5px 10px;
  }
`;
