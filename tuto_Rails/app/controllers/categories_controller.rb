# frozen_string_literal: true

# Categories Controller
class CategoriesController < ApplicationController
  http_basic_authenticate_with name: 'John', password: 'Doe', only: :create

  def create
    @category = Category.new(category_params)
    if @category.save
      redirect_to root_path
    else
      redirect_to root_path, status: :unprocessable_entity
    end
  end

  def show
    @category = Category.find(params[:id])
    @articles = @category.articles
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end
end
