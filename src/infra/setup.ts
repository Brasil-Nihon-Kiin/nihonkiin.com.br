import BrNhkNav from "../components/nav";

export default class Setup {
  constructor() {
    this.define();
  }

  private define = (): void => customElements.define(BrNhkNav.tag, BrNhkNav);
}
