class Document < ActiveRecord::Base
  validates :title, :body, :user_id, presence: true
  belongs_to :author, class_name: "User", foreign_key: :user_id


end