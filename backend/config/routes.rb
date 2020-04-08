# frozen_string_literal: true

Rails.application.routes.draw do
  resource :authentications, path: 'auth', only: %i[create show destroy]
end
