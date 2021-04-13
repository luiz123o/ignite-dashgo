import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuarios
            </Heading>
            <Button as="a" size="sm" fontSize="sm">
              Criar Novo
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
