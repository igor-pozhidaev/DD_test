# DD_test
### Before run
* Update Java http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
* To run tests locally you need to install selenium-standalone
```bash
npm install -g selenium-standalone
selenium-standalone install
```
* Install CodeceptJS globally
```bash
npm install codeceptjs@latest -g
```
* Install WebdriverIO globally
```bash
npm install webdriverio@latest -g
```
* Install WebdriverIO globally
```bash
npm install -g allure-commandline --save-dev
```
* Install
```bash
yarn
```
### Run test
Run selenium
```bash
selenium-standalone start
```
Next within other tab from project folder 
```bash
yarn test-allure
```
To see results
```bash
allure serve output
```

![mochawesome report](allure_example.png)
