import { configureStore } from '@reduxjs/toolkit'
import opportunitiesReducer from './features/oppotunities/opportunitiesSlice'


export const makeStore = () => {
  return configureStore({
    reducer: {
      opportunities: opportunitiesReducer,
    }
  })
}

export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']