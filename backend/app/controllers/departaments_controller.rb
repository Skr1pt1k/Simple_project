# frozen_string_literal: true

class DepartamentsController < ApplicationController
  expose :departaments, -> { Departament.all }
  expose :client

  def index
    render 'departaments/index', status: :ok
  end
end
