require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth pulse purpose hunt opera surge surface'; 
let testAccounts = [
"0x7549284fe570ba13ec96544dc4f5fb8f8436cb34d6279db057b980cc05f21e40",
"0x292c7303571a0b25fe3ab5fa88ee93525e66f237169d424fd270ec2e86dc3429",
"0x7817dbf4b71049247e3c097c61010cdc3d61489be74ca34c9db5af8133afcf23",
"0xf94a91a3dec0cc1c1c8750116d6f38f56b9c3d0a4d392062be1d680a3e03cac9",
"0x586854eb52eacfd3f2ecd7c4adb8108b8f96bee792c5c3625dbf309aefc49ab7",
"0x8de42c032acba3e19af2ca1d381345d5bd242e717d9039c5a64185bbebd3b086",
"0x63dec1bcd219b4ccf220a68d9ad60958628b257d34821ae7d9b1bc7d4afbae85",
"0xbf1fd353863703310bf960ac4cbad028acdd9e4c1ab4af92a86c975040359588",
"0x82c9d036c5fce1312318ff6d42eef63351fd432492f9bcc115eae082d86c7204",
"0xeee73bb6ab4b04fd678d3559f7e6e258c6c4c3589a142df18011582863dfb10d"
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
