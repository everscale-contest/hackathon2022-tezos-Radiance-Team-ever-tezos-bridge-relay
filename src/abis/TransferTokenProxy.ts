export const TransferTokenProxyContract = {
        abi: {
            "ABI version": 2,
            "version": "2.2",
            "header": ["time", "expire"],
            "functions": [{
                "name": "constructor",
                "inputs": [{"name": "owner", "type": "address"}, {
                    "name": "addrTezosEventConfiguration",
                    "type": "address"
                }, {"name": "addrEverscaleEventConfiguration", "type": "address"}, {
                    "name": "addrTokenRoot",
                    "type": "address"
                }],
                "outputs": []
            }, {
                "name": "setConfiguration",
                "inputs": [{
                    "name": "addrTezosEventConfiguration",
                    "type": "address"
                }, {"name": "addrEverscaleEventConfiguration", "type": "address"}, {
                    "name": "addrTokenRoot",
                    "type": "address"
                }],
                "outputs": []
            }, {
                "name": "transferTokenCallback",
                "inputs": [{"name": "data", "type": "cell"}],
                "outputs": []
            }, {
                "name": "burnTokenCallback",
                "inputs": [{"name": "amount", "type": "uint128"}, {"name": "payload", "type": "cell"}],
                "outputs": []
            }, {
                "name": "onAcceptTokensBurn",
                "inputs": [{"name": "amount", "type": "uint128"}, {
                    "name": "walletOwner",
                    "type": "address"
                }, {"name": "wallet", "type": "address"}, {
                    "name": "remainingGasTo",
                    "type": "address"
                }, {"name": "payload", "type": "cell"}],
                "outputs": []
            }, {
                "name": "getInfo",
                "inputs": [],
                "outputs": [{"name": "owner", "type": "address"}, {
                    "name": "addrTokenRoot",
                    "type": "address"
                }, {
                    "name": "addrTezosEventConfiguration",
                    "type": "address"
                }, {"name": "addrEverscaleEventConfiguration", "type": "address"}]
            }, {
                "name": "encodeTezosEventData",
                "inputs": [{"name": "wid", "type": "int8"}, {"name": "recipient", "type": "uint256"}, {
                    "name": "amount",
                    "type": "uint128"
                }],
                "outputs": [{"name": "data", "type": "cell"}]
            }, {
                "name": "decodeTezosEventData",
                "inputs": [{"name": "data", "type": "cell"}],
                "outputs": [{"name": "wid", "type": "int8"}, {
                    "name": "recipient",
                    "type": "uint256"
                }, {"name": "amount", "type": "uint128"}]
            }, {
                "name": "encodeEverscaleEventData",
                "inputs": [{"name": "wid", "type": "int8"}, {"name": "recipient", "type": "uint256"}, {
                    "name": "amount",
                    "type": "uint128"
                }],
                "outputs": [{"name": "data", "type": "cell"}]
            }, {
                "name": "decodeEverscaleEventData",
                "inputs": [{"name": "data", "type": "cell"}],
                "outputs": [{"name": "wid", "type": "int8"}, {
                    "name": "recipient",
                    "type": "uint256"
                }, {"name": "amount", "type": "uint128"}]
            }, {
                "name": "encodePayload",
                "inputs": [{"name": "wid", "type": "int8"}, {"name": "recipient", "type": "uint256"}],
                "outputs": [{"name": "data", "type": "cell"}]
            }, {
                "name": "decodePayload",
                "inputs": [{"name": "data", "type": "cell"}],
                "outputs": [{"name": "wid", "type": "int8"}, {"name": "recipient", "type": "uint256"}]
            }, {
                "name": "encodeTezosAddrPayload",
                "inputs": [{"name": "recipient", "type": "string"}],
                "outputs": [{"name": "data", "type": "cell"}]
            }, {
                "name": "decodeTezosAddrPayload",
                "inputs": [{"name": "data", "type": "cell"}],
                "outputs": [{"name": "recipient", "type": "string"}]
            }, {
                "name": "encodeToTezosPayload",
                "inputs": [{"name": "recipient", "type": "string"}, {"name": "amt", "type": "uint128"}],
                "outputs": [{"name": "data", "type": "cell"}]
            }, {
                "name": "decodeToTezosPayload",
                "inputs": [{"name": "data", "type": "cell"}],
                "outputs": [{"name": "recipient", "type": "string"}, {"name": "amt", "type": "uint128"}]
            }],
            "data": [],
            "events": [{
                "name": "Withdraw",
                "inputs": [{"name": "wid", "type": "int8"}, {"name": "recipient", "type": "uint256"}, {
                    "name": "amount",
                    "type": "uint128"
                }],
                "outputs": []
            }, {
                "name": "ToTezos",
                "inputs": [{"name": "recipient", "type": "string"}, {"name": "amount", "type": "uint128"}],
                "outputs": []
            }],
            "fields": [{"name": "_pubkey", "type": "uint256"}, {
                "name": "_timestamp",
                "type": "uint64"
            }, {"name": "_constructorFlag", "type": "bool"}, {
                "name": "_owner",
                "type": "address"
            }, {"name": "_addrTokenRoot", "type": "address"}, {
                "name": "_addrTezosEventConfiguration",
                "type": "address"
            }, {"name": "_addrEverscaleEventConfiguration", "type": "address"}]
        },
        tvc: "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",
        code: "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"

};
