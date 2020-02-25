export const exampleMixin = {
  created: function() {
    console.log("exampleMixin created");
    this.convertDate();
  },
  data: function() {
    return {
      name: "exampleMixing"
    };
  },
  methods: {
    convertDate: function() {
      console.log("exampleMixin method convertDate called");
    }
  }
};
