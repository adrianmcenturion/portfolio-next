import { Box, Button, Divider, HStack, List, ListItem, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import { Project } from "."
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import { collection, getDocs } from "firebase/firestore"
import { dbFirestore } from "../../services/firebase"
import Link from "next/link"
import Image from "next/image"

type Projects = {
  project: Project
}

interface ProjectParams extends ParsedUrlQuery {
  slug: string
}

const ProjectDetails: NextPage<Projects> = ({project}) => {

  console.log('project', project)
    const router = useRouter()
    const projectId = router.query.projectId
    console.log('projectId', projectId)
    console.log(project)

  return (
    <Layout>
        <Text fontSize={"2xl"} textTransform={"uppercase"} letterSpacing={"16px"}>
          {project.title}
        </Text>
        <Text>{project.about}</Text>
        <HStack>
            <Button>
              <Link href={project.live} target='_blank'>Live</Link>
            </Button>
            {project.repos?.map((repo) => (
              <Button key={repo}>
                <Link href={repo} target='_blank'>Repo</Link>
              </Button>
            ))}
            
        </HStack>
        <Box position={'relative'} w={[300, 700]} h={[150, 350]}>
          <Image src={project.img && project?.img[0]} alt={project.title} fill/>
        </Box>
        <Text fontSize={"2xl"} textTransform={"uppercase"} letterSpacing={"6px"} textAlign='start'>
          About this project
        </Text>
        <Divider borderColor='pink.600' />
        <Text textAlign={'center'} textOverflow={"clip"} >{project.description}</Text>
        <Text fontSize={"2xl"} textTransform={"uppercase"} letterSpacing={"6px"} textAlign='start'>
          Technologies
        </Text>
        <Divider borderColor='pink.600' />
        <List pb={10} display={'flex'} flexWrap='wrap' alignItems={'center'} justifyContent='center' gap={8} >
          {project.technologies ? project.technologies.map((technology) => (
            <ListItem key={technology}>{technology}</ListItem>
          )) : null}
        </List>
    </Layout>
  )
}
export default ProjectDetails

export const getStaticPaths: GetStaticPaths = async () => {


  let test: any = [];
  try {
    const testing = await getDocs(collection(dbFirestore, "projects"));
    testing.forEach((doc) => {
      test.push({ ...doc.data(), id: doc.id });
    });
  } catch (error) {
    throw new Error();
  }
  const paths = test.map((path: any) => {
    return {
      params :{ projectId: `${path.id }`}
 
  }
  })


  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Projects> = async (context) => {

  const { projectId } = context.params as ProjectParams

  let test: any
  try {
    const testing = await getDocs(collection(dbFirestore, "projects"));
    testing.forEach((doc) => {
      if(doc.id === projectId) {
        test = { ...doc.data(), id: doc.id }
      }
    });
  } catch (error) {
    throw new Error();
  }

  return {
    props: {
      project: test
    }
  }

}
