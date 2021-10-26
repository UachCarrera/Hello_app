Rails.application.routes.draw do
  get 'siguientes_vistas/index'
  get 'siguientes_vistas/ponerNumero', to:'siguientes_vistas#ponerNumero'
  get 'hello_worlds/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
