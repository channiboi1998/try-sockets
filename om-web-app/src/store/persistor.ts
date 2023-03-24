import { RootState, store } from './index';

const KEY = 'redux:root';

/**
 * This function loads the persisted state from local storage and returns it as a JavaScript object. 
 * If there is no persisted state, it returns undefined. 
 * Any errors that occur during the deserialization of the persisted state are caught and undefined is returned.
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

/**
 * This function sets up a subscription to the Redux store and saves the state to local storage whenever the store's state changes. 
 * The blacklist parameter is an optional array of state keys to exclude from the persisted state. 
 * The function retrieves the current state of the store, creates a copy of it, and removes any keys in the blacklist array from the copy. 
 * Finally, the modified state object is passed to the saveState function to persist it.
 */
export const persistState = (blacklist: (keyof RootState)[] = []) => {
  store.subscribe(() => {
    const state = Object.assign({}, store.getState());
    if (blacklist.length > 0) {
      blacklist.forEach((key) => delete state[key]);
    }
    saveState(state);
  });
};

/**
 * This function saves a partial state object to local storage. 
 * It first serializes the state object into a JSON string, then saves it to local storage under the 'redux:root' key.
 */
const saveState = async (state: Partial<RootState>) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(KEY, serializedState);
    } catch (e) {
      // console.log(e)
    }
  };