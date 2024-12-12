import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

interface FavoritosState {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const produtoIndex = state.itens.findIndex(
        (p) => p.id === action.payload.id
      )

      if (produtoIndex !== -1) {
        // Remove if already favorited
        state.itens.splice(produtoIndex, 1)
      } else {
        // Add if not favorited
        state.itens.push(action.payload)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
