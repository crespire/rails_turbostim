import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['source', 'display']
  static classes = ['normal', 'warn', 'error']
  static values = { max: Number }

  initialize() {
    this.update()
  }

  update() {
    let length = this.sourceTarget.value.length
    this.displayTarget.innerHTML = `${length}/${this.maxValue}`
    this.updateStyle(length)
  }

  updateStyle(length) {
    console.log(`Style Update got ${length}`)
    if (length > (this.maxValue - 30) && length <= this.maxValue) {
      this.displayTarget.classList.remove('counter--normal', 'counter--error')
      this.displayTarget.classList.add('counter--warn')
    } else if ( length > this.maxValue) {
      this.displayTarget.classList.remove('counter--normal', 'counter--warn')
      this.displayTarget.classList.add('counter--error')
    } else {
      this.displayTarget.classList.remove('counter--warn', 'counter--error')
      this.displayTarget.classList.add('counter--normal')
    }
  }
}
