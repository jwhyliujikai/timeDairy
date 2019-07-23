import Mock from 'mockjs';
var data = Mock.mock({
    'list|4-6':[
        {
            'pid |+1':0,
            'time':'@date()',
            'name':'@cname()',
            'img':'@image("150x80")',
            'text':'@cparagraph(1,2)',
        }
    ]
})

Mock.mock('http://www.jingdong.com',data)