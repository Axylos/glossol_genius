GlossolHellYeah::Application.routes.draw do

  resources :users, only: [:create, :new, :update, :destroy]
  resource :session, only: [:create, :new, :destroy]
  resources :documents

  root to: "users#new"


end
