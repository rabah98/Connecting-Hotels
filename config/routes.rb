Rails.application.routes.draw do
  resources :users, only: [ :create]
  resources :hotels, only: [ :index]
  
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
end
