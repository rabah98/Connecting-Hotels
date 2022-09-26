class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image_url, :username, :email

  has_many :rooms
end
