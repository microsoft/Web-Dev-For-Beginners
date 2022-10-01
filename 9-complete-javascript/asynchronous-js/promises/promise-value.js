const fakeRequest = (url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pages = {
                '/users' : "Users pages",
                '/about' : "About page"
            }
            const data = pages[url]
            if(data){                

                resolve(pages[url])
            }
            else{
                reject({status:400})
            }
        },2000)
    })
}

fakeRequest().then((data)=>{
    console.log(data)
}).catch((res)=>{console.log(res.status)})