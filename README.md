# Instructions

This is a simple repo following along to this [video tutorial](https://www.youtube.com/watch?v=BCg4U1FzODs) to learn the basics of Typescript.

### Getting started:

`git clone https://github.com/tomcarmichael/typescript-crash-course.git`

`yarn install`

To run the compiler, watching for changes in the `./src` dir and automatically re-compiling when changes are detected, execute:

`tsc --watch`

### Structure

`tsconfig.json` specifies that all `.ts` files in the `./src` directory are compiled to equivalently named `.js ` files according to the `es2016` version of Javascript within the `./dist` directory with the lines: 

`"rootDir": "./src"` 
and 
`"outDir": "./dist"`

In the case of this repo, all code is in `./src/index.ts`


