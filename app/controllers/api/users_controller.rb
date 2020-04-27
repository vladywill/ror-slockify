class Api::UsersController < ApplicationController
   def create
    @user = User.new(create_user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: {error: @user.errors.full_messages}, status: 421
    end
  end

  private
  def create_user_params
    params.require(:user).permit(:email, :password, :full_name, :display_name)
  end

  ##do we want to make a separate route specifically to update status so we arent sending this data all the time?
  def update_user_params
    params.require(:user).permit(:email, :password, :full_name, :display_name, :title, :description, :status, :avatar_url)
  end
end