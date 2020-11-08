/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';

export class BreakOutGame extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      author: { type: String },
      gameWidth: { type: Number, attribute: 'game-width' },
      gameHeight: { type: Number, attribute: 'game-height' },

      bricks: { type: Array },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.subtitle = '';
    this.author = '';
    this.gameWith = 0;
    this.gameHeight = 0;
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        background-color: black;
        position: relative;
      }

      .app-footer {
        font-size: 8px;
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }

      h1 {
        font-size: 24px;
      }

      p {
        font-size: 16px;
      }
    `;
  }

  get _headerTemplate() {
    return html`
      <header>
        <h1>${this.title}</h1>
        <p>${this.subtitle}</p>
      </header>
    `;
  }

  get _gameTemplate() {
    const gameStyle = {
      width: `${this.gameWidth}px`,
      height: `${this.gameHeight}px`,
    };
    return html` <main style=${styleMap(gameStyle)}>
      ${this.bricks.map(brick => this._renderBrick(brick))}
    </main>`;
  }

  get _footerTemplate() {
    return html` <p class="app-footer">${this.author}</p> `;
  }

  _renderBrick(brick) {
    return html`
      <break-out-brick
        id="${brick.id}"
        x="${brick.x}"
        y="${brick.y}"
        w="${brick.w}"
        h="${brick.h}"
      ></break-out-brick>
    `;
  }

  render() {
    return html`
      ${this._headerTemplate} ${this._gameTemplate} ${this._footerTemplate}
    `;
  }
}
