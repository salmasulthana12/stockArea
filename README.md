# Warehouse Management 

## Overview
This Warehouse Management is a web application built using ReactJS. It allows users to view a list of warehouses, search for specific warehouses, apply filters, and view/edit warehouse details.

## Technologies Used
- ReactJS
- Redux for state management
- HTML5
- CSS
- JavaScript

## Project Structure
The project is structured as follows:

- `src/`: Contains the source code for the application.
  - `components/`: Contains React components.
  - `actions/`: Contains Redux actions.
  - `reducers/`: Contains Redux reducers.
  - `pages/`: Contains the main application pages.
  - `store.js/`:contains redux store
  - `App.js/`:cotains react routing

## Features
- **Page 1: List of Warehouses**
  - Search warehouses by name.
  - Filter warehouses by:
    - City
    - Cluster

- **Page 2: Warehouse Details and Editing**
  - Click on a warehouse to view details.
  - Edit warehouse information, including cluster, name, city, space available, and live status.
  - Add custom fields (optional).

