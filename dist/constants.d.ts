import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    KAI = 24,
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    TOMO = 88,
    TOMO_TESTNET = 89,
    MATIC = 137,
    MATIC_TESTNET = 80001,
    FANTOM = 250,
    FANTOM_TESTNET = 4002,
    XDAI = 100,
    BSC = 56,
    BSC_TESTNET = 97,
    ARBITRUM = 42161,
    ARBITRUM_TESTNET = 79377087078960,
    MOONBEAM_TESTNET = 1287,
    AVALANCHE = 43114,
    AVALANCHE_TESTNET = 43113,
    HECO = 128,
    HECO_TESTNET = 256,
    HARMONY = 1666600000,
    HARMONY_TESTNET = 1666700000,
    OKEX = 66,
    OKEX_TESTNET = 65,
    CELO = 42220,
    PALM = 11297108109,
    PALM_TESTNET = 11297108099,
    ONUS = 1975,
    ONUS_TESTNET = 1945
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS: {
    [chainId: number]: string;
};
export declare const INIT_CODE_HASH: {
    [chainId: number]: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: {
    24: JSBI;
    1975: JSBI;
    1945: JSBI;
    97: JSBI;
    56: JSBI;
};
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
