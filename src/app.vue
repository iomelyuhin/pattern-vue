<template lang="pug">
  section
    h1 {{title}}
    router-view
</template>

<script>
// import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "hello world!!!"
    };
  }
  // components: {
  //   appHeader: () => import("./components/header"),
  //   tabs: () => import("./components/tabs"),
  //   tooltip: () => import("./components/tooltip")
  // },
  // computed: {
  //   ...mapState("tooltips", {
  //     showed: state => state.showed
  //   }),
  //   ...mapGetters("user", ["userIsLogged"])
  // },
  // methods: {
  //   ...mapActions("tooltips", ["closeTooltip"])
  // },
  // watch: {
  //   showed(value) {
  //     if (value === true) {
  //       let timeout;
  //       clearTimeout(timeout);
  //       timeout = setTimeout(() => {
  //         this.closeTooltip();
  //       }, 3000);
  //     }
  //   }
  // }
};
</script>