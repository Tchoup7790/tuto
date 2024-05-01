# frozen_string_literal: true

# Comments Controller
class CommentsController < ApplicationController
  def new
    @article = Article.find(params[:article_id])
    @comment = @article.comments.build
  end

  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)

    if @comment.save
      respond_to do |format|
        format.turbo_stream do
          render turbo_stream: [
            turbo_stream.replace('turbo-form', partial: 'comments/form', locals:
              {
                article: @article,
                comment: @article.comments.build
              }),
            turbo_stream.replace('comments_frame', partial: @article.comments)
          ]
        end
        format.html { redirect_to @article }
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @status = Visible::STATUSES
  end

  def update
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    if @comment.update(comment_params)
      redirect_to @article
    else
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:commenter, :body, :status)
  end
end
