import React from 'react';
import BathShowcase from '../../images/xBathShowcase.jpg';
import ExteriorShowcase from '../../images/xExteriorShowcase.jpg';
import KitchenShowcase from '../../images/xKitchenShowcase.jpg';
import LivingroomShowcase from '../../images/xLivingroomShowcase.jpg';
import { Arrow, CaptionWrap, Image, ImageWrap, InfoLink, InfoRow, InfoWrap, ShowcaseContainer, ShowcaseSection, ShowHeading } from './ShowcaseElements';
function Showcase() {
  return (
    <ShowcaseSection className='ShowcaseSection'>
      <ShowcaseContainer className='ShowcaseContainer'>
        <ShowHeading className='Showheading'>
          <h1>Showcase</h1>
          <InfoRow>
          <ImageWrap className='ImageWrap'>
            <InfoWrap className='InfoWrap'>
            <h2>Exterior Homes</h2>
              <Image src={ExteriorShowcase} alt="Exterior" />
              {/* <h2>Exterior Homes</h2> */}
              <CaptionWrap>
                <Arrow className='Arrow' />
                <InfoLink className='InfoLink' to='/exterior'>
                  <p>View Details</p>
              </InfoLink>
              </CaptionWrap>
            </InfoWrap>
            <InfoWrap className='InfoWrap'>
            <h2>Kitchen Homes</h2>
              <Image src={KitchenShowcase} alt="showcase" />
              <CaptionWrap>
              <Arrow />
              <InfoLink to='/showcase'>
                <p>View Details</p>
              </InfoLink>
              </CaptionWrap>
            </InfoWrap>
          </ImageWrap>
          <ImageWrap className='ImageWrap'>
            <InfoWrap className='InfoWrap'>
            <h2>Bath Homes</h2>
              <Image src={BathShowcase} alt="showcase" />
              <CaptionWrap>
              <Arrow />
              <InfoLink to='/showcase'>
                <p>View Details</p>
              </InfoLink>
              </CaptionWrap>
            </InfoWrap>
            <InfoWrap className='InfoWrap'>
            <h2>Livingroom Homes</h2>
              <Image src={LivingroomShowcase} alt="showcase" />
              <CaptionWrap>
              <Arrow />
              <InfoLink to='/showcase'>
                <p>View Details</p>
              </InfoLink>
              </CaptionWrap>
            </InfoWrap>
          </ImageWrap>
          </InfoRow>
        </ShowHeading>
      </ShowcaseContainer>
    </ShowcaseSection>
  )
}

export default Showcase;
