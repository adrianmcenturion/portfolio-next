import { Box, Flex, Image } from "@chakra-ui/react";
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
          <Image src={img[0]} alt={title} w={'100%'}/>
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
