module.exports = {

         posts: [
        {id: "Aviso", 
        tittle: "Importante",
        description: "O Mural abaixo foi feito para realizar anotações"},
    ],

    getAll(){
        return this.posts;
    },

    newPost(tittle,description){

        this.posts.push({id:generateID(), tittle, description})

    },



}

function generateID(){
    return Math.random().toString(36).substring(2,9);
}