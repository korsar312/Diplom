import {getStringCurrentTime} from "../../Libs/Utils/Utils";

type  TlogAction = {
    currentPage?: string
    element?: string,
    action?: string,
    data?: any,
    comment?: string,
}

class RestApi {

    /**
     * Логирование
     * @param currentPage страница с которой вызван logAction (main, about ...)
     * @param element элемент, что вызвал logAction (ButtonStandard ...)
     * @param action действие, что вызвало logAction (нажатие, переход ...)
     * @param data важные переменные для logAction (props, arguments ...)
     * @param comment комментарии
     */
    public logAction({currentPage, element, action, data, comment}: TlogAction) {
        const log = Object.entries({currentPage, element, action, comment}).filter(el => el[1])
        const date = getStringCurrentTime()
        log.push(['time', date])

        return console.log(log.map(el => `${el[0]}: ${(el[1])}`))
    }

}

export default new RestApi()