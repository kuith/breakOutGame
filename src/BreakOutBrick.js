import { LitElement, html, css } from 'lit-element';

export class BreakOutBrick extends LitElement {
  static get properties() {
    return {
      x: { type: Number },
      y: { type: Number },
      w: { type: Number },
      h: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: absolute;
        box-sizing: border-box;
        background-color: green;
        left: var(--break-out-brick-left, 0);
        top: var(--break-out-brick-top, 0);
        width: var(--break-out-brick-width, 0);
        height: var(--break-out-brick-height, 0);
      }
    `;
  }

  render() {
    return html`
      <style>
        :host {
          --break-out-brick-left: ${this.x}px;
          --break-out-brick-top: ${this.y}px;
          --break-out-brick-width: ${this.w}px;
          --break-out-brick-height: ${this.h}px;
        }
      </style>
    `;
  }
}
