import React, { FC, useContext, useRef, useState } from 'react';
import InputStandard from '../../../1_Atoms/InputStandard/InputStandard';
import styles from './LoginForm.module.scss';
import { language } from '../../../../Logic/Modules/Language/Language.interface';
import Text from '../../../0_Basic/Text/Text';
import ButtonStandard from '../../../1_Atoms/ButtonStandard/ButtonStandard';
import { PreloaderContext } from '../../../../App';
import { typesUtils } from '../../../../Logic/Libs/Utils/TypesUtils';
import Switcher from '../../../1_Atoms/Switcher/Switcher';
import modules from '../../../../Logic/Modules/Modules';

interface ILoginForm {
	extClass?: string;
	successfulLogin?: () => void;
	defaultValue?: TInputValue;
	valuesForm?: (val: TInputValue) => void;
	isVisibleBtn?: boolean;
	isVisibleCheckBox?: boolean;
}

type TInputValue = {
	log: string;
	pass: string;
	autoSingIn: boolean;
};

function validate(val: TInputValue) {
	return Boolean(val.log && val.pass);
}

/**
 * Логин форма
 * @param props.extClass - дополнительный CSS класс
 * @param props.successfulLogin - событие при успешном входе
 * @param props.defaultValue - значения формы по умолчанию
 * @param props.valuesForm - текущие значения
 * @param props.isVisibleBtn - показ кнопки вход
 * @param props.isVisibleCheckBox - показ чекбокса с запоминанием пользователя
 */
const LoginForm: FC<ILoginForm> = (props) => {
	const {
		extClass = '',
		successfulLogin,
		valuesForm,
		defaultValue,
		isVisibleBtn = true,
		isVisibleCheckBox = true,
	} = props;

	const inputValue = useRef<TInputValue>({
		log: defaultValue?.log || '',
		pass: defaultValue?.log || '',
		autoSingIn: false,
	});
	const [isValid, setIsValid] = useState(validate(inputValue.current));
	const [isError, setError] = useState<language.TAllLanguageWord | ''>('');

	const preloaderContext = useContext(PreloaderContext);

	function setLoginData(userInput: typesUtils.TChangeObject<TInputValue>) {
		inputValue.current = { ...inputValue.current, ...userInput };
		validAndCallback();
	}

	function validAndCallback() {
		validate(inputValue.current) ? setIsValid(true) : setIsValid(false);
		valuesForm && valuesForm(inputValue.current);
	}

	function clickHandler() {
		preloaderContext.setIsShow(true);
		modules.users.service
			.Login(inputValue.current.log || '', inputValue.current.pass || '')
			.then(() => {
				if (inputValue.current.autoSingIn) {
					modules.users.service.EnabledAutoSingIn({
						login: inputValue.current.log,
						password: inputValue.current.pass,
					});
				}
				successfulLogin && successfulLogin();
			})
			.catch(() => {
				setError(language.ELanguageSimpleWord.INVALID_PASSWORD);
			})

			.finally(() => {
				preloaderContext.setIsShow(false);
			});
	}

	return (
		<form className={styles.wrapper}>
			<div className={styles.inputWrapper}>
				<div className={styles.input}>
					<div>
						<Text userStyle={'fat_small'} text={language.ELanguageSimpleWord.LOGIN} />
					</div>

					<InputStandard
						callback={(value) => setLoginData({ log: value })}
						extClass={`${styles.wrapper} ${extClass}`}
						log={{ element: LoginForm.name }}
						color={'wight'}
					/>
				</div>
				<div className={styles.input}>
					<div className={styles.aboveInput}>
						<div>
							<Text userStyle={'fat_small'} text={language.ELanguageSimpleWord.PASSWORD} />
						</div>
						<div>
							<Text
								userStyle={'fat_small'}
								userColor={'skyblue'}
								text={language.ELanguageSimpleWord.FORGET_PASSWORD_DES_KA}
							/>
						</div>
					</div>

					<InputStandard
						callback={(value) => setLoginData({ pass: value })}
						extClass={`${styles.wrapper} ${extClass}`}
						log={{ element: LoginForm.name }}
						color={'wight'}
					/>
				</div>

				{isVisibleCheckBox && (
					<div className={styles.rememberWrapper}>
						<Text
							userStyle={'fat_small'}
							userColor={'grey'}
							text={language.ELanguageSimpleWord.REMEMBER_USER_KA}
						/>
						<Switcher
							click={(value) => setLoginData({ autoSingIn: value })}
							defaultValue={inputValue.current.autoSingIn}
						/>
					</div>
				)}

				{isError && (
					<div>
						<Text userColor={'red'} text={isError} />
					</div>
				)}
			</div>

			{isVisibleBtn && (
				<div className={styles.btn}>
					<ButtonStandard
						color={'black'}
						click={clickHandler}
						log={{ element: LoginForm.name }}
						isDisabled={!isValid}
						titleObj={{ text: language.ELanguageSimpleWord.SING_IN, userStyle: 'fat_small' }}
					/>
				</div>
			)}
		</form>
	);
};

export default LoginForm;
