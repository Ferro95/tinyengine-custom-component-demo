<template>
  <div class="container">
    <img :src="coverImage" alt="" />
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div>
      <button v-if="showButton" @click="$emit('btn-click')">{{ btnText }}</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  coverImage: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2025/06/14/16/35/mountains-9659812_1280.jpg",
  },
  title: {
    type: String,
    default: "这里是标题",
  },
  description: {
    type: String,
    default: "这里是描述内容，描述内容，描述内容，描述内容。",
  },
  btnText: {
    type: String,
    default: "点击我",
  },
  showButton:  {
    type: Boolean,
    default: true,
  }
});

const emit = defineEmits(["btn-click"]);
</script>

<style scoped>
.container {
  width: 300px;
  height: 450px;
  box-shadow: 0 0 5px #eee;
  border-radius: 10px;
}

.container img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
</style>
