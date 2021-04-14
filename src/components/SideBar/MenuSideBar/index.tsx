import { IconType } from 'react-icons'
import { Text, Link, Icon } from '@chakra-ui/react'
type MenuSideBarProps = {
  title: string
  icon: IconType
}

export const MenuSideBar = ({ title, icon }: MenuSideBarProps) => {
  return (
    <Link display="flex" align="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  )
}
