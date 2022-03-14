class StaticPagesController < ApplicationController
  def show
    if params[:page].present?
      render params[:page]
    else
      render 'home'
    end
  end
end
