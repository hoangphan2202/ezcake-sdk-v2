import { ChainId } from '../constants';
/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    readonly chainId?: number;
    /**
     * The only instance of the base class `Currency`.
     */
    static readonly ETHER: Currency;
    static readonly KAI: Currency;
    static readonly BNB: Currency;
    static readonly BNB_TESTNET: Currency;
    static readonly ONUS: Currency;
    static readonly ONUS_TESTNET: Currency;
    static readonly ONE: Currency;
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     * @param chainId of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string, chainId?: number);
}
declare const ETHER: Currency, KAI: Currency, ONUS: Currency, ONUS_TESTNET: Currency, BNB: Currency, BNB_TESTNET: Currency, ONE: Currency;
export { ETHER, KAI, ONUS, ONUS_TESTNET, BNB, BNB_TESTNET, ONE };
export declare const NativeCurrency: {
    24: Currency;
    56: Currency;
    97: Currency;
    1945: Currency;
    1975: Currency;
    1666600000: Currency;
};
