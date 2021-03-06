Rails.application.routes.draw do
  get 'static_pages/home'

  get 'static_pages/help'

  get  'static_pages/about'

  resources :microposts
  resources :users
  get 'siguientes_vistas/index'
  get 'siguientes_vistas/ponerNumero', to:'siguientes_vistas#ponerNumero'
  get 'hello_worlds/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'hello_worlds#index'
end
