<template>
  <div class="props-wrap">
    <h2>值的变更次数为：{{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: "ChangeCountRender",
  props: {
    count: {
      type: Number,
      default: 0
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
