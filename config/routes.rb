Rails.application.routes.draw do
  root "home#index"
  resources :messages, only: [:create, :destroy]
  resources :conversations, only: [:show]
  resources :users do
    member do
      get :conversations
    end
  end
  get '*path', to: "home#index"
end
