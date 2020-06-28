import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'

import About from "../components/About.vue";
import Home from "../components/Home.vue";
import User from "../components/User.vue";
import News from "../components/News.vue";
// const originalPush = VueRouter.prototype.push
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }
import Profile from "../components/Profile.vue";
import HomeMessage from "../components/HomeMessage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/Home",
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "",
        redirect: "news",
      },
      {
        // path: "news",
        // component: News,
        path: "news",
        component: News,
      },
      {
        path: "message",
        component: HomeMessage,
        meta: {
          keepAlive: true,
        },
      },
    ],
    // children: [
    //   {
    //     path: "news",
    //     component: News,
    //     beforeEnter: (to, from, next) => {
    //       console.log(123);
    //     },
    //   },
    //   {
    //     path: "homeMessage",
    //     component: HomeMessage,
    //   },
    // ],
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于",
    },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      console.log("关于");
      next();
    },
  },
  {
    path: "/user/:userid",
    component: User,
    meta: {
      title: "用户",
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "档案",
    },
  },
];

const router = new VueRouter({
  mode: "history", //去除#
  base: process.env.BASE_URL,
  routes,
  //linkActiveClass:'active', // 改所有的路由在活跃状态下的class为  active
});

//修改vue路由上面的title
//前置钩子
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  console.log("++++++++++");
  next();
  console.log("123456");
});

router.afterEach((to, from) => {
  console.log("-------------");
});
export default router;
