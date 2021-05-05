import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, PropsWithChildren, useContext, useEffect } from 'react'

type SidebarDrawerContextProps = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps)

export function SideDrawerProvider({ children }: PropsWithChildren<unknown>) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [disclosure, router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
