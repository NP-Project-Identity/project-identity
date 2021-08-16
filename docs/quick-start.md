# Setup
## 1. Requirement
git - 
It is used to checkout the latest source code from GitHub, or commit changes to the repository. Download and install git for your operating system.

NodeJS v14 & NPM v6 - 
NodeJS is a JavaScript runtime that allows to execute applications written in JavaScript. NPM is a package manager for NodeJS that simplifies the process of downloading and installing JavaScript applications and libraries, which are published in a central repository. Download and install NodeJS and NPM for your operating system.

Editor or IDE (optional) - 
It is possible to only use a simple text editor, but it is more easier with a powerful source code editor or even an IDE. Use what you like, here are some one example: Visual Studio Code (my personal favorite)

## 2. Getting the Source Code
The source code can be found in the repository on GitHub

### 2.1 Clone the Repository
Open a terminal and run the following commands:  
`git clone https://github.com/NP-Project-Identity/project-identity.git project-identity`

## 3. Install Dependencies
All dependencies will be installed using NPM, just run the standard command from the root directory. It will automatically recurse into the project directories and install all required packages.  
```
npm ci
````

## 4. Run the Application
Start a local development version of the project that will use the current source code from the project folders.
```
cd .\frontend\  
ionic serve
```
