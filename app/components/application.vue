
<template lang="html">
  <div class="app">
    <div class="section header">
      <div class="container">
        <nav class="nav">
          <h1 class="logo">MARVEL</h1>
        </nav>
      </div>
    </div>
      <div class="container">
      <div class="grid">
        <div class="grid-item series" v-if="seriesInfo">
          <img :src="`${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`" alt="">
          <p class="series__name">{{seriesInfo.title}}</p>
          <p class="series__date">{{seriesInfo.startYear}} - {{seriesInfo.endYear}}</p>


          <div class="creators">

            <h2 class="creators__heading">Creators</h2>
            <hr/>
          </div>
          <ul class="creators__list">
            <li v-for="item in seriesInfo.creators.items" class="creators__list-one">{{item.name}}</li>
          </ul>
        </div>


        <div class="grid-item main">
            <h2 class="characters__heading">CHARACTERS</h2>
            <hr/>
              <div class="characters-row">
                    <character-item v-for="item in characters" v-bind:characters="item" class="characters-data">
                    </character-item>
                  </div>

                <h2 class="comics__heading">COMICS</h2>

                <hr/>
                <div class="comics-row">
                  <comic-item v-for="item in comics" v-bind:comics="item" v-on:readmore="showModal"
                  class="comics-data">
                  </comic-item>
                </div>

                <div class="modal" v-if="modal">
                  <div class="modal__card">
                    <button v-on:click="closeModal">X</button>
                    <p v-html="modal.description"></p>
                  </div>
                </div>

  </div>
</div>


</div>
</div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch, setModal, clearModal } from '../actions';
import CharacterItem from './character-item.vue';
import ComicItem from './comic-item.vue';

export default {
    components: {
      CharacterItem,
      ComicItem
    },


  data() {
      return {
        seriesInfo: this.$select('seriesInfo'),
        characters: this.$select('characters'),
        comics: this.$select('comics'),
        modal: this.$select('modal'),
      };
  },

  created() {
    store.dispatch(seriesInfoSearch('Thor'));
  },

  methods: {
      showModal(data) {
          store.dispatch(setModal(data));
      },

      closeModal() {
        store.dispatch(clearModal());
      },

  },
};

</script>
