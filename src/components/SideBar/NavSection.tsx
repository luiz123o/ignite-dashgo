import { Box, Text, Stack } from '@chakra-ui/react'
import { MenuSideBar } from './MenuSideBar/index'
import { AUTOMATION_MENU, GENERAL_MENU } from './constants'

export default function NavSection() {
  return (
    <>
      <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          GERAL
        </Text>
        <Stack spacing="4" mt="8" align="stretch">
          {Object.entries(GENERAL_MENU).map(([title, { icon }]) => (
            <MenuSideBar key={`link-${title}`} title={title} icon={icon} />
          ))}
        </Stack>
      </Box>
      <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">
          AUTOMAÇÂO
        </Text>
        <Stack spacing="4" mt="8" align="stretch">
          {Object.entries(AUTOMATION_MENU).map(([title, { icon }]) => (
            <MenuSideBar key={`link-${title}`} title={title} icon={icon} />
          ))}
        </Stack>
      </Box>
    </>
  )
}
