<template>
  <div id="app">
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>||
    <!-- <router-link :to="'/user/'+userid">user</router-link> -->
    <router-link :to="'/user/'+userid">用户</router-link>
    <!-- <router-link :to="{path:'/profile'}">档案</router-link> -->
    <!-- <router-view></router-view> -->
    <!-- <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button>-->
    <router-link to="/profile">档案</router-link>
    <button @click="profileClick">123</button>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>



<script>
export default {
  name: "App",
  data() {
    return {
      userid: "aaa",
      name: "张三"
    };
  },
  methods: {
    homeClick() {
      console.log("homeClick");
      // this.$router.push('/Home');
      // this.$router.replace('/Home');
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    aboutClick() {
      console.log("aboutClick");
      //this.$router.push("/about");
      this.$router.replace("/about");
    },
    profileClick() {
      // this.$router.replace({
      //   path: "/profile"
      // });
      this.$router.push("/profile");
      // // this.$router.push("/profile");
      // // console.log(this.$router);
      // this.$router.push({
      //   path: "/profile",
      //   query: {
      //     name: "zhangsan",
      //     id: this.userid
      //   }
      // });
    }
  }
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  color: red;
  transition: all 0.2s;
}
</style>
