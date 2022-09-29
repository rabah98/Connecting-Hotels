class ReservedRoomSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :room_id
  has_one :room
  has_one :user
end
