import React, {FC, useContext, useEffect} from 'react';
import styles from './ProductWidget.module.scss'
import WidgetWrapper from "../../../1_Atoms/WidgetWrapper/WidgetWrapper";
import {language} from "../../../../Services/Stores/Language/Language.interface";
import services from "../../../../Services/Services";
import WidgetBody, {TUnitWidgetTable} from "../../../2_Molecules/WidgetBody/WidgetBody";
import {PreloaderContext} from "../../../../App";
import WidgetHead from "../../../2_Molecules/WidgetHead/WidgetHead";
import Text from "../../../0_Basic/Text/Text";
import {observer} from "mobx-react";
import {product} from "../../../../Services/Stores/Products/Products.interface";

interface IProductWidget {
  extClass?: string
}


/**
 * Виджет продукта
 * @param props.extClass - дополнительный CSS класс
 */
const ProductWidget: FC<IProductWidget> = (props) => {
  const {extClass = ''} = props

  const showPreloader = useContext(PreloaderContext)
  const products = services.store.productsStore.getProducts

  useEffect(() => {


    if (!products) {
      showPreloader.setIsShow(true)

      services.rest.RestApi.getProduct((isOk, error, data) => {
        if (isOk) services.store.productsStore.setProducts = data
        showPreloader.setIsShow(false)
      })
    }
  }, [])

  const createPropertyForTable: TUnitWidgetTable = {
    head: [
      language.ELanguageKey.PRODUCTS,
      language.ELanguageKey.PRICE,
      language.ELanguageKey.CONVENTIONAL_UNIT,
    ],
    body: products?.map(el => ({
      id: el.id,
      content: [
        <Text key={el.id + el.name} text={el.name}/>,

        <>{el.price.map(price => (
          <div key={price.price + price.currency}>
            <Text text={`${price.price} ${product.OCurrencyIcon[price.currency]}`}/>
          </div>
        ))}</>,

        <Text key={el.id + el.conventionalUnit} text={el.conventionalUnit}/>,
      ]
    })) || [{content: [<>Не найденно</>], id: ''}]
  }

  return (
    <WidgetWrapper>
      <div className={`${styles.wrapper} ${extClass}`}>
        <WidgetHead title={language.ELanguageKey.PRODUCTS}/>
        <WidgetBody table={createPropertyForTable}/>
      </div>

    </WidgetWrapper>
  )
};

export default observer(ProductWidget);