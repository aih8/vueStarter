<template>
  <div>
    LoadingComponent
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
  methods: {
    inputChange: function(e) {
      console.log(e, e.target.value);
      this.$emit("change", e.target.value);
    }
  }
};
</script>
