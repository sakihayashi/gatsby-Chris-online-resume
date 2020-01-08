import React from 'react';
import { Box, Image, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import LinkAnimated from '../components/LinkAnimated';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const ppPublications = [
  {
    type: 'Senior Author Publications:',
    paper: [
      'Gaeta C, Scholand S, Blakey B, et al. (December 16, 2019) A Young Patient with Painful Penile Lesions. doi:10.7759/cureus.6397',
      "Gaeta C, Collegiate EMS Providers' Role in Vaping Education. Accepted into the American Journal of Emergency Medicine",
    ],
    url: [
      'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6918799/',
      'https://www.sciencedirect.com/science/article/abs/pii/S0735675720300085',
    ],
  },
  {
    type: 'Pending Senior Author Publications',
    paper: [
      "Transitioning to adult care for pediatric patients with InyammatorD Bowel ,iseaseV Children's Hospital of Philadelphia",
      "Uenous Thromboembolism Events in Pediatric InyammatorD Bowel ,isease: Rnderstanding Oisk Factors and CutcomesV Children's Hospital of Philadelphia",
      'A Novel xall to FiH Medical Education: Pragmatic Steps to Encourage ,ialogue and AdvocacD for Providers and Medical Students',
    ],
    url: ['', ''],
  },
  {
    type: 'Pending Senior Author Publications:',
    paper: [
      "Signatures of the uman Uirome in IB,V (Multi-Year International Investigation, Children's Hospital of Philadelphia",
      'Rse of a Novel xhest Tube Insertion ,evice for Rrgent ThoracostomD in an EmergencD ,epartment Setting )RNxRTz: A Oandomi􏰁ed xontrolled TrialV Crozer-Keystone Medical Center and University of Missouri Health System',
    ],
    url: ['', ''],
  },
];

const PRPublications = () => (
  <Section.Container id="PRPublications" Background={Background}>
    <Section.Header name="PEER REVIEWED PUBLICATIONS" icon="" label="person" />
    <StaticQuery
      query={graphql`
        query PublicationsQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box>
              <Fade bottom>
                {ppPublications.map((pp, id) => (
                  <Box m={5}>
                    <Text as="h3">
                      <i>{pp.type}</i>
                    </Text>

                    <Text as="p" my={2}>
                      <ul>
                        {pp.paper.map(p => (
                          <LinkAnimated
                            onClick={() => window.open(pp.url, '_blank')}
                            color="primary"
                            fontWeignt="bold"
                            my={1}
                          >
                            <li>{p}</li>
                          </LinkAnimated>
                        ))}
                      </ul>
                    </Text>
                  </Box>
                ))}
              </Fade>
            </Box>
          </Flex>

          // <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          //   <Box >
          //     <Fade bottom>
          //     {ppPublications.map((ppPublication, id) => (
          //       <Box>
          //       <Text
          //       as='h3'
          //       fontWeight='bold'
          //       color='primary'
          //       my={1}
          //       >
          //         {ppPublication.type}
          //       </Text>
          //       <Text>
          //         <ul>
          //         {ppPublication.paper.map((p) =>(
          //           <li>{p}</li>
          //         ))}
          //         </ul>

          //       </Text>
          //     </Box>
          //     ))}

          //     </Fade>
          //   </Box>
          // </Flex>
        );
      }}
    />
  </Section.Container>
);

export default PRPublications;
