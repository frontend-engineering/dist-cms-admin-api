const nano = require('nanoid')
const fse = require('fs-extra');
const { getImages } = require('./images.cjs')

// const { callBridge } = require('./ChatServiceBridge');
// const { chat } = require('./yiyan')
const { chat } = require('./gemini.cjs')

const state0Data  = {
    companyName: '广东农飞科技有限公司',
    description: "广东农飞科技有限公司是一家专注于生产五金制品、农用无人机以及消防无人机等产品的公司。我们的产品不仅销售国内，还出口到多个海外国家。我们的“NFLY名飞”品牌农用植保无人机是我们的主打产品，主要应用于农作物的打药、施肥、播种等农业作业。我们致力于自主研发和生产新农业发展需求配套的创新型植保无人机，为农业现代化和高效化做出努力。",
    contact: {
        "address": "广东省东莞市凤岗镇校塘路56号",
        "phone": "13530982832",
        "email": "ntf_nfly@163.com"
    },
    icp: '粤ICP备2022155707号',
}

const state1Data = {
    "companyName": "广东农飞科技有限公司",
    "slogan": "创新农业，智慧未来",
    "description": "广东农飞科技有限公司是一家专注于生产五金制品、农用无人机以及消防无人机等产品的公司。我们的产品不仅销售国内，还出口到多个海外国家。我们的“NFLY名飞”品牌农用植保无人机是我们的主打产品，主要应用于农作物的打药、施肥、播种等农业作业。我们致力于自主研发和生产新农业发展需求配套的创新型植保无人机，为农业现代化和高效化做出努力。",
    "vision": "引领农业科技发展，提升农业生产效率",
    "keywords": {
        "智能化农业": "通过技术创新和智能化手段，提供高效的农业解决方案，推动农业现代化",
        "自主研发": "持续投入研发，提供先进的农用植保无人机技术，满足市场需求",
        "可靠安全": "严格质量控制，使用先进的飞行控制和安全技术，确保产品的可靠性和安全性"
    },
    "products": [
        {
            "name": "名飞纯电无人机（T系列）",
            "description": "适用于农作物的打药、施肥等农业作业，具备高效的飞行控制和精准的喷洒功能。"
        },
        {
            "name": "名飞油电混合无人机（F系列）",
            "description": "适用于农作物的打药、施肥等农业作业，具备高效的飞行控制和精准的喷洒功能。"
        },
        {
            "name": "名飞植保无人机其他型号",
            "description": "包括16KG、20KG、30KG、40KG、50KG等不同载重量的机型。我们的主销产品型号为T30、T20和F20。同时，我们的新品F30和T40即将上市。"
        }
    ],
    "news": [
        {
            "name": "ABC农场",
            "manager": "张先生",
            "contents": "使用名飞植保无人机，我农田的作物产量显著提高，同时还减少了化学药物的使用，非常满意！"
        },
        {
            "name": "XYZ农业科技公司",
            "manager": "李女士",
            "contents": "名飞植保无人机操作简单，喷洒效果非常均匀，我推荐给了很多同行，并得到了一致好评。"
        },
        {
            "name": "123农业供应商",
            "manager": "王先生",
            "contents": "名飞植保无人机的质量非常可靠，售后服务也非常及时，我对合作结果非常满意。"
        }
    ],
}

const prompt = `你是一个专业的高级互联网产品经理，熟悉公司产品和业务，网络营销经验丰富，现在要为公司撰写官网的文案，你需要根据后面提供的公司信息，设计官方网站展示的文字内容，重点突出公司的专业性，使得内容对客户有吸引力。
包含：slogan，公司介绍description，公司愿景vision，三个核心特性keywords（包含详细描述），三个产品products（包含描述和缠绵名称）以及合作伙伴反馈案例news等：
* slogan = 首页banner一句话的slogan - 10 ～ 30 字左右
* description = 公司介绍 - 100字 ～ 300字左右的一段话，突出公司竞争优势
* vision = 公司核心理念（20～50字左右）
* keywords = 三个公司发展理念的关键词keyword，重点突出公司的专业能力和核心理念，每个关键词keyword包含一个50字左右的详细描述description
* products = 三个公司核心产品介绍，包括产品名称name，产品描述description（100字以内）
* news = 客户反馈，三个来自合作公司的良好反馈的案例，包含合作公司名称name(公司名字要真实)/公司负责人manager/反馈的具体内容contents（300字左右）
不需要任何其他额外解释，直接以json形式给出设计好的文案内容，请注意结果不要用markdown，而是json格式,json的key使用上面对应字段的英文，并重新检查一下json格式的内容正确性，确保结果是一个合理正确的json。`

