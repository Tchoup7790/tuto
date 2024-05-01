class AddCategoryIdToArticles < ActiveRecord::Migration[7.1]
  def change
    add_reference :articles, :category, null: true, foreign_key: true
  end
end
