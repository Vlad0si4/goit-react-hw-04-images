import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgb(63 181 116);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  width: 500px;
  margin: 0 auto;
  // margin-bottom: 40px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;

  margin-left: 15px;

  background-color: white;
  cursor: pointer;
  border-radius: 10px;

  border: none;
  cursor: pointer;

  text-decoration: none;

  font-size: 18px;
  line-height: 24px;
  font-style: normal;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

&:hover {
  background-color: #47f96b;;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  border: none;
  outline: none;
  padding-left: 10px;

  height: 40px;
  flex-grow: 1;
  font-size: 18px;
  padding-left: 15px;
  border: 1px solid #303030;

  border-radius: 10px;
`;
