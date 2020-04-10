# frozen_string_literal: true

class HistoriesController < ApplicationController
  expose :history

  def show
    render 'histories/show', status: :ok
  end
end
