class Document < ActiveRecord::Base
  validates :title, uniqueness: true

  validates :title, :body, :user_id, presence: true
  belongs_to :author, class_name: "User", foreign_key: :user_id

  has_many(
    :annotatings,
    class_name: "Annotating",
    foreign_key: :source_document_id
  )

  has_many(
    :references,
    class_name: "Annotating",
    foreign_key: :annotation_id
  )

  has_many :annotations, through: :annotatings, source: :annotation
  has_many :referenced_texts, through: :references, source: :source_document

  has_many(
     :stars,
     class_name: "Star",
     foreign_key: :document_id,
     dependent: :destroy
  )

  has_many :fans, through: :stars, source: :user

  def parent
    self.referenced_texts.first
  end

end