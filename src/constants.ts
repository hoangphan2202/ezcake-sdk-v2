import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
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
  ONUS_TESTNET = 1945,
}


export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.BSC_TESTNET]: '0xB0C6536fB1A4F76be4e1390b8328980499DdA146',
  [ChainId.BSC]: '0x91FB3e62b34D10A6623ed7E2CEB523B0615B935F',
}

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.BSC_TESTNET]: '0x2d7469ebcfbf32f8f4cf914ef1a54a6813d9541cbfa7d578e3a107003da7021a',
  [ChainId.BSC]: '0x2d7469ebcfbf32f8f4cf914ef1a54a6813d9541cbfa7d578e3a107003da7021a',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = {
  [ChainId.KAI]: JSBI.BigInt(9975),
  [ChainId.ONUS]: JSBI.BigInt(9970),
  [ChainId.ONUS_TESTNET]: JSBI.BigInt(9970),
  [ChainId.BSC_TESTNET]: JSBI.BigInt(9970),
  [ChainId.BSC]: JSBI.BigInt(9970),
}
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
