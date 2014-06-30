GlossolHellYeah::Application.routes.draw do
  shallow do
    resources :users, only: [:create, :new, :edit, :update, :show, :destroy] do
      resources :documents
    end
    resource :session, only: [:create, :new, :destroy]
    resources :documents do
      resources :stars, only: [:create, :destroy]
      resources :annotatings, only: [:create, :new]
      resources :references, only: [:new, :create]
    end
  end

  resources :annotatings, only: [:destroy]
    root to: "documents#index"

  get 'auth/facebook/callback', to: "omniauth_callbacks#facebook"
  
  namespace :api, defaults: {format: :json } do
    shallow do
      
      resources :users do
        resources :documents
      end
    end
    
  end
  
  namespace :api do
    resource :session, only: [:create, :new, :destroy]
    
  end
  
  get 'bb/', to: "site#root"
end
