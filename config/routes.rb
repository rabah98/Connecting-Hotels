Rails.application.routes.draw do
  resources :reserved_rooms, only: [ :create, :destroy ]
  resources :rooms, only: [ :create]
  resources :users, only: [ :create]
  resources :hotels, only: [ :index, :create]
  
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  get "/my_rooms", to: "users#my_groups"
end
