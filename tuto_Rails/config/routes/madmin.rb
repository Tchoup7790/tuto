# Below are the routes for madmin
namespace :madmin do
  resources :comments
  resources :articles
  resources :categories
  root to: "dashboard#show"
end
