export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export const featuresList: Feature[] = [
  {
    id: '1',
    title: 'Shared Workspaces',
    description:
      'Create dedicated spaces for your projects with real-time collaboration, file sharing, and seamless team communication.',
    icon: 'Users'
  },
  {
    id: '2',
    title: 'Smart Task Boards',
    description:
      'Organize work with intelligent kanban boards, automated workflows, and AI-powered task prioritization.',
    icon: 'Kanban'
  },
  {
    id: '3',
    title: 'Real-time Messaging',
    description:
      'Stay connected with instant messaging, video calls, and threaded conversations that keep your team in sync.',
    icon: 'ChatCircle'
  },
]
