import styled from 'styled-components';

export const FormSearch = styled.form`
  display: block;
  max-width: 100%;
  padding: 10px;

  input {
    border: 1px solid #d8d8d8;
    color: #000000;
    ::placeholder {
      color: #000000;
    }
    :hover, 
    :focus,
    :active{
      border: 1px solid #40a9ff;
    }
  }
`;
