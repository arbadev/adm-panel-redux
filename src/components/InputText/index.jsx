import React from 'react'
import styles from './inputText.css'


const InputText = (props) => {
  return (
    <div>
      <form className={styles.form} onSubmit={props.onSendText}>
        <textarea className={styles.text} name="text" />
        <div className={styles.buttons}>
          <button className={styles.close} onClick={props.onCloseText}> Cerrar </button>
          <button className={styles.send} type="submit"> Enviar </button>
        </div>
      </form>
    </div>
  )
}

InputText.propTypes = {
  onSendText: React.PropTypes.func,
  onCloseText: React.PropTypes.func,
}

export default InputText
