export const fetchAllTags = () => {
    return $.ajax({
        method: "GET",
        url: "/api/tags"
    })
};

export const createTag = (tagData) => {
    return $.ajax({
        method: "POST",
        url: "/api/tags",
        data: tagData
    })
};

export const fetchTag = (tagId) => {
    return $.ajax({
        method: "GET",
        url: `/api/tags/${tagId}`
    })
};

export const deleteTag = (tagId) => (
    $.ajax({
      method: "DELETE",
      url: `/api/tags/${tagId}`
    })
  );
  