
export function loadSeries(data) {
  return { type: 'SERIES_INFO@LOAD_COMPLETE', data };
}

export function findCharacters(characters) {
  characters.id = new Date();

  return { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: { name: [] } };
}

export function findComics(comics) {
  comics.id = new Date();

  return { type: 'COMICS@FIND_ALL_COMPLETE', data: { name: [] } };
}

export function setModal(id) {
  return { type: 'MODAL@SET', data: id };
}

export function clearModal(id) {
  return { type: 'MODAL@CLEAR', data: id };
}

export function seriesInfoSearch(seriesInfo) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=TITLE&')
    .then(r = r.json())
    .then((data) => {
      dispatch({
        type: 'SERIES_INFO@LOAD_COMPLETE',
        data: {
          seriesInfo,
        },
      });
    });
  };
}

export function charactersFindForId(characters) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series/ID/characters')
    .then(r = r.json())
    .then((data) => {
      dispatch({
        type: 'CHARACTERS@FIND_ALL_COMPLETE',
        data: {
          characters,
        },
      });
    });
  };
}

export function comicsFindForId(comics) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series/ID/comics')
    .then(r = r.json())
    .then((data) => {
      dispatch({
        type: 'COMICS@FIND_ALL_COMPLETE',
        data: {
          comics,
        },
      });
    });
  };
}
