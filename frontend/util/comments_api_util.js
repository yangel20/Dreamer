export const fetchAllComments = () => {
    return $.ajax({
        method: "GET",
        url: "/api/comments"
    })
};

export const createComment = (commentData) => {
    return $.ajax({
        method: "POST",
        url: "/api/comments",
        data: commentData
    })
};

export const fetchComment = (commentId) => {
    return $.ajax({
        method: "GET",
        url: `/api/comments/${commentId}`
    })
};

export const deleteComment = (commentId) => (
    $.ajax({
      method: "DELETE",
      url: `/api/comments/${commentId}`
    })
  );
  