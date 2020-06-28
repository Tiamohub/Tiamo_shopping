<template>
  <div>
    <h2>用户界面</h2>
    <h2>{{userId}}</h2>
  </div>
</template>
	
<script>
export default {
  name: "User",
  data() {
    return {};
  },
  computed: {
    userId() {
      return this.$route.params.userid;
    }
  }
};
</script>

<style>
</style>