export default class BrNhkNav extends HTMLElement {
  static readonly tag: string = "br-nhk-nav";

  private static readonly template: string = `
    <a href="/">
      <img src="/midia/logo.png" alt="Logo" />
    </a>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = BrNhkNav.template;
  }
}
