import {rest} from "./RestApi.interface";
import {users} from "../../Stores/Users/Users.interface";
import services from "../../Services";
import {product} from "../../Stores/Products/Products.interface";

export class RestApi {
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
    log.push(['time', services.util.getStringCurrentTime()])

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
        if (login !== '11' || password !== '11') {
          throw "errorAuthentication"
        }

        const persona: users.TPerson = {
          id: '123213',
          accessory: '34',
          image: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg',
          isOnline: true,
          position: 'Старший менеджер',
          surname: 'Мразь',
          name: 'Иван',
        }

        callback?.(true, '', persona)
      })
      .catch((error) => {
        callback?.(false, error)
      })
  }

  public getProduct(callback?: (isOk?: boolean, error?: any, data?: any) => void) {
    fetch(`${this.URL}posts`)
      .then((response) => response.json())
      .catch((error) => {
        callback?.(false, error)
      })
      .then((json) => {
        const product: product.TProduct[] = [
          {
            name: 'носки',
            analogue: [],
            conventionalUnit: '1л',
            id: '123',
            company: [],
            industry: 'Мануфактурия',
            price: 12,
            property: [{sad: 'asd'}]
          },
          {
            name: 'носки',
            analogue: [],
            conventionalUnit: '1л',
            id: '123',
            company: [],
            industry: 'Мануфактурия',
            price: 12,
            property: [{sad: 'asd'}]
          }]

        callback?.(true, '', product)
      })
      .catch((error) => {
        callback?.(false, error)
      })
  }
}