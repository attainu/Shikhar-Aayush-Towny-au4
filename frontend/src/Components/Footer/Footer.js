import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {FooterStyle, Text, Flex, Margin, Anchor} from '../Styled/Styled'
import { mainBar } from '../Data/data';
export const Footer = () =>{
    return (<Fragment>
      <FooterStyle>
          <Flex wrap={'none'} >
          <Margin>
              <div style={{width : '300px'}}>
                  <Text size={'1em'} weight={'800'} fontColor={'#63686e'} padding={'0.4em'}>ABOUT TOWNY</Text>
                  <Text size={'1em'} weight={'200'} fontColor={'#63686e'} padding={'0.4em'}>
                      Towny, the leading service company, which connect professionals from vast domain in 
                      home related service. At Towny, we consider customer satisfication at foremost priority.
                      Towny take care of all maintenance services related to home. Hence, fullfiling the labors 
                      requirement.
                  </Text>
              </div>
              <div style={{width : '300px'}}>
                  <Text size={'1em'} weight={'500'} fontColor={'#63686e'} padding={'0.4em'}>Address</Text>
                  <Text size={'1em'} weight={'200'} fontColor={'#63686e'} padding={'0.4em'}>
                      3rd Block, Indira nagar, Bangalore, Karnataka 560043</Text>
              </div>
          </Margin>
          <Margin>
              <Text size={'1em'} weight={'800'} fontColor={'#63686e'} padding={'0.4em'}>NAVIGATION</Text>
                {mainBar.map(({navLinkName, path}, index) => <Anchor 
                size={'1em'} weight={'400'} fontColor={'#63686e'} 
                padding={'0.4em'} as={Link} key={index} 
                to={path} style={{display : 'block'}}>{navLinkName}</Anchor>)}              
          </Margin>
          <Margin>
              <Text>NEED HELP FINDING AN EXPERT?</Text>
              <Text size={'2em'} weight={'500'} 
              fontColor={'#63686e'} padding={'0em'}
              style={{letterSpacing:"0.1em",
              margin:"0.5em 0em"}}>
               +91 7338957430   
              </Text>
              <Text size={'1.6em'} weight={'400'} 
              fontColor={'#63686e'} padding={'0em'}
              style={{margin:"0.5em 0em"}}>
                  townypvt.ltd@gmail.com
              </Text>
          </Margin>
          </Flex>
          <hr/>
          <Flex wrap={'none'}>
             <Margin>
               <Text>SERVING IN</Text>
               <Flex sm_wrap = {'wrap'}>
               {[' Lucknow |', ' Delhi |', ' Mumbai '].map((val,index) => (
                   <Anchor size={'1em'} weight={'400'} 
                   fontColor={'#63686e'} padding={'0.4em'} 
                   key={index} as={Link} to={'/'}>{val}</Anchor>
               ))}
               </Flex>    
             </Margin> 
          </Flex>
          <hr/>
          <Flex>
              <Margin>
                  <Text>&#169;2020-2020 Towny Online Services Pvt Ltd</Text>
              </Margin>
          </Flex>
      </FooterStyle>
    </Fragment>)
}