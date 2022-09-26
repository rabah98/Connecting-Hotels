class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :picture, :city, :email, :phone_number
  
  has_many :rooms
end
