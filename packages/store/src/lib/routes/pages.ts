import { NOT_FOUND, RoutesMap } from 'redux-first-router';

export interface ObjectKeys {
  [key: string]: string;
}
const components: ObjectKeys = {
  FEED: 'Feed',
  COIN: 'Coin',
  [NOT_FOUND]: 'Feed',
};

export const routesMap: RoutesMap = {
  FEED: {
    path: '/',
    thunk: async (dispatch, getState) => {
      console.log('Feed thunk.');
    },
  },
  COIN: {
    path: '/coin/:ticker',
    thunk: async (dispatch, getState) => {
      console.log('Coin thunk.');
    },
  },
  NOT_FOUND: {
    path: '/',
  },
};

export default (state = 'HOME', action: { type: string }) =>
  components[action.type] || state;
