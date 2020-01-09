import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/CardAward';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const MEDIUM_CDN = 'https://cdn-images-1.medium.com/max/400';
const MEDIUM_URL = 'https://medium.com';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['30vh', '35vh']}
      width={['60vw', '70vw']}
      invertX
      invertY
    />
  </div>
);

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  padding: 10px;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const ListText = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const allAwards = [
  {
    name: 'Commitee Member , Association for Healthcare Social Media (AHSM)',
    date1: 'Apr 2019 — Present',
    place: 'Philadelphia',
    archivement:
      '<ul><li style="margin-bottom: 8px;"><span style="font-size:16px;">One of four elected state representatives in Washington D.C. selected to meet with congress officials as an advocate for EMS legislation policies</span></li><li><span style="font-size:16px;">Exectuive Advisor for selecting speakers and sponsoes for the annual International Conference for AHSM</span></li></ul>',
    img: '',
    imgalt: '',
  },
  {
    name: 'Pennsylvania Representative for National EMS Policy Advocation',
    date1: 'Apr 2019',
    place: 'Washington D.C.',
    archivement:
      '<ul><li ><span style="font-size:16px;">Student selected to sit on board for largest medical association committed to social media stewardship for physicians and medical providers</span></li></ul>',
    img: '',
    imgalt: 'Pennsylvania Department of health logo',
  },
  {
    name: 'USGA- AJGA Leadership Links Campaign Director',
    date1: 'Dec 2019',
    place: 'N/A',
    archivement:
      '<ul><li style="margin-bottom: 8px;"><span style="font-size:16px;">Organized massive social media outreach to raise funds for the Bluffton, SC, branch of First Tee, a national golf program that uses golf to educate underprivileged children</li><li><span style="font-size:16px;">Formed partnership with the Golf Channel to gain nationwide social media attention for fundraising</span></li><li><span style="font-size:16px;">Raised over $10,000 within six months</span></li></ul>',
    img:
      'https://res.cloudinary.com/dewhx8bb4/image/upload/v1578602301/Chris-resume/logo-pensil-sq_bjkxaw.png',
    imgalt: '',
  },
  {
    name:
      'Member of the Garnet Club Advancement Council at Swarthmore College, 2018',
    date1: 'Nov 2018 — Present',
    place: 'N/A',
    archivement:
      '<ul><li><span style="font-size:16px;">First student elected to be a sitting member on the prestigious alumni athletics board for the college</span></li></ul>',
    img: '',
    imgalt: '',
  },
  {
    name: 'Co-President of the Freshman Orientation Events',
    date1: 'Jan 2020',
    place: 'N/A',
    archivement:
      '<ul><li><span style="font-size:16px;">Built upon work as an Admission&apos;s Office Student Intern for social media and prospective student outreach to serve as the co-head of the orietnaiton week planning and oversight for the Class of 2023.</span></li></ul>',
    img: '',
    imgalt: '',
  },
];

const Post = ({ title, text, image, url, date, time }) => (
  // <Card onClick={() => window.open(url, '_blank')} pb={4}>
  <Card pb={4}>
    <EllipsisHeading m={3} p={1}>
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${date} - ${Math.ceil(time)} min`}
    </ImageSubtitle>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

const parsePost = author => postFromGraphql => {
  const { id, uniqueSlug, createdAt, title, virtuals } = postFromGraphql;
  const image =
    virtuals.previewImage.imageId &&
    `${MEDIUM_CDN}/${virtuals.previewImage.imageId}`;

  return {
    id,
    title,
    time: virtuals.readingTime,
    date: createdAt,
    text: virtuals.subtitle,
    image,
    url: `${MEDIUM_URL}/${author.username}/${uniqueSlug}`,
    Component: Post,
  };
};

const edgeToArray = data => data.edges.map(edge => edge.node);

const Awards = () => (
  <StaticQuery
    query={graphql`
      query MediumPostQuery {
        site {
          siteMetadata {
            isMediumUserDefined
          }
        }
        allMediumPost(limit: 7, sort: { fields: createdAt, order: DESC }) {
          totalCount
          edges {
            node {
              id
              uniqueSlug
              title
              createdAt(formatString: "MMM YYYY")
              virtuals {
                subtitle
                readingTime
                previewImage {
                  imageId
                }
              }
            }
          }
        }
        author: mediumUser {
          username
          name
        }
      }
    `}
    render={({ allMediumPost, site, author }) => {
      const posts = edgeToArray(allMediumPost).map(parsePost(author));

      const diffAmountArticles = allMediumPost.totalCount - posts.length;
      if (diffAmountArticles > 0) {
        posts.push({
          ...author,
          id: 'more-field',
          number: diffAmountArticles,
          Component: MorePosts,
        });
      }

      const { isMediumUserDefined } = site.siteMetadata;

      return (
        isMediumUserDefined && (
          <Section.Container id="awards" Background={Background}>
            <Section.Header name="AWARDS" icon="" label="writing" />
            {/* <CardContainer minWidth="300px">
              {posts.map(({ Component, ...rest }) => (
                <Fade bottom key={rest.id}>
                  <Component {...rest} key={rest.id} />
                </Fade>
              ))}
            </CardContainer> */}
            <CardContainer minWidth="300px">
              {allAwards.map((award, id) => (
                <Fade bottom key={id}>
                  <Card pb={2} m={2}>
                    <EllipsisHeading>{award.name}</EllipsisHeading>
                    {/* {award.img !== '' ? 
                     <CoverImage src={award.img} height="200px" alt={award.imgalt} />
                    : ''} */}
                    <Text m={3} fontSize="1.4rem">
                      <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: award.archivement }}
                      />
                    </Text>

                    <ImageSubtitle
                      bg="primary"
                      color="white"
                      x="right"
                      y="bottom"
                      round
                    >
                      {`${award.date1}`}
                    </ImageSubtitle>
                  </Card>
                </Fade>
              ))}
            </CardContainer>
          </Section.Container>
        )
      );
    }}
  />
);

export default Awards;
