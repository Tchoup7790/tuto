# Project Structure and Usage

This project demonstrates how to use TypeScript with Express for web development. Below is an explanation of the important folders and files in this directory structure:

- **dist**: This directory contains the compiled JavaScript files.

- **src**: This directory contains the source TypeScript files.
  - **api**: Contains the API-related files.
    - **routes**: Contains route handling files.
      - **router.ts**: TypeScript file for routing.
  - **app.ts**: TypeScript file for the main application logic.
  - **server.ts**: TypeScript file for the server setup.

- **package.json**: This file contains metadata about the project, including dependencies and scripts.

- **tsconfig.json**: Configuration file for TypeScript compilation. It defines compiler options and project settings.

### Development Dependencies
- **typescript**: TypeScript compiler.
- **@types/cors**: Type definitions for the CORS middleware.
- **@types/express**: Type definitions for Express.
- **@types/node**: Type definitions for Node.js.

### Dependencies
- **express**: Web framework for Node.js.
- **cors**: Middleware for enabling CORS in Express.
- **dotenv**: Module for loading environment variables from a `.env` file.

### Dev Dependencies and Dependencies

In `package.json`, under the `devDependencies` section, you'll find packages necessary for development and build processes. These include TypeScript for compiling TypeScript files and type definitions for Express, CORS, and Node.js.

Under the `dependencies` section, you'll find packages necessary for running the application. This includes Express for building the web server, CORS for enabling Cross-Origin Resource Sharing, and dotenv for loading environment variables.

## tsconfig.json Configuration

The `tsconfig.json` file defines compiler options and project settings for TypeScript compilation. Here's a breakdown of its configuration:

- **include**: Specifies which files to include in compilation. All TypeScript files under the `src` directory are included.
- **exclude**: Specifies files or directories to exclude from compilation. Here, the `dist` directory is excluded.
- **compilerOptions**: Specifies various compiler options:
  - **target**: Specifies the ECMAScript version to compile to (`es2016`).
  - **module**: Specifies the module system (`commonjs`).
  - **rootDir**: Specifies the root directory of input files (`./src`).
  - **moduleResolution**: Specifies how modules are resolved (`node`).
  - **checkJs**: Enables type checking in JavaScript files.
  - **outDir**: Specifies the output directory for compiled files (`./dist`).
  - **esModuleInterop**: Enables interoperability between CommonJS and ES Modules.
  - **forceConsistentCasingInFileNames**: Ensures consistent casing in file names.
  - **strict**: Enables all strict type checking options.
  - **noImplicitAny**: Disallows implicit any types.
  - **skipLibCheck**: Skips type checking of all declaration files (`.d.ts`).

## Installation and Usage

Install dependencies.

```bash
npm install
```
### Build

Build project to dist/ folder.

```bash
npm run build
```

### Build and run

Build project to dist/ folder, and start server with `node dist/server.js`.

```bash
npm run start
```

### Running in Development Mode

This command will not build the project in the `dist` directory but will start it using nodemon, which will handle the compilation process on its side.

```bash
npm run dev
```