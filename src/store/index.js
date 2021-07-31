import {
  createStore
} from 'vuex'
import Controller from './moduls/controller'
import Screen from './moduls/screen'
import Sidebar from './moduls/sidebar'
import Account from './moduls/account'

export default createStore({
  modules: {
    Controller,
    Screen,
    Sidebar,
    Account
  }
})
