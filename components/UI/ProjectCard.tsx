import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaRocket } from "react-icons/fa";

export type Project = {
  to: string;
  title: string;
  description: string;
  about: string;
  img: [string];
  technologies: [
    {
      name: string;
      img: string;
    }
  ];
  live: string;
  repos: string;
};

const ProjectCard = ({
  title,
  description,
  img,
  technologies,
  live,
  repos,
}: Project) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      h={{ md: "250px" }}
      w={{ base: "300px", md: "650px", lg: "850px" }}
      p={4}
      borderColor="#00C89B"
    >
      <Flex
        w={"100%"}
        h="100%"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent="center"
        border="2px solid"
        borderColor={"pink.600"}
        borderRadius={"0.375rem"}
      >
        <Stack
          w="100%"
          h="100%"
          minW={"220px"}
          justifyContent={"center"}
          alignItems="center"
          justify={"center"}
          p={4}
          gap={2}
          flex={1}
        >
          <Box position={"relative"} w="100%" h={{ base: "120px", md: "100%" }}>
            <Image
              style={{ objectFit: "cover" }}
              src={img[0]}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1440px) 10vw"
            />
          </Box>
          <HStack w="100%" justifyContent={"space-evenly"}>
            <Button
              as={Link}
              size='sm'
              w='100%'
              color={'#00C89B'}
              colorScheme='pink'
              bg='pink.600'
              transition={'0.4s ease-in-out'}
                _hover={{bg: '#00C89B', color: 'pink.600'}}
              href={live}
              target={"_blank"}
              rel="noopener noreferrer"
              leftIcon={<FaRocket />}
            >
              Deploy
            </Button>
            <Spacer />
            {repos ? (
              <Button
                as={Link}
                size='sm'
                w='100%'
                color={'#00C89B'}
                colorScheme='pink'
                bg='pink.600'
                transition={'0.4s ease-in-out'}
                _hover={{bg: '#00C89B', color: 'pink.600'}}
                href={repos}
                target={"_blank"}
                rel="noopener noreferrer"
                leftIcon={<FaCode />}
              >
                Code
              </Button>
            ) : null}
          </HStack>
        </Stack>

        <Stack
          w="100%"
          h="100%"
          justifyContent={"space-between"}
          alignItems="center"
          textColor={"#00C89B"}
          p={4}
        >
          <CardBody display={"flex"} flexDirection="column" justifyContent={'space-between'} p={0}>
            <Heading size="md">{title}</Heading>
            <Text textColor={"#FFFADE"} lineHeight={"1"} mt={2}>
              {description}
            </Text>
            <Flex flexDirection={"row"} flexWrap="wrap" mt={4} w="100%" gap={2}>
              {technologies
                ? technologies.map((technology) => (
                  <Tooltip key={technology.name} label={technology.name} bg='transparent' placement="top" textColor='#FFFADE'>
                    <Box
                      position={"relative"}
                      w={6}
                      h={6}
                      
                    >
                      {technology.img !== "" ? (
                        <Image
                          style={{ objectFit: "contain" }}
                          src={technology.img}
                          alt={technology.name}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1440px) 10vw"
                        />
                      ) : null}
                    </Box>
                    </Tooltip>
                  ))
                : null}
            </Flex>
          </CardBody>
        </Stack>
      </Flex>
    </Card>
  );
};
export default ProjectCard;
