import {
  Button,
  Flex,
  Stack,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <InputGroup>
            <Input name="email" type="email" label="E-mail" />
          </InputGroup>

          <InputGroup size="md">
            <Input
              h="2.5rem"
              autoComplete="new-password"
              label="Password"
              name="password"
              type={show ? 'text' : 'password'}
            />
            <InputRightElement h="100%" mt="4">
              <Button
                bgColor="transparent"
                _hover={{
                  bgColor: 'transparent'
                }}
                h="100%"
                alignSelf="center"
                size="sm"
                onClick={handleClick}
              >
                {show ? (
                  <ViewOffIcon
                    _focus={{
                      color: 'gray.900'
                    }}
                  />
                ) : (
                  <ViewIcon
                    _selected={{
                      color: 'gray.900'
                    }}
                  />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button type="submit" marginTop="6" colorScheme="pink">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
