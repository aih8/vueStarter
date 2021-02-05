<template>

</template>
<script>
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';
export default {
  name: "AsyncContainer",
  data() {
    return {
      timer: undefined
    };
  },
  components: {
    LoadingComponent, ErrorComponent
  },
  props: {
    delay: {
      type: Number,
      default: 200
    },
    timeout: {
      type: Number,
      default: 30000
    }
  },
  mounted() {

  }
}
</script>
