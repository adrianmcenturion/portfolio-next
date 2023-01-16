import { Text, chakra, shouldForwardProp } from "@chakra-ui/react"
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

type Props = {
    title: string,
}
const Title = ({title}: Props) => {
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
        duration: 0.5
      }}
      >
      <Text fontSize={"2xl"} textTransform={"uppercase"} letterSpacing={"16px"} textAlign='center' >
          {title}
      </Text>
      </ChakraBox>
  )
}
export default Title