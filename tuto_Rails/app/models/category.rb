# frozen_string_literal: true

# Category Model
class Category < ApplicationRecord
  has_many :articles

  validates :name, presence: true, uniqueness: true
end
