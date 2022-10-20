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
        3: "https://ropsten.infura.io/v3/aa8fc14b45b3474bb3fe67576b112bae",
        4: "https://rinkeby.infura.io/v3/aa8fc14b45b3474bb3fe67576b112bae",
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

// export const Addnetwork = async () => {
//   const provider = await web3Modal.connect();
//   console.log(provider);
//   await provider.request({
//     method: 'wallet_addEthereumChain',
//     params: [{
//       chainId: '0x4CB',
//       chainName: 'CyCoin POA',
//       nativeCurrency: {
//         name: 'Karbun',
//         symbol: 'KBN',
//         decimals: 18
//       },
//       rpcUrls: ['https://mainnet.cycoin.com:8502'],
//       iconUrls: ['https://cyswap.com/images/tokens/samk-square.png'],
//       blockExplorerUrls: ['https://cyexplorer.com/']
//     }]
//   })
//     .catch((error) => {
//       console.log(error)
//     })
// }


export const AddAssets = async () => {
  const provider = await web3Modal.connect();
  const tokenAddress = '0x9C3701F6f4740D6f2CCda36A8eA50D8E775AB91a';
  const tokenSymbol = 'KBN';
  const tokenDecimals = 18;
  const tokenImage = 'https://karbun.io/favicon.png';

  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await provider.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    });

    if (wasAdded) {
      console.log('Thanks for your interest!');
    } else {
      console.log('Your loss!');
    }
  } catch (error) {
    console.log(error);
  }
};

export const _switch = async () => {
  const provider = await web3Modal.connect();
  const id = toast.loading("Please Check Your Metamask")
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: "0x38" }],
    });
    toast.update(id, { render: "You have successfully switched to Binance Network", type: "success", isLoading: false, autoClose: 2000 });
    window.location.reload();
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x38',
          chainName: 'Binance Network',
          nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18
          },
          rpcUrls: ['https://bsc-dataseed1.binance.org/'],
          blockExplorerUrls: ['https://bscscan.com']
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
