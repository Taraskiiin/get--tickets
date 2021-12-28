import styled from 'styled-components';
import { Form } from 'formik';

export const NumberOfTransplantsBlock = styled.div`
  height: max-content;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
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