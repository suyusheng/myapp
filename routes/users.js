var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('hello express');
// });

router.get('/tableInfo', (req, res, next) => {
  res.json({
    msg: '请求成功',
    error: '请求失败',
    total: 10,
    tableData: [
      {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, 
      {
          date: '2016-05-04',
          name: '张三',
          province: '北京',
          city: '朝阳区',
          address: '北京市朝阳区望京soho',
          zip: 100000
      }, 
      {
          date: '2016-05-01',
          name: '王晓敏',
          province: '忻州',
          city: '忻府区',
          address: '山西省忻州市忻府区七一北路',
          zip: 134000
      }, 
      {
          date: '2016-05-03',
          name: '王小虎',
          province: '太原',
          city: '尖草坪区',
          address: '尖草坪区 服装厂108路',
          zip: 200333
      },
      {
          date: '2016-05-03',
          name: '马六',
          province: '太原',
          city: '尖草坪区',
          address: '尖草坪区 服装厂108路',
          zip: 200333
      },
      {
        date: '2016-05-03',
        name: '马六',
        province: '太原',
        city: '尖草坪区',
        address: '尖草坪区 服装厂108路',
        zip: 200333
      }
    ]
  })
})

module.exports = router;
