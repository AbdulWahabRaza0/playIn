"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  Wrapper,
  useMediaQuery,
  Container,
  TypeWriterComp,
  Image,
  MarqueeContainer,
  ScrollWrapper,
  SplitWrapper,
  HeadingComp,
  MarqueeComp,
} from "@/components/Layout";
import { Spacer } from "@/components/Spacer";
import { H1, P } from "@/components/Typography";
import { PrimaryButton } from "@/components/Buttons";
import { Input } from "../components/Input";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Header1Data, TeamData, RoadmapData } from "../utils";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <ScrollWrapper id="home">
          <Container pt="40px" id="about">
            <Wrapper
              height="auto"
              className="d-flex flex-row align-items-center"
              style={{ zIndex: 1, position: "relative" }}
            >
              <Wrapper className="d-flex flex-row gap-5">
                {!isResponsive && (
                  <Wrapper bg="white" height="65vh" width="0.7px"></Wrapper>
                )}
                <Wrapper
                  width={isResponsive ? "100%" : "650px"}
                  mt={isResponsive ? "5vh" : "15vh"}
                  ms={isResponsive ? "" : "30px"}
                  me={isResponsive ? "" : "30px"}
                  className={`d-flex flex-column justify-content-start gap-2 ${
                    isResponsive && "align-items-center text-center"
                  }`}
                >
                  <H1
                    style={{ height: !isResponsive ? "180px" : "" }}
                    lh={isResponsive ? "37px" : "68px"}
                    fontSize={isResponsive ? "20px" : "41px"}
                    family="'Montserrat', sans-serif"
                    weight="900"
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        color: "gray",
                        lineHeight: "18px",
                      }}
                    >
                      PRODUCTIVITY REDEFINED
                    </span>

                    <TypeWriterComp
                      text={"LEARN MORE IN THE VOICES YOU LIKE"}
                    />
                  </H1>
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
              id="marquee"
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
                    <MarqueeComp />
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
                      <MarqueeComp />
                    </H1>
                  </MarqueeContainer>
                </div>
              )}
            </Wrapper>
          </Container>
          <Wrapper id="app" mt={"5%"}>
            <HeadingComp
              heading={
                <>
                  {" "}
                  incentivizing
                  <br /> your voice
                </>
              }
            />
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
          </Wrapper>
          <Container id="devices">
            <Wrapper>
              <HeadingComp
                heading={
                  <>
                    Join the Network from any
                    <br />
                    device of your choice
                  </>
                }
              />
              <Wrapper>
                <Image
                  src="/assets/devices.png"
                  alt="devices"
                  className="img-fluid"
                />
              </Wrapper>
            </Wrapper>
          </Container>
          <Wrapper className="d-flex flex-row align-items-center justify-content-center gap-2 mt-5 mb-5">
            {["/assets/play.svg", "/assets/app.svg"].map((imgSrc, index) => {
              return (
                <>
                  <Image
                    key={index}
                    src={imgSrc}
                    alt="app store"
                    width="70px"
                    height="70px"
                  />
                </>
              );
            })}
          </Wrapper>
          <Wrapper
            id="experience"
            style={{
              backgroundImage:
                "linear-gradient(to bottom,rgba(185, 93, 93, 0.2), rgba(185, 93, 93, 0.4))",
            }}
            mt={isResponsive ? "10%" : "3%"}
            bg="white"
            width="100%"
            height="400px"
            className="d-flex flex-column align-items-center justify-content-center gap-4"
          >
            <HeadingComp
              heading={
                <>
                  {" "}
                  Experience the magic
                  <br /> of Auralnexus
                </>
              }
            />
            <PrimaryButton transform={true} fontSize="21px">
              Visit now
            </PrimaryButton>
          </Wrapper>

          <Container id="roadmap">
            <Wrapper>
              <HeadingComp heading={<>Roadmap</>} />
              <Wrapper>
                {isResponsive ? (
                  <Image src="/assets/road3.svg" alt="roadmap" />
                ) : (
                  <>
                    {" "}
                    {RoadmapData.map((obj, index) => {
                      return (
                        <>
                          <Wrapper key={index}>
                            <Image src={obj.imgSrc} alt="roadmap" />
                            {obj.data.map((line, lineIndex) => {
                              return (
                                <Wrapper
                                  key={lineIndex}
                                  mt={lineIndex === 0 ? "-30px" : ""}
                                  className="d-flex flex-row align-items-center justify-content-center"
                                >
                                  {line.lineData.map((lineData, dataIndex) => {
                                    return (
                                      <>
                                        <Wrapper
                                          key={dataIndex}
                                          ms="10%"
                                          me="10%"
                                        >
                                          {lineData}
                                        </Wrapper>
                                      </>
                                    );
                                  })}
                                </Wrapper>
                              );
                            })}
                          </Wrapper>
                        </>
                      );
                    })}
                  </>
                )}
              </Wrapper>
            </Wrapper>
          </Container>
          <Container id="team">
            <Wrapper mt={"5%"}>
              <Wrapper className="d-flex flex-row align-items-center justify-content-center">
                <Wrapper>
                  <HeadingComp
                    heading={
                      <>
                        Meet the Visionaries
                        <br /> behind AuralNexus
                      </>
                    }
                  />
                </Wrapper>
              </Wrapper>
              <Wrapper id="team">
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

                              <P className={`mb-0 text-center`}>{val.desc}</P>
                              <P color="gray" className={`mb-0 text-center`}>
                                {val.position}
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
              mt="10%"
              id="contact"
              className="d-flex flex-column align-items-center justify-content-center gap-3"
            >
              <Wrapper>
                <HeadingComp
                  heading={
                    <>
                      Intrested in Project?
                      <br />
                      Request a pitch today
                    </>
                  }
                />
              </Wrapper>

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
          <Container id="footer">
            <Wrapper>
              <Wrapper width="100%" height="0.5px" bg="white"></Wrapper>
              <Wrapper className="d-flex flex-column align-items-center justify-content-center">
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width="170px"
                  height="120px"
                />
                <Wrapper className="d-flex flex-row align-items-center justify-content-center gap-3">
                  <LinkedInIcon style={{ fontSize: "25px" }} />
                  {["/assets/play.svg", "/assets/app.svg"].map((val, index) => {
                    return (
                      <>
                        <Image
                          key={index}
                          src={val}
                          alt="app store"
                          width="25px"
                          height="25px"
                        />
                      </>
                    );
                  })}
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
                    {["Security", " Policy"].map((val, index) => {
                      return (
                        <>
                          <Wrapper
                            key={index}
                            ls="1px"
                            lHeight="24px"
                            fontSize="14px"
                            family="Poppins"
                            fontColor="gray"
                          >
                            {val}
                          </Wrapper>
                        </>
                      );
                    })}
                  </Wrapper>
                  <Wrapper
                    fontSize="14px"
                    ls="1px"
                    lHeight="24px"
                    fontColor="gray"
                    family="Poppins"
                  >
                    &copy;2023 | All rights reserved.
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Container>
        </ScrollWrapper>
      </>
    )
  );
}
