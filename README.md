# Ethereact

Reading blocks and transactions from the Ethereum blockchain with React/Redux.

## Development

Install the dependencies:
`npm install`

### Tasks
See all available tasks in `package.json` at `scripts`:

1. Run the watcher and the linter:
`npm run dev`

2. Run the development server:
`npm start`

3. If `geth` is installed, you can use this helper task to start your local RPC service:
`npm run geth`

## Material UI

See http://www.material-ui.com/#/customization/themes for other components example.


### Web3

> This trick helped a lot

Turning old school Web3 callback style function, into Promise for usage with `redux-saga`:
```
const createCallback = (resolve, reject) => (error, result) => {
  if (!error) {
    resolve(result);
  }
  reject(error);
};

function callWeb3MethodAsPromise(method, args = []) {
  return new Promise((resolve, reject) => {
    if (!Web3.hasOwnProperty(method)) {
      reject(new Error(`Method '${method} does'nt exists in Web3 API.`));
    }

    return Web3[method](...args, createCallback(resolve, reject));
  });
}
```