import { HamburgerIcon } from "@chakra-ui/icons";
import {
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
  useDisclosure,
  LinkProps, Menu, MenuButton, MenuList, MenuItem, List
} from "@chakra-ui/react";
import Link from "next/link";
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

const CVButton = () => (
  <Menu isLazy >
    <MenuButton _hover={{ color: '#4f46e5' }}>CV</MenuButton>
    <MenuList bgGradient='linear(to-r, #302b63,#24243e)'>
      <MenuItem bg={'transparent'} _hover={{bg: 'rgba(255,255,255, 5%)'}}>ENG</MenuItem>
      <MenuItem bg={'transparent'} _hover={{bg: 'rgba(255,255,255, 5%)'}}>ESP</MenuItem>
    </MenuList>
  </Menu>
)

const Mobile = ({ isLargerThan820 }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        display={!isLargerThan820 ? "none" : "block"}
        aria-label="hamburger icon"
        as={HamburgerIcon}
        onClick={onOpen}
        bgGradient='linear(to-r, #302b63,#24243e)'
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} >
        <DrawerContent bgGradient='linear(to-bl, #302b63,#24243e)'>
          <DrawerCloseButton />
          <DrawerBody>
            <List >
              {navLinks.map((navLink) => (
                <ListItem key={navLink.title} py={2} textTransform='uppercase' bg={'transparent'} _hover={{bg: 'rgba(255,255,255, 5%)'}}>
                  <NavLink mr={4} to={navLink.path} activeProps={{fontWeight:'bold'}}>
                      {navLink.title}
                  </NavLink>
                </ListItem>
              ))}
              <ListItem py={2}>
                <CVButton />
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Header = () => {
  const [isLargerThan820] = useMediaQuery("(max-width: 820px)");

  return (
    <Stack as={"nav"} direction="row" alignItems={"center"} px={10} py={6}>
      <Stack>
        <ChakraLink as={Link} href={"/"}>
          LOGO
        </ChakraLink>
      </Stack>
      <Spacer />
      <Flex direction={"row"} display={isLargerThan820 ? "none" : "flex"}>
        <List
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
                  <NavLink mr={4} to={navLink.path} activeProps={{fontWeight:'semibold'}} >
                      {navLink.title}
                  </NavLink>
                </ListItem>
              ))}
          <ListItem>
          <CVButton />
          </ListItem>
        </List>
      </Flex>
      <Mobile isLargerThan820={isLargerThan820} />
    </Stack>
  );
};
export default Header;
