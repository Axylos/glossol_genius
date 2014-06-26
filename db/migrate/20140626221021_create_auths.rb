class CreateAuths < ActiveRecord::Migration
  def change
    create_table :auths do |t|
      t.string :provider, null: false
      t.string :uid, null: false
      t.integer :expires_at
    end
  end
end
