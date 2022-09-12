console.log("color: #ffffff; background: #f1404b; padding:5px 0;", "background: #030307; padding:5px 0;");

var imgArr = [
    'https://i0.hdslb.com/bfs/album/3bbb5ab07b2a2cbde6951e5da104278017290d83.jpg',
    'https://i0.hdslb.com/bfs/album/b8878fb0328d1f511a1b6de792c50f02590de642.jpg',
    'https://i0.hdslb.com/bfs/album/bb0a82d10657bea5cc6adfdde71434f11c159212.jpg',
    'https://i0.hdslb.com/bfs/album/ef834ca8d1f8a81935891e4f9e417e54680234f6.jpg',
    'https://i0.hdslb.com/bfs/album/84c32b245a92a1da58b48a55553641a5e5ea7294.jpg',
    'https://i0.hdslb.com/bfs/album/85f64e8cc766b433f5152c4740686f4ebb334da8.jpg',
    'https://i0.hdslb.com/bfs/album/28ba6fa10ce2dbe6138b08529b6a62ba28aa26a1.jpg',
    'https://i0.hdslb.com/bfs/album/17a98f61b9f9a0c89b5d68ea1417fdcbf3942ca3.jpg',
    'https://i0.hdslb.com/bfs/album/d7e4f45770997d3c408939396d0aae00707d9928.jpg',
    'https://i0.hdslb.com/bfs/album/5979d04e506e5cfa36e666fd26049171d6aff2f8.jpg',
    'https://i0.hdslb.com/bfs/album/a5001119eae16bc85a66c8863a08b805e8346dc5.jpg',
    'https://i0.hdslb.com/bfs/album/abc344ca10df3cb5cc37507c7bbba174f9924f69.jpg',
    'https://i0.hdslb.com/bfs/album/04686cd4b0173edbe6c70251059ce024724fb58c.jpg',
    'https://i0.hdslb.com/bfs/album/734e9874e63f4203db5d8712c5700a3c75178d8d.jpg',
    'https://i0.hdslb.com/bfs/album/cba0bfbe3c9bfe5e721941abfd9bbae35771c703.jpg',
    'https://i0.hdslb.com/bfs/album/0648f0ae94cff17d33c03133fc65bfb1f67c3b54.jpg',
    'https://i0.hdslb.com/bfs/album/2df5ebe7ca8b5da5e9df476184cac29f8ed8d88f.jpg',
    'https://i0.hdslb.com/bfs/album/836bd02268a99e7c2cc4a7f62d0c73e3f5d0f4e3.jpg',
    'https://i0.hdslb.com/bfs/album/ae0a36d554f1421c2a1f417aa1a25e66936d87fb.jpg',
    'https://i0.hdslb.com/bfs/album/6cdd74ac34db63d4f9679d48c11f1e4c621c3438.jpg',
    'https://i0.hdslb.com/bfs/album/241032e9c0478a5bdbbc9e62e844ccd3bb5db153.jpg',
    'https://i0.hdslb.com/bfs/album/f3691eedae13c44daa27fda193162debd82e89dc.jpg',
    'https://i0.hdslb.com/bfs/album/63188470819ba4dab7851fa4a922f64d24e28918.jpg',
    'https://i0.hdslb.com/bfs/album/f27cf8751b07f264abe3d368ad1610e28b093deb.jpg'
]
bgImg = imgArr[Math.floor(Math.random() * imgArr.length)];
$('.img-bg').css('background-image', 'url(' + bgImg + ')');
var theme = {
    "ajaxurl": "",
    "addico": "/static/index/picture/add.png",
    "order": "asc",
    "formpostion": "top",
    "defaultclass": "io-grey-mode",
    "isCustomize": "1",
    "icourl": "",
    "icopng": ".png",
    "urlformat": "1",
    "customizemax": "10",
    "newWindow": "0",
    "lazyload": "1",
    "minNav": "1",
    "loading": "1",
    "hotWords": "baidu",
    "classColumns": " col-sm-6 col-md-4 col-xl-5a col-xxl-6a ",
    "apikey": ""
};
var localize = {
    "liked": "您已经赞过了!",
    "like": "谢谢点赞!",
    "networkerror": "网络错误 --.",
    "selectCategory": "为什么不选分类。",
    "addSuccess": "添加成功。",
    "timeout": "访问超时，请再试试，或者手动填写。",
    "lightMode": "日间模式",
    "nightMode": "夜间模式",
    "editBtn": "编辑",
    "okBtn": "确定",
    "urlExist": "该网址已经存在了 --.",
    "cancelBtn": "取消",
    "successAlert": "成功",
    "infoAlert": "信息",
    "warningAlert": "警告",
    "errorAlert": "错误",
    "extractionCode": "网盘提取码已复制，点“确定”进入下载页面。"
};