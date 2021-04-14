import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { SideBarNav } from './SideBarNav'
export default function SideBar() {
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSideBar) {
    return (
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Drawer isOpen={true} placement="left" onClose={() => {}}>
        <DrawerOverlay>
          <DrawerContent bgColor="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  )
}
