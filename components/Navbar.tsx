"use client";
import React, { useState } from "react";
import { Wrapper, useMediaQuery, Image } from "./Layout";
import { PrimaryButton } from "./Buttons";
import { P } from "./Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  return (
    <>
      <Wrapper width="100%" bg="black">
        <Wrapper
          ps={isResponsive ? "30px" : "50px"}
          pe="3%"
          pt="35px"
          className="d-flex flex-row align-items-center justify-content-between"
        >
          <Image
            src="/assets/logo.svg"
            alt="playin logo"
            width={150}
            height={50}
          />
          <Wrapper
            zIndex={100}
            style={{ position: "fixed", right: "5%" }}
            className="d-flex flex-row align-items-center justify-content-center"
          >
            {open ? (
              <>
                <Wrapper
                  bg="#282834"
                  borderRadius="40px"
                  height="60px"
                  className="d-flex flex-row align-items-center justify-content-center ps-4 pe-4 gap-4"
                >
                  <P
                    className="mb-0"
                    style={{ cursor: "pointer" }}
                    hover={true}
                  >
                    Get Started
                  </P>
                  <Wrapper
                    // transition={true}
                    data-aos="flip-left"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon style={{ transition: "all 0.5s ease" }} />
                  </Wrapper>
                </Wrapper>
              </>
            ) : (
              <Wrapper
                bg="#282834"
                borderRadius="50%"
                width="60px"
                height="60px"
                style={{ cursor: "pointer" }}
                className="d-flex flex-row align-items-center justify-content-center"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Wrapper data-aos="flip-left">
                  <MenuIcon
                    className="mb-0"
                    style={{
                      fontSize: "21px",
                    }}
                  />
                </Wrapper>
              </Wrapper>
            )}
          </Wrapper>
          {/* {!isResponsive && (
            <PrimaryButton
              transform={true}
              weight="500"
              fontSize="18px"
              borderRadius="0px"
              fontColor="#242a2e"
              width="160px"
              height="45px"
            >
              Get Started
            </PrimaryButton>
          )} */}
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Navbar;
