const routes = [
    {
        path: '/',
        name: '',
        component: () => import('@/pages/Main')
    },
    {
        path: '/mails',
        name: '',
        component: () => import('@/pages/Mails')
    },
    {
        path: '/mail',
        name: '',
        component: () => import('@/pages/Index')
    }
]
export default routes