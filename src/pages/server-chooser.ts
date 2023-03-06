import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';

@customElement('server-chooser')
export class ServerChooser extends LitElement {

	render() {
		return html`
		  <app-header title="Server Chooser"></app-header>
		  <main>
			<img src="./assets/icons/android-icon-192x192.png"></a>
			<sl-input label="TOPdesk domain" help-text="For example: lynx.topdeskacc.net"></sl-input>
			<sl-button @click=${this.handleClick}>OK</sl-button>
		  </main>
		`;
	}

	handleClick() {
		const input = this.querySelector("sl-input");
		console.log(input);
		window.location.replace("https://lynx.topdeskacc.net/services/navigation");
	}
}