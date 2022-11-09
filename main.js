const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postContainer = document.getElementById('container');
let clickedPost = [];

for (let i = 0; i < posts.length; i++) {
    const postCard = document.createElement('div');
    postCard.classList.add('post');
    postContainer.append(postCard);
    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    postCard.append(postHeader);
    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.append(postMeta);
    const postIcon = document.createElement('div');
    postIcon.classList.add('post-meta__icon');
    postIcon.innerHTML = `<img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">`
    postMeta.append(postIcon);
    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMetaData.innerHTML = `
        <div class="post-meta__author">Phil Mangione</div>
        <div class="post-meta__time">4 mesi fa</div>
        `;
    postMeta.append(postMetaData);
    const postText = document.createElement('div');
    postText.classList.add('post__text');
    postText.innerHTML = posts[i].content;
    postCard.append(postText);
    const postImage = document.createElement('div');
    postImage.classList.add('post__image');
    postImage.innerHTML = `<img src="${posts[i].media}" alt="">`;
    postCard.append(postImage);
    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    postCard.append(postFooter);
    const postLikes = document.createElement('div');
    postLikes.classList.add('likes');
    postLikes.classList.add('js-likes');
    postCard.append(postLikes);
    const likeDiv = document.createElement('div');
    likeDiv.classList.add('likes__cta');
    postLikes.append(likeDiv);
    const likeBtn = document.createElement('a');
    likeBtn.classList.add('like-button');
    likeBtn.classList.add('js-like-button');
    likeBtn.style.src = "#";
    likeBtn.innerHTML = `
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
    `;
    likeDiv.append(likeBtn);
    const likeNum = document.createElement('div');
    likeNum.classList.add('likes__counter');
    likeNum.innerHTML = `
        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
    `;
    postLikes.append(likeNum);

    postLikes.addEventListener("click", function(){
        likeBtn.style.color = 'green';
        clickedPost.push(posts[i].id);
        console.log(clickedPost);
        posts[i].likes += 1;
        likeNum.innerHTML = `
        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
        `;
        postLikes.append(likeNum);
    });
}

const likes = [];

