class Document < ActiveRecord::Base
  validates :title, :body, :user_id, presence: true
  belongs_to :author, class_name: "User", foreign_key: :user_id

  has_many(
    :annotatings,
    class_name: "Annotation",
    foreign_key: :source_document_id
  )

  has_many(
    :annotated_docs,
    class_name: "Annotation",
    foreign_key: :annotation_id
  )

  has_many :annotations, through: :annotatings, source: :annotation
  has_many :referenced_texts, through: :annotated_docs, source: :source_document

  def parent
    self.referenced_texts.first
  end

end