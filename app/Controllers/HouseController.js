import { getHouseForm } from "../Forms/Houseform.js"
import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

function _drawHouses() {
  const houses = ProxyState.houses
  let template = ''
  // loop through the houses
  houses.forEach(house => template += house.Template)
  // add to page
  document.getElementById('listings').innerHTML = template
}

export class HouseController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  createHouse() {
    window.event.preventDefault()
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const formElem = window.event.target
    const houseData = {
      bedrooms: formElem.bedrooms.value,
      baths: formElem.baths.value,
      garage: formElem.garage.value,
      price: formElem.price.value,
      hoa: formElem.hoa.value,
      description: formElem.description.value,
      imgUrl: formElem.imgUrl.value
    }

    houseService.createHouse(houseData)

    // clear the form
    formElem.reset()
    // Close the modal
    // @ts-ignore
    bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
  }
  deleteHouse(id) {
    houseService.deleteHouse(id)
  }
  showHouses() {
    _drawHouses()
    document.getElementById('form-button').classList.remove('visually-hidden')
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }
}