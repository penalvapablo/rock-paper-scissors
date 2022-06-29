import './rules.scss'
import { useState } from 'react'
import rulesImg from "../../images/image-rules.svg"
import rulesClose from "../../images/icon-close.svg"

export const Rules = () => {
  const [rules, setRules] = useState<boolean>(false)

  const displayRules = () => {
    setRules(!rules)
  }
  return (
    <>
      <div className={`rules__container ${rules && 'rules__active'}`}>
        <div className='rules__desktopContainer'>
          <p className='rules__title--desktop'>rules</p>
          <img src={rulesClose} alt="close" className='rules__close--desktop' onClick={displayRules} />
        </div>
        <p className='rules__title--mobile'>rules</p>
        <img src={rulesImg} alt="rules" className='rules__img' />
        <img src={rulesClose} alt="close" className='rules__close--mobile' onClick={displayRules} />
      </div>
      <button className="rules__btn" onClick={displayRules}>rules</button>
    </>
  )
}
