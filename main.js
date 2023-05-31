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

createPost('container');

function createPost(postsContainer, profilePicSource, dataSource, authorSource, textSource, imageSource, likeSource) {
    const postsList = document.getElementById(postsContainer);
    const post = addElement('div', '', 'post', postsList);
    const postHeader = addElement('div', '', 'post__header', post);
    const postMeta = addElement('div', '', 'post-meta', postHeader);
    const postMetaIcon = addElement('div', '', 'post-meta__icon', postMeta);
    const profilePic = addElement('img', '', 'profile-pic', postMetaIcon).src(profilePicSource);
    const postMetaData = addElement('div', dataSource, 'post-meta__data', postMeta);
    const postMetaAuthor = addElement('div', authorSource, 'post-meta__author', postMetaData);
    const postMetaTime = addElement('div', '', 'post-meta__time', postMetaData);
    const postText = addElement('div', textSource, 'post__text', post);
    const postImage = addElement('img', '', '', post).src(imageSource);
    const postFooter = addElement('div', '', 'post__footer', post);
    const likes = addElement('div', '', 'likes', postFooter);
    likes.classList.add('js-likes');
    const likesCta = addElement('div', `<a class="like-button  js-like-button" href="#" data-postid="1"><i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i><span class="like-button__label">Mi Piace</span></a>`, 'likes__cta', likes);
    const likesCounter = addElement('div', `Piace a <b id="like-counter-1" class="js-likes-counter">${likeSource}</b> persone`, 'likes__counter', likes);
}

/* FUNCTIONS */

/**
 * This function creates an html element of the chosen type and class, with the chosen text, and adds it at the end of the selected container.
 * @param {*} type The type of html element that will be created. 
 * @param {*} innerText The text that the created element will have inside.
 * @param {*} class The name of the class that will be added to the created element.
 * @param {*} container The container at the end of which the element will be added.
 */
function addElement(type, innerText, elementClass, container) {
    const element = document.createElement(type);
    element.innerHTML = innerText;
    element.classList.add(elementClass);
    container.append(element);
    return element;
}