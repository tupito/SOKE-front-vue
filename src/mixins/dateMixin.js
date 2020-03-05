export const dateMixin = {
  methods: {
    // muutetaan päivämäärätieto suomalaiseen muotoon: 2020-05-31T23:59:00 -> 31.5.2020
    toFinDate: function(inputDate) {
      let dateObj = new Date(Date.parse(inputDate));
      return (
        dateObj.getDate() +
        "." +
        (dateObj.getMonth() + 1) +
        "." +
        dateObj.getFullYear()
      );
    }
  }
};
