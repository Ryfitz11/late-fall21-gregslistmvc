export function getHouseForm() {
  return /*html*/`
  <form onsubmit="app.houseController.createHouse()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="bedrooms" class="form-label">Bedrooms</label>
        <input type="number" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedrooms"
          placeholder="#" min="0" max="10" required>
      </div>
      <div>
        <label for="baths" class="form-label">Bathrooms</label>
        <input type="number" class="form-control" name="baths" id="baths" aria-describedby="baths"
          placeholder="#" min="0" max="10" required>
      </div>
      <div>
        <label for="garage" class="form-label">Garages</label>
        <input type="number" class="form-control" name="garage" id="garage" aria-describedby="garage"
          placeholder="#" min="0" max="5" required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">

      <div>
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price..." min='1' required>
      </div>
      <div>
        <label for="hoa" class="form-label">HOA</label>
        <input type="checkbox" name="HOA" id="hoa" aria-describedby="hoa" required>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="imgUrl" class="form-label">Image Url</label>
        <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
          placeholder="Image Url..." required>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea type="text" class="form-control" name="description" id="description"
          aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </form>`
}