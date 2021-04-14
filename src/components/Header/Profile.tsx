import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData?: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        {showProfileData && (
          <>
            <Text>Luiz Otavio</Text>
            <Text color="gray.300" fontSize="small">
              luiz123o@hotmail.com
            </Text>
          </>
        )}
      </Box>
      <Avatar
        size="md"
        name="Luiz Otavio"
        src="https://github.com/luiz123o.png"
      />
    </Flex>
  )
}
