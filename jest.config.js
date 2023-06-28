module.exports = {
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: '<rootDir>/tsconfig.jest.json',
        }],
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
};
