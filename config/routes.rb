GlossolHellYeah::Application.routes.draw do

  resources :users, only: [:create, :new, :update, :destroy]

  resources :documents

  root to: "users#new"


end
