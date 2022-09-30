class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorized_user

    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def current_user
        @current_user = User.find_by(id: session[:user_id])
        @current_user
    end

    def authorized_user
        return render json: { errors: "You must be logged in to access your account" }, status: :unauthorized unless current_user
    end

    private

    def render_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response(error)
        render json: { errors: ["#{error.model} not found"]}, status: :not_found
    end
end
