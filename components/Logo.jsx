import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px
padding: 10px
`;

const Logo = () => {
  const logoImg = "/images/logo.svg";

  return (
    <Link href="#home" scroll={false}>
      <a>
        <LogoBox>
          <Image src={logoImg} alt="logo" width={20} height={20} />
          <Text
            id="/"
            cursor="pointer"
            color={useColorModeValue("blue.700", "blue.500")}
            fontFamily="M PLUS Rounded 1c, sans-serif"
            fontWeight="bold"
            ml={3}
            pb={1}
          >
            Bony Sureliya
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
