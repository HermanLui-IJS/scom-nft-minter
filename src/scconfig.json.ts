export default {
    "env": "testnet",
    "logo": "logo",
    "configurator": "@scom-nft-minter/config",
    "main": "@scom-nft-minter/main",
    "assets": "@scom-nft-minter/assets",
    "moduleDir": "modules",
    "modules": {
        "@scom-nft-minter/assets": {
            "path": "assets"
        },
        "@scom-nft-minter/interface": {
            "path": "interface"
        },
        "@scom-nft-minter/utils": {
            "path": "utils"
        },
        "@scom-nft-minter/store": {
            "path": "store"
        },
        "@scom-nft-minter/wallet": {
            "path": "wallet"
        },
        "@scom-nft-minter/token-selection": {
            "path": "token-selection"
        },
        "@scom-nft-minter/alert": {
            "path": "alert"
        },
        "@scom-nft-minter/config": {
            "path": "config"
        },
        "@scom-nft-minter/main": {
            "path": "main"
        }
    },
    "dependencies": {
        "@ijstech/eth-contract": "*",
        "@scom/scom-product-contract": "*",
        "@scom/scom-commission-proxy-contract": "*"
    },
    "ipfsGatewayUrl": "https://ipfs.scom.dev/ipfs/",
    "contractInfo": {
        "43113": {
            "ProductNFT": {
                "address": "0xB50fb7AFfef05021a215Af71548305a8D1ABf582"
            },
            "ProductInfo": {
                "address": "0x23066A700753c57dCb609CE45e06ac5a7BfDb64d"
            },
            "Proxy": {
                "address": "0x7f1EAB0db83c02263539E3bFf99b638E61916B96"
            }
        }
    },
    "embedderCommissionFee": "0.01"
}