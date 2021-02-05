<template>
  <div>
    <div>{{ fullname }}</div>
    <span>user2: ---- {{ user2 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user2: ""
    };
  },
  props: {
    user: {
      type: String,
      default: "default Name"
    }
  },
  computed: {
    fullname() {
      return `${this.user} -- `;
    }
  },
  watch: {
    fullname: {
      handler() {
        this.user2 += "2";
      },
      immediate: true
    }
  },
  mounted() {}
};
</script>
