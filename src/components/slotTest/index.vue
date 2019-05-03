<template>
  <div class="slot-test">
    <div class=slot-container>
      <p>this is a slot native information.</p>
      <p>this is a slot native information.</p>
      <p>this is a slot native information.</p>
      <slot name="testOverflow"/>
    </div>
    <!-- <slot>this is a default slot content text.</slot> -->
    <slot name="slot1" :user="user">this is a default slot content text.</slot>
    <!-- <slot/> -->
  </div>
</template>

<script>
export default {
  name: 'slotTest',
  data () {
    return {
      user: {
        name: 'yangyu',
        age: 23
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .slot-test {
    width: 100%;
    height: 300px;
    background: #ddd;
    .slot-container {
      position: fixed;
      top: 100px;
      left: 200px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 240px;
      height: 100px;
      margin: 30px auto;
      border-radius: 6px;
      background: #fff;
      p {
        flex: 1;
      }
    }
  }
</style>
