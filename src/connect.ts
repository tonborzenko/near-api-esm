/**
 * Connect to NEAR using the provided configuration.
 *
 * {@link ConnectConfig.networkId} and {@link ConnectConfig.nodeUrl} are required.
 *
 * To sign transactions you can also pass:
 * 1. {@link ConnectConfig.keyStore}
 * 2. {@link ConnectConfig.keyPath}
 *
 * If all three are passed they are prioritize in that order.
 *
 * @see {@link ConnectConfig}
 * @example
 * ```js
 * async function initNear() {
 *   const near = await connect({
 *      networkId: 'testnet',
 *      nodeUrl: 'https://rpc.testnet.near.org'
 *   })
 * }
 * ```
 * @module connect
 */

import { Near, NearConfig } from './near';
import fetch from './utils/setup-node-fetch';

global.fetch = fetch;

export interface ConnectConfig extends NearConfig {
    /**
     * Initialize an {@link InMemoryKeyStore} by reading the file at keyPath.
     */
    keyPath?: string;
}

/**
 * Initialize connection to Near network.
 */
export async function connect(config: ConnectConfig): Promise<Near> {
    return new Near(config);
}
