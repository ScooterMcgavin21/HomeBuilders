import { BsArrow90DegUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from "styled-components";


export const ShowcaseSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
`;

export const ShowcaseContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
`;

export const ShowHeading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #10c3bc;
  font-size: 36px;
  //line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  }

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

export const ImageWrap = styled.div`
  height: 100%;
  width: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


export const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    text-align: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const InfoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;
  //margin-left: 50px;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CaptionWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Arrow = styled(BsArrow90DegUp)`
  margin-left: 10px;
  color: blue;
  
;`