# frozen_string_literal: true

class AddColorToClients < ActiveRecord::Migration[5.2]
  def change
    add_column :clients, :default_color, :string, default: '#fff'
  end
end
