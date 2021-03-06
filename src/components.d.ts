/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AsInputWrapper {
    'error': string;
    'hint': string;
    'label': string;
  }
  interface AsInputWrapperAttributes extends StencilHTMLAttributes {
    'error'?: string;
    'hint'?: string;
    'label'?: string;
  }

  interface AsInput {
    'error': string;
    'hint': string;
    'label': string;
    'name': string;
    'value': string;
  }
  interface AsInputAttributes extends StencilHTMLAttributes {
    'error'?: string;
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AsInputWrapper': Components.AsInputWrapper;
    'AsInput': Components.AsInput;
  }

  interface StencilIntrinsicElements {
    'as-input-wrapper': Components.AsInputWrapperAttributes;
    'as-input': Components.AsInputAttributes;
  }


  interface HTMLAsInputWrapperElement extends Components.AsInputWrapper, HTMLStencilElement {}
  var HTMLAsInputWrapperElement: {
    prototype: HTMLAsInputWrapperElement;
    new (): HTMLAsInputWrapperElement;
  };

  interface HTMLAsInputElement extends Components.AsInput, HTMLStencilElement {}
  var HTMLAsInputElement: {
    prototype: HTMLAsInputElement;
    new (): HTMLAsInputElement;
  };

  interface HTMLElementTagNameMap {
    'as-input-wrapper': HTMLAsInputWrapperElement
    'as-input': HTMLAsInputElement
  }

  interface ElementTagNameMap {
    'as-input-wrapper': HTMLAsInputWrapperElement;
    'as-input': HTMLAsInputElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
