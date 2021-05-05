import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

export const GENERAL_MENU = {
  Dashboard: {
    path: '',
    icon: RiDashboardLine,
    href: '/dashboard'
  },
  Usuários: {
    path: '',
    icon: RiContactsLine,
    href: '/users'
  }
}

export const AUTOMATION_MENU = {
  Formulários: {
    path: '',
    icon: RiInputMethodLine,
    href: '/forms'
  },
  Automação: {
    path: '',
    icon: RiGitMergeLine,
    href: '/automation'
  }
}
