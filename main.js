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

let likedPosts = [];

posts.forEach(post => {

    if (post.author.image === null) {
        post.author.image = getNameInitials(post.author.name);
    }

    post.created = dateFormatToItalian(post.created);
    createPost('container', post.author.image, post.created, post.author.name, post.content, post.media, post.likes, addElement, addElementNoClass);
})

const likeButtons = document.querySelectorAll('.js-like-button');
const likesCount = document.querySelectorAll('.js-likes-counter');

likeButtons.forEach((likeButton, index) => {

    likeButton.addEventListener('click', () => {

        if (likeButton.classList.contains('like-button--liked')) {
            posts[index].likes--;
            likesCount[index].innerHTML = posts[index].likes;
            likeButton.classList.remove('like-button--liked')

        } else {
            posts[index].likes++;
            likesCount[index].innerHTML = posts[index].likes;
            likeButton.classList.add('like-button--liked');
        }

        if (!likedPosts.includes(posts[index].id)) {
            likedPosts.push(posts[index].id);

        } else {
            const indexToRemove = likedPosts.indexOf(posts[index].id);
            if (indexToRemove !== -1) {
                likedPosts.splice(indexToRemove, 1);
            }
        }

        if (likedPosts.length === 0) {
            console.log('Non hai messo "Mi Piace" ad alcun post.')

        } else {
            console.log('ID dei post ai quali hai messo "Mi Piace": ' + likedPosts);
        }
    });
});


/* FUNCTIONS */

/**
 * This function dynamically creates a post inside the chosen container, populating it with information taken from an array of objects. If the property profilePicSource is === 2, it means that the user does not have a profile picture and the string is only made by two letters, his name initials. In this case, it will generated a div containing a span containing the text.
 * @param {*} postsContainer The container in which the post will be created.
 * @param {*} profilePicSource The url of the user profile pic.
 * @param {*} dataSource The date of publication of the post.
 * @param {*} authorNameSource The name of the author.
 * @param {*} textSource The article content.
 * @param {*} imageSource The article image.
 * @param {*} likeSource The number of likes.
 * @param {*} addElement A function that creates elements into the DOM.
 * @param {*} addElementNoClass A function that creates elements into the DOM. It's identical to addElement, but it doesn't add a class to the element.
 */
function createPost(postsContainer, profilePicSource, dataSource, authorNameSource, textSource, imageSource, likeSource, addElement, addElementNoClass) {
    const postsList = document.getElementById(postsContainer);
    const post = addElement('div', '', 'post', postsList);
    const postHeader = addElement('div', '', 'post__header', post);
    const postMeta = addElement('div', '', 'post-meta', postHeader);
    const postMetaIcon = addElement('div', '', 'post-meta__icon', postMeta);

    if (profilePicSource.length === 2) {
        const profilePicDefaultDiv = addElement('div', '', 'profile-pic-default', postMetaIcon)
        const profilePicDefault = addElement('span', profilePicSource, 'profile-pic-initials', profilePicDefaultDiv);
    } else {
        const profilePic = addElement('img', '', 'profile-pic', postMetaIcon).src = profilePicSource;
    }

    const postMetaData = addElement('div', '', 'post-meta__data', postMeta);
    const postMetaAuthor = addElement('div', authorNameSource, 'post-meta__author', postMetaData);
    const postMetaTime = addElement('div', dataSource, 'post-meta__time', postMetaData);
    const postText = addElement('div', textSource, 'post__text', post);
    const postImage = addElement('div', '', 'post__image', post);
    const postImageElement = addElementNoClass('img', '', postImage).src = imageSource;
    const postFooter = addElement('div', '', 'post__footer', post);
    const likes = addElement('div', '', 'likes', postFooter);
    likes.classList.add('js-likes');
    const likesCta = addElement('div',
    `<a class="like-button  js-like-button" href="#" onclick="return false;" data-postid="1">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span></a>`,
    'likes__cta', likes);
    const likesCounter = addElement('div',
    `Piace a <b id="like-counter-1" class="js-likes-counter">${likeSource}</b> persone`,
    'likes__counter', likes);
}

/**
 * This function formats a data into the italian format (example 01/01/2000).
 * @param {*} dateToFormat The date you want to format.
 * @returns The formatted date.
 */
function dateFormatToItalian(dateToFormat) {
    const date = new Date(dateToFormat);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

/**
 * This function, starting from a string containing a first and last name separated by an empty space, returns the two initials.
 * @param {*} name The name whose initials you want to get. It is necessary that name and surname are separated by an empty space (for example Vito Pizzulli).
 * @returns The name's inizials.
 */
function getNameInitials(name) {
    const nameToSplit = name;
    const nameSplit = name.split(" ");
    const nameInitials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    return nameInitials;
}

/**
 * This function creates into the DOM a new element of the chosen type and class, with the chosen text, and adds it at the end of the selected container.
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

/**
 * This function creates an html element of the chosen type, with the chosen text, and adds it at the end of the selected container.
 * @param {*} type The type of html element that will be created. 
 * @param {*} innerText The text that the created element will have inside.
 * @param {*} container The container at the end of which the element will be added.
 */
function addElementNoClass(type, innerText, container) {
    const element = document.createElement(type);
    element.innerHTML = innerText;
    container.append(element);
    return element;
}