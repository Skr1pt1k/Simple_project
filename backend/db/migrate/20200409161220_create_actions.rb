# frozen_string_literal: true

class CreateActions < ActiveRecord::Migration[5.2]
  def change
    create_table :actions do |t|
      t.date :date
      t.string :action
      t.references :history
      t.references :user

      t.timestamps
    end
  end
end
