"use client";
import React from "react";
import { Wrapper, useMediaQuery, Container } from "./Layout";
import { PrimaryButton } from "./Buttons";
import Image from "next/image";
const Navbar = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  return (
    <>
      <Wrapper width="100%" zIndex={100} position="fixed" top="0" bg="black">
        <Wrapper
          ps={isResponsive ? "30px" : "50px"}
          pe="3%"
          pt="30px"
          className="d-flex flex-row align-items-center justify-content-between"
        >
          <Image
            src="/assets/playin-logo.png"
            alt="playin logo"
            width={130}
            height={40}
          />
          {!isResponsive && (
            <PrimaryButton
              transform={true}
              weight="500"
              fontSize="18px"
              borderRadius="0px"
            >
              Get Started
            </PrimaryButton>
          )}
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Navbar;
