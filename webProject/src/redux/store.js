// First cart 
// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './cartReducer'

// export const store= configureStore({
//     reducer:{
//         Cart: cartReducer
//     }
// })


//Second one with persist
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key:"root", storage
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store= configureStore({
    reducer:{
        // Cart: cartReducer
        Cart : persistedReducer
    }
})

export const persistor = persistStore(store)