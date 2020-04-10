# frozen_string_literal: true

object history
attributes :id

child :action do
  attributes :id, :action, :date
end
