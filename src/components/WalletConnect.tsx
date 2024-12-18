import React from 'react';
import { useConnectWallet } from '@web3-onboard/react';
import { Wallet } from 'lucide-react';

export function WalletConnect() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const handleConnection = async () => {
    if (wallet) {
      await disconnect(wallet);
    } else {
      await connect();
    }
  };

  return (
    <button
      onClick={handleConnection}
      disabled={connecting}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      style={{ backgroundColor: wallet ? '#e11d48' : '#2563eb' }}
    >
      <Wallet className="w-5 h-5" />
      {wallet ? 'Disconnect Wallet' : 'Connect Wallet'}
    </button>
  );
}