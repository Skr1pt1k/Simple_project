# frozen_string_literal: true

class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::Helpers

  before_action :authenticate_user

  private

  def authenticate_user
    @jwt = cookies.signed[:jwt]
    @jwt.present? ? current_user : unauthorized
  end

  def current_user
    decoded_id = JsonWebToken.decode(@jwt)
    User.find(decoded_id[:user_id])
  rescue ActiveRecord::RecordNotFound
    unauthorized
  end

  def unauthorized
    render json: { errors: 'Unauthorized' }, status: :unauthorized
  end
end
