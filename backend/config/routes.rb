# frozen_string_literal: true

Rails.application.routes.draw do
  resource :authentications, path: 'auth', only: %i[create show destroy]
  resources :clients, only: %i[index create update destroy]
  resources :departaments, only: %i[index]
  resources :histories, only: %i[show]
end
