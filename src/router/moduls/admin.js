import AccountList from '../../views/account/Index.vue'
import AccountDetail from '../../views/account/Detail.vue'
import Container from "../../components/Container.vue"

const Route = {
  path: 'admin',
  name: 'Admin',
  component: Container,
  children: [{
    path: 'account',
    name: 'Account',
    redirect: "/admin/account/list",
    component: Container,
    meta: {
      icon: 'user-pin',
      badge: false,
    },
    children: [{
      path: 'list',
      name: 'Account List',
      component: AccountList,
      meta: {}
    }, {
      path: ':id',
      name: 'Account Detail',
      component: AccountDetail,
      meta: {}
    }, ]
  }, ]
}

export default {
  Route
}
