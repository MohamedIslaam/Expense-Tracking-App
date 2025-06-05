# Expense Tracking App

The **Expense Tracking App** is a mobile application developed to provide users with a streamlined solution for tracking and managing personal finances. With a focus on clarity and usability, the app allows users to monitor their income, expenses, and savings in real time.

## Key Features

### Home
- Displays a concise financial summary including:
  - Total and daily income
  - Total and daily expenses
  - Daily savings overview

### Transactions
- Complete list of all past transactions
- Filtering options by category and transaction type
- Detailed view including amount, date, and description

### Add Transaction
- Interface to record new transactions
- Supports both income and expenses
- Fields for amount, category, date, and notes

### Profile
- User profile overview
- Settings and preferences (if implemented)

## Backend Simulation

This application uses **json-server** as a mock REST API to simulate backend functionality. All transaction data is fetched from the json-server, allowing development and testing without the need for a live backend.

To start the server:
- npx json-server --watch db.json --port 3000

## How to run

First clone my reopsitory:
- git clone <repository-url>

Then importantly change the folder name as MyReactApp due to name i have given while creating the project
then
- cd MyReactApp

Install required dependencies used in App:
- npm install

Start the json-server using:
- npx json-server --watch db.json --port 3000

Launch the App:
- npx react-native run-android 
    or
  npx react-native run-ios

## Mobile debugging
If your using physical mobile to run the app the ensure the the USB debugging is enabled and check it by using:
- adb devices

then while using json server it need to be reversed to mobile phone it can be done by using:
- adb reverse tcp:3000 tcp:3000