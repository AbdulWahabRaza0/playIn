"use client";
import React from "react";
import { Wrapper, useMediaQuery } from "./Layout";
import { PrimaryButton } from "./Buttons";
import Image from "next/image";
const Navbar = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 752px)",
  });
  return (
    <>
      <Wrapper className="d-flex flex-row align-items-center justify-content-between">
        <Image
          src="/assets/playin-logo.png"
          alt="playin logo"
          width={111}
          height={36}
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
    </>
  );
};

export default Navbar;
