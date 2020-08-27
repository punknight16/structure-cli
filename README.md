#structure-cli

scaffolding for open source Structure.rest CLI tool

---

## Clone this project

To clone this project simply use the command:

`git clone https://github.com/punknight16/structure-cli.git`

Note that this project uses submodules, so you must run these additional commands.

0. `cd structure-cli` to get into the structure-cli directory
1. `git submodule init` to initialize your local configuration file
2. `git submodule update` to fetch all the data from the submodule and check out 
the appropriate commit
3. `cd structure-shared` to change the directory to structure-shared`
4. `git pull` to make sure you have the latest version of shared
5. `npm i`
6. `tsc`
7. `cd ..`
8. `mv structure-shared shared`
9. `npm i`

For more information on git submodules please see the documentation: https://git-scm.com/book/en/v2/Git-Tools-Submodules

Look for the subheading  *Cloning a Project with Submodules*

---

## Run Main

To run the application:

0. `cd ..` change to the parent directory of structure-cli
1. `git clone <your structure-rest-repo>`
2. `mv <your structure-rest-repo>/data.yml structure-cli`
3. `cd structure-cli`
4. `npm start`

On the first run through, structure-cli will ask for your Snowflake Account credentials. These will automatically be stored in your home directory.

On macOS, you’ll find the file in 
`/Users/[YOUR-USERNME]/.config/configstore/structure-profile.json`

On Linux, it’s in 
`/home/[YOUR-USERNME]/.config/configstore/ginit.json`

---

## Run structure as an executable

structure

---

## Run Tests

To test scaffolding type:

`npm t`

this will run two jest tests of the FizzBuzz function located in src/main

