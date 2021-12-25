module Resources
  module V1
    class Users < Grape::API
      resource :users do
        
        desc 'user authenticate'
        params do 
          requires :email, type: String
          requires :password, type: String
        end
        get '/signin' do
          @current_user = User.find_by(email: params[:email], password: params[:password])          
          present @current_user, with: Entities::V1::UserEntity
        end
        
      end
    end
  end
end