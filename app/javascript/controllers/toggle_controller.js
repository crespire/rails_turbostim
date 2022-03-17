import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['data']
  static classes = ['hide']

  flip() {
    this.dataTarget.classList.toggle(this.hideClass)
  }
}
