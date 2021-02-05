<template>
  <div class="demo-wrap">
    <PropsComponent v-model="childValue" />
    <ChangeCountRender :count="changeCount" />

    <div>
      <h2>历史值列表：</h2>
      <InputHistoryList :historyList="historyValues" />
    </div>

    <div>
      <ClickComponent />
    </div>

    <div>
      <user-info-panel :user="userInfo"></user-info-panel>
    </div>
  </div>
</template>

<script>
import PropsComponent from "@/components/Props";
import ChangeCountRender from "@/components/Count";
import InputHistoryList from "@/components/InputHistoryList";
import ClickComponent from "@/components/Click";
import UserInfoPanel from "@/components/UserInfoPanel";

export default {
  name: "Dome",
  components: {
    PropsComponent,
    ChangeCountRender,
    InputHistoryList,
    ClickComponent,
    "user-info-panel": UserInfoPanel
  },
  data: () => {
    const childValue = "init value";
    return {
      childValue: childValue,
      changeCount: 0,
      historyValues: [childValue],
      userInfo: null
    };
  },
  watch: {
    childValue: function(val) {
      this.changeCount += 1;
      if (!val) {
        alert("输入框的内容为空");
      } else if (this.historyValues.includes(val)) {
        alert("与历史输入值重复");
      } else {
        this.historyValues.push(val);
      }
    }
  },
  mounted() {
    // this.userInfo = {
    //   firstName: "firstChange",
    //   secondName: "  "
    // };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 40px;
}
</style>
