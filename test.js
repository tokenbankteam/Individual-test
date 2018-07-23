/**
 * Created by Administrator on 2018/7/23.
 */
const Eos=require('eosjs');
var eos=Eos({
    chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
    keyProvider: '5KgSVdBvKJM7cq1bN91PUnfCREieZ4duqsMuyNWM6zUewhJpKmt',
    httpEndpoint: 'http://openapi.eos.ren'
});
//获取账户信息
eos.getAccount({
    account_name:'tokentest111'
}).then(function(value){
    console.log("****************************");
    console.log(value);
});
//获取区块信息
eos.getInfo({}).then(function(value){
    console.log("****************************");
    console.log(value);
});
//
eos.