import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from 'components/Header'
import SideBar from 'components/SideBar'
import { theme } from '@chakra-ui/core'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export const CHART_SETUP = {
  options: {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2021-04-01T00:00:00.000Z',
        '2021-04-02T00:00:00.000Z',
        '2021-04-03T00:00:00.000Z',
        '2021-04-04T00:00:00.000Z',
        '2021-04-05T00:00:00.000Z',
        '2021-04-06T00:00:00.000Z',
        '2021-04-07T00:00:00.000Z'
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  },
  series: [
    {
      name: 'series1',
      data: [31, 120, 10, 28, 61, 18, 109]
    }
  ]
}

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} {...CHART_SETUP} />
          </Box>
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} {...CHART_SETUP} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
