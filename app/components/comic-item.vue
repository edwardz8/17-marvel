<template lang="html">
  <div class="">
      <img :src="`${comics.thumbnail.path}.${comics.thumbnail.extension}`" class="comics-data__pic" alt="">
      <div class="number">{{comics.number}}</div>
      <p class="name">{{comics.name}}</p>
      <button class="btn">Read More</button>

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
