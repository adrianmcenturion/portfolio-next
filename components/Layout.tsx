import { Flex } from "@chakra-ui/react"

type Props = {
    children: React.ReactNode
}
const Layout = ({children}: Props) => {
  return (
    <Flex as={'section'} flexDir={'column'} gap={6} alignItems='center' mt={"28"} textAlign='center' minH='100vh' maxH={'100vh'} mb={10} pb={10}>
        {children}
    </Flex>
  )
}
export default Layout