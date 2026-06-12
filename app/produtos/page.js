'use client'

import { Suspense } from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import produtos from '@/data/produtos'
import ProductCard from '@/components/ProductCard/ProductCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import styles from './page.module.css'

const categorias = ['Todas', ...new Set(produtos.map(p => p.categoria))]

function ProdutosConteudo() {
  const searchParams = useSearchParams()
  const [busca, setBusca] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas')

  useEffect(() => {
    const categoriaURL = searchParams.get('categoria')
    if (categoriaURL && categorias.includes(categoriaURL)) {
      setCategoriaSelecionada(categoriaURL)
    }
  }, [searchParams])

  const produtosFiltrados = produtos.filter(p => {
    const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase()) ||
                       p.descricao.toLowerCase().includes(busca.toLowerCase())
    const matchCategoria = categoriaSelecionada === 'Todas' || p.categoria === categoriaSelecionada
    return matchBusca && matchCategoria
  })

  return (
    <div className={styles.container}>
      <div className={styles.topo}>
        <div>
          <h1 className={styles.titulo}>Nossos Produtos</h1>
          <p className={styles.subtitulo}>{produtosFiltrados.length} produto(s) encontrado(s)</p>
        </div>
        <SearchBar valor={busca} onChange={setBusca} placeholder="Buscar produtos..." />
      </div>

      <div className={styles.filtros}>
        {categorias.map(cat => (
          <button
            key={cat}
            className={`${styles.filtroBtn} ${categoriaSelecionada === cat ? styles.ativo : ''}`}
            onClick={() => setCategoriaSelecionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {produtosFiltrados.length === 0 ? (
        <div className={styles.vazio}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <p>Nenhum produto encontrado para &quot;<strong>{busca}</strong>&quot;</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {produtosFiltrados.map(produto => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Produtos() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', color: '#fff' }}>Carregando produtos...</div>}>
      <ProdutosConteudo />
    </Suspense>
  )
}