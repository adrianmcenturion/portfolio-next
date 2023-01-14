import { Flex, Image, Text } from "@chakra-ui/react";
// import Image from "next/image"
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Layout from "./Layout";
import Title from "./Title";

type Props = {};
const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is Adrián`,
      "I love playing video games",
      "<ButILoveToCodeToo />",
    ],
    loop: true,
    delaySpeed: 300,
  });

  return (
    <Layout>
      <Image
        src="https://bit.ly/dan-abramov"
        alt="yo"
        boxSize={400}
        borderRadius="full"
      />
      <Title title="Frontend Developer" />
      <Text fontSize={["xl", "2xl", "4xl"]}>
        <Text as={"span"}>{text}</Text>
        <Cursor cursorColor="#4f46e5" />
      </Text>
    </Layout>
  );
};
export default Hero;
