const { patchData, getSelectedData } = require('./utils.js')
console.log('editor loaded')
// 本地编辑
if (!window.getAccessToken) {
    window.getAccessToken = async () => {
        return localStorage.getItem('access_token')
    }
}

async function uploadData(data) {
    const siteId = document.body.dataset.site;
    const key = await window.getAccessToken()
    return fetch('https://api.webinfra.cloud/cms-admin-api/apps/submitPreviewSite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`
        },
        body: JSON.stringify({
            siteId: Number(siteId),
            slotData: data
        })
    })
    .then(resp => {
        console.log('data uploaded: ', resp)
        alert('发布成功')
    })
}

async function aiGen(dataPath) {
    const key = await window.getAccessToken()
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

async function delCacheImage(unsplashId) {
    // {{url}}/data/image_libraries/1
    // https://assets-1306445775.cos.ap-shanghai.myqcloud.com/images/unsplash-photo-1536632856133-3a3441454dd5-full.jpeg
    const key = await window.getAccessToken()
    return fetch(`https://api.webinfra.cloud/cms-admin-api/data/image_libraries/query`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`
        },
        body: JSON.stringify({
            "filter": [
                "AND",
                {
                    "unsplashId": {
                        "eq": unsplashId
                    }
                }
            ],
            "fields": {
                "imageLibrary": "id"
            }
        })
    })
    .then(resp => resp.json())
    .then(resp => {
        const found = resp?.data && resp.data[0];
        return found?.id;
    })
    .then(id => {
        if (!id) {
            return;
        }
        return fetch(`https://api.webinfra.cloud/cms-admin-api/data/image_libraries/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${key}`
            },
        })
        .then(resp => resp.json())
    })    
}

async function getCacheImages(tag, cnt) {
    const key = await window.getAccessToken()
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
function getUnsplashIdFromUrl(imgUrl) {
    const subkeys = imgUrl.split('/').pop().split('.')[0].split('-');
    subkeys.shift()
    subkeys.pop()
    return subkeys.join('-')
}

function cleanDelBtn() {
    let existed = document.querySelectorAll('.del-img-btn')
    if (existed) {
        existed.forEach(btn => {
            btn.parentElement.removeChild(btn)
        })
    }
}

function setupDelImgBtn() {
    cleanDelBtn()
    const btn = document.createElement('button')
    btn.innerText = '删除照片'
    btn.classList.add('del-img-btn')
    btn.classList.add('btn')
    btn.addEventListener('click', async () => {
        if (!window.selected?.dataset.slot) {
            return;
        }
        const dataPath = window.selected.dataset.slot;
        console.log('delete image', dataPath)
        const rawData = window._raw || getData()

        if (window.selected.dataset.type === 'img' || window.selected.dataset.type === 'bgImg') {
            // Del image
            const unsplashId = getUnsplashIdFromUrl((window.selected.dataset.type === 'img') ? window.selected.src : window.selected.dataset.url)
            await delCacheImage(unsplashId)
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
                cleanDelBtn();
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
                setupDelImgBtn()
                console.log('target selected: ', window.selected);
            } else {
                event.preventDefault();
                cleanUpdateBtn();
                cleanDelBtn()
                window.selected = null;
            }
        } 
 
    })

    document.addEventListener('click', e => {
        e.preventDefault();
        cleanUpdateBtn();
        cleanDelBtn();
    })
}

function setupDeploy() {
    const btn = document.createElement('button');
    btn.innerText = '发布'
    btn.id = 'deploy-btn'
    btn.classList.add('btn')
    btn.addEventListener('click', e => {
        e.preventDefault();
        // const toUpload = {};
        // Object.assign(toUpload, window._raw);
        // delete toUpload.raw;
        uploadData(window._raw)
    })
    document.body.insertBefore(btn, document.body.firstChild)
}

setupEditable()
setupDeploy()
