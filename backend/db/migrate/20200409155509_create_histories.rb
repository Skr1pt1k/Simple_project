# frozen_string_literal: true

class CreateHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :histories do |t|
      t.references :client

      t.timestamps
    end
  end
end
