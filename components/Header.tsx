import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  useMediaQuery,
  Flex,
  IconButton,
  Link as ChakraLink,
  ListItem,
  Spacer,
  Stack,
  UnorderedList,
  useDisclosure,
  LinkProps, useColorModeValue
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavLink from "./NavLink";


type Props = {
  fieldName?: string;
  isLargerThan820: boolean;
};

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode
  to: string
  activeProps?: LinkProps
  _hover?: LinkProps
}

const navLinks = [
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Skills',
    path: '/skills'
  },
  {
    title: 'Projects',
    path: '/projects'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
];

const Mobile = ({ isLargerThan820 }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        display={!isLargerThan820 ? "none" : "block"}
        aria-label="hamburger icon"
        as={HamburgerIcon}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <UnorderedList>
              {navLinks.map((navLink) => (
                <ListItem key={navLink.title}>
                  <NavLink mr={4} to={navLink.path} activeProps={{fontWeight:'bold'}}>
                      {navLink.title}
                  </NavLink>
                </ListItem>
              ))}
              <ListItem>
                <Button h={'fit-content'} minW={0} variant={"unstyled"}>CV</Button>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Header = () => {
  const [isLargerThan820] = useMediaQuery("(max-width: 820px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack as={"nav"} direction="row" alignItems={"center"} px={10} py={6}>
      <Stack>
        <ChakraLink as={Link} href={"/"}>
          LOGO
        </ChakraLink>
      </Stack>
      <Spacer />
      <Flex direction={"row"} display={isLargerThan820 ? "none" : "flex"}>
        <UnorderedList
          display={"flex"}
          w="100%"
          flexDirection={"row"}
          alignItems="center"
          textTransform={"uppercase"}
          listStyleType={"none"}
          gap={6}
        >
          {navLinks.map((navLink) => (
                <ListItem key={navLink.title}>
                  <NavLink mr={4} to={navLink.path} activeProps={{fontWeight:'semibold'}}>
                      {navLink.title}
                  </NavLink>
                </ListItem>
              ))}
          <ListItem>
            <Button h={'fit-content'} variant={"unstyled"}>CV</Button>
          </ListItem>
        </UnorderedList>
      </Flex>
      <Mobile isLargerThan820={isLargerThan820} />
    </Stack>
  );
};
export default Header;
