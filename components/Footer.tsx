import { Divider, Flex, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <VStack py={10}>
      <Divider borderColor={'pink.600'} border='2px' my={4}/>
      <HStack alignItems={"baseline"} justifyContent="center" gap={10} fontSize='lg' wrap={'wrap'} >
        <Link
          href={"https://www.linkedin.com/in/adrian-centurion/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex alignItems={"center"} justifyContent="center" gap={2} transition='250ms' _hover={{color: 'pink.600'}}>
            <FaLinkedin />
            Contact me
          </Flex>
        </Link>
        <Link href={"https://github.com/adrianmcenturion"} target="_blank" rel="noopener noreferrer">
          <Flex alignItems={"center"} justifyContent="center" gap={2} transition='250ms' _hover={{color: 'pink.600'}}>
            <FaGithubSquare />
            Follow me
          </Flex>
        </Link>
        <Link href={"mailto:adrianmcenturion@gmail.com"} target="_blank" rel="noopener noreferrer">
          <Flex alignItems={"center"} justifyContent="center" gap={2} transition='250ms' _hover={{color: 'pink.600'}}>
            <FaEnvelope />
            adrianmcenturion@gmail.com
          </Flex>
        </Link>
      </HStack>
    </VStack>
  );
};
export default Footer;
