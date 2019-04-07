const Login = () => import('@/views/login')

const routeConfig = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'login'
    }
  }
]

export default routeConfig
