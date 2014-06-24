class Annotation < ActiveRecord::Base
  serialize :source_text

  belongs_to(
    :source_document,
    class_name: "Document",
    foreign_key: :source_document_id
  )
  belongs_to(
    :annotation,
    class_name: "Document",
    foreign_key: :annotation_id
  )
end