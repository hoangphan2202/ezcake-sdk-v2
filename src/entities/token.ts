import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.KAI]: new Token(
    ChainId.KAI,
    '0xAF984E23EAA3E7967F3C5E007fbe397D8566D23d',
    18,
    'WKAI',
    'Wrapped KAI'
  ),
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.ONUS]: new Token(
    ChainId.ONUS,
    '0x4c761E48d1E735af551cc38ABCBDCe1d7FaaC6E4',
    18,
    'WONUS',
    'Wrapped ONUS'
  ),
    [ChainId.ONUS_TESTNET]: new Token(
    ChainId.ONUS_TESTNET,
    '0x93c1e164944D1B741E4aa579cd7e0b0257A57A9c',
    18,
    'WONUS',
    'Wrapped ONUS'
  ),
  [ChainId.HARMONY]: new Token(
      ChainId.ONUS,
      '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
      18,
      'WONE',
      'Wrapped ONE'
  ),
}
