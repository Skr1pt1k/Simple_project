# frozen_string_literal: true

class AuthenticationsController < ApplicationController
  skip_before_action :authenticate_user, only: :create
  expose :user, -> { User.find_by(email: params[:email]) }

  def create
    if user&.authenticate(params[:password])
      generate_token
      cookies.signed[:jwt] = {
        value: generate_token,
        httponly: true
      }
      render json: { user: user }, status: 201
    else
      render json: { errors: 'Email or password incorrect' }, status: 404
    end
  end

  def destroy
    cookies.delete(:jwt)
    render json: {}, status: 200
  end

  def show
    render json: { user: current_user }, status: 200
  end

  private

  def generate_token
    JsonWebToken.encode(user_id: user.id)
  end
end
