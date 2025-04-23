
# Demo Webshop E2E Automated Tests

Automated end-to-end tests for https://demowebshop.tricentis.com/ using Playwright and TypeScript.

---

## Tech stack

- Playwright
- TypeScript
- Node.js
- Git

---

## How to run tests locally

1. Clone the repository:

git clone https://github.com/matmandzinski/demo-webshop-tests.git

2. Install dependencies:

npm install

3. Run all tests:

npx playwright test

4. Run tests with UI:

npx playwright test --ui

---

## Test scenarios

### Register new user
- Random email generation
- Successful registration validation

### Login existing user
- Login using predefined test user
- Validation of successful login

---

## Project structure

.
├── tests/               → Test scenarios
│   ├── register.spec.ts
│   └── login.spec.ts
│
├── helpers/             → Reusable functions
│   ├── auth.ts         → Register & Login logic
│   ├── utils.ts        → Random email generator
│   └── testUser.ts     → Test user credentials
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md

---

## Author

Mateusz Mandziński  

