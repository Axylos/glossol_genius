class CreateAnnotating < ActiveRecord::Migration
  def change
    create_table :annotatings, force: true do |t|
      t.integer :source_document_id
      t.integer :annotation_id

      t.timestamps
    end
    add_index :annotatings, :source_document_id
    add_index :annotatings, :annotation_id
  end
end
