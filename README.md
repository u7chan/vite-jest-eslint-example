# vite-jest-eslint-example

## Vite

```sh
% yarn create vite <PROJECT_NAME> --template react-ts
```

## Jest

```sh
% yarn add --dev jest typescript @types/jest ts-jest ts-node
```

package.json

```json
"scripts": {
  "test": "jest"
```

Example.test.ts

```typescript
describe('ExampleTest', () => {
  test('case 1', () => {
    expect(1).toBe(1)
  })
})
```

tsconfig.json

```json
{
  "compilerOptions": {
    "isolatedModules": false
  }
}
```

jest.config.ts

```typescript
export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
```

## React Testing by Jest

```sh
% yarn add --dev @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/react-hooks jest-environment-jsdom
```

```json
"scripts": {
  "test": "jest --env=jest-environment-jsdom"
```

Example.test.ts

```typescript
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const Example = () => {
  return (
    <>
      <span>Test</span>
    </>
  )
}

describe('ExampleTest', () => {
  test('case 1', () => {
    // Given
    const expected = 'Test'
    // When
    render(<Example />)
    // Then
    expect(screen.getByText(expected)).toBeInTheDocument()
  })
})
```

## ESLint

```sh
% yarn add --dev eslint @typescript-eslint/parser eslint-plugin-react
```

package.json

```json
"scripts": {
  "lint": "eslint --ext .jsx,.js,.tsx,.ts src/"
```

.eslintrc

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": ["eslint:recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {}
}
```
