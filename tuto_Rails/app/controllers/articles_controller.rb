# frozen_string_literal: true

# Articles Controller
class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    @categories = Category.all
    @category = Category.new
  end

  def show
    @article = Article.find(params[:id])
    @category = Category.find(@article.category_id)
    @status = Visible::STATUSES
  end
end
