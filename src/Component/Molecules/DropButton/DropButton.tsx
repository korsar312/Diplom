import React, {FC} from 'react';
import ButtonStandard from "../../Atoms/ButtonStandard/ButtonStandard";
import styles from './DropButton.module.scss';

interface iDropButton {

}

/**
 * Стандартный Drop Button
 * @param props.extClass - дополнительный CSS класс
 */
const DropButton: FC<iDropButton> = (props) => {
    const {} = props

    return (
        <div className={styles.wrapper}>
            <ButtonStandard click={() => ''}/>
            <div>
                <ButtonStandard click={() => ''}/>
                <ButtonStandard click={() => ''}/>
                <ButtonStandard click={() => ''}/>
            </div>
        </div>
    );
};

export default DropButton;