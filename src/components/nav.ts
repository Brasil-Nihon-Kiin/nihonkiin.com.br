export default class BrNhkNav extends HTMLElement {
  static readonly tag: string = "br-nhk-nav";

  private static readonly template: string = `
    <a href="/"><img src="assets/logo.png" /></a>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = BrNhkNav.template;
  }
}
