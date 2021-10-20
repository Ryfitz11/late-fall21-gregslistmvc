import { HouseController } from "./Controllers/HouseController.js"
import { CarsController } from "./Controllers/CarsController.js"
// import { JobsController } from "./Controllers/JobsController.js"

class App {
  carsController = new CarsController()
  houseController = new HouseController()
  // jobsController = new JobsController()
}

window["app"] = new App()
