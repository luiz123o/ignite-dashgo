import { Text } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dash
      <Text color="pink.500" as="span" mx="1">
        ||
      </Text>
      go
    </Text>
  )
}
