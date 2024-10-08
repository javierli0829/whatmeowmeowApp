# Ionic Angular iOS Application

This is an Ionic Angular application designed for iOS. It provides a seamless mobile experience using modern web technologies, allowing users to interact with features efficiently.

## Prerequisites

- [Node.js](https://nodejs.org/) version >= 18.19.1
- [npm](https://www.npmjs.com/) version >= 10.8.3
- [Ionic CLI](https://ionicframework.com/docs/cli) version >= 7.2.0
- Xcode (for building and running on iOS)

## Installation

Install dependencies:
```bash
npm install
```

## Running the Application

1. To run the application in a web browser:

   ```bash
   ionic serve
   ```

2. To run the application on an iOS device or simulator, use:

   ```bash
   ionic capacitor run ios
   ```

  Make sure you have a valid Apple Developer account and the necessary certificates and profiles to run the app on a real device.

## Building the Application

To build the application for production, use:

```bash
ionic build
```

This will create a www directory with the production-ready files.
