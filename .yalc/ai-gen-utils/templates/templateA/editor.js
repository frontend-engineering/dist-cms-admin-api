const { patchData, getSelectedData } = require('./utils.js')
console.log('editor loaded')

async function uploadData(data) {
    return fetch('https://api.webinfra.cloud/cms-admin-api/apps/submitPreviewSite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            siteId: 9,
            slotData: data
        })
    })
    .then(resp => {
        console.log('data uploaded: ', resp)
    })
}

async function aiGen(dataPath) {
    const key = window.localStorage.getItem('access_token')
    return fetch('https://api.webinfra.cloud/cms-admin-api/apps/generatePartialSlotData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`
        },
        body: JSON.stringify({
            siteId: 9,
            path: dataPath
        })
    })
    .then(resp => {
        console.log('data generated: ', resp)
        return resp.json();
    }) 
}

async function getCacheImages(tag, cnt) {
    const key = window.localStorage.getItem('access_token')
    console.log('getting images: ', tag, cnt)
    return fetch(`https://api.webinfra.cloud/cms-admin-api/apps/getRandomImages?tag=${tag}&count=${cnt}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`
        },
    })
    .then(resp => resp.json())
    .then(resp => {
        console.log('resp: ', resp);
        resp.forEach(item => {
            const urls = item.urls;
            Object.entries(urls).map(([key, value]) => {
                if (!value.startsWith('http')) {
                    urls[key] = `https://${value.replace('assets-1306445775.cos.ap-shanghai.myqcloud.com', 'assets.greatermaker.cn')}`
                }
            })
        })
        return resp;
    })
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.webinfra.cloud/cms-admin-api/apps/getRandomImages?tag=${tag}&count=${cnt}`, 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            json:true
        }, (error, resp) => {
            if (error) {
                reject(error)
            } else {
                
            }
        })
    })
}

function cleanUpdateBtn() {
    let existed = document.querySelectorAll('.editor-btn')
    if (existed) {
        existed.forEach(btn => {
            btn.parentElement.removeChild(btn)
        })
    }
}
function setupUpdateBtn() {
    cleanUpdateBtn()
    const btn = document.createElement('button')
    btn.innerText = '重新生成'
    btn.classList.add('editor-btn')
    btn.classList.add('btn')
    btn.addEventListener('click', async () => {
        if (!window.selected?.dataset.slot) {
            return;
        }
        const dataPath = window.selected.dataset.slot;
        console.log('generating new contents', dataPath)
        const rawData = window._raw || getData()

        if (window.selected.dataset.type === 'img' || window.selected.dataset.type === 'bgImg') {
            const imgs = await getCacheImages('technology%20background,industrial,factory,drone', 1);
            const size = window.selected.dataset.size || 'full';
            const path = window.selected.dataset.slot
            const url = imgs[0].urls[size];
            const partial = {
                path,
                data: url
            }
            const rawData = window._raw || getData()
            window._raw = patchData(rawData, partial)
            console.log('global data updated - : ', window._raw)
            if (window.selected.dataset.type === 'img') {
                window.selected.src = url
            } else {
                window.selected.style['backgroundImage'] = `url(${url})`
            }
            return;
        }
        // TODO: data fetch
        const updatedData = await aiGen(dataPath)
        window._raw = updatedData
        const updated = getSelectedData(window._raw, dataPath)
        console.log('global data updated 3 - : ', updated, window._raw)
        window.selected.innerText = updated
    })
    document.body.appendChild(btn)
}

function setupEditable() {
    const elements = document.querySelectorAll('[data-slot]');
    elements.forEach(item => {
        function handleEdit(event) {
            console.log('editing event: ', event)
            if (item.dataset.type === 'img' || item.dataset.type === 'bgImg') {
                return;
            }
            // if (item.getAttribute('nested')) {
            //     window.selected = item
            //     setupUpdateBtn()
            //     console.log('target selected: ', window.selected); 
            // }
            const editedText = event.target.innerHTML;
            console.log('Content was edited:', editedText);
            const path = event.target.dataset.slot
            const partial = {
                path,
                data: editedText
            }
            const rawData = window._raw || getData()
            window._raw = patchData(rawData, partial)
            console.log('global data updated - : ', window._raw)
        }
        if (!(item.dataset.type === 'img' || item.dataset.type === 'bgImg')) {
            item.contentEditable = true;
            item.addEventListener('input', handleEdit);
        }

        item.addEventListener('click', handleSelect);

        function handleSelect(event) {
            event.preventDefault();
            event.stopPropagation();
            // 只支持图片AI update
            if (!(item.dataset.type === 'img' || item.dataset.type === 'bgImg')) {
                event.preventDefault();
                cleanUpdateBtn();
                window.selected = null; 
                return;
            }
            if (item.getAttribute('nested')) {
                window.selected = item
                setupUpdateBtn()
                console.log('target selected: ', window.selected); 
            } else if ((item === event.target)) {
                window.selected = event.target
                setupUpdateBtn()
                console.log('target selected: ', window.selected);
            } else {
                event.preventDefault();
                cleanUpdateBtn();
                window.selected = null;
            }
        } 
 
    })

    document.addEventListener('click', e => {
        e.preventDefault();
        cleanUpdateBtn();
    })
}

function setupDeploy() {
    const btn = document.createElement('button');
    btn.innerText = 'Deploy'
    btn.id = 'deploy-btn'
    btn.classList.add('btn')
    btn.addEventListener('click', e => {
        e.preventDefault();
        const toUpload = {};
        Object.assign(toUpload, window._raw);
        delete toUpload.raw;
        uploadData(toUpload)
    })
    document.body.insertBefore(btn, document.body.firstChild)
}

setupEditable()
setupDeploy()
