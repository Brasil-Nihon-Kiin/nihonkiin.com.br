import BrNhkNav from "../ui/nav";

export default class Setup {
  constructor() {
    this.define();
  }

  private define = (): void => customElements.define(BrNhkNav.tag, BrNhkNav);
}
