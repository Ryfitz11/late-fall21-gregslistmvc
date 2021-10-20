import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

class HouseService {
  deleteHouse(id) {
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
  }
  createHouse(houseData) {
    const house = new House(houseData)
    ProxyState.houses = [...ProxyState.houses, house]
  }
}

export const houseService = new HouseService()