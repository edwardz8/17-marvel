
<template lang="html">
  <div class="app">
    <div class="section header">
      <div class="container">
        <nav class="nav">
          <h1 class="logo">MARVEL</h1>
        </nav>
      </div>
    </div>

      <div class="grid">
        <div class="grid-item" v-if="seriesInfo">
          <img :src="`${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`" alt="">
          <p class="series__name">{{seriesInfo.title}}</p>
          <p class="series__date">{{seriesInfo.startYear}} - {{seriesInfo.endYear}}</p>


          <div class="creators">

            <h2 class="creators__heading">Creators</h2>
            <hr/>
          </div>
          <ul class="creators__list">
            <li v-for="item in seriesInfo.creators.items" class="creators__list-one">{{item}}</li>
          </ul>
        </div>


        <div class="grid-item main">

            <h2 class="characters__heading">CHARACTERS</h2>

              <div class="characters-row">

                <div class="characters-data">
                  <img src="http://placehold.it/150x150" class="characters-data__pic" alt="">
                  <p class="name">Wolverine{{characters.name}}</p>
                </div>

                <div class="characters-data">
                  <img src="http://placehold.it/150x150" class="characters-data__pic" alt="">
                  <p class="name">Wolverine{{characters.name}}</p>
                </div>

                <div class="characters-data">
                  <img src="http://placehold.it/150x150" class="characters-data__pic" alt="">
                  <p class="name">Wolverine{{characters.name}}</p>
                </div>

                <div class="characters-data">
                  <img src="http://placehold.it/150x150" class="characters-data__pic" alt="">
                  <p class="name">Wolverine{{characters.name}}</p>
                </div>
              </div>


                <h2 class="comics__heading">COMICS</h2>

                <div class="comics-row">
                    <div class="comics-data">
                      <img src="http://placehold.it/150x150" class="comics-data__pic" alt="">
                      <div class="number">#8</div>
                      <p class="name">Glob</p>
                      <button class="btn">Read More</button>
                    </div>

                    <div class="comics-data">
                      <img src="http://placehold.it/150x150" class="comics-data__pic" alt="">
                      <div class="number">#8</div>
                      <p class="name">Glob</p>
                      <button class="btn">Read More</button>
                    </div>

                    <div class="comics-data">
                      <img src="http://placehold.it/150x150" class="comics-data__pic" alt="">
                      <div class="number">#8</div>
                      <p class="name">Glob</p>
                      <button class="btn">Read More</button>
                    </div>

                    <div class="comics-data">
                      <img src="http://placehold.it/150x150" class="comics-data__pic" alt="">
                      <div class="number">#8</div>
                      <p class="name">Glob</p>
                      <button class="btn">Read More</button>
                    </div>
                  </div>


  </div>
</div>
</div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch } from '../actions';
// import CharacterItem from './character-item';
// import ComicItem from './comic-item';

export default {
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
  },
};

</script>
