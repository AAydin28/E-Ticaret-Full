const commentReviewsFunc = function () {
  const commentStarsDOM = document.querySelectorAll(".comment-form-rating .star");
  let selectedRating = 0;

  commentStarsDOM.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      selectedRating = index + 1;

      // Tüm yıldızları sıfırla
      commentStarsDOM.forEach((star) => star.classList.remove("active"));

      // Seçilen yıldıza kadar olanları aktif yap
      for (let i = 0; i <= index; i++) {
        commentStarsDOM[i].classList.add("active");
      }
    });
  });

  return () => selectedRating; // seçilen puanı döndür
};

const addNewCommentFunc = (getSelectedRating) => {
  let comments = [];
  const commentTextDOM = document.getElementById("comment-text");
  const commentNameDOM = document.getElementById("comment-name");
  const commentBtnDOM = document.querySelector(".form-submit input");
  const commentListDOM = document.querySelector(".comment-list");

  let commentText = "";
  let commentName = "";

  commentTextDOM.addEventListener("input", (e) => {
    commentText = e.target.value;
  });

  commentNameDOM.addEventListener("input", (e) => {
    commentName = e.target.value;
  });

  function addComment(e) {
    e.preventDefault();
    const rating = getSelectedRating();

    if (!commentText || !commentName || rating === 0) {
      alert("Lütfen ad, yorum ve yıldız seçimini yapınız.");
      return;
    }

    comments.push({ text: commentText, author: commentName, rating });
    let result = "";
    comments.forEach((item) => {
      let stars = "";
      for (let i = 1; i <= 5; i++) {
        stars += `<li><i class="bi ${i <= item.rating ? "bi-star-fill" : "bi-star"}"></i></li>`;
      }

      result += `
        <li class="comment-item">
            <div class="comment-avatar">
                <img src="img/avatars/avatar1.jpg" alt="">
            </div>
            <div class="comment-text">
                <ul class="comment-star">
                    ${stars}
                </ul>
                <div class="comment-meta">
                    <strong>${item.author}</strong>
                    <span>-</span>
                    <time>${new Date().toLocaleDateString()}</time>
                </div>
                <div class="comment-description">
                    <p>${item.text}</p>
                </div>
            </div>
        </li>
      `;
    });

    commentListDOM.innerHTML = result;
    commentTextDOM.value = "";
    commentNameDOM.value = "";

    // yıldızları sıfırla
    document.querySelectorAll(".comment-form-rating .star").forEach(star => star.classList.remove("active"));
  }

  commentBtnDOM.addEventListener("click", addComment);
};

function commentsFunc() {
  const getSelectedRating = commentReviewsFunc();
  addNewCommentFunc(getSelectedRating);
}
export default commentsFunc();
