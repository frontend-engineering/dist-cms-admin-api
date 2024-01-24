function convertToBlob(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(Error('Request failed. Error code: ' + xhr.status));
            }
        };
        xhr.onerror = function () {
            reject(Error('There was a network error.'));
        };
        xhr.send();
    });
}

function loadEditor() {
    const script = document.createElement('script');
    script.src = './assets/js/editor.bundle.js'
    document.head.appendChild(script)
}
function run() {
    // 获取div元素的引用
    var divElement = document.getElementById('banner');
    const backgroundImageUrl = window.getComputedStyle(divElement).backgroundImage.slice(4, -1).replace(/"/g, "");
    console.log('run startup...', backgroundImageUrl)
    convertToBlob(backgroundImageUrl)
        .then(function (blob) {
            // 在这里可以使用新的image元素引用进行进一步操作
            // 创建canvas元素
            var canvas = document.createElement('canvas');
            canvas.width = divElement.offsetWidth;
            canvas.height = divElement.offsetHeight;

            // 获取canvas的2d上下文
            var ctx = canvas.getContext('2d');

            // 将div元素的背景图片复制到canvas上
            var backgroundImage = new Image();
            backgroundImage.src = URL.createObjectURL(blob);
            backgroundImage.onload = function () {
                console.log('background img loaded')
                ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

                const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

                let r = 0, g = 0, b = 0;

                for (let i = 0; i < pixels.data.length; i += 4) {
                    r += pixels.data[i];
                    g += pixels.data[i + 1];
                    b += pixels.data[i + 2];
                }

                const averageR = r / pixels.data.length;
                const averageG = g / pixels.data.length;
                const averageB = b / pixels.data.length;

                console.log('rgb - ', averageR, averageG, averageB)
                const brightness = averageR * 0.3 + averageG * 0.59 + averageB * 0.11;
                let isDark = false;
                if (brightness < 128) {
                    // 深色
                    console.log('dark ', brightness)
                    isDark = true;
                } else {
                    // 浅色 
                    console.log('light ', brightness)
                    isDark = false;
                }
                const node = document.getElementById('banner-txt')
                node.classList.add(isDark ? 'text-white' : 'text-black')
                // 将canvas元素添加到页面中
                // document.body.appendChild(canvas);
            };
        })
        .catch(function (error) {
            console.log(error);
        });
    
    if ((window.location.href.startsWith('file://')) || (window.location.search.indexOf('editor_mode') > -1)) {
        loadEditor()
    }
}

function getBannerPlatteCss() {
     // 获取div元素的引用
     var divElement = document.getElementById('banner');
     const url = window.getComputedStyle(divElement).backgroundImage.slice(4, -1).replace(/"/g, "");
    // https://images.unsplash.com/photo-1516216628859-9bccecab13ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDYzNTl8MHwxfHNlYXJjaHw2fHxpbmR1c3RyeS00LjB8ZW58MHx8fHwxNzA0MTc5OTk2fDA&ixlib=rb-4.0.3&q=85&txt=HELLO%20WORLD&txt-size=48&txt-font=Futura%20Condensed%20Medium&txt-align=left,middle&txt-shad=8.5&&palette=css&colors=4
    fetch(url + '&palette=css&colors=4&prefix=banner')
    .then(resp => {
        return resp.text()
    })
    .then(data => {
        const styleNode = document.createElement('style')
        styleNode.innerHTML = data;
        document.head.appendChild(styleNode);
    })
}

function getData() {
    try {
        const data = JSON.parse(document.body.dataset.raw)
        console.log('got data: ', data);
        window._raw = data;
        return data;
    } catch (error) {
        console.error('get raw data failed: ', error)
    }
}


setTimeout(() => {
    run()
    getBannerPlatteCss()
    getData()
}, 300)
