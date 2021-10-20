import { generateId } from "../Utils/generateId.js"
export class House {
  constructor(data) {
    this.id = generateId()
    this.bedrooms = data.bedrooms
    this.baths = data.baths
    this.garage = data.garage
    this.price = data.price
    this.hoa = data.hoa
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
  get Template() {
    return `
    <div class="col-md-3 mt-3">
    <div class="bg-light elevation-1 rounded">
    <img width="100%" class="car-img rounded-top" src="${this.imgUrl}" alt="car image">
    <div class="p-3">
    <p><b>${this.bedrooms} Bedrooms - ${this.baths} baths - ${this.garage} Car Garage</b></p>
    <p>${this.description}</p>
    <div class="d-flex align-items-center">
    <p class="m-0"><em>$${this.price}</em></p>
    </div>
    <div class="text-end">
    <button title="delete car" class='btn btn-danger justify-self-end' onclick="app.houseController.deleteHouse('${this.id}')"><i class='mdi mdi-delete'></i></button>
    </div>
    </div>
    </div>
    `

  }
}

