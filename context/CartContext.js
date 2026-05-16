'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState([])
  const [carregado, setCarregado] = useState(false)

  useEffect(() => {
    const salvo = localStorage.getItem('voltlab-carrinho')
    if (salvo) setCarrinho(JSON.parse(salvo))
    setCarregado(true)
  }, [])

  useEffect(() => {
    if (carregado) {
      localStorage.setItem('voltlab-carrinho', JSON.stringify(carrinho))
    }
  }, [carrinho, carregado])

  function adicionarAoCarrinho(produto) {
    setCarrinho(prev => {
      const existe = prev.find(p => p.id === produto.id)
      if (existe) {
        return prev.map(p =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
        )
      }
      return [...prev, { ...produto, quantidade: 1 }]
    })
  }

  function removerDoCarrinho(id) {
    setCarrinho(prev => prev.filter(p => p.id !== id))
  }

  function alterarQuantidade(id, quantidade) {
    if (quantidade <= 0) {
      removerDoCarrinho(id)
      return
    }
    setCarrinho(prev =>
      prev.map(p => p.id === id ? { ...p, quantidade } : p)
    )
  }

  function limparCarrinho() {
    setCarrinho([])
  }

  const totalItens = carrinho.reduce((acc, p) => acc + p.quantidade, 0)
  const totalPreco = carrinho.reduce((acc, p) => acc + p.preco * p.quantidade, 0)

  return (
    <CartContext.Provider value={{
      carrinho,
      adicionarAoCarrinho,
      removerDoCarrinho,
      alterarQuantidade,
      limparCarrinho,
      totalItens,
      totalPreco
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}