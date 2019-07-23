<template>
<div id="box">
     <van-image-preview
    v-model="show"
    :images="images"
    @change="onChange"
    >
    <template v-slot:index>第{{ index }}页</template>
    </van-image-preview>
    <p>11111</p>
</div>
   
</template>

<script>
export default {
     data() {
    return {
      show: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/vant/cat.jpeg',
        'https://img.yzcdn.cn/vant/cat.jpeg'
      ]
    };
  },

  methods: {
    onChange(index) {
      this.index = index;
    }
  }
}
</script>

<style>

</style>
