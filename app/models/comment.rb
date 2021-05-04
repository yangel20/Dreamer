class Comment < ApplicationRecord
    validates :user_id, :photo_id, :body, presence: true

    belongs_to :photo,
    foreign_key: :photo_id,
    class_name: "Photo"

    belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"
end
