class Star < ActiveRecord::Base
  validates :user_id, :document_id, presence: true
  validates :user_id, uniqueness: { scope: :document_id }
  belongs_to :document
  belongs_to :user
end