// Call OpenAI API to generate descriptive contents
const generate = async function (question, withCache) {
    let msgId
    let convId
    try {
        if (withCache) {
            const cached = await fse.readJson('./.ai.json')
            .then(data => {
                // use data
                msgId = data?.messageId
                convId = data?.conversationId
                return data;
            });
            if (cached) {
                return cached;
            }
        }
    } catch (error) {
        console.error('ai meta data not cached')
    }

    // 向云服务发起调用
    try {
        // const callRes = await callBridge({
        //     data: {
        //         message: prompt + '\n' + question,
        //         parentMessageId: msgId,
        //         conversationId: convId,
        //         // prompt: prompt
        //     },
        //     // onmessage,
        //     // onopen,
        //     // onclose,
        //     onerror: (err) => {
        //         console.error('error caught: ', err)
        //     },
        //     debug: true
        // })

        const result = await chat(prompt + "\\n以下是公司信息：" + question)
        // console.log('client stream result: ', result);
        // const { result, messageId, conversationId, is_truncated } = callRes || {}

        // if (messageId) {
        //     msgId = messageId
        // }
        // if (conversationId) {
        //     convId = conversationId
        // }

        // Persist request feedback to mysql

        return {
            data: result
        }
    } catch (error) {
        console.error('call service error: ', error);
    }
}

const adapter = (initData, companyInfo) => {
    // test init data
    if (!initData) {
        throw new Error('Please input valid init data')
    }
    const { companyName, slogan, description, vision, keywords, products, news, contact, icp } = Object.assign(initData, companyInfo || {})

    if (!companyName || !slogan || !description || !keywords || !products || !(news) || !contact || !icp) {
        throw new Error('invalid init data')
    }

    let featList = []
    if (Array.isArray(keywords)) {
        featList = keywords.map(item => ({
           title: item.title || item.keyword,
           desc: item.desc || item.description
        }))
    } else if (typeof keywords === 'object' && keywords) {
        for (const attr in keywords) {
            if (keywords.hasOwnProperty(attr)) {
                featList.push({
                    title: attr,
                    desc: keywords[attr]
                })
                const t = {
                    title: attr,
                    desc: keywords[attr]
                }
            }
        }
    }

    // TODO: Add image urls
    let productList = []
    if (Array.isArray(products)) {
        productList.push(...(products.map(item => ({
            title: item.name || item.title,
            desc: item.desc || item.description,
            image: item.image
        }))))
    } else if (typeof products === 'object' && products) {
        for (const attr in products) {
            if (products.hasOwnProperty(attr)) {
                const item = products[attr]
                if (typeof item === 'object' && item) {
                    productList.push({
                        title: item.name || item.title || item['名称'],
                        desc: item.desc || item.description || item['描述'],
                    })
                } else {
                    productList.push({
                        title: attr,
                        desc: products[attr]
                    })
                }
            }
        }
    }

    // TODO: Add image urls
    let newsList = []
    if (Array.isArray(news)) {
        newsList.push(...(news.map((item, index) => ({
            index: index,
            title: item.name || item.title || item['合作公司名称'],
            desc: item.desc || item.description || item.manager || item['公司负责人'],
            image: item.image,
            txt: item.txt || item.contents || item['反馈内容']
        }))))
    } else if (typeof news === 'object' && news) {
        let index = 0;
        for (const attr in news) {
            if (news.hasOwnProperty(attr)) {
                const item = news[attr]
                if (typeof item === 'object' && item) {
                    newsList.push({
                        index: index++,
                        title: item.name || item.title || item['合作公司名称'],
                        desc: item.desc || item.description || item.manager || item['公司负责人'],
                        image: item.image,
                        txt: item.txt || item.contents || item['反馈内容']
                    })
                } else {
                    newsList.push({
                        index: index++,
                        title: attr,
                        txt: news[attr]
                    })
                }
            }
        }
    }
    if (newsList[0]) {
        newsList[0].active = true;
    }

    return {
        "id": nano.nanoid(),
        "title": `${companyName} - turbosite.cloud`,
        "companyName": companyName,
        "banner": {
            "image": "http://ntfkj.com/data/pad/pad_thumb/1682570554395752172.jpg"
        },
        "links": [{
            "name": "关于",
            "href": "#about"
        }, {
            "name": "愿景",
            "href": "#feature"
        }, {
            "name": "产品",
            "href": "#products"
        }],
        "hero": {
            "title": companyName,
            "desc": slogan
        },
        "about": {
            "about": `关于`,
            "title": `关于${companyName}`,
            "content": description,
            "more": "Learn more"
        },
        "feature": {
            "title": "信任铸就成绩",
            "desc": vision || slogan,
            "list": featList
        },
        "products": {
            "title": "产品",
            "desc": "一切以用户为中心",
            "list": productList
        },
        "news": {
            "news": "新闻中心",
            "desc": "What Our Customers Say About Us",
            "list": newsList
        },
        "contact": {
            "contact": "Contact Us",
            "address": contact.address,
            "phone": contact.phone,
            "email": contact.email
        },
        "footer": {
            "txt": slogan || vision,
            "icp": icp,
            "icpLink": "http://beian.miit.gov.cn/"
        }
    }
}

