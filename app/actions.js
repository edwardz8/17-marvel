

export function loadSeries(data) {
  return { type: 'SERIES_INFO@LOAD_COMPLETE', data };
}

export function findCharacters(data) {
  data.id = new Date();

  return { type: 'CHARACTERS@FIND_ALL_COMPLETE', data };
}

export function findComics(id) {
  data.id = new Date();

  return { type: 'COMICS@FIND_ALL_COMPLETE', data: id };
}

export function setModal(id) {
  return { type: 'MODAL@SET', data: id };
}

export function clearModal(id) {
  return { type: 'MODAL@CLEAR', data: id };
}

export function seriesInfoSearch(seriesInfo) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=TITLE&apikey=APIKEY')
    .then(r = r.json())
    .then((data) => {
      dispatch({
        type: 'SERIES_INFO@LOAD_COMPLETE',
        data: {
          sidebar,
        },
      });
    });
  };
}

export function charactersFindForId(characters) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series/ID/characters?apikey=APIKEY')
    .then(r = r.json())
    .then((data) => {
      dispatch({
        type: 'CHARACTERS@FIND_ALL_COMPLETE',
        data: {
          id,
        },
      });
    });
  };
}

export function comicsFindForId(comics) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series/ID/comics?apikey=APIKEY')
    .then(r = r.json())
    .then((data) => {
      dispatch({
        type: 'COMICS@FIND_ALL_COMPLETE',
        data: {
          id,
        },
      });
    });
  };
}
