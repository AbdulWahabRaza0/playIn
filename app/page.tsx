"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  Wrapper,
  useMediaQuery,
  MarqueeSlider,
  SimpleCard,
  Container,
  TypeWriterComp,
  Row,
  Col,
  Image,
  MarqueeContainer,
  ScrollWrapper,
  SplitWrapper,
} from "@/components/Layout";
import { Spacer } from "@/components/Spacer";
import { H1, P, HeadingAlt, SpanHeading } from "@/components/Typography";
import { PrimaryButton } from "@/components/Buttons";
import { Input } from "../components/Input";
// import Logo from '../public/assets/logo.svg';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShopIcon from "@mui/icons-material/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie";
const Header1Data = [
  {
    headline: (
      <>
        Celebrity-Voiced
        <br /> Article Playback
      </>
    ),
    text: (
      <>
        Listen to your published articles
        <br /> narrated by celebrities like Elon
        <br /> Musk, Kavin Hart and more.
      </>
    ),
    src: "/assets/audio.png",
  },
  {
    headline: (
      <>
        AI Powered <br />
        Article Summaries
      </>
    ),
    text: (
      <>
        Empower your writing with AI generated
        <br /> responses for unique and
        <br /> engaging articles.
      </>
    ),
    src: "/assets/AI.png",
  },
  {
    headline: (
      <>
        Edit to Enhance <br />
        {"Article's"} Readability
      </>
    ),
    text: (
      <>
        Edit summaries and tags
        <br /> to perfection, tailoring them
        <br /> to your prefrences.
      </>
    ),
    src: "/assets/search.png",
  },
  {
    headline: (
      <>
        Showcasing <br />
        Publications
      </>
    ),
    text: (
      <>
        Let auralnexus suggest relevent
        <br /> tags, and customize them to
        <br /> optimize your content.
      </>
    ),
    src: "/assets/reading.png",
  },
  {
    headline: (
      <>
        Explore Engaging
        <br /> Content
      </>
    ),
    text: (
      <>
        Enter any article and recieve
        <br /> three types of AI generated
        <br /> summaries.
      </>
    ),
    src: "/assets/article.png",
  },
  {
    headline: (
      <>
        Thumbnail
        <br /> Touch-Up
      </>
    ),
    text: (
      <>
        Auralnexus creates captivating <br /> images for your articles using{" "}
        <br /> advanced AI technologes.
      </>
    ),
    src: "/assets/image.png",
  },
];
const Section2Data = [
  {
    heading: "How does your writing website work?",
    desc: "Our website simplifies article generation by utilizing links and titles. Just provide the relevant links and titles, and our advanced AI system will create well-structured and informative articles for you!",
  },
  {
    heading: "What are the benefits of using your website?",
    desc: "With our website, you can save valuable time and effort in content creation. Our AI-driven system processes the provided links and titles to craft engaging and high-quality articles, allowing you to focus on other essential tasks.",
  },
  {
    heading: "What types of summaries can I generate for my articles?",
    desc: "Our website offers three types of summaries: brief, medium, and detailed. You have the flexibility to choose the level of summarization that best suits your content and target audience.",
  },
  {
    heading: "Can I include images in my articles?",
    desc: "Absolutely! Our website supports image integration, allowing you to enrich your articles with visually appealing graphics. Enhance the readability and engagement of your content with relevant images that complement your text.",
  },
];
const TeamData = [
  {
    profile: "/assets/haider.jpg",
    name: "Haider Sattar",
    desc: "Founder and CEO",
  },
  {
    profile: "/assets/authornate.jpg",
    name: "Authornate",
    desc: "Technical Team",
  },
];
export default function Home() {
  const [mount, setMount] = useState(false);
  const [questionState, setQuestionState] = useState(-1);
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setMount(true);
  }, []);
  return (
    mount && (
      <>
        <Navbar />

        <ScrollWrapper>
          <Container>
            <Spacer height="10px" />
            <Wrapper
              id="about"
              height="auto"
              className="d-flex flex-row align-items-center"
              style={{ zIndex: 1, position: "relative" }}
            >
              <Wrapper className="d-flex flex-row gap-5">
                {!isResponsive && (
                  <Wrapper bg="white" height="75vh" width="0.7px"></Wrapper>
                )}
                <Wrapper
                  width={isResponsive ? "100%" : "1300px"}
                  mt={isResponsive ? "5vh" : "25vh"}
                  ms={isResponsive ? "" : "30px"}
                  me={isResponsive ? "" : "30px"}
                  className={`d-flex flex-column justify-content-start gap-2 ${
                    isResponsive && "align-items-center text-center"
                  }`}
                >
                  <H1
                    style={{ height: !isResponsive ? "180px" : "" }}
                    lh={isResponsive ? "37px" : "62px"}
                    fontSize={isResponsive ? "20px" : "37px"}
                    family="'Organeto','sans-serif'"
                    weight="700"
                  >
                    <TypeWriterComp text="Auralnexus revolutionizes the way you publish and listen to articles" />
                  </H1>

                  {isResponsive && (
                    <Wrapper className="mt-3 mb-5">
                      <PrimaryButton
                        family="'Poppins','sans-serif'"
                        fontColor="black"
                        weight="700"
                        height="51px"
                        width="170px"
                        borderRadius="25px"
                        fontSize="18px"
                      >
                        Get Started
                      </PrimaryButton>
                    </Wrapper>
                  )}
                </Wrapper>
              </Wrapper>
            </Wrapper>

            <Image
              style={{
                position: "absolute",
                top: "0%",
                right: "0%",
                zIndex: 0,
              }}
              width="auto"
              height="auto"
              className="img-fluid"
              src="/assets/e5.svg"
              alt="background"
            />

            <Wrapper
              mt={isResponsive ? "0px" : ""}
              mb={isResponsive ? "20px" : ""}
            >
              {isResponsive ? (
                <div style={{ paddingLeft: "0px", overflow: "hidden" }}>
                  <H1
                    fontSize="40px"
                    home
                    marqueed={isResponsive}
                    primary={true}
                  >
                    <SpanHeading>Articles Voiced by Icons</SpanHeading> -{" "}
                    <HeadingAlt green>Quick AI Abstracts</HeadingAlt> -{" "}
                    <SpanHeading>Perfecting Editorial Pieces</SpanHeading> -{" "}
                    <HeadingAlt green>BET TO WIN</HeadingAlt> -{" "}
                    <SpanHeading>Showcasing Publications</SpanHeading> -{" "}
                  </H1>
                  <Spacer />
                </div>
              ) : (
                <div>
                  <MarqueeContainer
                    className={isResponsive ? "" : "scrollable-hr"}
                  >
                    <H1
                      home
                      marqueed={isResponsive}
                      primary={true}
                      className="d-flex flex-row align-items-center gap-3"
                    >
                      <SpanHeading>Articles Voiced by Icons</SpanHeading> -{" "}
                      <HeadingAlt green>Quick AI Abstracts</HeadingAlt> -{" "}
                      <SpanHeading>Perfecting Editorial Pieces</SpanHeading> -{" "}
                      <HeadingAlt green>Showcasing Publications</HeadingAlt> -{" "}
                      <SpanHeading>Showcasing Publications</SpanHeading> -{" "}
                    </H1>
                  </MarqueeContainer>
                </div>
              )}
            </Wrapper>

            <Wrapper id="app" mt={"10%"}>
              <H1
                className="text-center mb-5"
                fontSize={isResponsive ? "21px" : "51px"}
                lh="71px"
                color="#db5c4d"
              >
                AuralNexus: Transforming Soundscapes
              </H1>
              <Wrapper>
                {Header1Data.map((val, index) => {
                  return (
                    <>
                      <SplitWrapper
                        left={index % 2 ? true : false}
                        src={val.src}
                        headline={val.headline}
                        text={val.text}
                      />
                    </>
                  );
                })}
              </Wrapper>
              {/* <Wrapper className="d-flex flex-row align-items-center justify-content-center flex-wrap gap-3">
                {Header1Data.map((val, index) => {
                  return (
                    <>
                      <Wrapper
                        border="1px solid white"
                        pt="20px"
                        pb="20px"
                        ps="20px"
                        pe="20px"
                        borderRadius="10px"
                        height="200px"
                        width={isResponsive ? "300px" : "400px"}
                        // style={{ boxShadow: "1px 3px 3px #D6D6D4" }}
                      >
                        <Wrapper
                          key={index}
                          className="d-flex flex-column align-items-start justify-content-center gap-4"
                        >
                          <H1 fontSize="31px" family="'Poppins','sans-serif'">
                            {val.headline}
                          </H1>
                          <P color="gray" className="mb-0">
                            {val.text}
                          </P>
                        </Wrapper>
                      </Wrapper>
                    </>
                  );
                })}
              </Wrapper> */}

              <Wrapper className="d-flex flex-row align-items-center justify-content-center gap-2 mt-5 mb-5">
                <ShopIcon style={{ fontSize: "25px" }} />
                <Wrapper>
                  <Image
                    src="/assets/app.svg"
                    alt="app store"
                    width="25px"
                    height="25px"
                  />
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Container>
          <Wrapper
            id="experience"
            mt={isResponsive ? "10%" : "3%"}
            bg="white"
            width="100%"
            height="300px"
            className="d-flex flex-column align-items-center justify-content-center gap-4"
          >
            <H1
              fontSize={isResponsive ? "21px" : "31px"}
              className="text-center"
              color="#db5c4d"
              weight="500"
              lh={isResponsive ? "27px" : null}
            >
              Experience the magic
              <br /> of Auralnexus
            </H1>
            <PrimaryButton transform={true} fontSize="21px">
              Visit now
            </PrimaryButton>
          </Wrapper>
          <Container>
            <Wrapper id="team">
              <Wrapper
                className="d-flex flex-row align-items-center justify-content-center mt-5"
                mb="7%"
              >
                <H1
                  className="text-center"
                  fontSize={isResponsive ? "21px" : "31px"}
                  color="#db5c4d"
                  lh={isResponsive ? "27px" : null}
                >
                  Meet the Visionaries
                  <br /> behind AuralNexus
                </H1>
              </Wrapper>
              <Wrapper
                id="team"
                ms={isResponsive ? "" : ""}
                me={isResponsive ? "" : ""}
              >
                <Wrapper
                  className={`d-flex flex-row align-items-center flex-wrap ${
                    isResponsive
                      ? "gap-3 justify-content-center"
                      : "justify-content-center gap-5"
                  }`}
                >
                  {TeamData.map((val, index) => {
                    return (
                      <>
                        <Wrapper
                          key={index}
                          pt="20px"
                          pb="20px"
                          ps="20px"
                          pe="20px"
                          borderRadius="10px"
                          height="auto"
                          width="300px"
                          className="mx-5"
                        >
                          <Wrapper
                            className={`d-flex flex-column align-items-center justify-content-end gap-4`}
                          >
                            <Wrapper
                              style={{
                                boxShadow: " 1px 1px 30px 1px white",
                                borderRadius: "50%",
                              }}
                            >
                              <Image
                                src={val.profile}
                                alt="haider"
                                width="300px"
                                height="300px"
                                className="rounded-5"
                              />
                            </Wrapper>
                            <Wrapper className="d-flex flex-column align-items-center justify-content-center">
                              <H1
                                className={`mb-0 text-center`}
                                fontSize="31px"
                                family="'Poppins','sans-serif'"
                              >
                                {val.name}
                              </H1>
                              <P color="gray" className={`mb-0 text-center`}>
                                {val.desc}
                              </P>
                              <Wrapper
                                className={`d-flex flex-row align-items-center justify-content-center mt-2`}
                              >
                                <LinkedInIcon />
                              </Wrapper>
                            </Wrapper>
                          </Wrapper>
                        </Wrapper>
                      </>
                    );
                  })}
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper
              className="d-flex flex-column align-items-center justify-content-center gap-3"
              mt={isResponsive ? "4rem" : "10rem"}
              id="contact"
            >
              <H1
                className="text-center"
                fontSize={isResponsive ? "21px" : "31px"}
                lh={isResponsive ? "27px" : null}
                color="#db5c4d"
              >
                {"We'd Love to Hear From You"}
              </H1>
              <Spacer height={isResponsive ? "10px" : "30px"} />
              <Wrapper
                width="100%"
                className="d-flex flex-row align-items-center justify-content-center"
              >
                <Input
                  type="text"
                  placeholder="Email"
                  width={isResponsive ? "90%" : "50%"}
                />
              </Wrapper>
              <Spacer height={isResponsive ? "0px" : "10px"} />
              <PrimaryButton
                width={isResponsive ? "120px" : ""}
                height={isResponsive ? "50px" : ""}
                fontSize="21px"
                transform={true}
              >
                Submit
              </PrimaryButton>
            </Wrapper>

            <Spacer height="40px" />
          </Container>
          <Wrapper id="footer">
            <Wrapper width="100%" height="0.5px" bg="white"></Wrapper>
            <Wrapper className="d-flex flex-column align-items-center justify-content-center mt-4">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width="120px"
                height="100px"
              />
              <Wrapper className="d-flex flex-row align-items-center justify-content-center gap-3">
                <LinkedInIcon style={{ fontSize: "25px" }} />
                <ShopIcon style={{ fontSize: "25px" }} />
                <Image
                  src="/assets/app.svg"
                  alt="app store"
                  width="25px"
                  height="25px"
                />
              </Wrapper>
              <Wrapper
                width="100%"
                className="px-3 pb-2 mt-5 d-flex flex-row align-items-end justify-content-between"
              >
                <Wrapper className="d-flex flex-column align-items-start justfy-content-center">
                  <Wrapper
                    ls="1px"
                    lHeight="31px"
                    fontSize="18px"
                    family="Poppins"
                    fontColor="gray"
                  >
                    Securty
                  </Wrapper>
                  <Wrapper
                    fontSize="18px"
                    ls="1px"
                    lHeight="31px"
                    fontColor="gray"
                    family="Poppins"
                  >
                    Policy
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  fontSize="18px"
                  ls="1px"
                  lHeight="31px"
                  fontColor="gray"
                  family="Poppins"
                >
                  auralnexus@gmail.com
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </ScrollWrapper>
      </>
    )
  );
}
