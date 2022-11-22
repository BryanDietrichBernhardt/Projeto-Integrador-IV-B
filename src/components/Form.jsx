import { useState } from 'react'
import styles from './Form.module.css'

const Form = () => {

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [observations, setObservations] = useState('');
  const [symptoms, setSymptoms] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulário enviado!\n${name} - ${cpf}\nVocê receberá um retorno em breve.`)
    setName('')
    setEmail('')
    setCpf('')
    setPhone('')
    setAge('')
    setObservations('')
  }

  const handleCpf = (e) => {
    if (isNaN(e.target.value) || e.target.value.length > 11) {
      const value = e.target.value.slice(0, -1)
      setCpf(value)
    }
    else {
      setCpf(e.target.value)
    }
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value.toLowerCase())
  }

  const handleAge = (e) => {
    if (isNaN(e.target.value) || e.target.value > 125) {
      const value = e.target.value.slice(0, -1)
      setAge(value)
    }
    else {
      setAge(e.target.value)
    }
  }

  const handleSymptoms = (e) => {
    setSymptoms(e.target.value)
  }

  const handleFruitChange = (e) => {
    setSymptoms('')
  }

  // Formatar telefone
  function mask(e) {
    setTimeout(function() {
      var v = mphone(e.target.value);
      if (v != e.target.value) {
        e.target.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.toString().replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.pages_group}>
        <div className={styles.form_page}>
          <label>
            <span>Nome Completo:</span>
            <input type="text" name="name" placeholder='Digite seu nome' onChange={(e) => {setName(e.target.value)}} value={name} required />
          </label>
          <div className={styles.input_group}>
            <label>
              <span>CPF:</span>
              <input type="cpf" name='cpf' placeholder='Apenas números' onChange={handleCpf} value={cpf} required />
            </label>
            <label>
              <span>Telefone:</span>
              <input type="text" id="phone" name="phone" placeholder='(54) 92222-2222' onKeyPress={mask} onBlur={mphone} onChange={handlePhone} value={phone} length={11} required />
            </label>
          </div>
          <div className={styles.input_group}>
            <label>
              <span>E-mail:</span>
              <input type="email" name="email" placeholder='Digite seu nome' onChange={handleEmail} value={email} required />
            </label>
            <label>
              <span>Idade:</span>
              <input type="number" name="age" placeholder='Digite sua idade' min={0} max={125} onChange={handleAge} value={age} required />
            </label>
          </div>
          <label>
            <span>Observações:</span>
            <textarea name="observacoes" placeholder='Observações' onChange={(e) => setObservations(e.target.value)} value={observations}></textarea>
          </label>
          <p>Procure atendimento médico imediatamente se apresentar entomas graves.</p>
          <p>Sempre ligue antes de ir ao médico, posto de saúde, clínicas ou hospitais.</p>
          <p>Pessoas saudáveis que apresentarem os sintomas leves devem acompanhar a situação em casa.</p>
          <p>Em média, os sintomos aparecem cinco ou seis dias após a infeção pelo vírus. No entanto, eles também podem levar até 14 dias para se manifestarem.</p>
        </div>
        <div className={styles.form_page}>
          <label>
            <span>Sintomas comuns:</span>
            <div className={styles.checkbox_group}>
              <input
                onChange="{handleFruitChange}"
                type="checkbox"
                name="symptoms"
                value="Febre"
              />Febre
            </div>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Tosse"
              />Tosse
            </div>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Cansaço"
              />Cansaço
            </div>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Perda de paladar ou olfato"
              />Perda de paladar ou olfato
            </div>
          </label>
          <label>
            <span>Sintomas menos comuns:</span>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Febre"
              />Febre
            </div>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Tosse"
              />Tosse
            </div>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Cansaço"
              />Cansaço
            </div>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Perda de paladar ou olfato"
              />Perda de paladar ou olfato
            </div>
          </label>
          <label>
            <span>Sintomas graves:</span>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Febre"
              />Febre
            </div>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Tosse"
              />Tosse
            </div>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Cansaço"
              />Cansaço
            </div>
            <div className={styles.checkbox_group}>
              <input
                onChange={handleFruitChange}
                type="checkbox"
                name="symptoms"
                value="Perda de paladar ou olfato"
              />Perda de paladar ou olfato
            </div>
          </label>
          <p className='bold'>Contato urgência: <a href="tel:5155553434">(54) 5555-3434</a></p>
          <p className='bold'>Atendimento profisional: <a href="tel:5466663434">(54) 6666-3434</a></p>
        </div>
      </div>
      <div className={styles.buttons}>
        <div>
          <input className={styles.button} onClick={() => {setEmail(''); setName('');}} type="button" value="Cancelar" />
          <input className={styles.button} type="submit" value="Enviar" />
        </div>
      </div>
    </form>
  )
}

export default Form