import { Text } from "@chakra-ui/react"

type Props = {
    title: string,
}
const Title = ({title}: Props) => {
  return (
      <Text fontSize={['xl', "2xl", '4xl']} textTransform={"uppercase"} letterSpacing={"16px"} textAlign='center' pl={'16px'}>
        {title}
      </Text>
  )
}
export default Title