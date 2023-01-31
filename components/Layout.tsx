import { Flex, VStack } from "@chakra-ui/react"

type Props = {
    children: React.ReactNode
}
const Layout = ({children}: Props) => {
  return (
    <VStack maxH='100%'>
      <VStack gap={10} mt={10} h='100%' alignItems={'center'} justifyContent='center'>
        {children}
      </VStack>
    </VStack>
  )
}
export default Layout