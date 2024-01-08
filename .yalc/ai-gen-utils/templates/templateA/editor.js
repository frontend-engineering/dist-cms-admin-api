const { patchData } = require('./utils.js')
console.log('editor loaded')

function uploadData(data) {
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

function aiGen(dataPath) {
    const key = window.localStorage.getItem('tmp_key')
    return fetch('https://api.webinfra.cloud/cms-admin-api/apps/generatePartialSlotData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authrozation: `Bearer ${key}`
        },
        body: JSON.stringify({
            siteId: 9,
            path: dataPath
        })
    })
    .then(resp => {
        console.log('data generated: ', resp)
        return resp;
    }) 
}

function setupEditable() {
    const elements = document.querySelectorAll('[data-slot]');
    elements.forEach(item => {
        item.contentEditable = true
        item.addEventListener('input', handleEdit);
        const btn = document.createElement('button')
        btn.innerText = 'update'
        btn.classList.add('editor-btn')
        btn.addEventListener('click', () => {
            console.log('generating new contents', item.dataset.slot)
            handleAiPatch(item.dataset.slot)
        })
        item.parentNode.insertBefore(btn, item)

        function handleEdit(event) {
            const editedText = event.target.textContent;
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
        function handleAiPatch(dataPath) {
            const rawData = window._raw || getData()

            // TODO: data fetch
            const updatedData = aiGen(dataPath)
            window._raw = updatedData
            console.log('global data updated 2 - : ', window._raw)
        }
    })
}

function setupDeploy() {
    const btn = document.createElement('button');
    btn.innerText = 'Deploy'
    btn.id = 'deploy-btn'
    btn.addEventListener('click', e => {
        e.preventDefault();
        uploadData(window._raw)
    })
    document.body.insertBefore(btn, document.body.firstChild)
}

setupEditable()
setupDeploy()
