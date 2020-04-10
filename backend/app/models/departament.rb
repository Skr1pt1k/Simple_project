# frozen_string_literal: true

class Departament < ApplicationRecord
  validates :name, presence: true

  belongs_to :client, optional: true
end
