import { describe, expect, it } from "vitest";
import configSlice from './slice';
import { fetchConfig } from './thunks';

describe('configSlice', () => {
  const dummyConfig = {
    sidebarMenuItems: [
      {
        id: 1,
        label: 'Home',
        iconKey: 'home',
        url: '/',
      },
      {
        id: 2,
        label: 'About',
        iconKey: 'info',
        url: '/about',
      },
    ],
  };

  it('should return the initial state', () => { 
    expect(configSlice(undefined, { type: 'unknown' })).toEqual({ data: null });
  });

  it('should handle fetchConfig.fulfilled', () => {
    const newState = configSlice(undefined, fetchConfig.fulfilled(dummyConfig, 'requestId'));
    expect(newState.data).toEqual(dummyConfig);
  });
});
