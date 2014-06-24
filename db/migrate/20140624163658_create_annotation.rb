class CreateAnnotation < ActiveRecord::Migration
  def change
    create_table :annotations, force: true do |t|
      t.integer :source_document_id
      t.integer :annotation_id

      t.timestamps
    end
    add_index :annotations, :source_document_id
    add_index :annotations, :annotation_id
  end
end
