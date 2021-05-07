import * as S from '@chakra-ui/react'
import Link from 'next/link'
import { Header } from 'components/Header'
import { Pagination } from 'components/Pagination'
import SideBar from 'components/SideBar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { useUsers } from 'services/hooks/useUsers'
import { useState } from 'react'
import { queryClient } from 'services/queryClient'
import { api } from 'services/api'
import { useBreakpointValue } from '@chakra-ui/react'

export default function UserList() {
  const [page, setPage] = useState(1)
  const { error, isLoading, isFetching, data } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser(userId: number) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data
    })
  }

  return (
    <S.Box>
      <Header />

      <S.Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <S.Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <S.Flex mb="8" justify="space-between" align="center">
            <S.Heading size="lg" fontWeight="normal">
              Usuarios
              {!isLoading && isFetching && (
                <S.Spinner size="sm" color="gray.500" ml="4" />
              )}
            </S.Heading>
            <Link href="/users/create" passHref>
              <S.Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<S.Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </S.Button>
            </Link>
          </S.Flex>

          {isLoading ? (
            <S.Flex justify="center">
              {' '}
              <S.Spinner />
            </S.Flex>
          ) : error ? (
            <S.Flex justify="center">
              <S.Text>Erro ao carregar dados dos usuarios</S.Text>
            </S.Flex>
          ) : (
            <>
              <S.Table colorScheme="whiteAlpha">
                <S.Thead>
                  <S.Tr>
                    <S.Th px={['4', '4', '6']} color="gray.300" width="8">
                      <S.Checkbox colorScheme="pink" />
                    </S.Th>
                    <S.Th>Usuários</S.Th>
                    {isWideVersion && <S.Th>Data de cadastro</S.Th>}
                    <S.Th width="8"></S.Th>
                  </S.Tr>
                </S.Thead>
                <S.Tbody>
                  {!!data &&
                    data.users.map(
                      (user: {
                        name: string
                        email: string
                        id: string
                        createdAt: string
                      }) => {
                        return (
                          <S.Tr key={user.id}>
                            <S.Td px={['4', '4', '6']}>
                              <S.Checkbox colorScheme="pink" />
                            </S.Td>
                            <S.Td>
                              <S.Box>
                                <S.Link
                                  color="purple.400"
                                  onMouseEnter={() =>
                                    handlePrefetchUser(user.id)
                                  }
                                >
                                  <S.Text fontWeight="bold">{user.name}</S.Text>
                                </S.Link>
                                <S.Text fontSize="sm" color="gray.300">
                                  {user.email}
                                </S.Text>
                              </S.Box>
                            </S.Td>
                            {isWideVersion && <S.Td>{user.createdAt}</S.Td>}
                            <S.Td>
                              {isWideVersion && (
                                <S.Button
                                  as="a"
                                  size="sm"
                                  fontSize="sm"
                                  colorScheme="purple"
                                  leftIcon={
                                    <S.Icon as={RiPencilLine} fontSize="20" />
                                  }
                                >
                                  Editar
                                </S.Button>
                              )}
                            </S.Td>
                          </S.Tr>
                        )
                      }
                    )}
                </S.Tbody>
              </S.Table>
              {!!data && (
                <Pagination
                  totalCountOfRegisters={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              )}
            </>
          )}
        </S.Box>
      </S.Flex>
    </S.Box>
  )
}
