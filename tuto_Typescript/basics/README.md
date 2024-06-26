# Usage of typescript in web front-end development
## Getting Started with TypeScript

Let's dive into TypeScript with a simple example. Open the `src/app.ts` file in your project directory. This file contains TypeScript code demonstrating various features of the language.

```typescript
const compteur = document.querySelector("#compteur") as HTMLButtonElement
let i = 0

const increment = (e : Event) =>{
    e.preventDefault()
    i++
    compteur.querySelector('span').innerText = i.toString()
}

function printId(id :string | number){
    if(typeof id === 'number'){
        console.log((id *3).toString())
    }else{
        console.log(id.toUpperCase())
    }
}

compteur.addEventListener('click', increment)

type User = {firstname: string, lastname: string}

const john : User = {firstname: "John", lastname: "Doe"}
console.log(john)

class A{
    private a: string
    public b = 4
    protected c = 5
    
    constructor(aParam : string){
        this.a = aParam
    }

    log() {
        console.log(this.a)
        console.log(this.b)
        console.log(this.c)
    }
}

interface Point {
    x: number,
    y: number
}

const aInstance = new A("hello world")
aInstance.log();
```

This code showcases TypeScript features such as type annotations, interfaces, classes, and more. For example, the `increment` function increases a counter displayed on a button click event, while the `printId` function demonstrates type checking for parameters.

After modifying the `app.ts` file to create your own components or add additional functionality, you can compile it into JavaScript using the build script defined in `package.json`. Once compiled, the `index.html` file in the root directory will utilize the compiled file to visualize the modifications.

This tutorial serves as a foundation for understanding TypeScript, allowing you to build robust and type-safe applications.

## ts-config.json
The tsconfig.json file is a configuration file used in TypeScript projects to specify compiler options and project settings. In the provided configuration, "compilerOptions" specifies various settings for the TypeScript compiler. 

- "outDir" specifies the output directory where compiled JavaScript files will be placed. In this case, it's set to "dist".
- "noEmitOnError" ensures that TypeScript doesn't emit any output files if there are errors during compilation.
- "target" specifies the ECMAScript version to which TypeScript will compile. Here, it's set to "ES6", indicating that the compiler should target ECMAScript 2015.

Additionally, the "files" array specifies which files should be included in the compilation process. Only "src/app.ts" will be compiled in this configuration. 

This configuration ensures that TypeScript compiles the "app.ts" file located in the "src" directory, targets ECMAScript 2015, and outputs the compiled JavaScript files to the "dist" directory, while also enforcing strict error checking.

## gitignore
It's essential to always add `node_modules` to your `.gitignore` file because it contains a large number of files and directories generated by dependencies, making it heavy and unnecessary to include in version control. Additionally, it's crucial to gitignore the `dist` folder as well. The `dist` folder typically contains the compiled output of your project, such as JavaScript files, which can be regenerated from your source code. Including it in version control would bloat your repository unnecessarily with redundant files. By gitignoring both `node_modules` and `dist`, you ensure that only your source code and necessary configuration files are tracked in version control, keeping your repository clean and efficient.

## Installation
To get started, first install the project dependencies by running:
```bash
npm install
```
After the dependencies are installed, build the TypeScript code using the script defined in the package.json file:
```bash
npm run build
```
This will compile your TypeScript code into JavaScript, ready for execution.\
Now, let's start the development web server by running the following command in the directory containing the `index.html` file:
```bash
npx serve@14
```