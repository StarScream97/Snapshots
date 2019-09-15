import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bf545830 = () => interopDefault(import('..\\pages\\create.vue' /* webpackChunkName: "pages_create" */))
const _0bcb2755 = () => interopDefault(import('..\\pages\\discover.vue' /* webpackChunkName: "pages_discover" */))
const _e90966a6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _d5f0a826 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _c84a5816 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */))
const _3c477838 = () => interopDefault(import('..\\pages\\profile\\followers.vue' /* webpackChunkName: "pages_profile_followers" */))
const _0863e8b4 = () => interopDefault(import('..\\pages\\profile\\following.vue' /* webpackChunkName: "pages_profile_following" */))
const _446abe76 = () => interopDefault(import('..\\pages\\profile\\posts.vue' /* webpackChunkName: "pages_profile_posts" */))
const _5fd0f10f = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _5d8a26d5 = () => interopDefault(import('..\\pages\\search\\_searchQuery.vue' /* webpackChunkName: "pages_search__searchQuery" */))
const _b4ebff18 = () => interopDefault(import('..\\pages\\snap\\_id.vue' /* webpackChunkName: "pages_snap__id" */))
const _7c58acd4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/create",
      component: _bf545830,
      name: "create"
    }, {
      path: "/discover",
      component: _0bcb2755,
      name: "discover"
    }, {
      path: "/login",
      component: _e90966a6,
      name: "login"
    }, {
      path: "/profile",
      component: _d5f0a826,
      children: [{
        path: "",
        component: _c84a5816,
        name: "profile"
      }, {
        path: "followers",
        component: _3c477838,
        name: "profile-followers"
      }, {
        path: "following",
        component: _0863e8b4,
        name: "profile-following"
      }, {
        path: "posts",
        component: _446abe76,
        name: "profile-posts"
      }]
    }, {
      path: "/register",
      component: _5fd0f10f,
      name: "register"
    }, {
      path: "/search/:searchQuery?",
      component: _5d8a26d5,
      name: "search-searchQuery"
    }, {
      path: "/snap/:id?",
      component: _b4ebff18,
      name: "snap-id"
    }, {
      path: "/",
      component: _7c58acd4,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
