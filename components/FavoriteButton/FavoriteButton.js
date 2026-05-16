'use client'

import { useFavorites } from '@/context/FavoritesContext'
import styles from './FavoriteButton.module.css'

export default function FavoriteButton({ produto }) {
  const { toggleFavorito, isFavorito } = useFavorites()
  const favorito = isFavorito(produto.id)

  return (
    <button
      className={`${styles.btn} ${favorito ? styles.ativo : ''}`}
      onClick={(e) => {
        e.preventDefault()
        toggleFavorito(produto)
      }}
      title={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill={favorito ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    </button>
  )
}