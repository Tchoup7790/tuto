# frozen_string_literal: true

# Routes files
Rails.application.routes.draw do
  draw :madmin
  root 'articles#index'

  resources :articles do
    resources :comments
  end

  resources :categories
end
