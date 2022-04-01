import {getStringCurrentTime} from "../../Libs/Utils/getStringCurrentTime";
import {rest} from "./RestApi.interface";

class RestApi {
  private URL: string = 'https://jsonplaceholder.typicode.com/'

  /**
   * Логирование
   * @param currentPage страница с которой вызван logAction (main, about ...)
   * @param element элемент, что вызвал logAction (ButtonStandard ...)
   * @param action действие, что вызвало logAction (нажатие, переход ...)
   * @param data важные переменные для logAction (props, arguments ...)
   * @param comment комментарии
   */
  public logAction({currentPage, element, action, data, comment}: rest.TlogAction) {
    const log = Object.entries({currentPage, element, action, comment}).filter(el => el[1])
    log.push(['time', getStringCurrentTime()])

    return console.log(log.map(el => `${el[0]}: ${(el[1])}`))
  }

  /**
   * Вход
   * @param login имя
   * @param password пароль
   * @param callback функция, запускающаяся после ответа сервера
   */

  public login(login: string, password: string, callback?: (isOk?: boolean, error?: any, data?: any) => void) {
    fetch(`${this.URL}posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        callback?.(false, error)
      })
      .then((json) => {
        callback?.(true, '', json)
      })

  }
}

export default new RestApi()