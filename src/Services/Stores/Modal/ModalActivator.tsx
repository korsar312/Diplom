import ModalSettingUser from "../../../Component/3_Substances/Modal/ModalSettingUser/ModalSettingUser";
import services from "../../Services";
import {observer} from "mobx-react";
import {modals} from "./Modal.interface";

/**
 * Компонент для сохранение состаяния глобальных модальных окон
 */
const ModalActivator = () => {
  const showModal = services.store.modalStore

  const showSettingUser = showModal.getShowModal(modals.EModal.userSetting)

  function closeSettingUser() {
    showModal.setShowModal(modals.EModal.userSetting, false)
  }

  return <>
    <ModalSettingUser isShow={showSettingUser} onClose={closeSettingUser}/>
  </>;
};

export default observer(ModalActivator)