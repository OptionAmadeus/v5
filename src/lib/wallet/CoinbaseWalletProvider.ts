import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import type { WalletProvider } from './types';
import { WalletError } from './types';
import { config } from '../../config/environment';

export class CoinbaseWalletProvider implements WalletProvider {
  private sdk: CoinbaseWalletSDK;
  private provider: any;

  constructor() {
    this.sdk = new CoinbaseWalletSDK(config.coinbaseConfig);
    this.provider = this.sdk.makeWeb3Provider(
      `https://mainnet.infura.io/v3/${config.infuraId}`,
      config.coinbaseConfig.defaultChainId
    );
  }

  async connect(): Promise<string> {
    try {
      const accounts = await this.provider.request({
        method: 'eth_requestAccounts'
      });
      return accounts[0];
    } catch (error) {
      throw new WalletError(
        'Failed to connect wallet: ' + (error as Error).message,
        (error as any).code
      );
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.provider.disconnect();
    } catch (error) {
      throw new WalletError(
        'Failed to disconnect wallet: ' + (error as Error).message,
        (error as any).code
      );
    }
  }

  async getAccounts(): Promise<string[]> {
    try {
      return await this.provider.request({
        method: 'eth_accounts'
      });
    } catch (error) {
      throw new WalletError(
        'Failed to get accounts: ' + (error as Error).message,
        (error as any).code
      );
    }
  }

  async isConnected(): Promise<boolean> {
    try {
      const accounts = await this.getAccounts();
      return accounts.length > 0;
    } catch {
      return false;
    }
  }
}