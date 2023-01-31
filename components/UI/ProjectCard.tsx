import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";

export type Project = {
    to: string;
    title: string;
    description: string;
    about: string;
    img: [string];
}
const ProjectCard = ({to, title, description, about, img}: Project) => {
  return (
    <Flex className="box">
      <Flex className="content">
        <Flex className="icon">
          {/* ICON */}
          <Box position={'relative'} w={'100%'} h='100%'>
            <Image src={img[0]} alt={title} fill/>
          </Box>
        </Flex>
        <Box className="text">
          <h3>{title}</h3>
          <p>{description}
          </p>
          <Flex className="link" as={NavLink} to={to}>Read More
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
export default ProjectCard;
