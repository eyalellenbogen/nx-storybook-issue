import { Component } from "@angular/core";
import { Meta } from "@storybook/angular";

@Component({
    selector: "lib-mycomp",
    template: `<h1>Hello </h1>`,
    standalone: true,
})
export class MyComponent { }

const meta: Meta<MyComponent> = {
    title: "My Component",
    component: MyComponent,
    tags: ["autodocs"],
};

export default meta;

export const Primary = {}

