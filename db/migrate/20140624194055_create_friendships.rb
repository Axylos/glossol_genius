class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships, force: true do |t|
      t.integer :friender_id
      t.integer :befriended_id

      t.timestamps
    end
    add_index :friendships, :friender_id
    add_index :friendships, :befriended_id
  end
end
