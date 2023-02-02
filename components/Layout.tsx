import { chakra, shouldForwardProp, VStack } from "@chakra-ui/react"
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

type Props = {
    children: React.ReactNode
}
const Layout = ({children}: Props) => {
  return (
    <ChakraBox
        initial={{
          opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      // @ts-ignore
      transition={{
        duration: 0.8,
      }}
      >
    <VStack maxH='100%'>
      <VStack gap={50} mt={10} h='100%' alignItems={'center'} justifyContent='center'>
        {children}
      </VStack>
    </VStack>
    </ChakraBox>
  )
}
export default Layout