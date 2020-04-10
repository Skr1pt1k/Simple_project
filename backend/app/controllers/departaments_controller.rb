# frozen_string_literal: true

class DepartamentsController < ApplicationController
  expose :departaments, -> { Departament.all }
  expose :client

  def index
    render 'departaments/index', status: :ok
  end

  private

  def departament_attributes
    params.require(:departament).permit(:name, :client_id)
  end
end
