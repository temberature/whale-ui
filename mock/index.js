const Mock = require('mockjs');
module.exports = function(app) {
  app.use('/wap/ajax/list', (req, res) => {
    res.json(Mock.mock({
      retcode: 200,
      retdesc: '成功',
      data: {
        'pageNo': 1,
        'pageSize': 10,
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            name: '@email',
            id: '@cname'
          }
        ]
      }
    }));
  });
};
