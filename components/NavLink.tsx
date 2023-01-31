import { Link as ChakraLink, LinkProps, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode
  to: string
  activeProps?: LinkProps
  _hover?: LinkProps
}

const NavLink = ({ to, activeProps, children, _hover, ...props }: NavLinkProps) => {
  const router = useRouter()
  const isActive = router.pathname === to
  const color = useColorModeValue('pink.600', '#4f46e5')

  if (isActive) {
    return (
      <Link href={to} legacyBehavior replace>
        <ChakraLink
          fontWeight='bold'
          {...props}
          {...activeProps}
          _hover={{ color: '#00C89B', fontWeight: 'bold' }}
          color={color}>
          {children}
        </ChakraLink>
      </Link>
    )
  }

  return (
    <Link href={to} legacyBehavior replace>
      <ChakraLink {...props} _hover={{ color: '#00C89B' }}>
        {children}
      </ChakraLink>
    </Link>
  )
}

export default NavLink