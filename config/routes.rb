GlossolHellYeah::Application.routes.draw do


  root to: "documents#index"
  get 'auth/facebook/callback', to: "omniauth_callbacks#facebook"

  shallow do
    resources :users, only: [:create, :new, :edit, :update, :show, :destroy] do
      resources :documents
    end
    resource :session, only: [:create, :new, :destroy, :show]
    resources :documents do
      resources :stars, only: [:create, :destroy]
      resources :annotatings, only: [:create, :new]
      resources :references, only: [:new, :create]
    end
  end

  resources :annotatings, only: [:destroy]


 namespace :api do
    resource :session, only: [:create, :new, :destroy]
  end

  namespace :api, defaults: { format: :json } do

    shallow do
      resources :users do
        resources :documents
      end
    end
    resources :documents, only: [:show, :index, :create] do
      resources :annotations
      resources :references
    end
  end

  get 'bb/', to: "site#root"
end
