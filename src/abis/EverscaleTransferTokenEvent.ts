export const EverscaleTransferTokenEventContract = {
        abi: {
            "ABI version": 2,
            "version": "2.2",
            "header": ["pubkey", "time", "expire"],
            "functions": [{
                "name": "constructor",
                "inputs": [{"name": "_initializer", "type": "address"}],
                "outputs": []
            }, {
                "name": "getEventInitData",
                "inputs": [{"name": "answerId", "type": "uint32"}],
                "outputs": [{
                    "components": [{
                        "components": [{
                            "name": "eventTransactionLt",
                            "type": "uint64"
                        }, {"name": "eventTimestamp", "type": "uint32"}, {"name": "eventData", "type": "cell"}],
                        "name": "voteData",
                        "type": "tuple"
                    }, {"name": "configuration", "type": "address"}, {"name": "bridge", "type": "address"}],
                    "name": "value0",
                    "type": "tuple"
                }]
            }, {
                "name": "confirm",
                "inputs": [{"name": "signature", "type": "bytes"}, {"name": "voteReceiver", "type": "address"}],
                "outputs": []
            }, {
                "name": "reject",
                "inputs": [{"name": "voteReceiver", "type": "address"}],
                "outputs": []
            }, {
                "name": "getDetails",
                "inputs": [{"name": "answerId", "type": "uint32"}],
                "outputs": [{
                    "components": [{
                        "components": [{
                            "name": "eventTransactionLt",
                            "type": "uint64"
                        }, {"name": "eventTimestamp", "type": "uint32"}, {"name": "eventData", "type": "cell"}],
                        "name": "voteData",
                        "type": "tuple"
                    }, {"name": "configuration", "type": "address"}, {"name": "bridge", "type": "address"}],
                    "name": "_eventInitData",
                    "type": "tuple"
                }, {"name": "_status", "type": "uint8"}, {
                    "name": "_confirms",
                    "type": "uint256[]"
                }, {"name": "_rejects", "type": "uint256[]"}, {
                    "name": "empty",
                    "type": "uint256[]"
                }, {"name": "_signatures", "type": "bytes[]"}, {
                    "name": "balance",
                    "type": "uint128"
                }, {"name": "_initializer", "type": "address"}, {"name": "_requiredVotes", "type": "uint32"}]
            }, {
                "name": "receiveRelayKeys",
                "inputs": [{"name": "keys", "type": "uint256[]"}],
                "outputs": []
            }, {
                "name": "getVoters",
                "inputs": [{"name": "answerId", "type": "uint32"}, {"name": "vote", "type": "uint8"}],
                "outputs": [{"name": "voters", "type": "uint256[]"}]
            }, {
                "name": "getVote",
                "inputs": [{"name": "answerId", "type": "uint32"}, {"name": "voter", "type": "uint256"}],
                "outputs": [{"name": "vote", "type": "optional(uint8)"}]
            }, {"name": "status", "inputs": [], "outputs": [{"name": "status", "type": "uint8"}]}, {
                "name": "votes",
                "inputs": [],
                "outputs": [{"name": "votes", "type": "map(uint256,uint8)"}]
            }, {
                "name": "initializer",
                "inputs": [],
                "outputs": [{"name": "initializer", "type": "address"}]
            }, {
                "name": "requiredVotes",
                "inputs": [],
                "outputs": [{"name": "requiredVotes", "type": "uint32"}]
            }, {
                "name": "confirms",
                "inputs": [],
                "outputs": [{"name": "confirms", "type": "uint16"}]
            }, {
                "name": "rejects",
                "inputs": [],
                "outputs": [{"name": "rejects", "type": "uint16"}]
            }, {"name": "signatures", "inputs": [], "outputs": [{"name": "signatures", "type": "map(uint256,bytes)"}]}],
            "data": [{
                "components": [{
                    "components": [{
                        "name": "eventTransactionLt",
                        "type": "uint64"
                    }, {"name": "eventTimestamp", "type": "uint32"}, {"name": "eventData", "type": "cell"}],
                    "name": "voteData",
                    "type": "tuple"
                }, {"name": "configuration", "type": "address"}, {"name": "bridge", "type": "address"}],
                "key": 1,
                "name": "eventInitData",
                "type": "tuple"
            }],
            "events": [{
                "name": "Confirm",
                "inputs": [{"name": "relay", "type": "uint256"}, {"name": "signature", "type": "bytes"}],
                "outputs": []
            }, {"name": "Reject", "inputs": [{"name": "relay", "type": "uint256"}], "outputs": []}, {
                "name": "Closed",
                "inputs": [],
                "outputs": []
            }],
            "fields": [{"name": "_pubkey", "type": "uint256"}, {
                "name": "_timestamp",
                "type": "uint64"
            }, {"name": "_constructorFlag", "type": "bool"}, {"name": "status", "type": "uint8"}, {
                "name": "votes",
                "type": "map(uint256,uint8)"
            }, {"name": "initializer", "type": "address"}, {
                "name": "requiredVotes",
                "type": "uint32"
            }, {"name": "confirms", "type": "uint16"}, {
                "name": "rejects",
                "type": "uint16"
            }, {
                "components": [{
                    "components": [{
                        "name": "eventTransactionLt",
                        "type": "uint64"
                    }, {"name": "eventTimestamp", "type": "uint32"}, {"name": "eventData", "type": "cell"}],
                    "name": "voteData",
                    "type": "tuple"
                }, {"name": "configuration", "type": "address"}, {"name": "bridge", "type": "address"}],
                "name": "eventInitData",
                "type": "tuple"
            }, {"name": "signatures", "type": "map(uint256,bytes)"}]
        },
        tvc: "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",
        code: "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",
        codeHash: "a06e0137f62a2e0185dde90afe4d677c9b46f9a46b20fd877a4d8d4132c62078",

};
