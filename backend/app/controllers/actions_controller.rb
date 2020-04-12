# frozen_string_literal: true

class ActionsController < ApplicationController
  expose :action, -> { Action.new(date: params[:date], action: params[:action_value], user_id: current_user.id, history_id: params[:history_id]) }

  def create
    if action.save
      return render json: { message: 'Created successfully' }, status: :created
    end

    render json: { errors: 'Bad request' }, status: :bad_request
  end
end
