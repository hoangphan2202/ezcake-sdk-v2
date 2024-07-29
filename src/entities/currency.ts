import JSBI from 'jsbi'

import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string
  public readonly chainId?: number

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'ETH', 'ETH', ChainId.MAINNET)
  public static readonly KAI: Currency = new Currency(18, 'KAI', 'KAI', ChainId.KAI)
  public static readonly BNB: Currency = new Currency(18, 'BNB', 'BNB', ChainId.BSC)
  public static readonly BNB_TESTNET: Currency = new Currency(18, 'BNB', 'BNB', ChainId.BSC_TESTNET)
  public static readonly ONUS: Currency = new Currency(18, 'ONUS', 'ONUS', ChainId.ONUS)
  public static readonly ONUS_TESTNET: Currency = new Currency(18, 'ONUS', 'ONUS', ChainId.ONUS_TESTNET)
  public static readonly ONE: Currency = new Currency(18, 'ONE', 'ONE', ChainId.HARMONY)

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   * @param chainId of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string, chainId?: number) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
    this.chainId = chainId
  }
}

const { ETHER, KAI, ONUS, ONUS_TESTNET, BNB,BNB_TESTNET, ONE } = Currency
export { ETHER,KAI,ONUS, ONUS_TESTNET, BNB, BNB_TESTNET, ONE }
export const NativeCurrency = {
  [ChainId.KAI]: KAI,
  [ChainId.BSC]: BNB,
  [ChainId.BSC_TESTNET]: BNB_TESTNET,
  [ChainId.ONUS_TESTNET]: ONUS_TESTNET,
  [ChainId.ONUS]: ONUS,
  [ChainId.HARMONY]: ONE,
}