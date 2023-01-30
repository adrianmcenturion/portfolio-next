import { Flex, Image, Text } from "@chakra-ui/react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Layout from "./Layout";
import Title from "./Title";

type Props = {};
const Hero = (props: Props) => {


  const [text, count] = useTypewriter({
    words: [
      '<Frontend Developer />',
    ],
    loop: true,
    delaySpeed: 800,
  });

  return (
    <Layout>
      <Image
        src="https://bit.ly/dan-abramov"
        alt="yo"
        boxSize={400}
        borderRadius="full"
      />
      {/* <Title title="Frontend Developer" /> */}
      {/* <Text fontSize={'3xl'} textTransform='uppercase'>Frontend Developer</Text> */}
      <Title title="Adrián Centurion" />
      <Text fontSize={["xl", "2xl", "4xl"]} >
        <Text as={"span"} >{text}</Text>
        <Cursor cursorColor="#4f46e5" />
      </Text>
      <Text  textColor='#FFFADE' textAlign={'center'} mx='auto' mt={6}>
        He trabajado en varios proyectos personales utilizando React/Next para la parte del frontend, y también he utilizado Node y Express para hacer algunos backends. Aunque no tengo experiencia profesional, llevo más de un año trabajando con estas tecnologías y me encanta seguir aprendiendo y mejorando. Si estás buscando un desarrollador front-end dedicado y apasionado, no dudes en ponerte en contacto conmigo.
      </Text>
    </Layout>
  );
};
export default Hero;
