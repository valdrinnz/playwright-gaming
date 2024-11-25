# playwright-gaming

This project contains automated tests for verifying blog categories on a website using **Playwright** and generating **Allure reports** for test results and screenshots.

## Table of Contents
- [Clone the Repository](#clone-the-repository)
- [Install Dependencies](#install-dependencies)
- [Run Tests](#run-tests)
- [Generate Allure Reports](#generate-allure-reports)

---

## Clone the Repository

To get started, you need to clone the repository to your local machine.

1. Open your terminal.
2. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/valdrinnz/playwright-gaming.git
   ```
3. Change directory into the project folder:

```bash
    Copy code
    cd your-repo-name
```

## Install Dependencies


To install the necessary dependencies, follow these steps:

Make sure you have Node.js installed.

Install project dependencies using npm (Node Package Manager):

    
    npm install
    

To run the tests, use the following command:

    npx playwright test
or

    npx playwright test --ui

## Run Tests
Run tests to generate allure report with this command:

```bash
npx playwright test --reporter=line,allure-playwright
```

## Generate Allure Reports
When the test run completes, the result files will be generated in the `./allure-results`
directory.

You may select another location, or further customize the reporter's behavior with [the configuration options](https://allurereport.org/docs/playwright-configuration/).

### View the report

> You need Allure Report to be installed on your machine to generate and open the report from the result files. See the [installation instructions](https://allurereport.org/docs/install/) on how to get it.

Generate Allure Report after the tests are executed:

    
    allure generate ./allure-results -o ./allure-report --clean
    

Open the generated report:

```bash
allure open ./allure-report
```

