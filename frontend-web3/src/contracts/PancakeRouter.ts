export const routerContractABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "PancakeRouter",
  "sourceName": "contracts/PancakeRouter.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_factory",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_WETH",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "WETH",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountADesired",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBDesired",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenDesired",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "addLiquidityETH",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveOut",
          "type": "uint256"
        }
      ],
      "name": "getAmountIn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveOut",
          "type": "uint256"
        }
      ],
      "name": "getAmountOut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        }
      ],
      "name": "getAmountsIn",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        }
      ],
      "name": "getAmountsOut",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveB",
          "type": "uint256"
        }
      ],
      "name": "quote",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidityETH",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "removeLiquidityETHWithPermit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountTokenMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountETHMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountETH",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenB",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "liquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountAMin",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountBMin",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "approveMax",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "removeLiquidityWithPermit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountB",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapETHForExactTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactETHForTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForETH",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountOutMin",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountInMax",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapTokensForExactETH",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountInMax",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "path",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        }
      ],
      "name": "swapTokensForExactTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": "0x60c06040523480156200001157600080fd5b506040516200576d3803806200576d833981810160405260408110156200003757600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c6155e662000187600039806101ac5280610e5d5280610e985280610fd5528061129852806116f252806118d65280611e1e5280611fa252806120725280612179528061232c52806123c15280612673528061271a52806127ef52806128f452806129dc5280612a5d52806130ec5280613422528061347852806134ac528061352d528061374752806138f7528061398c5250806110c752806111c5528061136b52806113a4528061154f52806117e452806118b45280611aa1528061225f528061240052806125a95280612a9c5280612ddf5280613071528061309a52806130ca52806132a75280613456528061382d52806139cb5280614434528061447752806147d752806149b85280614f335280615014528061509452506155e66000f3fe60806040526004361061018f5760003560e01c80638803dbee116100d6578063c45a01551161007f578063e8e3370011610059578063e8e3370014610c71578063f305d71914610cfe578063fb3bdb4114610d51576101d5565b8063c45a015514610b25578063d06ca61f14610b3a578063ded9382a14610bf1576101d5565b8063af2979eb116100b0578063af2979eb146109c8578063b6f9de9514610a28578063baa2abde14610abb576101d5565b80638803dbee146108af578063ad5c464814610954578063ad615dec14610992576101d5565b80634a25d94a11610138578063791ac94711610112578063791ac947146107415780637ff36ab5146107e657806385f8c25914610879576101d5565b80634a25d94a146105775780635b0d59841461061c5780635c11d7951461069c576101d5565b80631f00ca74116101695780631f00ca74146103905780632195995c1461044757806338ed1739146104d2576101d5565b806302751cec146101da578063054d50d41461025357806318cbafe51461029b576101d5565b366101d5573373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101d357fe5b005b600080fd5b3480156101e657600080fd5b5061023a600480360360c08110156101fd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a00135610de4565b6040805192835260208301919091528051918290030190f35b34801561025f57600080fd5b506102896004803603606081101561027657600080fd5b5080359060208101359060400135610f37565b60408051918252519081900360200190f35b3480156102a757600080fd5b50610340600480360360a08110156102be57600080fd5b8135916020810135918101906060810160408201356401000000008111156102e557600080fd5b8201836020820111156102f757600080fd5b8035906020019184602083028401116401000000008311171561031957600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135610f4c565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561037c578181015183820152602001610364565b505050509050019250505060405180910390f35b34801561039c57600080fd5b50610340600480360360408110156103b357600080fd5b813591908101906040810160208201356401000000008111156103d557600080fd5b8201836020820111156103e757600080fd5b8035906020019184602083028401116401000000008311171561040957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611364945050505050565b34801561045357600080fd5b5061023a600480360361016081101561046b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359091169060c08101359060e081013515159060ff610100820135169061012081013590610140013561139a565b3480156104de57600080fd5b50610340600480360360a08110156104f557600080fd5b81359160208101359181019060608101604082013564010000000081111561051c57600080fd5b82018360208201111561052e57600080fd5b8035906020019184602083028401116401000000008311171561055057600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356114d8565b34801561058357600080fd5b50610340600480360360a081101561059a57600080fd5b8135916020810135918101906060810160408201356401000000008111156105c157600080fd5b8201836020820111156105d357600080fd5b803590602001918460208302840111640100000000831117156105f557600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135611669565b34801561062857600080fd5b50610289600480360361014081101561064057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e082013516906101008101359061012001356118ac565b3480156106a857600080fd5b506101d3600480360360a08110156106bf57600080fd5b8135916020810135918101906060810160408201356401000000008111156106e657600080fd5b8201836020820111156106f857600080fd5b8035906020019184602083028401116401000000008311171561071a57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356119fe565b34801561074d57600080fd5b506101d3600480360360a081101561076457600080fd5b81359160208101359181019060608101604082013564010000000081111561078b57600080fd5b82018360208201111561079d57600080fd5b803590602001918460208302840111640100000000831117156107bf57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135611d97565b610340600480360360808110156107fc57600080fd5b8135919081019060408101602082013564010000000081111561081e57600080fd5b82018360208201111561083057600080fd5b8035906020019184602083028401116401000000008311171561085257600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612105565b34801561088557600080fd5b506102896004803603606081101561089c57600080fd5b5080359060208101359060400135612525565b3480156108bb57600080fd5b50610340600480360360a08110156108d257600080fd5b8135916020810135918101906060810160408201356401000000008111156108f957600080fd5b82018360208201111561090b57600080fd5b8035906020019184602083028401116401000000008311171561092d57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612532565b34801561096057600080fd5b50610969612671565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561099e57600080fd5b50610289600480360360608110156109b557600080fd5b5080359060208101359060400135612695565b3480156109d457600080fd5b50610289600480360360c08110156109eb57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a001356126a2565b6101d360048036036080811015610a3e57600080fd5b81359190810190604081016020820135640100000000811115610a6057600080fd5b820183602082011115610a7257600080fd5b80359060200191846020830284011164010000000083111715610a9457600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612882565b348015610ac757600080fd5b5061023a600480360360e0811015610ade57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359091169060c00135612d65565b348015610b3157600080fd5b5061096961306f565b348015610b4657600080fd5b5061034060048036036040811015610b5d57600080fd5b81359190810190604081016020820135640100000000811115610b7f57600080fd5b820183602082011115610b9157600080fd5b80359060200191846020830284011164010000000083111715610bb357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550613093945050505050565b348015610bfd57600080fd5b5061023a6004803603610140811015610c1557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e082013516906101008101359061012001356130c0565b348015610c7d57600080fd5b50610ce06004803603610100811015610c9557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e00135613218565b60408051938452602084019290925282820152519081900360600190f35b610ce0600480360360c0811015610d1457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a001356133a7565b61034060048036036080811015610d6757600080fd5b81359190810190604081016020820135640100000000811115610d8957600080fd5b820183602082011115610d9b57600080fd5b80359060200191846020830284011164010000000083111715610dbd57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356136d3565b6000808242811015610e5757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b610e86897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a612d65565b9093509150610e96898685613b22565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610f0957600080fd5b505af1158015610f1d573d6000803e3d6000fd5b50505050610f2b8583613ce9565b50965096945050505050565b6000610f44848484613e26565b949350505050565b60608142811015610fbe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061102357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146110c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b6111207f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613f4a92505050565b9150868260018451038151811061113357fe5b60200260200101511015611192576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b611257868660008181106111a257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff163361123d7f00000000000000000000000000000000000000000000000000000000000000008a8a60008181106111f157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b600181811061121b57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166140b0565b8560008151811061124a57fe5b602002602001015161419b565b6112968287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525030925061436b915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836001855103815181106112e257fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561132057600080fd5b505af1158015611334573d6000803e3d6000fd5b50505050611359848360018551038151811061134c57fe5b6020026020010151613ce9565b509695505050505050565b60606113917f000000000000000000000000000000000000000000000000000000000000000084846145f2565b90505b92915050565b60008060006113ca7f00000000000000000000000000000000000000000000000000000000000000008f8f6140b0565b90506000876113d9578c6113fb565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c48101889052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b15801561149757600080fd5b505af11580156114ab573d6000803e3d6000fd5b505050506114be8f8f8f8f8f8f8f612d65565b809450819550505050509b509b9950505050505050505050565b6060814281101561154a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b6115a87f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613f4a92505050565b915086826001845103815181106115bb57fe5b6020026020010151101561161a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b61162a868660008181106111a257fe5b6113598287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525089925061436b915050565b606081428110156116db57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061174057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146117df57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b61183d7f0000000000000000000000000000000000000000000000000000000000000000898888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506145f292505050565b9150868260008151811061184d57fe5b60200260200101511115611192576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806155426025913960400191505060405180910390fd5b6000806118fa7f00000000000000000000000000000000000000000000000000000000000000008d7f00000000000000000000000000000000000000000000000000000000000000006140b0565b9050600086611909578b61192b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018b905260ff8916608482015260a4810188905260c48101879052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b1580156119c757600080fd5b505af11580156119db573d6000803e3d6000fd5b505050506119ed8d8d8d8d8d8d6126a2565b9d9c50505050505050505050505050565b8042811015611a6e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b611afd85856000818110611a7e57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1633611af77f000000000000000000000000000000000000000000000000000000000000000089896000818110611acd57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600181811061121b57fe5b8a61419b565b600085857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611b2d57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611bc657600080fd5b505afa158015611bda573d6000803e3d6000fd5b505050506040513d6020811015611bf057600080fd5b50516040805160208881028281018201909352888252929350611c32929091899189918291850190849080828437600092019190915250889250614780915050565b86611d368288887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611c6557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611cfe57600080fd5b505afa158015611d12573d6000803e3d6000fd5b505050506040513d6020811015611d2857600080fd5b50519063ffffffff614b1316565b1015611d8d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b5050505050505050565b8042811015611e0757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001685857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611e6c57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f0b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b611f1b85856000818110611a7e57fe5b611f59858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250309250614780915050565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b158015611fe957600080fd5b505afa158015611ffd573d6000803e3d6000fd5b505050506040513d602081101561201357600080fd5b5051905086811015612070576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156120e357600080fd5b505af11580156120f7573d6000803e3d6000fd5b50505050611d8d8482613ce9565b6060814281101561217757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16868660008181106121bb57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461225a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b6122b87f000000000000000000000000000000000000000000000000000000000000000034888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613f4a92505050565b915086826001845103815181106122cb57fe5b6020026020010151101561232a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db08360008151811061237357fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156123a657600080fd5b505af11580156123ba573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61242c7f000000000000000000000000000000000000000000000000000000000000000089896000818110611acd57fe5b8460008151811061243957fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156124aa57600080fd5b505af11580156124be573d6000803e3d6000fd5b505050506040513d60208110156124d457600080fd5b50516124dc57fe5b61251b8287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525089925061436b915050565b5095945050505050565b6000610f44848484614b85565b606081428110156125a457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b6126027f0000000000000000000000000000000000000000000000000000000000000000898888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506145f292505050565b9150868260008151811061261257fe5b6020026020010151111561161a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806155426025913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610f44848484614ca9565b6000814281101561271457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b612743887f00000000000000000000000000000000000000000000000000000000000000008989893089612d65565b604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290519194506127ed92508a91879173ffffffffffffffffffffffffffffffffffffffff8416916370a0823191602480820192602092909190829003018186803b1580156127bc57600080fd5b505afa1580156127d0573d6000803e3d6000fd5b505050506040513d60208110156127e657600080fd5b5051613b22565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561286057600080fd5b505af1158015612874573d6000803e3d6000fd5b505050506113598483613ce9565b80428110156128f257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168585600081811061293657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146129d557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b60003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015612a4257600080fd5b505af1158015612a56573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb612ac87f000000000000000000000000000000000000000000000000000000000000000089896000818110611acd57fe5b836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612b3257600080fd5b505af1158015612b46573d6000803e3d6000fd5b505050506040513d6020811015612b5c57600080fd5b5051612b6457fe5b600086867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110612b9457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612c2d57600080fd5b505afa158015612c41573d6000803e3d6000fd5b505050506040513d6020811015612c5757600080fd5b50516040805160208981028281018201909352898252929350612c999290918a918a918291850190849080828437600092019190915250899250614780915050565b87611d368289897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110612ccc57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611cfe57600080fd5b6000808242811015612dd857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b6000612e057f00000000000000000000000000000000000000000000000000000000000000008c8c6140b0565b604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff831660248201819052604482018d9052915192935090916323b872dd916064808201926020929091908290030181600087803b158015612e8657600080fd5b505af1158015612e9a573d6000803e3d6000fd5b505050506040513d6020811015612eb057600080fd5b5050604080517f89afcb4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015282516000938493928616926389afcb44926024808301939282900301818787803b158015612f2357600080fd5b505af1158015612f37573d6000803e3d6000fd5b505050506040513d6040811015612f4d57600080fd5b50805160209091015190925090506000612f678e8e614d89565b5090508073ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff1614612fa4578183612fa7565b82825b90975095508a871015613005576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806154ce6024913960400191505060405180910390fd5b8986101561305e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061558d6024913960400191505060405180910390fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606113917f00000000000000000000000000000000000000000000000000000000000000008484613f4a565b60008060006131107f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006140b0565b905060008761311f578c613141565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c48101889052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b1580156131dd57600080fd5b505af11580156131f1573d6000803e3d6000fd5b505050506132038e8e8e8e8e8e610de4565b909f909e509c50505050505050505050505050565b6000806000834281101561328d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b61329b8c8c8c8c8c8c614edc565b909450925060006132cd7f00000000000000000000000000000000000000000000000000000000000000008e8e6140b0565b90506132db8d33838861419b565b6132e78c33838761419b565b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561336657600080fd5b505af115801561337a573d6000803e3d6000fd5b505050506040513d602081101561339057600080fd5b5051949d939c50939a509198505050505050505050565b6000806000834281101561341c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b61344a8a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c614edc565b9094509250600061349c7f00000000000000000000000000000000000000000000000000000000000000008c7f00000000000000000000000000000000000000000000000000000000000000006140b0565b90506134aa8b33838861419b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561351257600080fd5b505af1158015613526573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156135d257600080fd5b505af11580156135e6573d6000803e3d6000fd5b505050506040513d60208110156135fc57600080fd5b505161360457fe5b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561368357600080fd5b505af1158015613697573d6000803e3d6000fd5b505050506040513d60208110156136ad57600080fd5b50519250348410156136c5576136c533853403613ce9565b505096509650969350505050565b6060814281101561374557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168686600081811061378957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461382857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b6138867f0000000000000000000000000000000000000000000000000000000000000000888888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506145f292505050565b9150348260008151811061389657fe5b602002602001015111156138f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806155426025913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db08360008151811061393e57fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b15801561397157600080fd5b505af1158015613985573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6139f77f000000000000000000000000000000000000000000000000000000000000000089896000818110611acd57fe5b84600081518110613a0457fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015613a7557600080fd5b505af1158015613a89573d6000803e3d6000fd5b505050506040513d6020811015613a9f57600080fd5b5051613aa757fe5b613ae68287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525089925061436b915050565b81600081518110613af357fe5b602002602001015134111561251b5761251b3383600081518110613b1357fe5b60200260200101513403613ce9565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b60208310613bf857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613bbb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613c5a576040519150601f19603f3d011682016040523d82523d6000602084013e613c5f565b606091505b5091509150818015613c8d575080511580613c8d5750808060200190516020811015613c8a57600080fd5b50515b613ce2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180615515602d913960400191505060405180910390fd5b5050505050565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b60208310613d6057805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613d23565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114613dc2576040519150601f19603f3d011682016040523d82523d6000602084013e613dc7565b606091505b5050905080613e21576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018061544e6034913960400191505060405180910390fd5b505050565b6000808411613e80576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806153ca6029913960400191505060405180910390fd5b600083118015613e905750600082115b613ee5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806155676026913960400191505060405180910390fd5b6000613ef9856103e663ffffffff6151dd16565b90506000613f0d828563ffffffff6151dd16565b90506000613f3383613f27886103e863ffffffff6151dd16565b9063ffffffff61526316565b9050808281613f3e57fe5b04979650505050505050565b6060600282511015613fbd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50616e63616b654c6962726172793a20494e56414c49445f5041544800000000604482015290519081900360640190fd5b815167ffffffffffffffff81118015613fd557600080fd5b50604051908082528060200260200182016040528015613fff578160200160208202803683370190505b509050828160008151811061401057fe5b60200260200101818152505060005b60018351038110156140a8576000806140628786858151811061403e57fe5b602002602001015187866001018151811061405557fe5b60200260200101516152d5565b9150915061408484848151811061407557fe5b60200260200101518383613e26565b84846001018151811061409357fe5b6020908102919091010152505060010161401f565b509392505050565b60008060006140bf8585614d89565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527fd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b6020831061427957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161423c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146142db576040519150601f19603f3d011682016040523d82523d6000602084013e6142e0565b606091505b509150915081801561430e57508051158061430e575080806020019051602081101561430b57600080fd5b50515b614363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061541d6031913960400191505060405180910390fd5b505050505050565b60005b60018351038110156145ec5760008084838151811061438957fe5b60200260200101518584600101815181106143a057fe5b60200260200101519150915060006143b88383614d89565b50905060008785600101815181106143cc57fe5b602002602001015190506000808373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461441457826000614418565b6000835b91509150600060028a5103881061442f5788614470565b6144707f0000000000000000000000000000000000000000000000000000000000000000878c8b6002018151811061446357fe5b60200260200101516140b0565b905061449d7f000000000000000000000000000000000000000000000000000000000000000088886140b0565b73ffffffffffffffffffffffffffffffffffffffff1663022c0d9f84848460006040519080825280601f01601f1916602001820160405280156144e7576020820181803683370190505b506040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561457257818101518382015260200161455a565b50505050905090810190601f16801561459f5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156145c157600080fd5b505af11580156145d5573d6000803e3d6000fd5b50506001909901985061436e975050505050505050565b50505050565b606060028251101561466557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50616e63616b654c6962726172793a20494e56414c49445f5041544800000000604482015290519081900360640190fd5b815167ffffffffffffffff8111801561467d57600080fd5b506040519080825280602002602001820160405280156146a7578160200160208202803683370190505b50905082816001835103815181106146bb57fe5b602090810291909101015281517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b80156140a85760008061471b8786600186038151811061470757fe5b602002602001015187868151811061405557fe5b9150915061473d84848151811061472e57fe5b60200260200101518383614b85565b84600185038151811061474c57fe5b602090810291909101015250507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016146eb565b60005b6001835103811015613e215760008084838151811061479e57fe5b60200260200101518584600101815181106147b557fe5b60200260200101519150915060006147cd8383614d89565b50905060006147fd7f000000000000000000000000000000000000000000000000000000000000000085856140b0565b90506000806000808473ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561484b57600080fd5b505afa15801561485f573d6000803e3d6000fd5b505050506040513d606081101561487557600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905060008073ffffffffffffffffffffffffffffffffffffffff8a8116908916146148bf5782846148c2565b83835b91509150614947828b73ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611cfe57600080fd5b9550614954868383613e26565b9450505050506000808573ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146149985782600061499c565b6000835b91509150600060028c51038a106149b3578a6149e7565b6149e77f0000000000000000000000000000000000000000000000000000000000000000898e8d6002018151811061446357fe5b60408051600080825260208201928390527f022c0d9f000000000000000000000000000000000000000000000000000000008352602482018781526044830187905273ffffffffffffffffffffffffffffffffffffffff8086166064850152608060848501908152845160a48601819052969750908c169563022c0d9f958a958a958a9591949193919260c486019290918190849084905b83811015614a97578181015183820152602001614a7f565b50505050905090810190601f168015614ac45780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015614ae657600080fd5b505af1158015614afa573d6000803e3d6000fd5b50506001909b019a506147839950505050505050505050565b8082038281111561139457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6000808411614bdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806153f3602a913960400191505060405180910390fd5b600083118015614bef5750600082115b614c44576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806155676026913960400191505060405180910390fd5b6000614c686103e8614c5c868863ffffffff6151dd16565b9063ffffffff6151dd16565b90506000614c826103e6614c5c868963ffffffff614b1316565b9050614c9f6001828481614c9257fe5b049063ffffffff61526316565b9695505050505050565b6000808411614d03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806154f26023913960400191505060405180910390fd5b600083118015614d135750600082115b614d68576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806155676026913960400191505060405180910390fd5b82614d79858463ffffffff6151dd16565b81614d8057fe5b04949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415614e11576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806154ab6023913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610614e4b578284614e4e565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216614ed557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50616e63616b654c6962726172793a205a45524f5f4144445245535300000000604482015290519081900360640190fd5b9250929050565b604080517fe6a4390500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015287811660248301529151600092839283927f00000000000000000000000000000000000000000000000000000000000000009092169163e6a4390591604480820192602092909190829003018186803b158015614f7c57600080fd5b505afa158015614f90573d6000803e3d6000fd5b505050506040513d6020811015614fa657600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16141561508c57604080517fc9c6539600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152898116602483015291517f00000000000000000000000000000000000000000000000000000000000000009092169163c9c65396916044808201926020929091908290030181600087803b15801561505f57600080fd5b505af1158015615073573d6000803e3d6000fd5b505050506040513d602081101561508957600080fd5b50505b6000806150ba7f00000000000000000000000000000000000000000000000000000000000000008b8b6152d5565b915091508160001480156150cc575080155b156150dc578793508692506151d0565b60006150e9898484614ca9565b9050878111615156578581101561514b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061558d6024913960400191505060405180910390fd5b8894509250826151ce565b6000615163898486614ca9565b90508981111561516f57fe5b878110156151c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806154ce6024913960400191505060405180910390fd5b94508793505b505b5050965096945050505050565b60008115806151f8575050808202828282816151f557fe5b04145b61139457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b8082018281101561139457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b60008060006152e48585614d89565b5090506152f28686866140b0565b506000806153018888886140b0565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561534657600080fd5b505afa15801561535a573d6000803e3d6000fd5b505050506040513d606081101561537057600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff878116908416146153b75780826153ba565b81815b9099909850965050505050505056fe50616e63616b654c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e5450616e63616b654c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c65645472616e7366657248656c7065723a3a736166655472616e736665724554483a20455448207472616e73666572206661696c656450616e63616b65526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e5450616e63616b654c6962726172793a204944454e544943414c5f41444452455353455350616e63616b65526f757465723a20494e53554646494349454e545f415f414d4f554e5450616e63616b654c6962726172793a20494e53554646494349454e545f414d4f554e545472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c656450616e63616b65526f757465723a204558434553534956455f494e5055545f414d4f554e5450616e63616b654c6962726172793a20494e53554646494349454e545f4c495155494449545950616e63616b65526f757465723a20494e53554646494349454e545f425f414d4f554e54a2646970667358221220d94fd9a6b4030550db1e3ddfc86fdfdb704e0453f762d7040418b9c0fc84b2d564736f6c63430006060033",
  "deployedBytecode": "0x60806040526004361061018f5760003560e01c80638803dbee116100d6578063c45a01551161007f578063e8e3370011610059578063e8e3370014610c71578063f305d71914610cfe578063fb3bdb4114610d51576101d5565b8063c45a015514610b25578063d06ca61f14610b3a578063ded9382a14610bf1576101d5565b8063af2979eb116100b0578063af2979eb146109c8578063b6f9de9514610a28578063baa2abde14610abb576101d5565b80638803dbee146108af578063ad5c464814610954578063ad615dec14610992576101d5565b80634a25d94a11610138578063791ac94711610112578063791ac947146107415780637ff36ab5146107e657806385f8c25914610879576101d5565b80634a25d94a146105775780635b0d59841461061c5780635c11d7951461069c576101d5565b80631f00ca74116101695780631f00ca74146103905780632195995c1461044757806338ed1739146104d2576101d5565b806302751cec146101da578063054d50d41461025357806318cbafe51461029b576101d5565b366101d5573373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101d357fe5b005b600080fd5b3480156101e657600080fd5b5061023a600480360360c08110156101fd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a00135610de4565b6040805192835260208301919091528051918290030190f35b34801561025f57600080fd5b506102896004803603606081101561027657600080fd5b5080359060208101359060400135610f37565b60408051918252519081900360200190f35b3480156102a757600080fd5b50610340600480360360a08110156102be57600080fd5b8135916020810135918101906060810160408201356401000000008111156102e557600080fd5b8201836020820111156102f757600080fd5b8035906020019184602083028401116401000000008311171561031957600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135610f4c565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561037c578181015183820152602001610364565b505050509050019250505060405180910390f35b34801561039c57600080fd5b50610340600480360360408110156103b357600080fd5b813591908101906040810160208201356401000000008111156103d557600080fd5b8201836020820111156103e757600080fd5b8035906020019184602083028401116401000000008311171561040957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611364945050505050565b34801561045357600080fd5b5061023a600480360361016081101561046b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359091169060c08101359060e081013515159060ff610100820135169061012081013590610140013561139a565b3480156104de57600080fd5b50610340600480360360a08110156104f557600080fd5b81359160208101359181019060608101604082013564010000000081111561051c57600080fd5b82018360208201111561052e57600080fd5b8035906020019184602083028401116401000000008311171561055057600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356114d8565b34801561058357600080fd5b50610340600480360360a081101561059a57600080fd5b8135916020810135918101906060810160408201356401000000008111156105c157600080fd5b8201836020820111156105d357600080fd5b803590602001918460208302840111640100000000831117156105f557600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135611669565b34801561062857600080fd5b50610289600480360361014081101561064057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e082013516906101008101359061012001356118ac565b3480156106a857600080fd5b506101d3600480360360a08110156106bf57600080fd5b8135916020810135918101906060810160408201356401000000008111156106e657600080fd5b8201836020820111156106f857600080fd5b8035906020019184602083028401116401000000008311171561071a57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356119fe565b34801561074d57600080fd5b506101d3600480360360a081101561076457600080fd5b81359160208101359181019060608101604082013564010000000081111561078b57600080fd5b82018360208201111561079d57600080fd5b803590602001918460208302840111640100000000831117156107bf57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135611d97565b610340600480360360808110156107fc57600080fd5b8135919081019060408101602082013564010000000081111561081e57600080fd5b82018360208201111561083057600080fd5b8035906020019184602083028401116401000000008311171561085257600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612105565b34801561088557600080fd5b506102896004803603606081101561089c57600080fd5b5080359060208101359060400135612525565b3480156108bb57600080fd5b50610340600480360360a08110156108d257600080fd5b8135916020810135918101906060810160408201356401000000008111156108f957600080fd5b82018360208201111561090b57600080fd5b8035906020019184602083028401116401000000008311171561092d57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612532565b34801561096057600080fd5b50610969612671565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561099e57600080fd5b50610289600480360360608110156109b557600080fd5b5080359060208101359060400135612695565b3480156109d457600080fd5b50610289600480360360c08110156109eb57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a001356126a2565b6101d360048036036080811015610a3e57600080fd5b81359190810190604081016020820135640100000000811115610a6057600080fd5b820183602082011115610a7257600080fd5b80359060200191846020830284011164010000000083111715610a9457600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135612882565b348015610ac757600080fd5b5061023a600480360360e0811015610ade57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359091169060c00135612d65565b348015610b3157600080fd5b5061096961306f565b348015610b4657600080fd5b5061034060048036036040811015610b5d57600080fd5b81359190810190604081016020820135640100000000811115610b7f57600080fd5b820183602082011115610b9157600080fd5b80359060200191846020830284011164010000000083111715610bb357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550613093945050505050565b348015610bfd57600080fd5b5061023a6004803603610140811015610c1557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e082013516906101008101359061012001356130c0565b348015610c7d57600080fd5b50610ce06004803603610100811015610c9557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e00135613218565b60408051938452602084019290925282820152519081900360600190f35b610ce0600480360360c0811015610d1457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135916040820135916060810135916080820135169060a001356133a7565b61034060048036036080811015610d6757600080fd5b81359190810190604081016020820135640100000000811115610d8957600080fd5b820183602082011115610d9b57600080fd5b80359060200191846020830284011164010000000083111715610dbd57600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356136d3565b6000808242811015610e5757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b610e86897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a612d65565b9093509150610e96898685613b22565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610f0957600080fd5b505af1158015610f1d573d6000803e3d6000fd5b50505050610f2b8583613ce9565b50965096945050505050565b6000610f44848484613e26565b949350505050565b60608142811015610fbe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061102357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146110c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b6111207f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613f4a92505050565b9150868260018451038151811061113357fe5b60200260200101511015611192576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b611257868660008181106111a257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff163361123d7f00000000000000000000000000000000000000000000000000000000000000008a8a60008181106111f157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b600181811061121b57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166140b0565b8560008151811061124a57fe5b602002602001015161419b565b6112968287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525030925061436b915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836001855103815181106112e257fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561132057600080fd5b505af1158015611334573d6000803e3d6000fd5b50505050611359848360018551038151811061134c57fe5b6020026020010151613ce9565b509695505050505050565b60606113917f000000000000000000000000000000000000000000000000000000000000000084846145f2565b90505b92915050565b60008060006113ca7f00000000000000000000000000000000000000000000000000000000000000008f8f6140b0565b90506000876113d9578c6113fb565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c48101889052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b15801561149757600080fd5b505af11580156114ab573d6000803e3d6000fd5b505050506114be8f8f8f8f8f8f8f612d65565b809450819550505050509b509b9950505050505050505050565b6060814281101561154a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b6115a87f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613f4a92505050565b915086826001845103815181106115bb57fe5b6020026020010151101561161a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b61162a868660008181106111a257fe5b6113598287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525089925061436b915050565b606081428110156116db57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810181811061174057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146117df57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b61183d7f0000000000000000000000000000000000000000000000000000000000000000898888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506145f292505050565b9150868260008151811061184d57fe5b60200260200101511115611192576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806155426025913960400191505060405180910390fd5b6000806118fa7f00000000000000000000000000000000000000000000000000000000000000008d7f00000000000000000000000000000000000000000000000000000000000000006140b0565b9050600086611909578b61192b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018b905260ff8916608482015260a4810188905260c48101879052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b1580156119c757600080fd5b505af11580156119db573d6000803e3d6000fd5b505050506119ed8d8d8d8d8d8d6126a2565b9d9c50505050505050505050505050565b8042811015611a6e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b611afd85856000818110611a7e57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1633611af77f000000000000000000000000000000000000000000000000000000000000000089896000818110611acd57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600181811061121b57fe5b8a61419b565b600085857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611b2d57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611bc657600080fd5b505afa158015611bda573d6000803e3d6000fd5b505050506040513d6020811015611bf057600080fd5b50516040805160208881028281018201909352888252929350611c32929091899189918291850190849080828437600092019190915250889250614780915050565b86611d368288887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611c6557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611cfe57600080fd5b505afa158015611d12573d6000803e3d6000fd5b505050506040513d6020811015611d2857600080fd5b50519063ffffffff614b1316565b1015611d8d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b5050505050505050565b8042811015611e0757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001685857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110611e6c57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f0b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b611f1b85856000818110611a7e57fe5b611f59858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250309250614780915050565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b158015611fe957600080fd5b505afa158015611ffd573d6000803e3d6000fd5b505050506040513d602081101561201357600080fd5b5051905086811015612070576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156120e357600080fd5b505af11580156120f7573d6000803e3d6000fd5b50505050611d8d8482613ce9565b6060814281101561217757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16868660008181106121bb57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461225a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b6122b87f000000000000000000000000000000000000000000000000000000000000000034888880806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250613f4a92505050565b915086826001845103815181106122cb57fe5b6020026020010151101561232a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806154826029913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db08360008151811061237357fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156123a657600080fd5b505af11580156123ba573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61242c7f000000000000000000000000000000000000000000000000000000000000000089896000818110611acd57fe5b8460008151811061243957fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156124aa57600080fd5b505af11580156124be573d6000803e3d6000fd5b505050506040513d60208110156124d457600080fd5b50516124dc57fe5b61251b8287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525089925061436b915050565b5095945050505050565b6000610f44848484614b85565b606081428110156125a457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b6126027f0000000000000000000000000000000000000000000000000000000000000000898888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506145f292505050565b9150868260008151811061261257fe5b6020026020010151111561161a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806155426025913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610f44848484614ca9565b6000814281101561271457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b612743887f00000000000000000000000000000000000000000000000000000000000000008989893089612d65565b604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290519194506127ed92508a91879173ffffffffffffffffffffffffffffffffffffffff8416916370a0823191602480820192602092909190829003018186803b1580156127bc57600080fd5b505afa1580156127d0573d6000803e3d6000fd5b505050506040513d60208110156127e657600080fd5b5051613b22565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561286057600080fd5b505af1158015612874573d6000803e3d6000fd5b505050506113598483613ce9565b80428110156128f257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168585600081811061293657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146129d557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b60003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015612a4257600080fd5b505af1158015612a56573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb612ac87f000000000000000000000000000000000000000000000000000000000000000089896000818110611acd57fe5b836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612b3257600080fd5b505af1158015612b46573d6000803e3d6000fd5b505050506040513d6020811015612b5c57600080fd5b5051612b6457fe5b600086867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110612b9457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612c2d57600080fd5b505afa158015612c41573d6000803e3d6000fd5b505050506040513d6020811015612c5757600080fd5b50516040805160208981028281018201909352898252929350612c999290918a918a918291850190849080828437600092019190915250899250614780915050565b87611d368289897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101818110612ccc57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611cfe57600080fd5b6000808242811015612dd857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b6000612e057f00000000000000000000000000000000000000000000000000000000000000008c8c6140b0565b604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff831660248201819052604482018d9052915192935090916323b872dd916064808201926020929091908290030181600087803b158015612e8657600080fd5b505af1158015612e9a573d6000803e3d6000fd5b505050506040513d6020811015612eb057600080fd5b5050604080517f89afcb4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015282516000938493928616926389afcb44926024808301939282900301818787803b158015612f2357600080fd5b505af1158015612f37573d6000803e3d6000fd5b505050506040513d6040811015612f4d57600080fd5b50805160209091015190925090506000612f678e8e614d89565b5090508073ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff1614612fa4578183612fa7565b82825b90975095508a871015613005576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806154ce6024913960400191505060405180910390fd5b8986101561305e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061558d6024913960400191505060405180910390fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606113917f00000000000000000000000000000000000000000000000000000000000000008484613f4a565b60008060006131107f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006140b0565b905060008761311f578c613141565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b604080517fd505accf00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c48101889052905191925073ffffffffffffffffffffffffffffffffffffffff84169163d505accf9160e48082019260009290919082900301818387803b1580156131dd57600080fd5b505af11580156131f1573d6000803e3d6000fd5b505050506132038e8e8e8e8e8e610de4565b909f909e509c50505050505050505050505050565b6000806000834281101561328d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b61329b8c8c8c8c8c8c614edc565b909450925060006132cd7f00000000000000000000000000000000000000000000000000000000000000008e8e6140b0565b90506132db8d33838861419b565b6132e78c33838761419b565b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561336657600080fd5b505af115801561337a573d6000803e3d6000fd5b505050506040513d602081101561339057600080fd5b5051949d939c50939a509198505050505050505050565b6000806000834281101561341c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b61344a8a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c614edc565b9094509250600061349c7f00000000000000000000000000000000000000000000000000000000000000008c7f00000000000000000000000000000000000000000000000000000000000000006140b0565b90506134aa8b33838861419b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561351257600080fd5b505af1158015613526573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156135d257600080fd5b505af11580156135e6573d6000803e3d6000fd5b505050506040513d60208110156135fc57600080fd5b505161360457fe5b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561368357600080fd5b505af1158015613697573d6000803e3d6000fd5b505050506040513d60208110156136ad57600080fd5b50519250348410156136c5576136c533853403613ce9565b505096509650969350505050565b6060814281101561374557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f50616e63616b65526f757465723a204558504952454400000000000000000000604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168686600081811061378957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461382857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f50616e63616b65526f757465723a20494e56414c49445f504154480000000000604482015290519081900360640190fd5b6138867f0000000000000000000000000000000000000000000000000000000000000000888888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506145f292505050565b9150348260008151811061389657fe5b602002602001015111156138f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806155426025913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db08360008151811061393e57fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b15801561397157600080fd5b505af1158015613985573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6139f77f000000000000000000000000000000000000000000000000000000000000000089896000818110611acd57fe5b84600081518110613a0457fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015613a7557600080fd5b505af1158015613a89573d6000803e3d6000fd5b505050506040513d6020811015613a9f57600080fd5b5051613aa757fe5b613ae68287878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525089925061436b915050565b81600081518110613af357fe5b602002602001015134111561251b5761251b3383600081518110613b1357fe5b60200260200101513403613ce9565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000178152925182516000946060949389169392918291908083835b60208310613bf857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613bbb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613c5a576040519150601f19603f3d011682016040523d82523d6000602084013e613c5f565b606091505b5091509150818015613c8d575080511580613c8d5750808060200190516020811015613c8a57600080fd5b50515b613ce2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180615515602d913960400191505060405180910390fd5b5050505050565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b60208310613d6057805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613d23565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114613dc2576040519150601f19603f3d011682016040523d82523d6000602084013e613dc7565b606091505b5050905080613e21576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018061544e6034913960400191505060405180910390fd5b505050565b6000808411613e80576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806153ca6029913960400191505060405180910390fd5b600083118015613e905750600082115b613ee5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806155676026913960400191505060405180910390fd5b6000613ef9856103e663ffffffff6151dd16565b90506000613f0d828563ffffffff6151dd16565b90506000613f3383613f27886103e863ffffffff6151dd16565b9063ffffffff61526316565b9050808281613f3e57fe5b04979650505050505050565b6060600282511015613fbd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50616e63616b654c6962726172793a20494e56414c49445f5041544800000000604482015290519081900360640190fd5b815167ffffffffffffffff81118015613fd557600080fd5b50604051908082528060200260200182016040528015613fff578160200160208202803683370190505b509050828160008151811061401057fe5b60200260200101818152505060005b60018351038110156140a8576000806140628786858151811061403e57fe5b602002602001015187866001018151811061405557fe5b60200260200101516152d5565b9150915061408484848151811061407557fe5b60200260200101518383613e26565b84846001018151811061409357fe5b6020908102919091010152505060010161401f565b509392505050565b60008060006140bf8585614d89565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527fd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017815292518251600094606094938a169392918291908083835b6020831061427957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161423c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146142db576040519150601f19603f3d011682016040523d82523d6000602084013e6142e0565b606091505b509150915081801561430e57508051158061430e575080806020019051602081101561430b57600080fd5b50515b614363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061541d6031913960400191505060405180910390fd5b505050505050565b60005b60018351038110156145ec5760008084838151811061438957fe5b60200260200101518584600101815181106143a057fe5b60200260200101519150915060006143b88383614d89565b50905060008785600101815181106143cc57fe5b602002602001015190506000808373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461441457826000614418565b6000835b91509150600060028a5103881061442f5788614470565b6144707f0000000000000000000000000000000000000000000000000000000000000000878c8b6002018151811061446357fe5b60200260200101516140b0565b905061449d7f000000000000000000000000000000000000000000000000000000000000000088886140b0565b73ffffffffffffffffffffffffffffffffffffffff1663022c0d9f84848460006040519080825280601f01601f1916602001820160405280156144e7576020820181803683370190505b506040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561457257818101518382015260200161455a565b50505050905090810190601f16801561459f5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156145c157600080fd5b505af11580156145d5573d6000803e3d6000fd5b50506001909901985061436e975050505050505050565b50505050565b606060028251101561466557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50616e63616b654c6962726172793a20494e56414c49445f5041544800000000604482015290519081900360640190fd5b815167ffffffffffffffff8111801561467d57600080fd5b506040519080825280602002602001820160405280156146a7578160200160208202803683370190505b50905082816001835103815181106146bb57fe5b602090810291909101015281517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b80156140a85760008061471b8786600186038151811061470757fe5b602002602001015187868151811061405557fe5b9150915061473d84848151811061472e57fe5b60200260200101518383614b85565b84600185038151811061474c57fe5b602090810291909101015250507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016146eb565b60005b6001835103811015613e215760008084838151811061479e57fe5b60200260200101518584600101815181106147b557fe5b60200260200101519150915060006147cd8383614d89565b50905060006147fd7f000000000000000000000000000000000000000000000000000000000000000085856140b0565b90506000806000808473ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561484b57600080fd5b505afa15801561485f573d6000803e3d6000fd5b505050506040513d606081101561487557600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905060008073ffffffffffffffffffffffffffffffffffffffff8a8116908916146148bf5782846148c2565b83835b91509150614947828b73ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611cfe57600080fd5b9550614954868383613e26565b9450505050506000808573ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146149985782600061499c565b6000835b91509150600060028c51038a106149b3578a6149e7565b6149e77f0000000000000000000000000000000000000000000000000000000000000000898e8d6002018151811061446357fe5b60408051600080825260208201928390527f022c0d9f000000000000000000000000000000000000000000000000000000008352602482018781526044830187905273ffffffffffffffffffffffffffffffffffffffff8086166064850152608060848501908152845160a48601819052969750908c169563022c0d9f958a958a958a9591949193919260c486019290918190849084905b83811015614a97578181015183820152602001614a7f565b50505050905090810190601f168015614ac45780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015614ae657600080fd5b505af1158015614afa573d6000803e3d6000fd5b50506001909b019a506147839950505050505050505050565b8082038281111561139457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6000808411614bdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806153f3602a913960400191505060405180910390fd5b600083118015614bef5750600082115b614c44576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806155676026913960400191505060405180910390fd5b6000614c686103e8614c5c868863ffffffff6151dd16565b9063ffffffff6151dd16565b90506000614c826103e6614c5c868963ffffffff614b1316565b9050614c9f6001828481614c9257fe5b049063ffffffff61526316565b9695505050505050565b6000808411614d03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806154f26023913960400191505060405180910390fd5b600083118015614d135750600082115b614d68576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806155676026913960400191505060405180910390fd5b82614d79858463ffffffff6151dd16565b81614d8057fe5b04949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415614e11576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806154ab6023913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610614e4b578284614e4e565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216614ed557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f50616e63616b654c6962726172793a205a45524f5f4144445245535300000000604482015290519081900360640190fd5b9250929050565b604080517fe6a4390500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015287811660248301529151600092839283927f00000000000000000000000000000000000000000000000000000000000000009092169163e6a4390591604480820192602092909190829003018186803b158015614f7c57600080fd5b505afa158015614f90573d6000803e3d6000fd5b505050506040513d6020811015614fa657600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16141561508c57604080517fc9c6539600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152898116602483015291517f00000000000000000000000000000000000000000000000000000000000000009092169163c9c65396916044808201926020929091908290030181600087803b15801561505f57600080fd5b505af1158015615073573d6000803e3d6000fd5b505050506040513d602081101561508957600080fd5b50505b6000806150ba7f00000000000000000000000000000000000000000000000000000000000000008b8b6152d5565b915091508160001480156150cc575080155b156150dc578793508692506151d0565b60006150e9898484614ca9565b9050878111615156578581101561514b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061558d6024913960400191505060405180910390fd5b8894509250826151ce565b6000615163898486614ca9565b90508981111561516f57fe5b878110156151c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806154ce6024913960400191505060405180910390fd5b94508793505b505b5050965096945050505050565b60008115806151f8575050808202828282816151f557fe5b04145b61139457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b8082018281101561139457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b60008060006152e48585614d89565b5090506152f28686866140b0565b506000806153018888886140b0565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561534657600080fd5b505afa15801561535a573d6000803e3d6000fd5b505050506040513d606081101561537057600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff878116908416146153b75780826153ba565b81815b9099909850965050505050505056fe50616e63616b654c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e5450616e63616b654c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c65645472616e7366657248656c7065723a3a736166655472616e736665724554483a20455448207472616e73666572206661696c656450616e63616b65526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e5450616e63616b654c6962726172793a204944454e544943414c5f41444452455353455350616e63616b65526f757465723a20494e53554646494349454e545f415f414d4f554e5450616e63616b654c6962726172793a20494e53554646494349454e545f414d4f554e545472616e7366657248656c7065723a3a736166655472616e736665723a207472616e73666572206661696c656450616e63616b65526f757465723a204558434553534956455f494e5055545f414d4f554e5450616e63616b654c6962726172793a20494e53554646494349454e545f4c495155494449545950616e63616b65526f757465723a20494e53554646494349454e545f425f414d4f554e54a2646970667358221220d94fd9a6b4030550db1e3ddfc86fdfdb704e0453f762d7040418b9c0fc84b2d564736f6c63430006060033",
  "linkReferences": {},
  "deployedLinkReferences": {}
};
