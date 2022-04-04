import React, {FC} from 'react';
import styles from "./UserPanel.module.scss"
import {ReactComponent as IconAvatar} from "./../../../Assets/icon/icon_avatar.svg";
import {ReactComponent as IconSetting} from "./../../../Assets/icon/icon_setting.svg";
import ButtonStandard from "../../1_Atoms/ButtonStandard/ButtonStandard";
import Avatar from "../../1_Atoms/Avatar/Avatar";
import Text from "../../0_Basic/Text/Text";
import {language} from "../../../Services/Stores/Language/Language.interface";
import {users} from "../../../Services/Stores/Users/Users.interface";

interface IUserPanel {
  click?: () => void
  person?: users.TPerson | null
}

//TODO когда начну рест делать нужно перекинуть это в Services а ту фигню ниже вообще удалить а то что сверху убрать ?


/**
 * Панель пользователя
 * @param props.click - функция onClick по панели
 * @param props.person - объект с данными человека
 */
const UserPanel: FC<IUserPanel> = (props) => {
  const {click, person} = props

  return (
    <div className={styles.wrapper}>
      <Avatar>
        {person?.image ? <img className={styles.image} src={person.image} alt='Аватар'/> : <IconAvatar/>}
      </Avatar>

      <div className={styles.infoWrapper}>
        <div className={styles.title}>{`${person?.name} ${person?.surname}`}</div>
        <div className={styles.subtitle}>{person?.position}</div>
        {person?.isOnline && <div className={styles.status}><Text userStyle={"normal_small"} userColor={"green"}
                                                                  text={language.ELanguageKey.ONLINE}/></div>}
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