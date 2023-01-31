import { Flex, Card, CardBody, CardFooter, Box,  } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { ChakraNextImage } from "../components/UI/ChakraNextImg";
import { dbFirestore } from "../services/firebase";

type Technology = {
  name: string
  img: string,
  id: string,
  createdAt: Date
}

type TechnologiesProps = {
  technologies: Technology[],
}

const Skills: NextPage<TechnologiesProps> = (props) => {
  return (
    <Layout>
      <Title title="Skills" />
      <Flex
        flexWrap={"wrap"}
        gap={4}
        alignItems="center"
        justifyContent={"center"}
        pb={10}
      >
        {props.technologies.length > 0 ? props.technologies.map((skill) => (
          <Card key={skill.name} alignItems='center' size='lg' bg={'transparent'} border='none' boxShadow={'none'} > 
            <CardBody>
              <Box position={'relative'} boxSize={["20","24"]}>
              <Image src={skill.img} alt={skill.name} fill />
              </Box>
            </CardBody>
            <CardFooter p={0} textColor='#FFFADE'>{skill.name}</CardFooter>
          </Card>
        )) : null}
      </Flex>
    </Layout>
  );
};
export default Skills;

export const getStaticProps: GetStaticProps<TechnologiesProps> = async () => {

  let skills: any = [];
  try {
    const q = query(collection(dbFirestore, "skills"), orderBy('createdAt', 'asc'))
    const querySnapShot = await getDocs(q);
    skills = querySnapShot.docs.map((doc) => ({
      id:doc.id,
      name: doc.data().name,
      img: doc.data().img,
      createdAt: doc.data().createdAt?.toDate().getTime()
    }))
  } catch (error) {
    throw new Error();
  }

  return {
    props: {
      technologies: skills
    }
  }
}