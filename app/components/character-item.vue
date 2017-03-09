<template lang="html">
  <div class="">

      <img :src="`${characters.thumbnail.path}.${characters.thumbnail.extension}`" class="characters-data__pic" alt="">
      <p class="name">{{characters.name}}</p>

  </div>
</template>

<script>
export default {
  props: ['characters'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
