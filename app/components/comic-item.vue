<template lang="html">
  <div class="">
      <img :src="`${comics.thumbnail.path}.${comics.thumbnail.extension}`" class="comics-data__pic" alt="">
      <div class="number">{{comics.issueNumber}}</div>
      <p class="name">{{comics.name}}</p>
      <button class="btn" @click="$emit('readmore', comics)">Read More</button>

  </div>
</template>

<script>
export default {
  props: ['comics'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
