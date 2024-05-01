import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["comment"];

  show() {
    if (this.elt.style.display === "flex"){
      this.elt.style.display = "none"
    }else{
      this.elt.style.display = "flex"
    }
  }

  get elt() {
    return this.commentTarget;
  }
}
