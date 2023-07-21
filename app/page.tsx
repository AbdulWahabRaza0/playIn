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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShopIcon from "@mui/icons-material/Shop";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Header1Data = [
  {
    headline: "Effortless Summaries",
    text: "Enter any article and recieve three types of AI generated summaries.",
  },
  {
    headline: "AI Image Generation",
    text: "Auralnexus creates captivating images for your articles using advanced AI technologes.",
  },
  {
    headline: "Smart article tags",
    text: "Let auralnexus suggest relevent tags, and customize them to optimize your content.",
  },
  {
    headline: "Edit and Enhance",
    text: "Edit summaries and tags to perfection, tailoring them to your prefrences.",
  },
  {
    headline: "Publish with AI",
    text: "Empower your writing with AI generated responses for unique and engaging articles.",
  },
  {
    headline: "Famous voices",
    text: "Listen to your published articles narrated by celebrities like Elon Musk, Kavin Hart and more.",
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
    desc: "CTO Authornate",
  },
  {
    profile: "/assets/authornate.jpg",
    name: "Authornate",
    desc: "FS Team",
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
        <Wrapper>
          <Container>
            <Spacer height="10px" />
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
                      text={"Unlock power of summary and voices"}
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
                    AuralNexus Unlocking power of AI generated summaries,
                    <br />
                    images and voice of your fav celebs.
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
                  Summaries -<span className="text-orange">AI Generated</span>-
                  Voices -<span className="text-orange">Famous</span>- CONTENT -
                  <span className="text-orange">Automated</span>- Images -
                  <span className="text-orange">AuralNexus</span>- INSIGHTS -
                  <span className="text-orange">OPTIMIZE</span>-
                </H1>
              </MarqueeSlider>
            </Wrapper>
            <Wrapper id="section-2" mt={"10%"}>
              <H1
                className="text-center mb-5"
                fontSize="51px"
                family="'Poppins','sans-serif'"
                color="#db5c4d"
              >
                What we do?
              </H1>
              <Wrapper className="d-flex flex-row align-items-center justify-content-center flex-wrap gap-3">
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
              </Wrapper>
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
              fontSize="51px"
              family="'Poppins','sans-serif'"
              className="text-center"
              color="#db5c4d"
            >
              Start your experience now
            </H1>
            <PrimaryButton transform={true} fontSize="21px">
              Visit now
            </PrimaryButton>
          </Wrapper>
          <Container>
            <Wrapper>
              <Wrapper
                className="d-flex flex-row align-items-center justify-content-center mt-5"
                mb="7%"
              >
                <H1
                  fontSize="51px"
                  family="'Poppins','sans-serif'"
                  color="#db5c4d"
                >
                  Meet the Visionaries behind AuralNexus
                </H1>
              </Wrapper>
              <Wrapper
                id="team"
                ms={isResponsive ? "" : "10%"}
                me={isResponsive ? "" : "10%"}
              >
                <Wrapper
                  className={`d-flex flex-row align-items-center flex-wrap ${
                    isResponsive
                      ? "gap-3 justify-content-center"
                      : "justify-content-between"
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
                          height="300px"
                          width="250px"
                        >
                          <Wrapper
                            className={`d-flex flex-column ${
                              index === 1
                                ? "align-items-start"
                                : "align-items-end"
                            } justify-content-end gap-4`}
                          >
                            <Wrapper position="relative">
                              <Image
                                src={val.profile}
                                alt="haider"
                                width="300px"
                                height="300px"
                                className="rounded-5"
                              />
                            </Wrapper>
                            <Wrapper
                              position="absolute"
                              // style={{ bottom: 10 }}
                              bg="black"
                              ps="30px"
                              pe="30px"
                              pt="20px"
                              pb="20px"
                            >
                              <H1
                                className={`mb-0 ${
                                  index === 1 ? "text-start" : "text-end"
                                }`}
                                fontSize="31px"
                                family="'Poppins','sans-serif'"
                              >
                                {val.name}
                              </H1>
                              <P
                                color="gray"
                                className={`mb-0 ${
                                  index === 1 ? "text-start" : "text-end"
                                }`}
                              >
                                {val.desc}
                              </P>
                              <Wrapper
                                className={`d-flex flex-row align-items-center ${
                                  index === 1
                                    ? "justify-content-start"
                                    : "justify-content-end"
                                } mt-2`}
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
              className="d-flex flex-column align-items-center justify-content-center"
              mt="10rem"
            >
              <H1
                fontSize="51px"
                family="'Poppins','sans-serif'"
                color="#db5c4d"
              >
                Contact Us
              </H1>
            </Wrapper>
            <Spacer height="100vh" />
          </Container>
        </Wrapper>
      </>
    )
  );
}
