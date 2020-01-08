import React from 'react';
import { Box, Image, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

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

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const Education = () => (
  <Section.Container id="education" Background={Background}>
    <Section.Header name="EDUCATION" icon="" label="person" />
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        const { aboutMe, profile } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 2 / 3]} px={[1, 2, 4]}>
              <Fade bottom>
                <Flex mx={-2} py={[1, 2, 4]}>
                  <Box width={1 / 6} px={1}>
                    <Image
                      src={
                        'https://res.cloudinary.com/dewhx8bb4/image/upload/v1578339514/Chris-resume/swarthmore_logo-square_kjcysn.png'
                      }
                      sx={{
                        width: ['10%', '10%', '20%'],
                        borderRadius: 8,
                      }}
                    />
                  </Box>
                  <Box width={5 / 6} px={1}>
                    <Text p={1} color="primary" as="h3">
                      Swarthmore College
                    </Text>
                    <Text p={1} color="primary" as="p" my="0">
                      2018 — Present
                    </Text>
                    <Text p={1} color="primary" as="h4">
                      <i>Neuroscience and Economics</i>
                    </Text>
                    <Text p={1} color="primary" as="p">
                      <ul>
                        <li>
                          President of Student Philatrophy Council, Raised over
                          $100,000 in 12 months personally
                        </li>
                        <li>
                          Social Innovation Lab Associate, Alumni Ambassador,
                          Admissions Office Outreach
                        </li>
                        <li>
                          First Student to sit on the Garnet Advancement Council
                          for Athletics Alumni
                        </li>
                        <li>Men's NCAA Varsity Golf Team</li>
                      </ul>
                    </Text>
                  </Box>
                </Flex>

                <Flex mx={-2} py={[1, 2, 4]}>
                  <Box width={1 / 6} px={1}>
                    <Image
                      src={
                        'https://res.cloudinary.com/dewhx8bb4/image/upload/v1578419418/Chris-resume/University_of_Pennsylvania-logo_v3sik1.jpg'
                      }
                      sx={{
                        width: ['40%', '40%'],
                        borderRadius: 8,
                      }}
                    />
                    {/* <Text p={1} color='#111111' bg='primary'>
                      Half
                    </Text> */}
                  </Box>
                  <Box width={5 / 6} px={1}>
                    <Text p={1} color="primary" as="h3">
                      University of Pennsylvania, Perelman School of Medicine
                    </Text>
                    <Text p={1} color="primary" as="p">
                      Dec 2018 — Present
                    </Text>
                    <Text p={1} color="primary" as="h4">
                      <i>Master's in Bioethics</i>
                    </Text>
                    <Text p={1} color="primary" as="p">
                      <ul>
                        <li>
                          Doctoral and Graduate Level Courses at the Perelman
                          School of Medicine beginning first year undergraduate
                        </li>
                      </ul>
                    </Text>
                  </Box>
                </Flex>

                <Flex mx={-2} py={[1, 2, 4]}>
                  <Box width={1 / 6} px={1}>
                    <Image
                      src={
                        'https://res.cloudinary.com/dewhx8bb4/image/upload/v1578365351/Chris-resume/stanford-university-logo_proqfv.png'
                      }
                      sx={{
                        width: ['20%', '40%'],
                        borderRadius: 8,
                      }}
                    />
                    {/* <Text p={1} color='#111111' bg='primary'>
                      Half
                    </Text> */}
                  </Box>

                  <Box width={5 / 6} px={1}>
                    <Text p={1} color="primary" as="h3">
                      Stanford University
                    </Text>
                    <Text p={1} color="primary" as="p">
                      May 2019 — Present
                    </Text>
                    <Text p={1} color="primary" as="h4">
                      <i>Innovation Fellowship</i>
                    </Text>
                    <Text p={1} color="primary" as="p">
                      <ul>
                        <li>
                          Selected from an international applicant pool to
                          represent Swarthmore College as a Fellow at Stanford
                          University
                        </li>
                        <li>
                          Coursework centered in areas such as business
                          education and design thinking methods
                        </li>{' '}
                      </ul>
                    </Text>
                  </Box>
                </Flex>

                {/* <ReactMarkdown
                    source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                    renderers={markdownRenderer}
                  /> */}
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '200px', margin: 'auto' }}
            >
              <Fade right>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default Education;
