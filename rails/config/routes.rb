Rails.application.routes.draw do
   resources :meetings, only: [:create]
end
