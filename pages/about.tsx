import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/Layout";
import Title from "../components/Title";

const About = () => {

  return (
    <Layout>
      <Title title="About" />
      <Flex gap={6} pb={10} flexDirection={['column', 'column', 'row']} alignItems='center' justify={'center'}>
          <Image
            src={"https://bit.ly/dan-abramov"}
            alt="My Picture"
            width={200}
            height={200}
            style={{ borderRadius: "100%" }}
          />
        <Text w={'70%'} textColor='#FFFADE'>
        Mi nombre es Adrián Centurión y soy desarrollador front-end. Mi experiencia se centra en el desarrollo de soluciones web principalmente con React. He trabajado en varios proyectos personales utilizando React/Next para la parte del frontend, y también he utilizado Node y Express para hacer algunos backends. Aunque no tengo experiencia profesional, llevo más de un año trabajando con estas tecnologías y me encanta seguir aprendiendo y mejorando. Mi objetivo es encontrar una empresa en la que pueda seguir creciendo y aprendiendo juntos. Si estás buscando un desarrollador front-end dedicado y apasionado, no dudes en ponerte en contacto conmigo.
        </Text>
      </Flex>
    </Layout>
  );
};
export default About;