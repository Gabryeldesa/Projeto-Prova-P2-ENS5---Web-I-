import Link from 'next/link'
import styles from './page.module.css'

const categorias = [
  {
    nome: 'Kits Robótica',
    desc: 'Robôs completos para montar',
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/>
        <path d="M12 7v4M8 11V9M16 11V9"/>
      </svg>
    )
  },
  {
    nome: 'Arduino',
    desc: 'Plataformas de prototipagem',
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/>
        <path d="M6 12h4M14 12h4"/>
      </svg>
    )
  },
  {
    nome: 'Raspberry Pi',
    desc: 'Minicomputadores poderosos',
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6" rx="1"/>
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
      </svg>
    )
  },
  {
    nome: 'Sensores',
    desc: 'Módulos e sensores variados',
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6a6 6 0 1 0 6 6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    )
  },
  {
    nome: 'Shields',
    desc: 'Expansões e displays',
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M6 8h.01M6 11h.01M9 8h6M9 11h6"/>
      </svg>
    )
  },
  {
    nome: 'ESP32',
    desc: 'Conectividade IoT',
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/>
      </svg>
    )
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroConteudo}>
        
          <h1 className={styles.titulo}>
            Construa o futuro com as ferramentas certas
          </h1>
          <p className={styles.subtitulo}>
            Encontre os melhores kits de Arduino, Raspberry Pi, sensores e robótica para seus projetos de engenharia.
          </p>
          <div className={styles.botoes}>
            <Link href="/produtos" className={styles.btnPrimario}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              Ver Produtos
            </Link>
            <Link href="/sobre" className={styles.btnSecundario}>
              Sobre o Projeto
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.categorias}>
        <h2 className={styles.secaoTitulo}>Explorar por Categoria</h2>
        <div className={styles.grid}>
          {categorias.map((cat) => (
            <Link key={cat.nome} href={`/produtos?categoria=${encodeURIComponent(cat.nome)}`} className={styles.categoriaCard}>
              <span className={styles.categoriaIcone}>{cat.icone}</span>
              <strong>{cat.nome}</strong>
              <span className={styles.categoriaDesc}>{cat.desc}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}