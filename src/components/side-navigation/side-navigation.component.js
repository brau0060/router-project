export default {
  name: 'SideNavigation',
  data() {
    return{
      activeLink: null
  };
},
  mounted() {
    /* eslint-disable */
    console.log(this.$route)
    this.activeLink = this.$route.path;   
  },
  watch: {
    $route(newVal) {
      this.activeLink = newVal.path;
    }
  }
};