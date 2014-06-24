class Document < ActiveRecord::Base
  validates :title, :body, :user_id, presence: true
  belongs_to :author, class_name: "User", foreign_key: :user_id

  has_many(
    :references,
    class_name: "Annotation",
    foreign_key: :source_document_id
  )

  has_many(
    :annotated_docs,
    class_name: "Annotation",
    foreign_key: :annotation_id
  )

  has_many :annotations, through: :references, source: :annotation
  has_many :annotated_texts, through: :annotated_docs, source: :source_document

end