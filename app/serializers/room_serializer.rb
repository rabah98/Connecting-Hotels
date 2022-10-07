class RoomSerializer < ActiveModel::Serializer
  attributes :id, :room_type, :image, :hotel_id, :checkin, :checkout, :guests, :price

  has_many :users
  has_many :reserved_rooms
end