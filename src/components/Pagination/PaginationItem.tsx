import { Button } from '@chakra-ui/react'

type PaginationItemProps = {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  onPageChange,
  number
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      bgColor="gray.700"
      onClick={() => onPageChange(number)}
      _hover={{
        bgColor: 'gray.500'
      }}
    >
      {number}
    </Button>
  )
}
