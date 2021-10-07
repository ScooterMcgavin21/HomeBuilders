import styled from "styled-components";

/** InfoSection component rendering <div> tag */
export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
/** InfoContainer component rendering <div> tag */
export const InfoContainer = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
/** TopLine component rendering <p> tag */
export const TopLine = styled.p`
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
`;
/** ColumnLeftcomponent rendering <div> tag */
export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    /* display: list-item;
    list-style-type: circle;
    list-style-position: inside; */
    margin-bottom: 1rem;
  }
  ul {
    margin-left: 0;
    padding-left: 40px;
    margin-bottom: 1rem;
  }
  /* p:nth-child(6) {
  color: blue;
  //text-indent:2em;
    list-style-type:disc;
    display:list-item;
    margin-left: 2em;
} */
`;
/** ColumnRight component rendering <div> tag */
export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;
