'use client'

import { useParams, useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton'
import produtos from '@/data/produtos'
import styles from './page.module.css'

export default function Detalhe() {
  const { id } = useParams()
  const router = useRouter()
  const { adicionarAoCarrinho } = useCart()

  const produto = produtos.find(p => p.id === Number(id))

  if (!produto) {
    return (
      <div className={styles.erro}>
        <p>Produto não encontrado.</p>
        <button onClick={() => router.push('/produtos')} className={styles.btnVoltar}>
          Voltar aos produtos
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.btnVoltar}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
        Voltar
      </button>

      <div className={styles.conteudo}>
        <div className={styles.imagemWrapper}>
          <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
          <span className={styles.categoria}>{produto.categoria}</span>
        </div>

        <div className={styles.info}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <p className={styles.descricao}>{produto.descricao}</p>

          <div className={styles.estoque}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {produto.estoque} unidades em estoque
          </div>

          <div className={styles.preco}>
            R$ {produto.preco.toFixed(2).replace('.', ',')}
          </div>

          <div className={styles.acoes}>
            <button
              className={styles.btnCarrinho}
              onClick={() => adicionarAoCarrinho(produto)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Adicionar ao Carrinho
            </button>
            <FavoriteButton produto={produto} />
          </div>
        </div>
      </div>
    </div>
  )
}