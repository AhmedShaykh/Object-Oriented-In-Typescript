# Runs a Single Command using the Runners Shell Create TypeScript Project

    - name: Create Package.json
      cmd: npm init

    - name: Create TypeScript Project
      cmd: npm install typeScript@beta

    - name: Check TypeScript Project
      cmd: tsc -v

    - name: Compile TypeScript File To JavaScript
      cmd: tsc src/filename.ts

    - name: Run JavaScript In Shell
      cmd: node src/filename.js

    - name: Create TS Config.json
      cmd: tsc --init

    - name: Create Multi TS Files with Other Folders
      cmd: tsc