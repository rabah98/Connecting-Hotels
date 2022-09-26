class RoomsController < ApplicationController
    def create
        room = Room.create!(room_params)
        render json: room, status: :created
    end

    private

    def room_params
        params.permit(
        :room_type,
        :price,
        :image,
        :hotel_id,
        )
    end
end
