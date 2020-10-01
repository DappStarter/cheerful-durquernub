require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain modify include merry flock torch'; 
let testAccounts = [
"0xd285ea17dcae278fb737a496ccfdb3dc0d6576edd787f10d389cb298e3ef2d36",
"0xfed883986b73d4b75addb0512b8b9b18ede294beb00f7ff6d9513c8ffb54af1e",
"0x1ef4b0924220073fd010faeb815a89ae0867e40fb5e752e8d9fdcc6c90364617",
"0xb44449cc27e5c31811d391e7060b1658548932301233a8d866c76f6b94c71cd5",
"0xd59ff94cd69b7c7f140d2de6450222546626f67b5fefdc8953784920c5f607ef",
"0x567d6a2bcb50fc940e068b85f182864b53e207d26505f7c62e055d7ce691ee2a",
"0xe2c6939cc365eb351bd7765c456a9c3c53cdc649d377cb8896ec84efae13cdd6",
"0xdeb56d67dee6061a4435a0084272cde70a4878a20b673e47251c57206929903c",
"0xc4f9aec87a463cd625f10fac21f31f4ebf9267b15aade63514238145fad5ce95",
"0x3f9061cc77990b8d0b90e6314e29ac5b724a39923ca6cb2f2acb7aad221791bf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
