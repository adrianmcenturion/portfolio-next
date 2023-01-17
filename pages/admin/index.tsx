import { Button, HStack } from "@chakra-ui/react"
import Link from "next/link"
import Layout from "../../components/Layout"
import Title from "../../components/Title"

type Props = {}
const index = (props: Props) => {
  return (
    <Layout>
      <Title title="admin" />
      <HStack>
        <Button as={Link} href='/admin/addskill' replace>Add Skills</Button>
        <Button as={Link} href='/admin/addproject' replace>Add Project</Button>
      </HStack>
    </Layout>
  )
}
export default index