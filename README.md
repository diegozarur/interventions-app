# AngularJS Intervention Management

## Project Description

This project is an AngularJS lab that aims to create an interface for managing interventions. The interface
includes a table listing interventions, a button to add new interventions, and functionalities to modify and delete
interventions.

### Features

1. **Interventions Table:**
    - Lists interventions with the ability to order them from the most recent to the oldest and vice versa.

2. **Add Intervention:**
    - Clicking the "Add Intervention" button opens a modal containing a form with the following fields:
        - Wording
        - Description
        - Name
        - Speaker
        - Location
        - Date of Intervention

3. **Modify and Delete Intervention:**
    - Users can modify and delete existing interventions.

4. **Intervention Status:**
    - Each intervention has one of the following statuses: "Draft," "Validated," or "Completed."
    - Draft is the initial status.
    - When all fields are completed, the status changes to "Validated."
    - Once the date has passed, the status changes to "Completed," and the intervention can no longer be modified.

### Technologies Used

- AngularJS v1.7 (https://angularjs.org)
- Python 2.7
- HTML5
- CSS3

## Installation

Please follow these steps to set up and run the project:

#### 1. Clone the Repository:

```bash
   git clone https://github.com/diegozarur/interventions-app.git
```

#### 2. Install global packages

run on any directory,

```
npm install -g gulp-cli node-gyp
```
You can use yarn too:
```
npm install --global yarn
```

in case of mac or linux, you might need to mention "sudo"

#### 3. now navigate to the project directory with cmd (terminal for mac or linux)</b><br>

run the command,

```
npm install or yarn install
```

wait for it to be completed. It usually takes 5-10 minutes to complete.
It will download all the dependencies, build the project and serve the build on browser.

### Access the Interface:

Open your browser and navigate to http://localhost:3000.


### Gulp Build System

This project utilizes Gulp, a powerful task runner, for streamlining various front-end development tasks. Some key features include:

- **File Watching:**
   - Gulp is configured to watch for file changes automatically, making the development process more efficient.

- **Live Reload:**
   - Gulp enables live reloading, ensuring that the browser reflects the changes in real-time.

- **Build Process:**
   - The build process, triggered by the `gulp build` command, prepares the source code for deployment by minifying and optimizing assets.



