
// ======= utils ========


const patchData = (data, partial) => {
    let ref = null;
    let key = null;
    const legacyData = partial.path.split('.').reduce((curData, path) => {
        ref = curData;
        key = (Number(path) >= 0) ? Number(path) : path;
        if (Number(path) >= 0) {
            const idx = Number(path)
            console.log('setup cur ', idx, partial.data, curData)
            return curData[idx]
        }
        console.log('setup cur ', partial.data, curData)
        return curData[path]
    }, data);

    console.log('get legacy data: ', legacyData)
    if (legacyData) {
        if (typeof legacyData === 'object') {
            Object.assign(legacyData, partial.data)
        } else {
            ref[key] = partial.data
        }
    }
    const raw = JSON.stringify(data)
    data.raw = raw;
    return data;
}

module.exports = {
    patchData
}