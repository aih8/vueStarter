<template>
  <div>
    <ul>
      <li v-for="item of historyList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InputHistoryList",
  props: {
    historyList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.props-wrap {
  margin-top: 40px;
}
ul {
  text-align: left;
}
</style>
