# Mach Eight Sample Project

## Requirements

To run, you will only need Node.js and npm installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v18.0.0

    $ npm --version
    8.6.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Running the code

To run the code, you just need to run the following command:

    $ node app.js

It will ask for two inputs: 

1) The comma separated list of integers. You should simply input each number separated by a comma and press enter at the end.

    Example: `1,9,5,0,20,-4,12,16,7`

2) The target integer sum. You should simply put the desired integer and press enter.
    
    Example: `12`

Finally, the algorithm should output the expected results based on the two inputs on the command line. Example: 
    
    12,0 
    16,-4
    7,5
    
## Complexity

The solution runs in O(n) time complexity since it's just going through the array once, using an auxiliary Set (O(1) lookup) to store the complement needed to get to the desired sum.

## Testing

| NOTE: Node version should be 18 or above to run the built in test module used here, didn't want to complicate project by adding node_modules and jest |
| --- |

You can run the following command to test the solution via unit tests:

    node app.test.js

