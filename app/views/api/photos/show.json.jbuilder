 json.set! @photo.id do 
      json.pictureUrl @photo.picture.attached? ? url_for(@photo.picture) : ""
      json.partial! "api/photos/photo", photo: @photo
end