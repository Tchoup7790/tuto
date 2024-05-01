# frozen_string_literal: true

# Comment Resource Madmin
class CommentResource < Madmin::Resource
  # Attributes
  attribute :id, form: false
  attribute :commenter
  attribute :body
  attribute :created_at, form: false
  attribute :updated_at, form: false
  attribute :status, :enum

  # Associations
  attribute :article, form: false

  # Uncomment this to customize the display name of records in the admin area.
  # def self.display_name(record)
  #   record.name
  # end

  # Uncomment this to customize the default sort column and direction.
  # def self.default_sort_column
  #   "created_at"
  # end
  #
  # def self.default_sort_direction
  #   "desc"
  # end
end
