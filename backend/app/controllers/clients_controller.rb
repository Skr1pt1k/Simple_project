# frozen_string_literal: true

class ClientsController < ApplicationController
  expose :clients, -> { Client.all }
  expose :client

  def index
    render 'clients/index', status: :ok
  end

  def create
    binding.pry
    if client.save
      return render json: { message: 'Created successfully' }, status: :created
    end

    render json: { errors: 'Bad request' }, status: :bad_request
  end

  def update
    return render 'clients/show', status: :ok if client.update(client_params)

    render json: { errors: client.errors }, status: :bad_request
  end

  def destroy
    if client.destroy
      render json: { message: 'Successfully deleted' }, status: :ok
    end
  end

  private

  def client_params
    params.require(:client).permit(
      :name,
      :project,
      :estimate,
      :budget,
      :start_date,
      departament_attributes: %i[name]
    )
  end
end
