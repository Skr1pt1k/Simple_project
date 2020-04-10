# frozen_string_literal: true

class CreateDepartaments < ActiveRecord::Migration[5.2]
  def change
    create_table :departaments do |t|
      t.string :name
      t.references :client

      t.timestamps
    end
  end
end
