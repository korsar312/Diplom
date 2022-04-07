import React, {FC, useContext, useRef, useState} from 'react';
import InputStandard from "../../../1_Atoms/InputStandard/InputStandard";
import styles from "./LoginForm.module.scss";
import {language} from "../../../../Services/Stores/Language/Language.interface";
import Text from "../../../0_Basic/Text/Text";
import ButtonStandard from "../../../1_Atoms/ButtonStandard/ButtonStandard";
import services from "../../../../Services/Services";
import {PreloaderContext} from "../../../../App";

interface ILoginForm {
  extClass?: string
  successfulLogin?: () => void
  defaultValue?: TInputValue
  valuesForm?: (val: TInputValue) => void
  isVisibleBtn?: boolean
}

type TInputValue = {
  log: string,
  pass: string,
}

function validate(val: TInputValue) {
  return Boolean(val.log && val.pass)
}

/**
 * Логин форма
 * @param props.extClass - дополнительный CSS класс
 * @param props.successfulLogin - событие при успешном входе
 * @param props.defaultValue - значения формы по умолчанию
 * @param props.valuesForm - текущие значения
 * @param props.isVisibleBtn - показ кнопки вход
 */
const LoginForm: FC<ILoginForm> = (props) => {
  const {extClass, successfulLogin, valuesForm, defaultValue, isVisibleBtn = true} = props

  const inputValue = useRef<TInputValue>({
    log: defaultValue?.log || '',
    pass: defaultValue?.log || '',
  })
  const [isValid, setIsValid] = useState(validate(inputValue.current))
  const [isError, setError] = useState<language.ELanguageKey | ''>('')

  const preloaderContext = useContext(PreloaderContext)

  function setLogin(val: string) {
    inputValue.current.log = val
    validAndCallback()
  }

  function setPassword(val: string) {
    inputValue.current.pass = val
    validAndCallback()
  }

  function validAndCallback() {
    validate(inputValue.current) ? setIsValid(true) : setIsValid(false)
    valuesForm && valuesForm(inputValue.current)
  }

  function clickHandler() {
    preloaderContext.setIsShow(true)
    services.rest.RestApi.login(inputValue.current.log || '', inputValue.current.pass || '', (isOk, error, data) => {
      if (isOk) {
        services.store.usersStore.setCurrentUser = data
        successfulLogin && successfulLogin()
      } else {
        setError(language.ELanguageKey.INVALID_PASSWORD)
      }
      preloaderContext.setIsShow(false)
    })
  }

  return <form className={styles.wrapper}>
    <div className={styles.inputWrapper}>
      <div className={styles.input}>

        <div>
          <Text userStyle={"fat_small"} text={language.ELanguageKey.LOGIN}/>
        </div>

        <InputStandard
          callback={setLogin}
          extClass={`${styles.wrapper} ${extClass}`}
          log={{element: LoginForm.name}}
        />

      </div>
      <div className={styles.input}>

        <div className={styles.aboveInput}>
          <div><Text userStyle={"fat_small"} text={language.ELanguageKey.PASSWORD}/></div>
          <div><Text userStyle={"fat_small"} userColor={"skyblue"}
                     text={language.ELanguageKey.FORGET_PASSWORD_DES_KA}/>
          </div>
        </div>

        <InputStandard
          callback={setPassword}
          extClass={`${styles.wrapper} ${extClass}`}
          log={{element: LoginForm.name}}
        />

      </div>
      {isError && <div><Text userColor={"red"} text={isError}/></div>}
    </div>

    {isVisibleBtn && <div className={styles.btn}>
        <ButtonStandard
            textStyle={'fat_small'}
            color={"black"}
            click={clickHandler}
            title={language.ELanguageKey.SING_IN}
            log={{element: LoginForm.name}}
            isDisabled={!isValid}
        />
    </div>}
  </form>

};

export default LoginForm;