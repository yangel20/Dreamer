json.array! @photos do |photo|
    json extract! photo, :id, :title, :description, :user_id
    json.pictureUrl Url_for(photo.picture)
end