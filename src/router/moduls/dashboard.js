import Container from "../../components/Container.vue"

const Route = {
  path: 'dashboard',
  name: 'Dashboard',
  redirect:"/dashboard/home",
  component: Container,
  children: [{
    path: 'home',
    name: 'Home',
    component: Container,
    meta: {
      icon: 'home',
      badge: true,
    }
  }, ]
}

export default {
  Route
}
