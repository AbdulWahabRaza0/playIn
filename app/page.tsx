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
const Header1Data = [
  {
    headline: (
      <>
        Celebrity-Voiced
        <br /> Article
        <br /> Playback
      </>
    ),
    text: (
      <>
        Listen to your published articles narrated by
        <br /> celebrities like Elon Musk, Kavin Hart <br /> and more.
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
        Enter any article and recieve
        <br /> three types of AI generated
        <br /> summaries.
      </>
    ),
    src: "/assets/ai.png",
  },
  {
    headline: (
      <>
        Edit to Enhance <br />
        {"Article's"}
        <br /> Readability
      </>
    ),
    text: (
      <>
        Edit summaries and tags
        <br /> to perfection, tailoring them
        <br /> to your prefrences.
      </>
    ),
    src: "/assets/reading.png",
  },
  {
    headline: <>Showcasing Publications</>,
    text: (
      <>
        Let auralnexus suggest relevent
        <br /> tags, and customize them to
        <br /> optimize your content.
      </>
    ),

    src: "/assets/article.png",
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
        Empower your writing with AI generated
        <br /> responses for unique and
        <br /> engaging articles.
      </>
    ),

    src: "/assets/search.png",
  },
  {
    headline: (
      <>
        Get Unique generative <br /> Thumbnals
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
const TeamData = [
  {
    profile: "/assets/haider.jpg",
    name: "Gullam Haider",
    desc: "Founder and CEO",
  },
  {
    profile: "/assets/authornate.jpg",
    name: "Authornate",
    desc: "Technical Team",
  },
  {
    profile: "/assets/haider.jpg",
    name: "Rohan Advisor",
    desc: "Founder and CEO",
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
                  width={isResponsive ? "100%" : "70%"}
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
                    family="'Montserrat', sans-serif"
                    weight="900"
                  >
                    PRODUCTIVITY REDEFINED
                    <TypeWriterComp
                      text={"LEARN MORE IN THE VOICES YOU LIKE"}
                    />
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
          </Container>
          <Wrapper id="app" mt={"10%"}>
            <H1
              className={isResponsive ? "mb-0 text-center" : "text-center mb-5"}
              fontSize={isResponsive ? "21px" : "50px"}
              lh={isResponsive ? "27px" : "57px"}
              color="#db5c4d"
              family="'Montserrat', sans-serif"
              weight="700"
            >
              incentivizing
              <br /> your voice
            </H1>
            <Wrapper gradient={true}>
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

            <Wrapper className="d-flex flex-row align-items-center justify-content-center gap-2 mt-5 mb-5">
              <Image
                src="/assets/play.svg"
                alt="app store"
                width="70px"
                height="70px"
              />
              <Wrapper>
                <Image
                  src="/assets/app.svg"
                  alt="app store"
                  width="70px"
                  height="70px"
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
            <Container>
            <Wrapper id="devices">
              <H1
                className="text-center mb-5"
                fontSize={isResponsive ? "21px" : "50px"}
                lh={isResponsive ? "27px" : "57px"}
                color="#db5c4d"
                family="'Montserrat', sans-serif"
                weight="700"
              >
                Join the Network from any
                <br />
                device of your choice
              </H1>
              <Wrapper>
                <Image
                  src="/assets/devices.png"
                  alt="devices"
                  className="img-fluid"
                />
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
              className="text-center mb-5"
              fontSize={isResponsive ? "21px" : "50px"}
              lh={isResponsive ? "27px" : "57px"}
              color="#db5c4d"
              family="'Montserrat', sans-serif"
              weight="700"
            >
              Experience the magic
              <br /> of Auralnexus
            </H1>
            <PrimaryButton transform={true} fontSize="21px">
              Visit now
            </PrimaryButton>
          </Wrapper>
        
          <Container></Container>
          
          <Container>
            <Wrapper id="roadmap">
              <H1
                className="text-center mb-5"
                fontSize={isResponsive ? "21px" : "50px"}
                lh={isResponsive ? "27px" : "57px"}
                color="#db5c4d"
                family="'Montserrat', sans-serif"
                weight="700"
              >
                Roadmap
              </H1>
              <Wrapper>
                {isResponsive ? (
                  <Image src="/assets/road3.svg" alt="roadmap" />
                ) : (
                  <>
                    {" "}
                    <Image src="/assets/road1.svg" alt="roadmap" />
                    <Wrapper mt="-30px" className="d-flex flex-row align-items-center justify-content-center">
<Wrapper ms="10%" me="10%">Dummy1</Wrapper>
<Wrapper ms="10%" me="10%">Dummy2</Wrapper>
<Wrapper ms="10%" me="10%">Dummy3</Wrapper>
                    </Wrapper>
                     <Wrapper className="d-flex flex-row align-items-center justify-content-center">
<Wrapper ms="10%" me="10%">Dummy1</Wrapper>
<Wrapper ms="10%" me="10%">Dummy2</Wrapper>
<Wrapper ms="10%" me="10%">Dummy3</Wrapper>
                    </Wrapper>
                    <Image src="/assets/road2.svg" alt="roadmap" />
                      <Wrapper mt="-30px" className="d-flex flex-row align-items-center justify-content-center">
<Wrapper ms="10%" me="10%">Dummy1</Wrapper>
<Wrapper ms="10%" me="10%">Dummy2</Wrapper>
<Wrapper ms="10%" me="10%">Dummy3</Wrapper>
                    </Wrapper>
                    <Wrapper  className="d-flex flex-row align-items-center justify-content-center">
<Wrapper ms="10%" me="10%">Dummy1</Wrapper>
<Wrapper ms="10%" me="10%">Dummy2</Wrapper>
<Wrapper ms="10%" me="10%">Dummy3</Wrapper>
                    </Wrapper>
                  </>
                )}
              </Wrapper>
            </Wrapper>
          </Container>
          <Container>
            <Wrapper id="team">
              <Wrapper
                className="d-flex flex-row align-items-center justify-content-center mt-5"
                mb="7%"
              >
                <H1
                  className="text-center mb-5"
                  fontSize={isResponsive ? "21px" : "50px"}
                  lh={isResponsive ? "27px" : "57px"}
                  color="#db5c4d"
                  family="'Montserrat', sans-serif"
                  weight="700"
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
                  className={`d-flex flex-row align-items-center  ${
                    isResponsive
                      ? "gap-3 justify-content-center flex-wrap"
                      : "justify-content-center gap-1"
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
                            <Wrapper>
                              <Image
                                src={val.profile}
                                alt="haider"
                                width="250px"
                                height="250px"
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
              id="contact"
              className="d-flex flex-column align-items-center justify-content-center gap-3"
              mt={isResponsive ? "4rem" : "10rem"}
            >
              <H1
                className="text-center mb-5"
                fontSize={isResponsive ? "21px" : "50px"}
                lh={isResponsive ? "27px" : "57px"}
                color="#db5c4d"
                family="'Montserrat', sans-serif"
                weight="700"
              >
                Intrested in Project?
                <br />
                Request a pitch today
              </H1>
              <Spacer height={isResponsive ? "10px" : "30px"} />
              <Wrapper
                width="100%"
                className="d-flex flex-row align-items-center justify-content-center"
              >
                <Input
                  type="text"
                  placeholder="enter your email"
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
                <Image
                  src="/assets/play.svg"
                  alt="app store"
                  width="25px"
                  height="25px"
                />
                <Image
                  src="/assets/app.svg"
                  alt="app store"
                  width="25px"
                  height="25px"
                />
              </Wrapper>
              <Wrapper
                width="100%"
                className={`px-3 pb-2 mt-5 d-flex  ${
                  isResponsive
                    ? "justify-content-center flex-column align-items-center"
                    : "justify-content-between flex-row align-items-end"
                }`}
              >
                <Wrapper
                  className={`d-flex flex-column justfy-content-center ${
                    isResponsive
                      ? "align-items-center my-3"
                      : "align-items-start"
                  }`}
                >
                  <Wrapper
                    ls="1px"
                    lHeight="24px"
                    fontSize="14px"
                    family="Poppins"
                    fontColor="gray"
                  >
                    Security
                  </Wrapper>
                  <Wrapper
                    fontSize="14px"
                    ls="1px"
                    lHeight="24px"
                    fontColor="gray"
                    family="Poppins"
                  >
                    Policy
                  </Wrapper>
                </Wrapper>
                <Wrapper
                  fontSize="14px"
                  ls="1px"
                  lHeight="24px"
                  fontColor="gray"
                  family="Poppins"
                >
                  All Rights Reserved &copy;
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </ScrollWrapper>
      </>
    )
  );
}
