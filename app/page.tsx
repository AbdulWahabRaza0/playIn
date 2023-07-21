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
} from "@/components/Layout";
import { Spacer } from "@/components/Spacer";
import { H1, P } from "@/components/Typography";
import { PrimaryButton } from "@/components/Buttons";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "bootstrap/dist/css/bootstrap.min.css";
const Header1Data = [
  {
    // imgSrc: "/assets/bullet.png",
    text: "Earn Incentives for Your Exceptional Content.",
  },
  {
    // imgSrc: "/assets/header1coins.svg",
    text: "Experience Professional AI-Powered Assistance",
  },
  {
    // imgSrc: "/assets/header1staked.svg",
    text: "Streamline Article Generation with Thumbnail, Summaries, Tags, and Audio Features.",
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
export default function Home() {
  const [mount, setMount] = useState(false);
  const [questionState, setQuestionState] = useState(-1);
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
                  <H1
                    ls="3px"
                    fontSize={isResponsive ? "31px" : "71px"}
                    family="'Poppins','sans-serif'"
                    weight="700"
                  >
                    <TypeWriterComp
                      text={"Craft Compelling Articles Effortlessly"}
                    />
                  </H1>

                  <P
                    ls={isResponsive ? "0px" : "3px"}
                    lHeight={isResponsive ? "31px" : "26px"}
                    fontSize="18px"
                    weight="200"
                    color="gray"
                    className={`${isResponsive && "mt-2"}`}
                  >
                    Unleash creativity with AI-driven articles, auto-read audio
                    <br />& captivating thumbnails!
                  </P>
                  {isResponsive && (
                    <Wrapper className="mt-2">
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
            <Wrapper id="marquee" mt={isResponsive ? "15%" : "3%"}>
              <MarqueeSlider>
                <H1
                  fontSize={isResponsive ? "31px" : "73px"}
                  weight="bold"
                  family="'Poppins','sans-serif'"
                >
                  CREATIVITY -<span className="text-orange">INSPIRATION</span>-
                  IDEAS -<span className="text-orange">ELEVATE</span>- CONTENT -
                  <span className="text-orange">ENGAGE</span>- WRITING -
                  <span className="text-orange">AUTOMATED</span>- INSIGHTS -
                  <span className="text-orange">OPTIMIZE</span>-
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
                      family="'Poppins','sans-serif'"
                    >
                      Creative Writing to
                      <br /> Lucrative Earnings
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
                        family="'Nekst','sans-serif'"
                      >
                        A simple gameplan:
                        <br />
                        Writing to Real $$$
                      </Wrapper>
                      <Wrapper position="relative">
                        <Image src="/assets/header1.svg" alt="header1" />
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
                            imgSrc={"/assets/bullet.png"}
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
                <H1
                  fontSize={isResponsive ? "31px" : "73px"}
                  weight="bold"
                  family="'Poppins','sans-serif'"
                >
                  CREATIVE -<span className="text-orange">EMPOWERMENT</span>-
                  INNOVATION -<span className="text-orange">UNLEASH</span>-
                  INSPIRATION -<span className="text-orange">CONNECTED</span>-
                  COMMUNITY -<span className="text-orange">AMPLIFY</span>-
                </H1>
              </MarqueeSlider>
            </Wrapper>
            <Wrapper id="section-3" mt={isResponsive ? "15%" : "10%"}>
              <Wrapper ps={isResponsive ? "5%" : "5%"}>
                <Wrapper mb="5%">
                  <H1
                    fontSize={isResponsive ? "31px" : "51px"}
                    family="'Poppins','sans-serif'"
                  >
                    Aural Nexus ECOSYSTEM
                  </H1>
                </Wrapper>
                <Row className="text-center align-items-center flex-wrap-reverse">
                  <Col md={6} sm={6} lg={6}>
                    <Wrapper className="d-flex flex-column gap-4">
                      {Section2Data.map((val, index) => {
                        return (
                          <>
                            <Wrapper key={index}>
                              <Wrapper
                                className="d-flex flex-row align-items-center justify-content-between"
                                pt="40px"
                                pb="40px"
                                ps="20px"
                                pe="20px"
                                width="90%"
                                bg={index === questionState ? "#db5c4d" : ""}
                                border="1px solid white"
                              >
                                <Wrapper className="text-start">
                                  <H1
                                    ls="1px"
                                    fontSize={isResponsive ? "21px" : "27px"}
                                    family="'Poppins','sans-serif'"
                                  >
                                    {val.heading}
                                  </H1>
                                </Wrapper>
                                <Wrapper ms="10%">
                                  {index == questionState ? (
                                    <RemoveIcon
                                      onClick={() => {
                                        setQuestionState(-1);
                                      }}
                                      style={{
                                        fontSize: "31px",
                                        cursor: "pointer",
                                      }}
                                    />
                                  ) : (
                                    <AddIcon
                                      onClick={() => {
                                        setQuestionState(index);
                                      }}
                                      style={{
                                        fontSize: "31px",
                                        cursor: "pointer",
                                      }}
                                    />
                                  )}
                                </Wrapper>
                              </Wrapper>
                              {index === questionState && (
                                <Wrapper
                                  width="90%"
                                  pt="40px"
                                  pb="40px"
                                  ps="20px"
                                  pe="20px"
                                  border="1px solid white"
                                  family="'Organeto','sans-serif'"
                                  className="text-start"
                                  fontColor="gray"
                                  fontSize="16px"
                                >
                                  {val.desc}
                                </Wrapper>
                              )}
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
