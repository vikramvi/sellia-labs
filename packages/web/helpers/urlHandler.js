import { createBrowserHistory } from 'history';
export const history = process.browser ? createBrowserHistory() : false;

export function createUrl(urlData) {
  const keys = Object.keys(urlData);
  let search = '?';
  keys.forEach(key => {
    if (
      urlData[key] !== null &&
      urlData[key] !== '' &&
      key !== 'page' &&
      key !== 'limit'
    ) {
      search += `${key}=${urlData[key]}&`;
    }
  });
  return search.substring(0, search.length - 1);
}

export function getUrl() {
  const location = process.browser && window.location;
  const data =
    process.browser && location.search
      ? location.search.slice(location.search.indexOf('?') + 1).split('&')
      : [];
  const urlData = {};
  data.forEach(data => {
    try {
      data = data.split('=');
      const dataVal = decodeURIComponent(data[1]);
      urlData[data[0]] = dataVal;
    } catch (e) {}
  });
  return urlData;
}

export function setUrl(urlData) {
  const search = createUrl(urlData);
  history.push({
    ...location,
    search,
  });
}

export function clearUrl() {
  history.push({
    ...location,
    search: '',
  });
}

export function setStateToUrl(state) {
  let urlData = getUrl();
  urlData = { ...urlData, ...state };
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'text':
          urlData[key] = state[key] ? state[key] : null;
          break;
        case 'categories':
          urlData[key] =
            state[key] && state[key].length ? state[key].join() : null;
          break;
        case 'price':
          urlData[key] =
            state[key] && state[key].length ? state[key].join() : null;
          break;
        case 'location':
          if (state[key] && state[key].lat) {
            urlData[`${key}_lat`] = state[key].lat;
          }
          if (state[key] && state[key].lng) {
            urlData[`${key}_lng`] = state[key].lng;
          }
          break;
        default:
          urlData[key] = state[key];
          break;
      }
    }
  }
  setUrl(urlData);
}

export function getUrlToState() {
  const urlData = getUrl();
  const state = { page: 1, limit: 8 };
  for (const key in urlData) {
    if (urlData.hasOwnProperty(key)) {
      switch (key) {
        case 'text':
          state[key] =
            urlData[key] && urlData[key] !== 'null' ? urlData[key] : '';
          break;
        case 'categories':
          state[key] =
            urlData[key] && urlData[key] !== 'null'
              ? urlData[key].split(',')
              : [];
          break;
        case 'price':
          const price = urlData[key] ? urlData[key].split(',') : null;
          if (price && price.length) {
            state[key] = [Number(price[0]), Number(price[1])];
            //state[key][1] = Number(price[1]);
          }
          break;
        case 'radius':
          state[key] = Number(urlData[key]);
          break;
        case 'condition':
          state[key] = urlData[key] && urlData[key] == 'true' ? true : false;
          break;
        case 'isNegotiable':
          state[key] = urlData[key] && urlData[key] == 'true' ? true : false;
          break;
        case 'location_lat':
          if (urlData['location_lat']) {
            state['location'] = {};
            state['location']['lat'] = Number(urlData[key]);
          } else {
            state['location'] = null;
          }
          break;
        case 'location_lng':
          if (urlData[key]) {
            state['location']['lng'] = Number(urlData[key]);
          }
          break;
        case 'sorting_field':
          if (urlData[key]) {
            state['sorting'] = {};
            state['sorting']['field'] = urlData[key];
          }
          break;
        case 'sorting_type':
          if (urlData[key]) {
            state['sorting']['type'] = urlData[key];
          }
          break;
        case 'page':
          if (urlData[key]) {
            state['page'] = Number(urlData[key]);
          }
          break;
        case 'limit':
          if (urlData[key]) {
            state['limit'] = Number(urlData[key]);
          }
          break;
        default:
          state[key] = urlData[key];

          break;
      }
    }
  }
  return state;
}
