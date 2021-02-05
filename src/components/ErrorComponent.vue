<template>
  <div>
    ErrorComponent
  </div>
</template>

<script>
export default {
  name: "ErrorComponent",
  methods: {
    inputChange: function(e) {
      console.log(e, e.target.value);
      this.$emit("change", e.target.value);
    }
  }
};
</script>
