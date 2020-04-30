import App from '../app/App'
import UserContainer from '../components/User/UserContainer'

const routes = [
    {
        path: '/',
        exact: false,
        component: App,
    },
    {
        path: '/auth',
        exact: true,
        component: UserContainer,
    }
]

export default routes