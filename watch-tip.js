abi=[{"constant":false,"inputs":[{"name":"tipId","type":"uint8"}],"name":"snapTip","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tipRecords","outputs":[{"name":"tipID","type":"uint8"},{"name":"snapper","type":"address"},{"name":"amount","type":"uint256"},{"name":"snapDate","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"snappers","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"findTip","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_tipId","type":"uint8"}],"name":"isSnapped","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"tipId","type":"uint8"}],"name":"spareTipRecord","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[{"name":"tipId","type":"uint256"}],"name":"clearTipRecords","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tips","outputs":[{"name":"tipper","type":"address"},{"name":"amount","type":"uint256"},{"name":"quantity","type":"uint8"},{"name":"randomTip","type":"bool"},{"name":"startDate","type":"uint256"},{"name":"snappedQuantity","type":"uint8"},{"name":"snappedAmount","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_quantity","type":"uint8"},{"name":"_randomTip","type":"bool"},{"name":"_afterHours","type":"uint256"}],"name":"newTip","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_maxTipLen","type":"uint8"},{"name":"_maxTipQuantity","type":"uint8"}],"type":"constructor"}]
var tip1= web3.eth.contract(abi).at("0x7a5d95d2f475dbda3a226ad7c6c4321621205601");