Rails.application.routes.draw do
  #resources :photo_album_links
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create] ## index and create nest from photo
    resources :photos, only: [:index, :create, :update, :destroy, :show]
    resources :comments, only: [:index, :show, :create, :destroy]
    resources :tags, only: [:index, :show, :create, :destroy]
    resources :albums, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end
end
