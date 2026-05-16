import styles from './page.module.css'

export default function Sobre() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <span className={styles.badge}>⚡ Projeto Acadêmico</span>
        <h1 className={styles.titulo}>Sobre o VoltLab</h1>
        <p className={styles.subtitulo}>
          Catálogo interativo de kits de robótica desenvolvido como projeto da disciplina de Programação Web I.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cor-primaria)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <h3>Tecnologias</h3>
          <p>Desenvolvido com Next.js, React e CSS Modules, seguindo boas práticas de componentização e gerenciamento de estado.</p>
        </div>
        <div className={styles.card}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cor-primaria)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <h3>Equipe</h3>
          <p>Projeto desenvolvido por Gabryel Albuquerque, Kauan Luiz e Adrian Rezende estudantes do 5° período de Engenharia de Software do Centro Universitário Alfredo Nasser — UNIFAN.</p>
        </div>
        <div className={styles.card}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cor-primaria)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          <h3>Disciplina</h3>
          <p>Programação Web I — Professor Adriano Baião. Turma ESN-5, avaliação P2 com foco em Next.js e React.</p>
        </div>
      </div>

      <div className={styles.stack}>
        <h2 className={styles.stackTitulo}>Stack Utilizada</h2>
        <div className={styles.tags}>
          {['Next.js', 'React', 'CSS Modules', 'App Router', 'useState', 'useContext', 'Context API', 'File-based Routing', 'Git', 'Vercel'].map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}