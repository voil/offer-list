module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
  ],
  "moduleNameMapper": {
    "@/components/(.*)": "<rootDir>/components/$1",
    "@/support/(.*)": "<rootDir>/support/$1",
    "@/hooks/(.*)": "<rootDir>/hooks/$1",
    "@/store/(.*)": "<rootDir>/store/$1",
    "@/sagas/(.*)": "<rootDir>/sagas/$1",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
};