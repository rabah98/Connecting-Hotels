class RoomsController < ApplicationController

    def create
        room = Room.create!(room_params)
        render json: room, status: :created
    end

    def update
        room = Room.find(params[:id])
        room.update!(room_params)
        render json: room, status: :accepted
    end

    private

    def room_params
        params.permit(
        :room_type,
        :price,
        :image,
        :hotel_id,
        :checkin,
        :checkout,
        :guests
        )
    end
end
