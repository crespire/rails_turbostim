import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  show() {
    this.element.textContent = "Hello World!"
  }
}
