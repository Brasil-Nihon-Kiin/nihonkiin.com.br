export default class BrNhkNav extends HTMLElement {
  static readonly tag: string = "br-nhk-nav";

  private static readonly template: string = `
    <a href="/">
      <h1>BRASIL NIHON KIIN</h1>
    </a>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = BrNhkNav.template;
  }
}
