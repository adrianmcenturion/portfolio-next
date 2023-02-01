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
  LinkProps, Menu, MenuButton, MenuList, MenuItem, List, Button, transform
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
    path: '/'
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
  {
    title: 'Admin',
    path: '/admin'
  },
  {
    title: 'CV',
    path: '/AdrianCenturion-CV-ENG.pdf'
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
        backgroundColor='transparent'
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} >
        <DrawerContent bgGradient='linear(to-bl, #302b63,#24243e)'>
          <DrawerCloseButton color={'#00C89B'} />
          <DrawerBody>
            <List >
              {navLinks.map((navLink) => (
                <ListItem key={navLink.title} py={2} textTransform='uppercase' bg={'transparent'}>
                  {navLink.title === 'CV' ? 
                  <ChakraLink as={Link} textColor='#00C89B' textDecoration={'none'} _focus={{textColor: 'pink.600', fontWeight:'bold', textDecoration: 'none'}} href={navLink.path} download target={'_blank'} rel="noopener noreferrer">
                  {navLink.title}
                </ChakraLink>
                  :
                  <NavLink mr={4} to={navLink.path} textColor='#00C89B' activeProps={{fontWeight:'bold', textColor: 'pink.600'}} _focus={{textColor: 'pink.600'}}>
                  {navLink.title}
              </NavLink> 
                }
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Header = () => {
  const [isLargerThan820] = useMediaQuery("(max-width: 820px)");
  const router = useRouter()
  const isActive = router.pathname

  return (
    <Stack as={"nav"} direction="row" alignItems={"center"} justifyContent={isLargerThan820 ? 'flex-end' : 'center'} px={10} py={6}>
      <Flex direction={"row"} display={isLargerThan820 ? "none" : "flex"}>
        <List
          display={"flex"}
          w="100%"
          flexDirection={"row"}
          alignItems={"center"}
          textTransform={"uppercase"}
          listStyleType={"none"}
          gap={10}
        >
          {navLinks.map((navLink) => (
                <ListItem key={navLink.title}>
                  {navLink.title === 'CV' ?
                  <Link href={navLink.path} download target={'_blank'} rel="noopener noreferrer" className='navlinks'>
                      {navLink.title}
                  </Link>
                  :
                  <NavLink to={navLink.path} className='navlinks'>
                      {navLink.title}
                  </NavLink>}
                </ListItem>
              ))}
        </List>
      </Flex>
      <Mobile isLargerThan820={isLargerThan820} />
    </Stack>
  );
};
export default Header;
