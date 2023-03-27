declare module "underscore" {
  export const name: string

  // export function join(...args: any[]): string
  export function first<T>(args: T[]): T
}


declare const whyName: string
declare const whyAge: number
declare const whyHeight: number

declare function foo(name: string, age: number): void

declare class Person {
  constructor(public name: string, public age: number)
}

// 声明文件
declare module "*.jpg"
declare module "*.png"
declare module "*.jpeg"
declare module "*.svg"

// 声明.vue文件模块
declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent
  export default component
}

// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): void
}
