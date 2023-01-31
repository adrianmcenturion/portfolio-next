import { Flex, Box, Text } from "@chakra-ui/react";
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
          src="https://bit.ly/dan-abramov"
          alt="yo"
          fill
        />
      </Box>
      <Title title="Adrián Centurion" />
      <Text fontSize={["xl", "2xl", "4xl"]} >
        <Text as={"span"} textColor='pink.600'>{text}</Text>
        <Cursor cursorColor="#4f46e5" />
      </Text>
      <Text  textColor='#FFFADE' textAlign={'center'} mx='auto' mt={6}>
        He trabajado en varios proyectos personales utilizando React/Next para la parte del frontend, y también he utilizado Node y Express para hacer algunos backends. Aunque no tengo experiencia profesional, llevo más de un año trabajando con estas tecnologías y me encanta seguir aprendiendo y mejorando. Si estás buscando un desarrollador front-end dedicado y apasionado, no dudes en ponerte en contacto conmigo.
      </Text>
    </Layout>
  );
};
export default Hero;
