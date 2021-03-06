Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] ## index and create nest from photo
    resources :photos, only: [:index, :create, :update, :destroy, :show]
    resource :session, only: [:create, :destroy, :show]
  end
end
