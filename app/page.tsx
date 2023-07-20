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
} from "@/components/Layout";
import { Spacer } from "@/components/Spacer";
import { H1, P } from "@/components/Typography";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import "bootstrap/dist/css/bootstrap.min.css";
const Header1Data = [
  {
    imgSrc: "/assets/header1badge.svg",
    text: "You must reach the Daily PLEX Rewards Target. Win or Lose, PLEX is earned.",
  },
  {
    imgSrc: "/assets/header1coins.svg",
    text: "You are then granted an allocation of $PLAYN Tokens.",
  },
  {
    imgSrc: "/assets/header1staked.svg",
    text: "$PLAYN Token allocations are auto-staked, and you receive a share of the revenue generated from $PLAYN liquidity pools.",
  },
];
const Section2Data = [
  {
    heading: "PLAY2EARN WITH COLLECTIBLES",
  },
  {
    heading: "SENTIMENT AND CONSENSUS ODDS MAKING",
  },
  {
    heading: "ORACLE TO CONTRACT SETTLEMENT",
  },
  {
    heading: "BETTING ON AUTOPILOT",
  },
];
export default function Home() {
  const [mount, setMount] = useState(false);
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    mount && (
      <>
        <Navbar />
        <Wrapper>
          <Container>
            <Spacer height="100px" />
            <Wrapper
              height="auto"
              className="d-flex flex-row align-items-center"
            >
              <Wrapper className="d-flex flex-row gap-5">
                {!isResponsive && (
                  <Wrapper bg="white" height="85vh" width="0.7px"></Wrapper>
                )}
                <Wrapper
                  width={isResponsive ? "100%" : "70%"}
                  mt={isResponsive ? "5vh" : "20vh"}
                  ms={isResponsive ? "" : "30px"}
                  me={isResponsive ? "" : "30px"}
                  className={`d-flex flex-column justify-content-start gap-2 ${
                    isResponsive && "align-items-center text-center"
                  }`}
                >
                  <H1 ls="3px" fontSize={isResponsive ? "31px" : "76px"}>
                    <TypeWriterComp text="A NEW APPROACH TO SPORTS GAMING" />
                  </H1>

                  <P
                    ls={isResponsive ? "0px" : "3px"}
                    lHeight={isResponsive ? "31px" : "26px"}
                    fontSize="18px"
                    color="gray"
                    className={`${isResponsive && "mt-2"}`}
                  >
                    Peer2Peer Sports Betting Meets Play2Earn Gaming
                    <br />
                    Earn All The Time. Every Time.
                  </P>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper id="marquee" mt={isResponsive ? "15%" : "3%"}>
              <MarqueeSlider>
                <H1 fontSize={isResponsive ? "31px" : "73px"} weight="bold">
                  - TOURNAMENT -<span className="text-orange">REWARDS</span>-
                  GAMES -<span className="text-orange"> BET TO WIN </span>-
                  TOURNAMENT -<span className="text-orange"> REWARDS </span>-
                  GAMES -<span className="text-orange"> BET TO WIN </span>
                </H1>
              </MarqueeSlider>
            </Wrapper>

            <Wrapper mt={"10%"}>
              <Row className="text-center align-items-center">
                <Col md={6}>
                  <Wrapper className="d-flex flex-column align-items-center">
                    <H1
                      fontSize={isResponsive ? "31px" : "51px"}
                      ls="4px"
                      lHeight={isResponsive ? "41px" : "81px"}
                    >
                      IN GAME XP TO
                      <br /> REAL MONEY
                    </H1>
                    <Wrapper position="relative">
                      <Wrapper
                        position="absolute"
                        fontColor="gray"
                        fontSize={isResponsive ? "21px" : "24px"}
                        mt="80px"
                        ms="80px"
                        className="text-start"
                        ls="1px"
                        lHeight={isResponsive ? "41px" : "51px"}
                      >
                        A simple gameplan:
                        <br />
                        In-Game XP to Real $$$
                      </Wrapper>
                      <Wrapper position="relative">
                        <img src="/assets/header1.svg" alt="header1" />
                      </Wrapper>
                    </Wrapper>
                  </Wrapper>
                </Col>
                <Col md={6} className="align-slef-start">
                  <Wrapper className="d-flex flex-column align-items-center justify-content-center gap-4">
                    {Header1Data.map((val, index) => {
                      return (
                        <>
                          <SimpleCard
                            key={index}
                            imgSrc={val.imgSrc}
                            text={val.text}
                          />
                        </>
                      );
                    })}
                  </Wrapper>
                </Col>
              </Row>
            </Wrapper>
            <Wrapper id="marquee" mt={isResponsive ? "15%" : "10%"}>
              <MarqueeSlider>
                <H1 fontSize={isResponsive ? "31px" : "73px"} weight="bold">
                  - DECENTRALIZED -
                  <span className="text-orange"> GOVERNANCE </span>- COMMUNITY -
                  <span className="text-orange"> DELEGATE </span> -
                  DECENTRALIZED -
                  <span className="text-orange"> GOVERNANCE </span>- COMMUNITY -
                  <span className="text-orange"> DELEGATE </span>
                </H1>
              </MarqueeSlider>
            </Wrapper>
            <Wrapper id="section-3" mt={isResponsive ? "15%" : "10%"}>
              <Wrapper ps={isResponsive ? "5%" : "5%"}>
                <Wrapper mb="5%">
                  <H1 fontSize={isResponsive ? "31px" : "51px"}>
                    PLAYIN ECOSYSTEM
                  </H1>
                </Wrapper>
                <Row className="text-center align-items-center flex-wrap-reverse">
                  <Col md={6} sm={6} lg={6}>
                    <Wrapper className="d-flex flex-column  gap-5">
                      {Section2Data.map((val, index) => {
                        return (
                          <>
                            <Wrapper
                              key={index}
                              className="d-flex flex-row align-items-center justify-content-between"
                              pt="40px"
                              pb="40px"
                              ps="20px"
                              pe="20px"
                              width="90%"
                              border="1px solid white"
                            >
                              <Wrapper className="text-start">
                                <H1
                                  ls="1px"
                                  fontSize={isResponsive ? "21px" : "27px"}
                                >
                                  {val.heading}
                                </H1>
                              </Wrapper>
                              <Wrapper ms="10%">
                                <AddIcon style={{ fontSize: "31px" }} />
                              </Wrapper>
                            </Wrapper>
                          </>
                        );
                      })}
                    </Wrapper>
                  </Col>
                  <Col md={6}>
                    <Image
                      src="/assets/question.gif"
                      alt="question"
                      className="img-fluid"
                      width={isResponsive ? 300 : 600}
                      height={700}
                    />
                  </Col>
                </Row>
              </Wrapper>
            </Wrapper>
            <Spacer height="100vh" />
          </Container>
        </Wrapper>
      </>
    )
  );
}
