<template>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <button
    @click="increment"
    class="rounded-sm border-solid border-blue-900/60 bg-blue-800 px-5 py-2 text-white/80 transition-all hover:bg-blue-700/75 hover:text-white"
  >
    Increment +1
  </button>
</template>

<script lang="ts" setup>
import { useCountStore } from "@stores/count";
import { storeToRefs } from "pinia";

const store = useCountStore();

const { count, doubleCount } = storeToRefs(store);
const { increment } = store;
</script>
