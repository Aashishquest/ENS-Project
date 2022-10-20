import Web3 from "web3";

export const addressCheck = async (address) => {
  let isAddress = false;
  let web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org/"));
  isAddress = web3.utils.isAddress(address);
  if (isAddress == false) {
    // toast.error("Wallet Address is not valid");
  }
  return isAddress;
};
