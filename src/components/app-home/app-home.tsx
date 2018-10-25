import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true
})
export class AppHome {
  testIconInfo() {
    let aeiconComponent = document.querySelector("ae-icon-info");
    aeiconComponent.show("Show some ae-icon info!", "danger", 2000);
  }

  render() {
    return (
      <div class="app-home">
        <p>
          adaept Stencil app starter. Docs for component creation are at &nbsp;
          <a href="https://stenciljs.com">stenciljs.com</a>
        </p>

        <ion-button onClick={() => this.testIconInfo()}>Icon Info</ion-button>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
