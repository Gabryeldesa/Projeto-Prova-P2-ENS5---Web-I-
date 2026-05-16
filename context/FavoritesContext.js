'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favoritos, setFavoritos] = useState([])
  const [carregado, setCarregado] = useState(false)

  useEffect(() => {
    const salvo = localStorage.getItem('voltlab-favoritos')
    if (salvo) setFavoritos(JSON.parse(salvo))
    setCarregado(true)
  }, [])

  useEffect(() => {
    if (carregado) {
      localStorage.setItem('voltlab-favoritos', JSON.stringify(favoritos))
    }
  }, [favoritos, carregado])

  function toggleFavorito(produto) {
    setFavoritos(prev =>
      prev.find(p => p.id === produto.id)
        ? prev.filter(p => p.id !== produto.id)
        : [...prev, produto]
    )
  }

  function isFavorito(id) {
    return favoritos.some(p => p.id === id)
  }

  return (
    <FavoritesContext.Provider value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}