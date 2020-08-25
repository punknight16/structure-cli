# structure-cli

scaffolding for open source Structure.rest CLI tool

---

## Clone this project

To clone this project simply use the command:

`git clone https://github.com/punknight16/structure-cli.git`

Note that this project uses submodules, so you must run two additional commands.

1. `git submodule init` to initialize your local configuration file
2. `git submodule update` to fetch all the data from the submodule and check out the appropriate commit

For more information on git submodules please see the documentation: https://git-scm.com/book/en/v2/Git-Tools-Submodules

---

## Run Main

to start the app run two commands:

1. `npm i`
2. `npm start`

on the first run through structure-cli will ask for your Snowflake Account credentials. These will automatically be stored in your home directory.

On macOS, you’ll find the file in 
`/Users/[YOUR-USERNME]/.config/configstore/structure-profile.json`

On Linux, it’s in 
`/home/[YOUR-USERNME]/.config/configstore/ginit.json`

---

## Run Tests

To test scaffolding type:

`npm t`

this will run two jest tests of the FizzBuzz function located in src/main

