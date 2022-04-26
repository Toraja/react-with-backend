# React with backend
First attempt to build a React app with separate backend server.

## Start server
```sh
# Inside `front` directory, run:
npm install
npm run build # or build:dev if you don't want files to be minified

# Inside `back` directory, run:
npm install

# Anywhere inside project directory, run:
docker-compose up -d
```

## Demonstration
This app demostrates:
- How to serve React app using Express.
- How to compile React app served by Express.
- How to interact React app with backend server.
- Updating state of sibling components in React.

## TODO
- Build and restart frontend automatically when files are changed.
