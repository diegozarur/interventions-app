# AngularJS/Python Intervention Management

## Project Description

This project is an AngularJS/Python lab that aims to create an interface for managing interventions. The interface
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

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
