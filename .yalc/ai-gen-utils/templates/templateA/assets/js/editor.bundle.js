(function () {
    'use strict';

    // ======= utils ========

    const patchData$1 = (data, partial) => {
      let ref = null;
      let key = null;
      const legacyData = partial.path.split('.').reduce((curData, path) => {
        ref = curData;
        key = Number(path) >= 0 ? Number(path) : path;
        if (Number(path) >= 0) {
          const idx = Number(path);
          console.log('setup cur ', idx, partial.data, curData);
          return curData[idx];
        }
        console.log('setup cur ', partial.data, curData);
        return curData[path];
      }, data);
      console.log('get legacy data: ', legacyData);
      if (legacyData) {
        if (typeof legacyData === 'object') {
          Object.assign(legacyData, partial.data);
        } else {
          ref[key] = partial.data;
        }
      }
      const raw = JSON.stringify(data);
      data.raw = raw;
      return data;
    };
    function getSelectedData$1(data, dataPath) {
      return dataPath.split('.').reduce((curData, path) => {
        const key = Number(path) >= 0 ? Number(path) : path;
        return curData[key];
      }, data);
    }
    var utils = {
      patchData: patchData$1,
      getSelectedData: getSelectedData$1
    };

    const {
      patchData,
      getSelectedData
    } = utils;
    console.log('editor loaded');
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
      }).then(resp => {
        console.log('data uploaded: ', resp);
      });
    }
    async function aiGen(dataPath) {
      const key = window.localStorage.getItem('tmp_key');
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
      }).then(resp => {
        console.log('data generated: ', resp);
        return resp.json();
      });
    }
    function cleanUpdateBtn() {
      let existed = document.querySelectorAll('.editor-btn');
      if (existed) {
        existed.forEach(btn => {
          btn.parentElement.removeChild(btn);
        });
      }
    }
    function setupUpdateBtn() {
      cleanUpdateBtn();
      const btn = document.createElement('button');
      btn.innerText = '重新生成';
      btn.classList.add('editor-btn');
      btn.classList.add('btn');
      btn.addEventListener('click', async () => {
        if (!window.selected?.dataset.slot) {
          return;
        }
        const dataPath = window.selected.dataset.slot;
        console.log('generating new contents', dataPath);
        window._raw || getData();

        // TODO: data fetch
        const updatedData = await aiGen(dataPath);
        window._raw = updatedData;
        const updated = getSelectedData(window._raw, dataPath);
        console.log('global data updated 3 - : ', updated, window._raw);
        window.selected.innerText = updated;
      });
      document.body.appendChild(btn);
    }
    function setupSelected() {
      const elements = document.querySelectorAll('[data-slot]');
      elements.forEach(item => {
        item.addEventListener('click', handleSelect);
        function handleSelect(event) {
          event.preventDefault();
          event.stopPropagation();
          console.log('target selected: ', event.target);
          window.selected = event.target;
          setupUpdateBtn();
        }
      });
      document.addEventListener('click', e => {
        e.preventDefault();
        cleanUpdateBtn();
      });
    }
    function setupEditable() {
      const elements = document.querySelectorAll('[data-slot]');
      elements.forEach(item => {
        item.contentEditable = true;
        item.addEventListener('input', handleEdit);
        item.addEventListener('click', handleSelect);
        function handleSelect(event) {
          event.preventDefault();
          console.log('target selected: ', event.target);
          window.selected = event.target;
        }
        function handleEdit(event) {
          const editedText = event.target.textContent;
          console.log('Content was edited:', editedText);
          const path = event.target.dataset.slot;
          const partial = {
            path,
            data: editedText
          };
          const rawData = window._raw || getData();
          window._raw = patchData(rawData, partial);
          console.log('global data updated - : ', window._raw);
        }
      });
    }
    function setupDeploy() {
      const btn = document.createElement('button');
      btn.innerText = 'Deploy';
      btn.id = 'deploy-btn';
      btn.classList.add('btn');
      btn.addEventListener('click', e => {
        e.preventDefault();
        uploadData(window._raw);
      });
      document.body.insertBefore(btn, document.body.firstChild);
    }
    setupEditable();
    setupDeploy();
    setupSelected();
    var editor = {};

    return editor;

})();
