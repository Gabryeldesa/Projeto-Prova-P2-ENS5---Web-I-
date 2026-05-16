'use client'

import Link from 'next/link'
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton'
import { useCart } from '@/context/CartContext'
import styles from './ProductCard.module.css'

export default function ProductCard({ produto }) {
  const { adicionarAoCarrinho } = useCart()

  return (
    <div className={styles.card}>
      <Link href={`/produtos/${produto.id}`} className={styles.imagemLink}>
        <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
        <span className={styles.categoria}>{produto.categoria}</span>
      </Link>
      <div className={styles.corpo}>
        <Link href={`/produtos/${produto.id}`} className={styles.nomeLink}>
          <h3 className={styles.nome}>{produto.nome}</h3>
        </Link>
        <p className={styles.descricao}>{produto.descricao}</p>
        <div className={styles.rodape}>
          <span className={styles.preco}>
            R$ {produto.preco.toFixed(2).replace('.', ',')}
          </span>
          <div className={styles.acoes}>
            <FavoriteButton produto={produto} />
            <button
              className={styles.btnCarrinho}
              onClick={() => adicionarAoCarrinho(produto)}
              title="Adicionar ao carrinho"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}