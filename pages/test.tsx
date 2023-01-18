import { Flex } from "@chakra-ui/react"
import ProjectCard from "../components/UI/ProjectCard"


type Props = {}
const test = (props: Props) => {
  return (
    <Flex className="container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </Flex>
  )
}
export default test