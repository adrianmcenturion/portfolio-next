import { Card, CardBody, CardHeader, Flex, Image } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import NavLink from "../../components/NavLink";
import Title from "../../components/Title";
import { dbFirestore } from "../../services/firebase";
import { getData } from "../../services/httpRequest";

export type Project = {
  id: string;
  title: string;
  description: string;
  about: string;
  img: [string];
  live: string;
  technologies: [string];
  repo: {
    front: string;
    back: string;
  };
};

type ProjectsProps = {
  projects: Project[];
};

const Projects: NextPage<ProjectsProps> = (props) => {
  console.log('projects props', props.projects);
  return (
    <Layout>
      <Title title="Projects" />
      <Flex
        flexWrap={"wrap"}
        alignItems="center"
        justifyContent={"center"}
        pb={10}
      >
        {props.projects.length > 0
          ? props.projects.map((project) => (
              <Card
                key={project.title}
                alignItems="center"
                pt={0}
                m={2}
                size="lg"
                bg={"transparent"}
                border="none"
                boxShadow={"none"}
              >
                <Flex
                  as={NavLink}
                  position={"absolute"}
                  to={`/projects/${project.id}`}
                  w="100%"
                  h="100%"
                  bg="linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%)"
                  mixBlendMode={"normal"}
                  opacity={0.6}
                  transition={"ease-in-out"}
                  alignItems='center'
                  justifyContent={'center'}
                  color='transparent'
                  _hover={{ opacity: 1, cursor: "pointer", color: 'white', fontSize: '2xl', textTransform: 'uppercase', letterSpacing: "8px" }}
                >Details
                </Flex>
                <CardHeader p={0} bg="black" w="100%" textAlign={'center'}>
                  {project.title}
                </CardHeader>
                <CardBody p={0} bgImage={project.img}>
                  <Image src={project.img[0]} alt={project.title} maxW={"sm"} />
                </CardBody>
              </Card>
            ))
          : null}
      </Flex>
    </Layout>
  );
};
export default Projects;

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  // let dev = process.env.NODE_ENV !== "production";
  // let { DEV_URL, PROD_URL } = process.env;

  // const response = getData(`${DEV_URL}/api/projects`)
  // console.log(response)
  // const {data} = await response;

  // const getUser = async (e: React.MouseEvent<HTMLFormElement>) => {
  let test: any = [];
  try {
    const testing = await getDocs(collection(dbFirestore, "projects"));
    testing.forEach((doc) => {
      test.push({ ...doc.data(), id: doc.id });
    });
  } catch (error) {
    throw new Error();
  }

  return {
    props: {
      projects: test,
    },
  };
};
