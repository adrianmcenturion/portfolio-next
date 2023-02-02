import { Flex } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import Title from "../components/Title";
import ProjectCard from "../components/UI/ProjectCard";
import { dbFirestore } from "../services/firebase";

export type Project = {
  id: string;
  title: string;
  description: string;
  about: string;
  img: [string];
  technologies: [{
    name: string
    img: string
  }]
  live: string;
  repos: string;
};

type ProjectsProps = {
  projects: Project[];
};

const Projects: NextPage<ProjectsProps> = (props) => {
  return (
    <Layout>
      <Title title="My Projects" />
      <Flex alignItems={'stretch'} justifyContent='center' flexWrap={'wrap'} gap={10}>
        {props.projects.length > 0
          ? props.projects.map((project) => (
              <ProjectCard
                to={`/projects/${project.id}`}
                about={project.about}
                description={project.description}
                img={project.img}
                title={project.title}
                technologies={project.technologies}
                live={project.live}
                repos={project.repos}
                key={project.title}
              />
            ))
          : null}
      </Flex>
    </Layout>
  );
};
export default Projects;

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
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
