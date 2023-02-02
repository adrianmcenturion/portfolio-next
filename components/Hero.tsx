import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Layout from "./Layout";
import Title from "./Title";

type Props = {};
const Hero = (props: Props) => {


  const [text, count] = useTypewriter({
    words: [
      '<FrontendDeveloper />',
    ],
    loop: true,
    delaySpeed: 800,
  });

  return (
    <Layout>
      <Box position={'relative'} boxSize={[200, 200, 300]} borderRadius="full" overflow={'hidden'}>
        <Image
          style={{objectFit: 'cover'}}
          src="https://firebasestorage.googleapis.com/v0/b/db-portfolio-fb0e3.appspot.com/o/images%2Fme.jpeg?alt=media&token=6eac577f-c90e-4757-b507-62a1cdd77e37"
          alt="yo"
          fill
          priority
          sizes="(max-width: 768px) 25vw, (max-width: 1440px) 10vw"
        />
      </Box>
      <Title title="Adrián Centurion" />
      <Text fontSize={["xl", "2xl", "4xl"]} >
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
