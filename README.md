# React Coding Challenge

## Submission Instructions
1. Send your GitHub username to Dave Rodriguez to request write-access to this repository. You'll be provided access to a branch named `challenge-response/<your-name>`.
2. Fork this GitHub repository to your Github account.
3. Review the specification below and submit any questions by email to Dave Rodriguez, along with a written solution outline for how you plan to structure the components needed to build the functionality.
4. After any questions have been answered, code your solution and submit a pull request from your forked version to the `hansoninc` branch with Dave Rodriguez (`@daverodriguez`) and Mike Louviere (`@michaellouviere`) as reviewers.

---------

## Specification

### Background

We've provided a simple, example React application that includes react-router and a single view, the Dashboard.
For this exercise, you'll be querying a public API for a list of devices and displaying them on the Dashboard.
The list should be filterable (see the requirements below), and individual list items should be able to be added to and removed from a separate "my list" area.    

We'd like you to use the Material UI component library for all UI.

A simple wireframe for this assignment has been provided here: [https://1g5obl.axshare.com/#g=1&p=home](https://1g5obl.axshare.com/#g=1&p=home)

### Requirements
1. Dashboard must request 20 random devices from the public API located at [https://random-data-api.com/api/device/random_device?size=20](https://random-data-api.com/api/device/random_device?size=20).
2. Dashboard must display a list of all loaded devices. For each device, the Manufacturer, Model, Platform, and Serial Number fields should be shown as demonstrated in the wireframe.
3. Each Dashboard Item must contain an "Add to My List" button that will move the device into a separate "My Devices" area of the Dashboard.
4. No device should appear in both the "Available Devices" and "My Devices" lists simultaneously.
5. Items in the "My Devices" list must contain a "Remove" button that will return them to the "All Devices" list.
6. Both lists must be sorted alphabetically by Manufacturer name, then by Model name.
7. The Available Device List must be filterable by typing text into an input field. The filter must search the `Manufacturer`, `Model`, and `Platform` fields. 
8. Filtering should be done client side (without re-calling the API) and filtering should update as the user types.
9. The "X" icon near the Filtering input must clear the input and remove any applied filters.
10. Filtering should *only* apply to the Available Devices list, never to My Devices.

### Assumptions and Implementation Notes
1. Assume that you will use Material UI elements for all aspects of the Dashboard view. You can expect to use the following components:
   - Grid (for layout)
   - List
   - Text Field
   - Button
   - Icon Button
2. Implement your data fetching service in `src/api/dashboard.ts`. Use a React hook in your `dashboard/index.tsx` page module to load the data into a state variable.  

### References

- API endpoint: https://random-data-api.com/api/device/random_device?size=20
- Wireframe: https://1g5obl.axshare.com/#g=1&p=home
- Material UI documentation: https://material-ui.com/
