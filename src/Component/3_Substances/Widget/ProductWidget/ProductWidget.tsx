import React, {FC, useContext, useEffect, useState} from 'react';
import styles from './ProductWidget.module.scss'
import WidgetWrapper from "../../../1_Atoms/WidgetWrapper/WidgetWrapper";
import {language} from "../../../../Services/Stores/Language/Language.interface";
import services from "../../../../Services/Services";
import {product} from "../../../../Services/Stores/Products/Products.interface";
import WidgetBody, {TUnitWidgetTable} from "../../../2_Molecules/WidgetBody/WidgetBody";
import {PreloaderContext} from "../../../../App";
import WidgetHead from "../../../2_Molecules/WidgetHead/WidgetHead";

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
  const [products, setProducts] = useState<product.TProduct[] | null>(null)

  const createPropertyForTable: TUnitWidgetTable = {
    head: [language.ELanguageKey.ONLINE, language.ELanguageKey.SEARCH, language.ELanguageKey.SEARCH, language.ELanguageKey.SEARCH],
    body: products?.map(el => ({
      content: [<>{el.name}</>, <>{el.id}</>, <>{el.id}</>, <>{el.id}</>]
    })) || [{content: [<></>]}]
  }

  useEffect(() => {
    const productTemp = services.store.productsStore.getProducts

    if (productTemp) {
      setProducts(productTemp)
    } else {
      showPreloader.setIsShow(true)

      services.rest.RestApi.getProduct((isOk, error, data) => {
        if (isOk) services.store.productsStore.setProducts = data
        showPreloader.setIsShow(false)
      })
    }

  }, [])

  return (
    <WidgetWrapper>
      <div className={`${styles.wrapper} ${extClass}`}>
        <WidgetHead title={language.ELanguageKey.PRODUCTS}/>
        <WidgetBody table={createPropertyForTable}/>
      </div>

    </WidgetWrapper>
  )
};

export default ProductWidget;