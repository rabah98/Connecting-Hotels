class UsersController < ApplicationController
    skip_before_action :authorized_user, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end
    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        head :no_content
    end

    def my_rooms
        user = User.find_by(id: session[:user_id])
        render json: user.rooms, status: :ok
    end

    private

    def user_params
        params.permit(
        :username,
        :password,
        :password_confirmation,
        :first_name,
        :last_name,
        :image_url,
        :email 
        )
    end
end
