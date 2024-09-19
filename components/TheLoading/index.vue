<script setup lang="ts">
</script>

<template>
  <div class="loading">
    <div class="spinner" />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //背景虚化
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(13, 13, 66, 1) 35%, rgba(20, 158, 186, 1) 100%);

  z-index: 999;
}

.loaded {
  // 从左到右 隐藏
  animation: loaded 0.5s linear;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}
.spinner {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #0c7a43ff;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }

  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes loaded {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
