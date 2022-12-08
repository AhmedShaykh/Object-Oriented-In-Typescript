# Runs a Single Command using the Runners Shell Create TypeScript Project

    - name: Create Package.json
      cmd: npm init

    - name: Create TypeScript Project
      cmd: npm install typeScript@beta

    - name: Create TS Config.json
      cmd: tsc --init

    - name: Install Node Types In DevDependencies
      cmd: npm install or yarn add @types/node -D

    - name: Transpile TypeScript To JavaScript File
      cmd: tsc

    - name: Run JavaScript In Shell
      cmd: node src/filename.js
