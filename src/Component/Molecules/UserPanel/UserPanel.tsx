import React, {FC} from 'react';
import styles from "./UserPanel.module.scss"
import {ReactComponent as IconAvatar} from "./../../../Assets/icon/icon_avatar.svg";
import {ReactComponent as IconSetting} from "./../../../Assets/icon/icon_setting.svg";
import ButtonStandard from "../../Atoms/ButtonStandard/ButtonStandard";
import Avatar from "../../Atoms/Avatar/Avatar";

interface IUserPanel {
  click?: () => void
  person?: TPerson
}

//TODO когда начну рест делать нужно перекинуть это в Services а ту фигню ниже вообще удалить а то что сверху убрать ?
type TPerson = {
  name: string
  surname: string
  position?: string
  image?: any
  isOnline?: boolean
}

const persona: TPerson = {
  image: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg',
  isOnline: true,
  position: 'Старший менеджер',
  surname: 'Мразь',
  name: 'Иван',
}

/**
 * Панель пользователя
 * @param props.click - функция onClick по панели
 * @param props.person - объект с данными человека
 */
const UserPanel: FC<IUserPanel> = (props) => {
  const {click, person = persona} = props

  return (
    <div className={styles.wrapper}>
      <Avatar>
        {person.image ? <img className={styles.image} src={person.image} alt='Аватар'/> : <IconAvatar/>}
      </Avatar>

      <div className={styles.infoWrapper}>
        <div className={styles.title}>{`${person.name} ${person.surname}`}</div>
        <div className={styles.subtitle}>{person.position}</div>
        {person.isOnline && <div className={styles.status}>• online</div>}
      </div>
      {click && <ButtonStandard
          isNoPadding={true}
          extClass={styles.btn}
          click={click}
          iconLeft={{icon: <IconSetting/>}}
          log={{element: UserPanel.name}}/>}
    </div>
  );
};

export default UserPanel;