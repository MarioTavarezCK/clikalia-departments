const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	roots: ['<rootDir>'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
	testMatch: ['<rootDir>/src/**/*?(*.)+(spec|test).[jt]s?(x)'],
};
