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

  def text_selection
    text = self.source_document.body
    text[self.source_text.first.to_i..self.source_text.last.to_i]
  end
end