const mockCompanyInfo  = {
    companyName: '广东农飞科技有限公司',
    description: "广东农飞科技有限公司是一家专注于生产五金制品、农用无人机以及消防无人机等产品的公司。我们的产品不仅销售国内，还出口到多个海外国家。我们的“NFLY名飞”品牌农用植保无人机是我们的主打产品，主要应用于农作物的打药、施肥、播种等农业作业。我们致力于自主研发和生产新农业发展需求配套的创新型植保无人机，为农业现代化和高效化做出努力。",
    contact: {
        "address": "广东省东莞市凤岗镇校塘路56号",
        "phone": "13530982832",
        "email": "ntf_nfly@163.com"
    },
    icp: '粤ICP备2022155707号',
}


const aiData = async (companyInfo, withCache) => {
    const desc = companyInfo.description
    return generate(desc, withCache)
    .then(data => {
        return fse.writeJson('.ai.json', data, { spaces: 2 })
            .then(() => {
                console.log('Write success!');
                return data;
            })
            .catch(err => {
                console.error(err);
            });
    })
    .then(data => {
        if (typeof data.data === 'string') {
            throw new Error('data format error')
        }
        return adapter(data.data, companyInfo)
    })
    .then(data => {
        // console.log('final data: ', data)
        return data;
    })
}

function setUnsplashImageParams(url, options) {
    // Create search params object
    const [base, s] = url.split('?')
    const params = new URLSearchParams('?' + s);
  
    // Add default fit parameter 
    params.set('fit', options.fit || 'crop');
  
    // Add width if provided
    if(options.width) {
      params.set('w', options.width);
    }
  
    // Add height if provided  
    if(options.height) {
      params.set('h', options.height); 
    }
  
    // Add any other custom params
    if(options.customParams) {
      Object.entries(options.customParams).forEach(([key, value]) => {
        params.append(key, value);
      });
    }
  
    // Return url with search params
    return `${base}?${params.toString()}`;
  }
  

const generateData = async (companyInfo) => {
    return Promise.all([aiData(companyInfo, process.env.WithCache), getImages(8)])
        .then(([data, images]) => {
            // Inserts images
            // if (!data.banner?.image) {
            //     data.banner.image = images[0]?.full
            // }
            data.banner.image = images[0]?.full
            data.about.image = images[1]?.full;
            let imgIdx = 2
            data.products.list.forEach((item) => {
                item.image = setUnsplashImageParams(images[imgIdx++]?.regular, {
                    width: 600,
                    height: 450
                })
            })

            data.news.list.forEach((item) => {
                item.image = setUnsplashImageParams(images[imgIdx++]?.regular, {
                    width: 360,
                    height: 360
                })
            })
            return data;
        })
}

module.exports = {
    generateData,
    aiData,
    generate,
    adapter
}