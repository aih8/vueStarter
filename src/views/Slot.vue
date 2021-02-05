<template>
  <div>
    <h2>slot 使用示例</h2>
    <chart-component>
      <template v-if="showDefaultUser" v-slot:user>
        <span>当前用户</span>
      </template>
    </chart-component>

    <button @click="switchSlot">点击切换插槽信息</button>
  </div>
</template>
<script>
import ChartComponet from "@/components/Chart.vue";
export default {
  data() {
    return {
      showDefaultUser: true
    };
  },
  components: {
    "chart-component": ChartComponet
  },
  mounted() {
    console.log("this is a dream");
  },
  methods: {
    switchSlot() {
      this.showDefaultUser = !this.showDefaultUser;
    }
  }
};
</script>
