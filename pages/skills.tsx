import { Flex, Card, CardBody, CardFooter, Box,  } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Title from "../components/Title";
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
      <Head>
        <title>Adrián Centurion - Skills</title>
        <meta name="description" content="Adrián Centurion portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title title="My Skills" />
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
              <Box position={'relative'} boxSize={["16","20"]} objectFit='contain'>
              <Image style={{objectFit: 'contain'}} src={skill.img} alt={skill.name} fill sizes="(max-width: 768px) 50vw, (max-width: 1440px) 70vw"/>
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