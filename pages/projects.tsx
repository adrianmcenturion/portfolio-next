import { Flex } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
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
  createdAt: Date;
};

type ProjectsProps = {
  projects: Project[];
};

const Projects: NextPage<ProjectsProps> = (props) => {
  return (
    <Layout>
      <Head>
        <title>Adrián Centurion - Projects</title>
        <meta name="description" content="Adrián Centurion portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
  let projects: any = [];
  try {
    const q = query(collection(dbFirestore, 'projects'), orderBy('createdAt', 'desc'))
    const querySnapShot = await getDocs(q)
    console.log(querySnapShot.docs)
    projects = querySnapShot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      about: doc.data().about,
      img: doc.data().img,
      technologies: doc.data().technologies,
      live: doc.data().live,
      repos: doc.data().repos,
      createdAt: doc.data().createdAt?.toDate().getTime()

    }))
  } catch (error) {
    throw new Error();
  }

  return {
    props: {
      projects: projects,
    },
  };
};
