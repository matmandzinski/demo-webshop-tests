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

```bash
git clone https://github.com/matmandzinski/demo-webshop-tests.git
```

2. Install dependencies:

```bash
npm install
```

3. Run all tests:

```bash
npx playwright test
```

4. Run tests with UI:

```bash
npx playwright test --ui
```

---

## Test scenarios

### Register new user
- Random email generation
- Successful registration validation

### Login existing user
- Login using predefined test user
- Validation of successful login

### Logout
- Login with predefined test user
- Click "Log out" button
- Verify redirection and logout status

### Add to cart
- Navigate to Books category
- Add products to cart
- Validate item count in mini-cart
- Validate products in full cart

### Search
- Validate results for existing product keyword
- Validate empty state for non-existing product keyword

### Checkout
- Add product to cart
- Proceed to checkout
- Fill in billing details
- Complete checkout steps (Shipping, Payment, Confirmation)
- Validate successful order

---

## Project structure

- tests/ → Test scenarios
  - register.spec.ts
  - login.spec.ts
  - logout.spec.ts
  - add-to-cart.spec.ts
  - search.spec.ts
  - checkout.spec.ts
- helpers/ → Reusable functions
  - auth.ts → Register & Login logic
  - utils.ts → Random email generator
  - testUser.ts → Test user credentials
- playwright.config.ts
- package.json
- tsconfig.json
- README.md

---

## Author

Mateusz Mandziński