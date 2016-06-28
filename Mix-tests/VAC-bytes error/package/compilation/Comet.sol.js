/*
Generated by Mix
Sat Jun 25 14:17:37 2016 GMT+0800
*/

var Comet = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_contractorId\",\"type\":\"uint256\"}],\"name\":\"getVACDrawDataTransactional\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes8\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"draws\",\"outputs\":[{\"name\":\"drawName\",\"type\":\"bytes32\"},{\"name\":\"beginTime\",\"type\":\"uint256\"},{\"name\":\"endTime\",\"type\":\"uint256\"},{\"name\":\"deadline\",\"type\":\"uint256\"},{\"name\":\"placeTime\",\"type\":\"uint256\"},{\"name\":\"drawData\",\"type\":\"bytes8\"},{\"name\":\"chooseTotal\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_drawName\",\"type\":\"bytes32\"},{\"name\":\"_beginTime\",\"type\":\"uint256\"},{\"name\":\"_endTime\",\"type\":\"uint256\"},{\"name\":\"_deadline\",\"type\":\"uint256\"}],\"name\":\"newDraw\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"payAskers\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"chooses\",\"outputs\":[{\"name\":\"drawId\",\"type\":\"uint8\"},{\"name\":\"asker\",\"type\":\"address\"},{\"name\":\"data\",\"type\":\"bytes8\"},{\"name\":\"amount\",\"type\":\"uint256\"},{\"name\":\"dual\",\"type\":\"bool\"},{\"name\":\"placeTime\",\"type\":\"uint256\"},{\"name\":\"refundAmount\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_drawId\",\"type\":\"uint256\"}],\"name\":\"clearChooses\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"kill\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getDrawDataFromVAC\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_drawId\",\"type\":\"uint8\"},{\"name\":\"_data\",\"type\":\"bytes8\"},{\"name\":\"_dual\",\"type\":\"bool\"}],\"name\":\"newChoose\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"inputs\":[{\"name\":\"_maxChooseLen\",\"type\":\"uint256\"},{\"name\":\"_minAmount\",\"type\":\"uint256\"},{\"name\":\"_winnerPercent\",\"type\":\"uint8\"},{\"name\":\"_feePercent\",\"type\":\"uint8\"}],\"type\":\"constructor\"}]",
	"codeHex": "0x60606040526000600060006101000a81548167ffffffffffffffff0219169083780100000000000000000000000000000000000000000000000090040217905550604051608080611324833981016040528080519060200190919080519060200190919080519060200190919080519060200190919050505b836001600050819055508260036000508190555081600460006101000a81548160ff0219169083021790555080600460016101000a81548160ff021916908302179055506000600660005081905550600060056000508190555033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055507f576861744e657874000000000000000000000000000000000000000000000000600760146101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055507f576861742077696c6c2068617070656e206e657874206d6f6e746800000000006008600050819055507f6769746875622e636f6d2f627463326e787400000000000000000000000000006009600050819055507f3132333a3132337c574c00000000000000000000000000000000000000000000600a600050819055506003600b60006101000a81548160ff021916908302179055505b50505050611122806102026000396000f360606040523615610095576000357c0100000000000000000000000000000000000000000000000000000000900480630372fd73146100975780630cc36c36146100de57806314dae9d514610153578063175651aa1461019a5780632e215057146101bd57806332606cee1461024957806341c0e1b5146102615780634eda16e414610270578063a33526941461027f57610095565b005b6100ad60048080359060200190919050506102bd565b604051808277ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6100f4600480803590602001909190505061034e565b60405180886000191681526020018781526020018681526020018581526020018481526020018377ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200182815260200197505050505050505060405180910390f35b61018460048080359060200190919080359060200190919080359060200190919080359060200190919050506103d7565b6040518082815260200191505060405180910390f35b6101a7600480505061060d565b6040518082815260200191505060405180910390f35b6101d36004808035906020019091905050610b1a565b604051808860ff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018677ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001858152602001841515815260200183815260200182815260200197505050505050505060405180910390f35b61025f6004808035906020019091905050610bd4565b005b61026e6004805050610c71565b005b61027d6004805050610d05565b005b6102a76004808035906020019091908035906020019091908035906020019091905050610e93565b6040518082815260200191505060405180910390f35b60007f2d31000000000000000000000000000000000000000000000000000000000000600060006101000a81548167ffffffffffffffff0219169083780100000000000000000000000000000000000000000000000090040217905550600060009054906101000a90047801000000000000000000000000000000000000000000000000029050610349565b919050565b600f60005081815481101561000257906000526020600020906007020160005b915090508060000160005054908060010160005054908060020160005054908060030160005054908060040160005054908060050160009054906101000a9004780100000000000000000000000000000000000000000000000002908060060160005054905087565b60006000600f6000508054905090506000601060009054906101000a900460ff16148061043057506004601060009054906101000a900460ff1614801561042f5750600260009054906101000a900460ff1660ff1681105b5b156105f457600f60005080548060010182818154818355818115116104e3576007028160070283600052602060002091820191016104e2919061046e565b808211156104de576000600082016000506000905560018201600050600090556002820160005060009055600382016000506000905560048201600050600090556005820160006101000a81549067ffffffffffffffff021916905560068201600050600090555060070161046e565b5090565b5b5050509190906000526020600020906007020160005b60e0604051908101604052808a81526020018981526020018881526020018781526020014281526020016000815260200160008152602001509091909150600082015181600001600050556020820151816001016000505560408201518160020160005055606082015181600301600050556080820151816004016000505560a08201518160050160006101000a81548167ffffffffffffffff021916908378010000000000000000000000000000000000000000000000009004021790555060c08201518160060160005055505050600f600050805490508110156105f3576001601060006101000a81548160ff021916908302179055505b5b600f600050805490509150610604565b50949350505050565b6000600060006000600f600050805490509250600183101561062e57610002565b828060019003935050600f60005083815481101561000257906000526020600020906007020160005b5091506002601060009054906101000a900460ff16141561096557600090505b600e600050805490508160ff1610156108bf5782600e6000508260ff16815481101561000257906000526020600020906005020160005b5060000160009054906101000a900460ff1660ff1614801561077a57508160050160009054906101000a900478010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff1916600e6000508260ff16815481101561000257906000526020600020906005020160005b5060000160159054906101000a900478010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff1916145b156108b1576064600460019054906101000a900460ff1660c80360ff16600e6000508360ff16815481101561000257906000526020600020906005020160005b50600101600050540204600e6000508260ff16815481101561000257906000526020600020906005020160005b5060040160005081905550600e6000508160ff16815481101561000257906000526020600020906005020160005b5060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660006064600460019054906101000a900460ff1660c80360ff16600e6000508560ff16815481101561000257906000526020600020906005020160005b50600101600050540204604051809050600060405180830381858888f19350505050505b5b8060010190508050610677565b6004601060006101000a81548160ff02191690830217905550600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000612710600b60009054906101000a900460ff1660ff16600460019054906101000a900460ff1660ff168660060160005054020204604051809050600060405180830381858888f1935050505050610afd565b6003601060009054906101000a900460ff161415610afc576000905080505b600e600050805490508160ff161015610ae25782600e6000508260ff16815481101561000257906000526020600020906005020160005b5060000160009054906101000a900460ff1660ff161415610ad457600e6000508160ff16815481101561000257906000526020600020906005020160005b5060010160005054600e6000508260ff16815481101561000257906000526020600020906005020160005b5060040160005081905550600e6000508160ff16815481101561000257906000526020600020906005020160005b5060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166000600e6000508360ff16815481101561000257906000526020600020906005020160005b5060010160005054604051809050600060405180830381858888f19350505050505b5b8060010190508050610984565b6005601060006101000a81548160ff021916908302179055505b5b601060009054906101000a900460ff169350610b14565b50505090565b600e60005081815481101561000257906000526020600020906005020160005b915090508060000160009054906101000a900460ff16908060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160159054906101000a9004780100000000000000000000000000000000000000000000000002908060010160005054908060020160009054906101000a900460ff16908060030160005054908060040160005054905087565b6000600090505b600e600050805490508160ff161015610c6c5781600e6000508260ff16815481101561000257906000526020600020906005020160005b5060000160009054906101000a900460ff1660ff161415610c5e576000600e6000508260ff16815481101561000257906000526020600020906005020160005b50600101600050819055505b5b8060010190508050610bdb565b5b5050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610d0257600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b60006000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630372fd73600c60005054604051827c0100000000000000000000000000000000000000000000000000000000028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505050604051805190602001509150600f6000506001600f6000508054905003815481101561000257906000526020600020906007020160005b509050818160050160006101000a81548167ffffffffffffffff021916908378010000000000000000000000000000000000000000000000009004021790555067ff00ff00ff00ff007801000000000000000000000000000000000000000000000000028277ffffffffffffffffffffffffffffffffffffffffffffffff19161415610e74576003601060006101000a81548160ff02191690830217905550610e8e565b6002601060006101000a81548160ff021916908302179055505b5b5050565b60006000600f6000508560ff16815481101561000257906000526020600020906007020160005b5090506001601060009054906101000a900460ff16148015610ee85750600160005054600e60005080549050105b1561110a57600e6000508054806001018281815481835581811511610fc957600502816005028360005260206000209182019101610fc89190610f26565b80821115610fc45760006000820160006101000a81549060ff02191690556000820160016101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160156101000a81549067ffffffffffffffff021916905560018201600050600090556002820160006101000a81549060ff02191690556003820160005060009055600482016000506000905550600501610f26565b5090565b5b5050509190906000526020600020906005020160005b60e0604051908101604052808981526020013381526020018881526020013481526020018781526020014281526020016000815260200150909190915060008201518160000160006101000a81548160ff0219169083021790555060208201518160000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060408201518160000160156101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055506060820151816001016000505560808201518160020160006101000a81548160ff0219169083021790555060a0820151816003016000505560c082015181600401600050555050503481600601600050540181600601600050819055505b600e60005080549050915061111a565b50939250505056",
	"name": "Comet"
}

var VACRetriever = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_contractorId\",\"type\":\"uint256\"}],\"name\":\"getVACDrawDataTransactional\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes8\"}],\"type\":\"function\"}]",
	"codeHex": "0x60606040526000600060006101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055506101118061004e6000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480630372fd731461003957610037565b005b61004f6004808035906020019091905050610080565b604051808277ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b60007f2d31000000000000000000000000000000000000000000000000000000000000600060006101000a81548167ffffffffffffffff0219169083780100000000000000000000000000000000000000000000000090040217905550600060009054906101000a9004780100000000000000000000000000000000000000000000000002905061010c565b91905056",
	"name": "VACRetriever"
}

