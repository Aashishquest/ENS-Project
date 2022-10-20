import { toast } from "react-toastify";
import { web3, _switch } from "./Web3Helper";

//ens register
const ENSaddress = "0x7406C6524ce974F4B75C96aAc55AbFd6042117Ad";
const ENSabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}]
,"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint64","name":"_ttl","type":"uint64"}],"name":"Factory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],
"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nodeAddress","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}]
,"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"_resolver","type":"address"}],"name":"setResolver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"}]
,"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_resolver","type":"address"},{"internalType":"uint64","name":"_ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"_ttl","type":"uint64"}],"name":"setTTL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}]
,"stateMutability":"view","type":"function"}];

const ResolverABI = [{"inputs":[{"internalType":"contract ENS","name":"ensAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"hash","type":"bytes32"}],"name":"ContentChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"content","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"_addr","type":"address"}],"name":"setAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"hash","type":"bytes32"}],"name":"setContent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];


export const setENSName = async (ENSname, timestamp) => {
	const web3connect = await web3();

	const accounts = await web3connect.eth.getAccounts();

	const chainId = await web3connect.eth.getChainId();

	if (chainId !== 97) {
		// alert('Please Switch To BSC Network');
		_switch();
		return false;
	}

  let node = web3connect.utils.sha3(ENSname);
  console.log("node", node);
	let selectedAccount = accounts[0];
  console.log(selectedAccount)
  let admin = "0xF24a24Ab64a29edd50ACC655f4dd78360888A83e";
  let ENScontract = new web3connect.eth.Contract(ENSabi, ENSaddress);
  console.log("Detail")
  
  const nonce = await web3connect.eth.getTransactionCount(
    selectedAccount,
    "latest"
  ); //get latest nonce
  const from_account = web3connect.utils.toChecksumAddress(selectedAccount);

  let txFactory = {
    from: from_account,
    to: ENSaddress,
    nonce: nonce,
    gas: 250000,
    // 'maxPriorityFeePerGas': 1999999987,
    data: ENScontract.methods.Factory(node, from_account, timestamp).encodeABI(),
  };

  web3connect.eth.sendTransaction(txFactory, function (err, hash) {
    if (!err) {
      const id = toast.loading(
        "Please Check your Metamask for any Pending Transaction"
      );
      // toast.success('Wait For transaction to Success')
      // show modal
      const expectedBlockTime = 1000; // 1sec
      const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };
      (async function () {
        let transactionReceipt = null;
        while (transactionReceipt == null) {
          // Waiting expectedBlockTime until the transaction is mined
          transactionReceipt = await web3connect.eth.getTransactionReceipt(
            hash
          );
          await sleep(expectedBlockTime);
        }
        if (transactionReceipt.status) {
          toast.update(id, {
            render: "Factory Created Success",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
        } else {
          toast.update(id, {
            render: "Transaction Reverted",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        //  window.location.reload();
        }
      })();
    } else {
      toast.error("Transaction Reverted");
      // window.location.reload();
    }
  });

  let resolver = await ENScontract.methods.resolver(node).call()

  let ResolverContract = new web3connect.eth.Contract(ResolverABI, resolver);
  let name = await ResolverContract.methods.getName(from_account).call()

  if(name == ""){
    let txAdd = {
      from: from_account,
      to: resolver,
      nonce: nonce,
      gas: 250000,
      data: ResolverContract.methods.setAdd(node, from_account).encodeABI(),
    };
  
    web3connect.eth.sendTransaction(txAdd, function (err, hash) {
      if (!err) {
        const id = toast.loading(
          "Please Check your Metamask for any Pending Transaction"
        );
        // toast.success('Wait For transaction to Success')
        // show modal
        const expectedBlockTime = 1000; // 1sec
        const sleep = (milliseconds) => {
          return new Promise((resolve) => setTimeout(resolve, milliseconds));
        };
        (async function () {
          let transactionReceipt = null;
          while (transactionReceipt == null) {
            // Waiting expectedBlockTime until the transaction is mined
            transactionReceipt = await web3connect.eth.getTransactionReceipt(
              hash
            );
            await sleep(expectedBlockTime);
          }
          if (transactionReceipt.status) {
            toast.update(id, {
              render: "Admin Address Success",
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });
          } else {
            toast.update(id, {
              render: "Transaction Reverted",
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          //  window.location.reload();
          }
        })();
      } else {
        toast.error("Transaction Reverted");
        // window.location.reload();
      }
    });

    let txName = {
      from: from_account,
      to: resolver,
      nonce: nonce,
      gas: 250000,
      data: ResolverContract.methods.setName(node, name).encodeABI(),
    };
  
    web3connect.eth.sendTransaction(txName, function (err, hash) {
      if (!err) {
        const id = toast.loading(
          "Please Check your Metamask for any Pending Transaction"
        );
        // toast.success('Wait For transaction to Success')
        // show modal
        const expectedBlockTime = 1000; // 1sec
        const sleep = (milliseconds) => {
          return new Promise((resolve) => setTimeout(resolve, milliseconds));
        };
        (async function () {
          let transactionReceipt = null;
          while (transactionReceipt == null) {
            // Waiting expectedBlockTime until the transaction is mined
            transactionReceipt = await web3connect.eth.getTransactionReceipt(
              hash
            );
            await sleep(expectedBlockTime);
          }
          if (transactionReceipt.status) {
            toast.update(id, {
              render: "Name Set Success",
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });
          } else {
            toast.update(id, {
              render: "Transaction Reverted",
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          //  window.location.reload();
          }
        })();
      } else {
        toast.error("Transaction Reverted");
        // window.location.reload();
      }
    });

  }


  let obj = {
    name: name,
    node: node,
    resolver: resolver,
    useraddress: from_account,
  };
  console.log("obj,",obj)
  return obj;
};