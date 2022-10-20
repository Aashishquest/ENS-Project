import Web3 from "web3";

const address = "0x794b5005386413b5c2162FB451BCe3B5b947bEEb";
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint64","name":"_ttl","type":"uint64"}],"name":"Factory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nodeAddress","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"_resolver","type":"address"}],"name":"setResolver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_resolver","type":"address"},{"internalType":"uint64","name":"_ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"_ttl","type":"uint64"}],"name":"setTTL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"}];

export const Details = async () => {
  let web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org/"));
  let contract = new web3.eth.Contract(abi, address);

  let rateBUSD = await contract.methods._busdrate().call({
    from: address,
    gas: 500000
  })
  rateBUSD = rateBUSD / 1e18;
  let rateBNB = await contract.methods.bnbRate().call({
    from: address,
    gas: 500000
  })
  rateBNB = rateBNB / 1e18;
  let rateEtH = await contract.methods.ethRate().call({
    from: address,
    gas: 500000
  })
  rateEtH = rateEtH / 1e18;

  let rateBTC = await contract.methods.btcRate().call({
    from: address,
    gas: 500000
  })
  rateBTC = rateBTC / 1e18;

  let rateUSDC = await contract.methods._busdrate().call({
    from: address,
    gas: 500000
  })
  rateUSDC = rateUSDC / 1e18;

  let rateUSDT = await contract.methods._busdrate().call({
    from: address,
    gas: 500000
  })
  rateUSDT = rateUSDT / 1e18;

  let obj = {
    rateBUSD: rateBUSD,
    rateBNB: rateBNB,
    rateEtH: rateEtH,
    rateBTC: rateBTC,
    rateUSDC: rateUSDC,
    rateUSDT: rateUSDT,
  };
  return obj;
};


export const addressCheck = async (address) => {
  let isAddress = false;
  let web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org/"));
  isAddress = web3.utils.isAddress(address);
  if (isAddress == false) {
    // toast.error("Wallet Address is not valid");
  }
  return isAddress;
};
