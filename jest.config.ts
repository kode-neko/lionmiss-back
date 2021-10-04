import type {Config} from '@jest/types'

const config: Config.InitialOptions = {
    testPathIgnorePatterns: ['node_modules', '<rootDir>/dist', "<rootDir>/build"],
    transform: {
        "\.(ts|tsx|jsx)$": "ts-jest"
    },
    moduleNameMapper: {
        "\.module.(scss|sass)": "identity-obj-proxy",
        "\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `jest-transform-stub`
    },
    testEnvironment: 'node'
}

export default config