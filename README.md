# Playwright Testing for ParaBank Website

## Introduction

This repository contains a set of Playwright test scripts for testing the [ParaBank website](https://parabank.parasoft.com/parabank/index.htm). Playwright is a powerful tool for automating browser interactions and testing web applications. In this repository, we provide examples of how to use Playwright to test various aspects of the ParaBank website.

## Prerequisites

Before you can run the Playwright tests in this repository, you'll need to have the following software and dependencies installed:

1. **Node.js**: Ensure you have Node.js installed. If not, you can download and install it from [nodejs.org](https://nodejs.org/).

2. **Playwright**: Install Playwright using npm (Node Package Manager) by running the following command:

   ```bash
   npm init playwright@latest
   ```

## Getting Started

Follow these steps to set up and run the Playwright tests for the ParaBank website:

1. **Clone the Repository**: Start by cloning this GitHub repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/parabank-playwright-tests.git
   ```

2. **Navigate to the Project Folder**:

   ```bash
   cd parabank-playwright-tests
   ```

3. **Install Dependencies**: Install the required dependencies by running:

   ```bash
   npm install
   ```

4. **Run the Tests**: You can execute the Playwright tests by running the following command:

   ```bash
   npx playwright test
   ```

   This command will trigger the Playwright tests in headless mode and generate reports on the `test-results`.

5. **Run tests in UI Mode**:

   ```bash
   npx playwright test --ui
   ```

   This command will run tests with UI Mode for a better developer experience with time travel debugging, watch mode and more.

## Test Scenarios

In this repository, you'll find a few test scenarios for the ParaBank website, including but not limited to:

- Register an account.
- Logging into an account.
- Open an savings account 
- Open an checking account.
- Viewing account details.

Feel free to explore the test scripts in the `tests` folder to understand how Playwright is used to automate these scenarios.

## Configuration

You can configure the browser to be used (e.g., Chromium, Firefox, or WebKit) and other test settings in the `playwright.config.ts` file. You can also set the URL of the ParaBank website in this configuration file.

## Reporting

Playwright generates detailed test reports in HTML format. You can find these reports in the `playwright-report` folder after running the tests. These reports include information about test results, screenshots, and logs.

In addition to the built-in HTML reports, you can also consider using third-party reporting tools to enhance your test reporting capabilities. One such tool is [Currents](https://currents.dev/), which provides real-time and interactive reporting for Playwright tests.

### Using Currents for Advanced Reporting

1. **Sign Up for Currents**: Start by signing up for a Currents account on their website at [currents.dev](https://currents.dev/).

2. **Obtain an RECORD KEYS**: After signing up, obtain an RECORD KEYS from Currents to use their services. You can find your RECORD KEYS in your `API and Record Keys`.

3. **Install Currents SDK**: Install the Currents SDK by running the following command in your project directory:

   ```bash
   npm i -D @currents/playwright
   ```

4. **Configure Currents Reporter**:

   ```typescript
   // playwright.config.ts

   reporter: [
     // ... other reporters, if exist
     ["@currents/playwright"],
   ]
   ```

5. **Run Tests and Generate Reports**: When you run your Playwright tests, Currents will automatically generate detailed and interactive reports. You can access these reports from your Currents dashboard.

   ```bash
   CURRENTS_PROJECT_ID=PROJECT_ID \
   CURRENTS_RECORD_KEY=RECORD_KEY \
   CURRENTS_CI_BUILD_ID=hello-currents \
   npx playwright test
   ```

By integrating Currents into your Playwright testing workflow, you can benefit from advanced reporting features and gain insights into your test results in real-time.

https://github.com/namnh663/parabank-playwright/assets/74748329/6bcbf99a-4ca5-4f10-8d80-184c41c8e96e

https://github.com/namnh663/parabank-playwright/assets/74748329/9d8130c7-accd-435a-9fc6-b19c9c96bfd2
