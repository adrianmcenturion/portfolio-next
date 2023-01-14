import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/Layout";
import Title from "../components/Title";

const About = () => {

  return (
    <Layout>
      <Title title="About" />
      <Flex gap={6} flexDirection={['column', 'column', 'row']} alignItems='center' justify={'center'}>
          <Image
            src={"https://bit.ly/dan-abramov"}
            alt="My Picture"
            width={200}
            height={200}
            style={{ borderRadius: "100%" }}
          />
        <Text w={'70%'}>
        Me llamo Adrián Centurion. He desarrollado varios proyectos personales utilizando React para la parte
        del frontend, también utilicé Node y Express para hacer algunos backends.
        Si bien no cuento con experiencia profesional, ya llevo más de un año
        utilizando las tecnologías mencionadas. Mi objetivo es encontrar una
        empresa con la que pueda seguir aprendiendo e ir creciendo juntos.
        </Text>
      </Flex>
    </Layout>
  );
};
export default About;