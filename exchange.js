new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      items: [],
      errors: [],
      base: null
    };
  },
  created() {
    axios
      .get("https://api.exchangeratesapi.io/latest")
      .then(res => {
        this.items = res.data.rates;
        this.base = res.data;
      })
      .catch(err => this.errors.push(err));
  }
});
