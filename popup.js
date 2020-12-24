// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function (data) {
// changeColor.style.backgroundColor = data.color;
// changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function (event) {
//     let color = event.target.value;
//     chrome.tabs.query({}, function (tabs) {
//         console.log('tabs: ', tabs);
//         chrome.tabs.executeScript(tabs[0].id, {
//             code: 'document.body.style.background = "' + color + '";',
//         });
//     });
// };

// 寻找到“收集数据”的按钮
const collectButton = document.querySelector('.scrape');
// 给按钮添加 handler 来打开数据源页面
collectButton.addEventListener('click', () => {
    console.log(chrome.tabs);
    chrome.tabs.create({
        url: `http://vip.stock.finance.sina.com.cn/moneyflow/#sczjlx`,
    });
    chrome.tabs.create({
        url: `http://data.eastmoney.com/bkzj/hy.html`,
    });
});
