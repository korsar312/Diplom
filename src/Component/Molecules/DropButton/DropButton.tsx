import React, {FC, useState} from 'react';
import ButtonStandard from "../../Atoms/ButtonStandard/ButtonStandard";
import styles from './DropButton.module.scss';
import {RequireOnlyOne} from "../../../Libs/Types/RequireOnlyOne";
import {ReactComponent as IconArrow} from "../../../Assets/icon/icon_arrow.svg";

interface iDropButton {
    btnList: TNavigateList
    extClass?: string
}

type TBasePropNavigateList = {
    id: string;
    name: string;
    leftImg?: JSX.Element;
    click?: () => void;
    children?: TNavigateList[];
}

export type TNavigateList = RequireOnlyOne<TBasePropNavigateList, 'children' | 'click'>

/**
 * Стандартный Drop Button с рекурсией
 * @param props.btnList - кнопка с дочерними кнопками
 * @param props.extClass - дополнительный CSS класс
 */
const DropButton: FC<iDropButton> = (props) => {
    const {btnList, extClass = ''} = props

    const [isShowListBtn, setIsShowListBtn] = useState(false)

    function recursRenderButton(btn: TNavigateList) {
        if (btn.click) {
            return <ButtonStandard
                extClass={`${styles.btn}`}
                title={btn.name}
                click={btn.click}
                log={{element: DropButton.name}}
                iconLeft={btn.leftImg}
            />

        } else if (btn.children) {
            return (
                <>
                    <ButtonStandard
                        extClass={`${styles.btn} ${isShowListBtn ? styles.headBtn : ''}`}
                        title={btn.name}
                        click={() => setIsShowListBtn((val) => !val)}
                        log={{element: DropButton.name}}
                        iconRight={<span
                            className={`${styles.svgArrow} ${isShowListBtn ? styles.svgActive : ''}`}><IconArrow/></span>}
                        iconLeft={btn.leftImg}
                        color={isShowListBtn ? "blue" : undefined}
                    />

                    <div className={`${styles.listBtn} ${isShowListBtn ? styles.dropBtnOn : styles.dropBtnOff}`}>
                        {btn.children.map(innerBtn => (
                            <DropButton
                                key={btn.id}
                                btnList={innerBtn}
                                extClass={`${styles.bodyBtn} ${styles.bodyBtnOn} ${extClass}`}
                            />
                        ))}
                    </div>
                </>
            )
        }
    }

    return (
        <div className={`${styles.wrapper}  ${extClass}`}>
            {recursRenderButton(btnList)}
        </div>
    );
};

export default DropButton;