import React from 'react';
import { Button } from '../../Button';
import { ColumnLeft, ColumnRight, InfoContainer, Section, TopLine } from './InfoSectionElements';
function InfoSection({headingOne, headingTwo, headingThree, paragraphOne1, paragraphOne2, paragraphTwo1, paragraphTwo2, paragraphThree1, paragraphThree2, buttonLabel, reverse, image, topLine}) {
  return (
    <>
      <Section>
        <InfoContainer>
          <ColumnLeft>
          <TopLine>{topLine}</TopLine>
          <h1>{headingOne}</h1>
          <p>{paragraphOne1}</p>
          <p>{paragraphOne2}</p>
          <h1>{headingTwo}</h1>
          <p>{paragraphTwo1}</p>
          <ul>
            <li>Colorado Mountain / Rustic</li>
            <li>Mediterranean / Tuscan</li>
            <li>French Country / Cottage</li>
            <li>Old World</li>
          </ul>
          {/* <p>{paragraphTwo2}</p> */}
          <h1>{headingThree}</h1>
          <p>{paragraphThree1}</p>
          {/* <p>{paragraphThree2}</p> */}
          <ul>
            <li>Castle Pines Village</li>
            <li>The Timbers @ The Pinery</li>
            <li>Pradera</li>
            <li>Buffalo Ridge</li>
          </ul>
          <Button to='/homes' primary='true'>{buttonLabel}</Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={image} alt='home' />
          </ColumnRight>
        </InfoContainer>
      </Section>
    </>
  );
}

export default InfoSection;
