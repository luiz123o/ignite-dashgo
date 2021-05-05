import { IconType } from 'react-icons'
import Link from 'next/link'
import { Text, Link as ChakraLink, Icon } from '@chakra-ui/react'
type MenuSideBarProps = {
  title: string
  icon: IconType
  href: string
}

export const MenuSideBar = ({ title, icon, href }: MenuSideBarProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </Link>
  )
}
