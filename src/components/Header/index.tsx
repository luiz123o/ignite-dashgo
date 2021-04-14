import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Profile } from './Profile'
import { Logo } from './Logo'
import { SearchBox } from './SearchBox'
import { NotificationNav } from './NotificationNav'
export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
