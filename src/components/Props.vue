<template>
  <div class="props-wrap">
    <h1>自定义双向绑定</h1>
    received from parent component: {{ value }}
    <br />
    <input type="text" :value="value" @change="inputChange" />
  </div>
</template>

<script>
export default {
  name: "PropsComponent",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  model: {
    props: "value",
    event: "change"
  },
  methods: {
    inputChange: function(e) {
      console.log(e, e.target.value);
      this.$emit("change", e.target.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.props-wrap {
  margin-top: 40px;
}
</style>
