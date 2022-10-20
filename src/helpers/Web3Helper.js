import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { toast } from "react-toastify";

const providerOptions = {
  /* See Provider Options Section */

  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: "https://bsc-dataseed1.binance.org/",
        97: "https://data-seed-prebsc-1-s3.binance.org:8545",
        1: "https://mainnet.infura.io/v3/aa8fc14b45b3474bb3fe67576b112bae",
        5: "https://goerli.infura.io/v3/aa8fc14b45b3474bb3fe67576b112bae",
        137: "https://rpc-mainnet.maticvigil.com",
        80001: "https://rpc-mumbai.matic.today",
      },
      // network: "mainnet",
      // chainId: 56,
      // infuraId: "bnb1a5cae5d9hp0we9cx9v02n9hvmt94nnuguv0fav",
    },
  },
};

const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
  disableInjectedProvider: false,
});


export const web3 = async () => {
  const provider = await web3Modal.connect();
  const web3 = new Web3(provider);

  return web3;
};


export const _switch = async () => {
  const provider = await web3Modal.connect();
  const id = toast.loading("Please Check Your Metamask")
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: "0x61" }],
    });
    toast.update(id, { render: "You have successfully switched to Binance Network", type: "success", isLoading: false, autoClose: 2000 });
    window.location.reload();
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x61',
          chainName: 'Binance Test Network',
          nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18
          },
          rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545'],
          blockExplorerUrls: ['https://testnet.bscscan.com']
        }]
      })
        .catch((error) => {
        })
      toast.update(id, { render: "You have successfully Added & switched to Binance Network", type: "success", isLoading: false, autoClose: 2000 });
      window.location.reload();
    }
    toast.update(id, { render: "Failed to switch to the network", type: "error", isLoading: false, autoClose: 2000 });
  }
};

export const Provider = async () => {
  const provider = await web3Modal.connect();

  return provider;
}

export const Disconnect = async () => {
  const disconnect = web3Modal.clearCachedProvider();
  return disconnect;
}
