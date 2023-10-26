const routes = [
    {
        path: '/',
        name: '',
        component: () => import('@/pages/Index')
    },
    {
        path: '/indicator',
        name: '',
        component: () => import('@/pages/Indicator')
    }
]
export default routes