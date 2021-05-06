import {
  Button,
  Flex,
  Stack,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors, isSubmitting } = formState
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const handleSignIn: SubmitHandler<SignInFormData> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <InputGroup>
            <Input
              {...register('email')}
              name="email"
              type="email"
              label="E-mail"
              error={errors.email}
            />
          </InputGroup>

          <InputGroup size="md">
            <Input
              {...register('password')}
              h="2.5rem"
              autoComplete="new-password"
              label="Password"
              name="password"
              type={show ? 'text' : 'password'}
              error={errors.password}
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
                isLoading={isSubmitting}
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
