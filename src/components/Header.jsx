import styles from './Header.module.css';

const Header = ({navegateInicio, navegatePrevencoes, navegateAtendimento}) => {


  return (
    <header>
      <a href="#">
        <h1>Covid-19 Brasil</h1>
      </a>
      <nav>
        <div>
          <ul className={styles.navbar}>
            <li>
              <a onClick={navegateInicio} className='bold'>Início</a>
            </li>
            <li>
              <a onClick={navegatePrevencoes} className='bold'>Prevenções</a>
            </li>
            <li>
              <a onClick={navegateAtendimento} className='bold'>Atendimento profissional</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header