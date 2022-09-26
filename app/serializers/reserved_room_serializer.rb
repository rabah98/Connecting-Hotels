class ReservedRoomSerializer < ActiveModel::Serializer
  attributes :id
  has_one :room
  has_one :user
end
