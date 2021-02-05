<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ count }}</p>
  </div>
</template>
<script>
export default {
  data() {
    const st = new Date().valueOf();
    return {
      count: 1,
      timer: null,
      countUnwatcher: null,
      timeStamp: st
    };
  },
  watch: {
    count: {
      handler(newVal, oldVal) {
        console.log(`watch count change, new : ${newVal}, old : ${oldVal}`);
        this.updateTimeStamp();

        this.$nextTick((...args) => {
          console.log("event nextTrick1 : ", ...args);
          this.updateTimeStamp();
        });
      }
    }
  },
  beforeRouteEnter(...args) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    const [to, from, next] = args; // eslint-disable-line no-unused-vars
    console.log("event beforeRouteEnter : ", ...args);
    next();
  },

  beforeCreate(...args) {
    console.log("event beforeCreate : ", ...args);
  },
  created(...args) {
    console.log("event created : ", ...args);
    this.updateTimeStamp();
  },
  beforeMount(...args) {
    console.log("event beforeMount : ", ...args);
    this.updateTimeStamp();
  },
  mounted(...args) {
    console.log("console this : ", this);
    console.log("event mounted : ", ...args);
    this.updateTimeStamp();

    this.countUnwatcher = this.$watch("count", (newVal, oldVal) => {
      console.log(`$watch count change, new : ${newVal}, old : ${oldVal}`);
      this.updateTimeStamp();
    });

    this.timer = setInterval(() => {
      console.log("count updating...");
      this.updateTimeStamp();
      this.count += 1;
    }, 5000);
  },
  beforeRouteUpdate(...args) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    const [to, from, next] = args; // eslint-disable-line no-unused-vars
    console.log("event beforeRouteUpdate : ", ...args);
    this.updateTimeStamp();
    next();
  },
  activated(...args) {
    console.log("event activated : ", ...args);
    this.updateTimeStamp();
  },
  deactivated(...args) {
    console.log("event deactivated : ", ...args);
    this.updateTimeStamp();
  },
  beforeUpdate(...args) {
    console.log("event beforeUpdate : ", ...args);
    this.updateTimeStamp();
  },
  updated(...args) {
    console.log("event updated : ", ...args);
    this.updateTimeStamp();
  },
  beforeDestroy(...args) {
    console.log("event beforeDestroy : ", ...args);
    this.updateTimeStamp();
    this.clearTimer();
    this.clearCountWatcher();
  },
  destroyed(...args) {
    console.log("event destroyed : ", ...args);
    this.updateTimeStamp();
  },
  beforeRouteLeave(...args) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    const [to, from, next] = args; // eslint-disable-line no-unused-vars
    console.log("event beforeRouteLeave : ", ...args);
    next();
  },
  methods: {
    clearCountWatcher() {
      if (this.countUnwatcher) {
        this.countUnwatcher();
        this.countUnwatcher = null;
      }
    },
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    updateTimeStamp() {
      const t = new Date().valueOf();
      console.log("diff : ", t - this.timeStamp);
      this.timeStamp = t;
    }
  }
};
</script>
