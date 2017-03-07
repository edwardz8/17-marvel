
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
        <div class="grid-item sidebar">
          <img src="http://vignette4.wikia.nocookie.net/marveldatabase/images/f/ff/Mayham_(April_Parker).jpg/revision/latest?cb=20110320235541"
          class="sidebar__pic" alt="">
          <p class="sidebar__name">Spider-Girl (2010-2011){{sidebar.name}}</p>
          <p class="sidebar__date">2010-2011{{sidebar.date}}</p>


          <div class="creators">

            <h2 class="creators__heading">Creators</h2>
            <hr/>
          </div>
          <ul class="creators__list">
            <li class="creators__list-one">Tom Brennan</li>
            <li class="creators__list-two">Walter Payton</li>
            <li class="creators__list-three">Clayton Kershaw</li>
            <li class="creators__list-four">Barry Sanders</li>
            <li class="creators__list-five">Jorge Kevic Djurdjevic</li>
            <li class="creators__list-six">Paul Tobin</li>
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
                      <p class="name">Batman</p>
                      <button class="btn">Read More</button>
                    </div>

                    <div class="comics-data">
                      <img src="http://placehold.it/150x150" class="comics-data__pic" alt="">
                      <div class="number">#8</div>
                      <p class="name">Batman</p>
                      <button class="btn">Read More</button>
                    </div>

                    <div class="comics-data">
                      <img src="http://placehold.it/150x150" class="comics-data__pic" alt="">
                      <div class="number">#8</div>
                      <p class="name">Batman</p>
                      <button class="btn">Read More</button>
                    </div>

                    <div class="comics-data">
                      <img src="http://placehold.it/150x150" class="comics-data__pic" alt="">
                      <div class="number">#8</div>
                      <p class="name">Batman</p>
                      <button class="btn">Read More</button>
                    </div>
                  </div>


  </div>
</template>

<script>
import Store from 'store.js';

export default {
  data() {
      return {
        type: 'SERIES_INFO@LOAD_COMPLETE',
        data: {
          this.$select('seriesInfo'),
          this.$select('characters'),
          this.$select('comics'),
      },
      };
    };
  },

  methods: {
      loadSeries() {
        store.dispatch({type: 'SERIES_INFO@LOAD_COMPLETE', /*this.search */})
        //or use the actionCreator
        store.dispatch(todoActions.loadSeries(this.search))
        const {loadSeries} = store.actions
        store.dispatch(loadSeries(this.search))
      }
  },
};
</script>
