# frozen_string_literal: true

# Article Model
class Article < ApplicationRecord
  include Visible

  has_many :comments, dependent: :destroy
  belongs_to :category

  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }
end
