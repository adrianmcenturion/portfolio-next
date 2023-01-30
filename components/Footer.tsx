import { Divider, Flex, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";

type Props = {};
const Footer = (props: Props) => {
  return (
    <VStack py={10}>
      <Divider borderColor={'#00C89B'} my={4}/>
      <HStack alignItems={"baseline"} justifyContent="center" gap={10} fontSize='lg' wrap={'wrap'}>
        <Link
          href={"https://www.linkedin.com/in/adrian-centurion/"}
          target="_blank"
        >
          <Flex alignItems={"center"} justifyContent="center" gap={2}>
            <FaLinkedin />
            Contact me
          </Flex>
        </Link>
        <Link href={"https://github.com/adrianmcenturion"} target="_blank">
          <Flex alignItems={"center"} justifyContent="center" gap={2}>
            <FaGithubSquare />
            Follow me
          </Flex>
        </Link>
        <Link href={"mailto:adrianmcenturion@gmail.com"} target="_blank">
          <Flex alignItems={"center"} justifyContent="center" gap={2}>
            <FaEnvelope />
            adrianmcenturion@gmail.com
          </Flex>
        </Link>
      </HStack>
    </VStack>
  );
};
export default Footer;
