import { Box, Text } from "@chakra-ui/react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Layout from "./Layout";
import Title from "./Title";
import Image from "next/image";

const Hero = () => {

  const [text] = useTypewriter({
    words: [
      "Hi! I'm Adrián Centurion",
      '<FrontendDeveloper />',
    ],
    loop: true,
    delaySpeed: 800,
  });

  return (
    <Layout>
      <Box position={'relative'} boxSize={[200, 200, 350]} borderRadius="full" overflow={'hidden'}>
        <Image
          style={{objectFit: 'cover', objectPosition: 'center'}}
          src="https://firebasestorage.googleapis.com/v0/b/db-portfolio-fb0e3.appspot.com/o/images%2Fme2.avif?alt=media&token=e63a566b-8ee6-4279-b449-f05676ad2155"
          alt="yo"
          fill
          priority
          sizes="(max-width: 768px) 25vw, (max-width: 1440px) 10vw"
        />
      </Box>
      <Title title="Welcome" />
      <Text fontSize={["xl", "2xl", "5xl"]} >
        <Text as={"span"} textColor='pink.600'>{text}</Text>
        <Cursor cursorColor="#B83280" />
      </Text>
      <Text  textColor='#FFFADE' textAlign={'center'} mx='auto' mt={6} maxW={['80%', '60%']}>
      I have worked on several personal projects using React/Next for the front-end and have also used Node and Express for some backends. Although I do not have professional experience, I have been working with these technologies for over a year and I love continuing to learn and improve. If you&apos;re looking for a dedicated and passionate front-end developer, feel free to contact me.
      </Text>
    </Layout>
  );
};
export default Hero;
