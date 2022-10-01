const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Tushar' },
                    { id: 5, username: 'Rahul' }
                ],
                '/users/1': {
                    id: 1,
                    username: 'Tushar',
                    country: 'India',
                    work: 'Noida',
                    role: 'Software Engineer',
                    postid: 54
                },
                '/users/5': {
                    id: 5,
                    username: 'Rahul',
                    country: 'India',
                    work: 'Noida',
                    role: 'DevOps Engineer'
                },
                '/posts/54': {
                    id: 54,
                    title: 'My new Post',

                },
                '/about': "About page"
            }

            const data = pages[url]
            if (data) {
                resolve(pages[url])
            }
            else {
                reject({ status: 400 })
            }
        }, 2000)
    })
}

// fakeRequest('/users').then((data)=>{
//     let id = data[0].id;
//     fakeRequest(`/users/${id}`).then((data)=>{
//         console.log(data)
//     })

// })
fakeRequest('/users').then((data) => {
    let id = data[0].id;
    return fakeRequest(`/users/${id}`)
})
    .then((data) => {
        // console.log(data)
        let postid = data.postid;
        return fakeRequest(`/posts/${postid}`)
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => { console.log(err) })