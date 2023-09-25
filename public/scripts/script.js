
document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts();
})

function updatePosts(){

        fetch("http://192.168.200.3:3000/api/all").then(res=>{
        return res.json()
    }).then(json=>{
    

        let postElements = '';
        
        let posts = JSON.parse(json);
        posts.forEach((post) =>{
            let postElement = ` <div id=${post.id} class="card mb-4">
            <div class="card-header">
                <h5 class="cardtittle">${post.tittle}</h5>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description}</div>
            </div>`
            postElements += postElement
        })

        document.getElementById("posts").innerHTML = postElements;

    })

}

function newPost(){

    console.log("New Post")

    let tittle = document.getElementById("tittle").value;
    let description = document.getElementById("desc").value;

    let post = {tittle, description};

    const options = {method:"POST",
                    headers: new Headers({'content-type': 'application/json'}),
                    body: JSON.stringify(post)}
                    


    fetch("http://192.168.200.3:3000/api/new", options).then(res=>{
        console.log(res);
        updatePosts();
        document.getElementById("tittle").value = "";
        document.getElementById("desc").value = "";
    })


}