import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

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
      color="backgroundDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />
    <Triangle
      color="primaryDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
    {/* <Triangle
        color="backgroundDark"
        height={['25vh', '20vh']}
        width={['100vw', '100vw']}
        invertY
      /> */}
  </div>
);

const LicensesList = [
  {
    name: 'Emergency Medical Technician (EMT) and Crisis Response Specialist',
    date: 'Aug 2019 — Mar 2022',
    type: 'National Certification',
    details: [
      'Certified by the National Assocaiton for Emergency Technicians to provide life supporting first response aid',
      'Additional Training and Certification Completed for',
    ],
    info: [
      'Blood-borne Pathogen Safety Training',
      'Crisis Response and Mass Casulity Incident Manegment',
      'Intubation Training for advanced life support',
    ],
    imgurl:
      'https://res.cloudinary.com/dewhx8bb4/image/upload/v1578507310/Chris-resume/EMT_PublicPg_logo_byk4x3.png',
  },
  {
    name: 'CITI Human Subject Research and Clinical Ethics Training',
    date: 'Sep 2018 — Dec 2020',
    type: 'Certification',
    details: [''],
    info: [''],
    imgurl:
      'https://res.cloudinary.com/dewhx8bb4/image/upload/v1578513449/Chris-resume/_CITI-logo_tcnpx5.png',
  },
  {
    name: 'EKG Cardiac Interpretation Fundamentals Program',
    date: 'Oct 2019',
    type: 'New York City',
    details: [
      'Completed course on EKG fundamentals. Course content included 90 hours of training and examinations simulating case-based and didactic coursework focused on interpretation of common arrhythmias and abnormalities..',
    ],
    info: [''],
    imgurl:
      'https://res.cloudinary.com/dewhx8bb4/image/upload/v1578513973/Chris-resume/heat-rate_iyswrl.png',
  },
];

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const ListText = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const NoM = styled.h3`
  margin: 0px 0px;
`;

const Licenses = () => (
  <Section.Container id="licenses" Background={Background}>
    <Section.Header name="CURRENT LICENSES AND CERTIFICATES" icon="" label="" />
    <StaticQuery
      query={graphql`
        query LicenseQuery {
          contentfulAbout {
            projects {
              id
              name
              description
              projectUrl
              repositoryUrl
              publishedDate(formatString: "YYYY")
              type
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
              place
              workperiod
              description01
              description02
              rawdesc {
                childMarkdownRemark {
                  html
                  rawMarkdownBody
                }
              }
              workDetails {
                details
              }
            }
          }
        }
      `}
      render={({ data }) => (
        <CardContainer minWidth="350px">
          {LicensesList.map((l, i) => (
            <Card p={0}>
              <Flex style={{ height: CARD_HEIGHT }}>
                <TextContainer>
                  <span>
                    <Title my={0} pb={1}>
                      <NoM>{l.name}</NoM>
                    </Title>
                  </span>
                  <Text
                    width={[1]}
                    style={{ overflow: 'auto' }}
                    fontSize="1.4rem"
                  >
                    {l.details[0] !== '' ? (
                      <ul>
                        {l.details.map(detail => (
                          <li>
                            <ListText>{detail}</ListText>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ''
                    )}
                    {l.info[0] !== '' ? (
                      <ul>
                        {l.info.map(infoT => (
                          <li>
                            <ListText>{infoT}</ListText>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ''
                    )}
                  </Text>
                </TextContainer>

                <ImageContainer>
                  <ProjectImage src={l.imgurl} alt={'text'} />
                  <ProjectTag>
                    <Flex
                      style={{
                        float: 'right',
                      }}
                    >
                      {/* <Box mx={1} fontSize={5}>
                        <SocialLink
                            name="Check repository"
                            fontAwesomeIcon="github"
                            url={repositoryUrl}
                        />
                        </Box> */}
                      {/* <Box mx={1} fontSize={5}> */}
                      {/* <SocialLink
                            name="See project"
                            fontAwesomeIcon="globe"
                            url={'https://res.cloudinary.com/dewhx8bb4/image/upload/v1578339454/sample.jpg'}
                        />
                        </Box> */}
                    </Flex>
                    <ImageSubtitle
                      bg="primary"
                      color="white"
                      y="bottom"
                      x="right"
                      round
                    >
                      {l.type}
                    </ImageSubtitle>
                    <Hide query={MEDIA_QUERY_SMALL}>
                      <ImageSubtitle bg="backgroundDark">
                        {l.date}
                      </ImageSubtitle>
                    </Hide>
                  </ProjectTag>
                </ImageContainer>
              </Flex>
            </Card>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Licenses;
