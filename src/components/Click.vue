<template>
  <ul class="click-wrap" @click.prevent="handleClickWrapNodeClickEvent">
    <li
      v-for="item of list"
      :key="item.index"
      @click.stop.prevent="handleClickWrapNodeClickEvent(item)"
      :style="{ backgroundColor: item.color, color: item.fontColor }"
    >
      {{ item.index }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ClickComponent",
  data: function() {
    const defaultLength = 100;
    return {
      list: new Array(defaultLength).fill(0).map((v, i) => {
        const color = this.color16();
        return {
          color: color,
          index: i,
          fontColor: this.getFontColor(color)
        };
      })
    };
  },
  methods: {
    color16: function() {
      // 十六进制颜色随机
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      const rS = r.toString(16).padStart(2, "0");
      const gS = g.toString(16).padStart(2, "0");
      const bS = b.toString(16).padStart(2, "0");
      const color = `#${rS}${gS}${bS}`;
      return color;
    },
    getFontColor: function(colorStr) {
      colorStr = colorStr.replace("#", "");
      const rLevel = this.getInt(colorStr.substr(0, 2)) * 0.299;
      const gLevel = this.getInt(colorStr.substr(2, 2)) * 0.587;
      const bLevel = this.getInt(colorStr.substr(4, 2)) * 0.114;
      const grayLevel = rLevel + gLevel + bLevel;
      return grayLevel <= 192 ? "white" : "black";
    },
    getInt: function(colorIn16) {
      return parseInt(colorIn16, 16);
    },
    handleClickWrapNodeClickEvent: function(item) {
      console.log("======>: ", item);
      alert(`
        index: ${item.index};    fontColor: ${item.fontColor};    backgroundColor: ${item.color}
      `);
    }
  }
};
</script>

<style lang="scss" scoped>
.click-wrap {
  list-style: none;
  width: 800px;
  overflow: hidden;
  padding: 0;
  margin: 80px auto;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

  > li {
    $size: 80px;
    float: left;
    width: $size;
    height: $size;
    line-height: $size;
  }
}
</style>
