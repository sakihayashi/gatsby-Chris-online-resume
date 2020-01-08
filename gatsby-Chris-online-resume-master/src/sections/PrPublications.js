import React from 'react';
import { Box, Image, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const printPublications = [
  {
    name: 'Five Benefits to Becoming an EMT in College',
    detail:
      'Invited to contribute an editorial centered on the experince of serving as a first responder in a college enviroment',
    date: 'Sep 2019',
    publisher: 'EMS World, Editorial',
  },
  {
    name: 'What I Expect to See (The Future of Emergenct Care)',
    detail:
      'January 2020 Print Edition of EMS World Magazine, Regular Contributing Author',
    date: 'Jan 2020',
    publisher: 'EMS World, Leadership & Management Section',
  },
  {
    name: 'Mobile Stroke Units: Weighing the Conflicting Arguments',
    detail: 'September 2019 Print Edition of EMS World Magazine',
    date: 'Aug 2019',
    publisher: 'EMS World, Operations',
  },
];

const PrPublications = () => (
  <Section.Container id="Print Publications" Background={Background}>
    <Section.Header name="PRINT PUBLICATIONS" icon="" label="person" />
    <StaticQuery
      query={graphql`
        query PrintQuery {
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
                {printPublications.map((pp, id) => (
                  <Box my={5}>
                    <Text as="h3" color="primary" my={1}>
                      {pp.name}
                    </Text>
                    <Text as="p" fontWeight="light">
                      {pp.date}
                    </Text>
                    <Text as="p" fontWeight="regular">
                      {pp.publisher}
                    </Text>
                    <Text as="p">
                      <ul>
                        <li>{pp.detail}</li>
                      </ul>
                    </Text>
                  </Box>
                ))}
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default PrPublications;
