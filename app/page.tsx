"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  Wrapper,
  useMediaQuery,
  MarqueeSlider,
  SplitScreen,
  Container,
} from "@/components/Layout";
import { Spacer } from "@/components/Spacer";
import { H1, P } from "@/components/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
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
                  ms="5%"
                  me="5%"
                  className={`d-flex flex-column justify-content-start gap-2 ${
                    isResponsive && "align-items-center text-center"
                  }`}
                >
                  <H1 ls="3px" fontSize={isResponsive ? "31px" : "76px"}>
                    A NEW APPROACH TO SPORTS GAMING
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
            <Wrapper mt="15%">
              <SplitScreen />
            </Wrapper>
            <Spacer height="100vh" />
          </Container>
        </Wrapper>
      </>
    )
  );
}
