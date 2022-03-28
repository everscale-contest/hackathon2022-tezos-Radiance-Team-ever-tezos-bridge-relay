export const EverscaleEventConfigurationContract = {
        abi: {
            "ABI version": 2,
            "version": "2.2",
            "header": ["time", "expire"],
            "functions": [{
                "name": "constructor",
                "inputs": [{"name": "owner", "type": "address"}, {
                    "components": [{
                        "name": "bridge",
                        "type": "address"
                    }, {"name": "eventABI", "type": "bytes"}, {
                        "name": "eventInitialBalance",
                        "type": "uint64"
                    }, {"name": "eventCode", "type": "cell"}], "name": "basicConfiguration", "type": "tuple"
                }, {
                    "components": [{"name": "eventEmitter", "type": "address"}, {
                        "name": "proxy",
                        "type": "uint256"
                    }, {"name": "startTimestamp", "type": "uint32"}, {"name": "endTimestamp", "type": "uint32"}],
                    "name": "networkConfiguration",
                    "type": "tuple"
                }],
                "outputs": []
            }, {
                "name": "setConfiguration",
                "inputs": [{
                    "components": [{"name": "bridge", "type": "address"}, {
                        "name": "eventABI",
                        "type": "bytes"
                    }, {"name": "eventInitialBalance", "type": "uint64"}, {"name": "eventCode", "type": "cell"}],
                    "name": "basicConfiguration",
                    "type": "tuple"
                }, {
                    "components": [{"name": "eventEmitter", "type": "address"}, {
                        "name": "proxy",
                        "type": "uint256"
                    }, {"name": "startTimestamp", "type": "uint32"}, {"name": "endTimestamp", "type": "uint32"}],
                    "name": "networkConfiguration",
                    "type": "tuple"
                }],
                "outputs": []
            }, {
                "name": "deployEvent",
                "inputs": [{
                    "components": [{"name": "eventTransactionLt", "type": "uint64"}, {
                        "name": "eventTimestamp",
                        "type": "uint32"
                    }, {"name": "eventData", "type": "cell"}], "name": "eventVoteData", "type": "tuple"
                }],
                "outputs": []
            }, {
                "name": "deriveEventAddress",
                "inputs": [{"name": "answerId", "type": "uint32"}, {
                    "components": [{
                        "name": "eventTransactionLt",
                        "type": "uint64"
                    }, {"name": "eventTimestamp", "type": "uint32"}, {"name": "eventData", "type": "cell"}],
                    "name": "eventVoteData",
                    "type": "tuple"
                }],
                "outputs": [{"name": "eventContract", "type": "address"}]
            }, {
                "name": "getDetails",
                "inputs": [{"name": "answerId", "type": "uint32"}],
                "outputs": [{
                    "components": [{"name": "bridge", "type": "address"}, {
                        "name": "eventABI",
                        "type": "bytes"
                    }, {"name": "eventInitialBalance", "type": "uint64"}, {"name": "eventCode", "type": "cell"}],
                    "name": "basicConfiguration",
                    "type": "tuple"
                }, {
                    "components": [{"name": "eventEmitter", "type": "address"}, {
                        "name": "proxy",
                        "type": "uint256"
                    }, {"name": "startTimestamp", "type": "uint32"}, {"name": "endTimestamp", "type": "uint32"}],
                    "name": "networkConfiguration",
                    "type": "tuple"
                }]
            }, {
                "name": "getType",
                "inputs": [{"name": "answerId", "type": "uint32"}],
                "outputs": [{"name": "_type", "type": "uint8"}]
            }, {
                "name": "_basicConfiguration",
                "inputs": [],
                "outputs": [{
                    "components": [{"name": "bridge", "type": "address"}, {
                        "name": "eventABI",
                        "type": "bytes"
                    }, {"name": "eventInitialBalance", "type": "uint64"}, {"name": "eventCode", "type": "cell"}],
                    "name": "_basicConfiguration",
                    "type": "tuple"
                }]
            }, {
                "name": "_networkConfiguration",
                "inputs": [],
                "outputs": [{
                    "components": [{"name": "eventEmitter", "type": "address"}, {
                        "name": "proxy",
                        "type": "uint256"
                    }, {"name": "startTimestamp", "type": "uint32"}, {"name": "endTimestamp", "type": "uint32"}],
                    "name": "_networkConfiguration",
                    "type": "tuple"
                }]
            }],
            "data": [],
            "events": [{
                "name": "NewEventContract",
                "inputs": [{"name": "eventContract", "type": "address"}],
                "outputs": []
            }],
            "fields": [{"name": "_pubkey", "type": "uint256"}, {
                "name": "_timestamp",
                "type": "uint64"
            }, {"name": "_constructorFlag", "type": "bool"}, {
                "name": "_owner",
                "type": "address"
            }, {
                "components": [{"name": "bridge", "type": "address"}, {
                    "name": "eventABI",
                    "type": "bytes"
                }, {"name": "eventInitialBalance", "type": "uint64"}, {"name": "eventCode", "type": "cell"}],
                "name": "_basicConfiguration",
                "type": "tuple"
            }, {
                "components": [{"name": "eventEmitter", "type": "address"}, {
                    "name": "proxy",
                    "type": "uint256"
                }, {"name": "startTimestamp", "type": "uint32"}, {"name": "endTimestamp", "type": "uint32"}],
                "name": "_networkConfiguration",
                "type": "tuple"
            }]
        },
        tvc: "te6ccgECJQEABpMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsiBQQkA5rtRNDXScMB+GaJ+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBsKBgN67UTQ10nDAfhmItDTA/pAMPhpqTgA+ER/b3GCCJiWgG9ybW9zcG90+GTcIccA4wIh1w0f8rwh4wMB2zzyPCEhBgIoIIIQP/s9VrvjAiCCEH1OK7274wIPBwRQIIIQRKBcebrjAiCCEEWFftW64wIgghBampqAuuMCIIIQfU4rvbrjAg4MCQgBbDDR2zz4TCGOKovcAAAAAAAAAAAAAAAAGMjOAcjPk/U4rvYBbyReMM7L/8sfyx/NyXD7AN7yACACfjD4Qm7jAPhG8nMhk9TR0N76QNTR0PpA1NM/1FUwbwQB1NHQ+kDT/9Mf0x9VMG8EAdH4AFj4agH4a/hs2zzyAAoUAhbtRNDXScIBjoDjDQsgBE5w7UTQ9AWJIIhwiG8EiXBfIG8E+Gz4a/hqgED0DvK91wv/+GJw+GMbJCQbAuYw+Eby4EzTH/hEWG91+GTR2zwhjiYj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMWFftWM8WywfJcI4v+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8sHyfhEbxTi+wDjAPIADR4AGPhEcG9ygEBvdPhkcQP2MPhG8uBM+EJu4wDTH/hEWG91+GTTP9Mf1FUgbwMB0ds8IY4dI9DTAfpAMDHIz4cgznHPC2EByM+TEoFx5s7NyXCOMfhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQHI+ERvFc8LH87NyfhEbxTi+wDjAPIAIBgeBFAgghAEiYD9uuMCIIIQIKUA17rjAiCCECRW6+i64wIgghA/+z1WuuMCHBMSEANoMPhG8uBM+EJu4wAhk9TR0N76QNTTP9RVMG8EAdTR0PpA0//TH9MfVTBvBAHR2zww2zzyACARFAA8+En4SscF8uBkAfhr+Gz4ScjPhYjOgG/PQMmAQPsAAWAw0ds8+EshjiSNBHAAAAAAAAAAAAAAAAApFbr6IMjOAW8kXjDOzMs/zMlw+wDe8gAgAzow+Eby4Ez4Qm7jANM/0x/UVSBvAwHR2zww2zzyACAVFABi+Ez4S/hK+EP4QsjL/8s/z4POAW8kXjBVQMjOzMs/zAFvJF4gyM7L/8sfyx/NzcntVAT++CdvEGim/mChtX9y+wKBCKz4SfhMbxDHBfL0gQilaKb+YPhLbxK+8vSBCKMhbxH4TG8SvvL0+ExvE52BCKchbxH4TG8Tu/L03iDbPAHbPI0EcAAAAAAAAAAAAAAAAA6wYJagyM7OyXD7AHDIy/9wbYBA9EMB2zzJcViAQPQXyBoYGRYBlvQAyfhLbxPIz4SA9AD0AM+BySD5AMjPigBAy//Iz4WIzxOL4AAAAAAAAAAAAAAAAABwzxYh2zzMz4P4ScjPkR1ZU3LOzcmBAID7ABcANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DAn7bPHDIy/9wbYBA9EMB2zzJcViAQPQXyPQAyfhLbxPIz4SA9AD0AM+ByfhEcG9ygEBvdPhk+QDIz4oAQMv/ydAaGQAmbyMCyAFvI14gyz/LH8zOAcjOzQIscCCIbwOJIG8DAW9Q+ChvUfhLbxBvUiQbAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA5ww+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCKONCTQ0wH6QDAxyM+HIM5xzwthAsjPkhImA/YBbyReMM7Myz/MAW8kXiDIzsv/yx/LH83NyXAgHx0Boo5I+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAsj4RG8VzwsfAW8kXjDOzMs/zAFvJF4gyM7L/8sfyx/Nzcn4RG8U4vsA4wDyAB4AKO1E0NP/0z8x+ENYyMv/yz/Oye1UAB74RHBvcoBAb3T4ZPhL+EwAau1E0NP/0z/TADH6QNTR0PpA1NM/1FUwbwQB1NHQ+kDT/9Mf0x9VMG8EAdH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEkIwAUc29sIDAuNTcuMwAA",
        code: "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"
    }
