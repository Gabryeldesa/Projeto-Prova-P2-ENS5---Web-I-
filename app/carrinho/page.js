'use client'

import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import styles from './page.module.css'

export default function Carrinho() {
  const { carrinho, removerDoCarrinho, alterarQuantidade, limparCarrinho, totalPreco, totalItens } = useCart()

  return (
    <div className={styles.container}>
      <div className={styles.topo}>
        <h1 className={styles.titulo}>Meu Carrinho</h1>
        {carrinho.length > 0 && (
          <button onClick={limparCarrinho} className={styles.btnLimpar}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
              <path d="M10 11v6M14 11v6"/>
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
            </svg>
            Limpar Carrinho
          </button>
        )}
      </div>

      {carrinho.length === 0 ? (
        <div className={styles.vazio}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <p>Seu carrinho está vazio.</p>
          <Link href="/produtos" className={styles.btnPrimario}>Ver Produtos</Link>
        </div>
      ) : (
        <div className={styles.layout}>
          <div className={styles.itens}>
            {carrinho.map(item => (
              <div key={item.id} className={styles.item}>
                <img src={item.imagem} alt={item.nome} className={styles.itemImagem} />
                <div className={styles.itemInfo}>
                  <h3 className={styles.itemNome}>{item.nome}</h3>
                  <span className={styles.itemCategoria}>{item.categoria}</span>
                  <span className={styles.itemPreco}>
                    R$ {item.preco.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className={styles.itemAcoes}>
                  <div className={styles.quantidade}>
                    <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </button>
                  </div>
                  <span className={styles.subtotal}>
                    R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
                  </span>
                  <button onClick={() => removerDoCarrinho(item.id)} className={styles.btnRemover}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.resumo}>
            <h2 className={styles.resumoTitulo}>Resumo do Pedido</h2>
            <div className={styles.resumoLinha}>
              <span>Itens ({totalItens})</span>
              <span>R$ {totalPreco.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className={styles.resumoLinha}>
              <span>Frete</span>
              <span className={styles.gratis}>Grátis</span>
            </div>
            <div className={styles.resumoTotal}>
              <span>Total</span>
              <span>R$ {totalPreco.toFixed(2).replace('.', ',')}</span>
            </div>
            <button className={styles.btnFinalizar}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Finalizar Pedido
            </button>
          </div>
        </div>
      )}
    </div>
  )
}