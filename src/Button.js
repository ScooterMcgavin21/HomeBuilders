import { Link } from 'react-router-dom';
import styled from 'styled-components';

/** Button Component */

export const Button = styled(Link)`
  //background: ${({ primary }) => (primary ? '#000d1a' : '#CD853F')};
  background: ${({ primary }) => (primary ? '#101522' : '#66FCF1')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
  color: ${({primary}) => (primary ? '#66FCF1' : '#000d1a')};
  //color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({big}) => (big ? '20px' : '14px')};
  /* border-radius: ${({round}) => (round ? '50px': '0px')}; */
  border-radius: 50px;

  &:hover {
    transform: translate(-2px);
  }
`;
// export const Button = styled(Link)`
//   border-radius: 50px;
//   background: ${({primary}) => (primary ? '#FF006c' : '#10c3bc')};
//   white-space: nowrap;
//   padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
//   color: ${({dark}) => (dark ? '#fff' : '#101522')};
//   font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
//   outline: none;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: ${({primary}) => (primary ? '#10c3bc' : '#FF006c')};
//   }
// `;