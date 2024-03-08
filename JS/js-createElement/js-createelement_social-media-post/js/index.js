console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const postArticle = document.createElement("article");
postArticle.className = "post";

const postContent = document.createElement("p");
postContent.className = "post__content";
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
postArticle.appendChild(postContent);

const postFooter = document.createElement("footer");
postFooter.className = "post__footer";

const postUsername = document.createElement("span");
postUsername.className = "post__username";
postUsername.textContent = "@username";
postFooter.appendChild(postUsername);

const postButton = document.createElement("button");
postButton.type = "button";
postButton.className = "post__button";
postButton.setAttribute("data-js", "like-button");
postButton.textContent = "♥ Like";
postButton.addEventListener("click", handleLikeButtonClick);
postFooter.appendChild(postButton);

postArticle.appendChild(postFooter);

document.body.appendChild(postArticle);
