# frozen_string_literal: true

object history
attributes :id

child :ordered_actions, object_root: false do
  attributes :id, :action, :date
end

child :client do
  attributes :id, :name, :project
end

node :departament do |h|
  Departament.where(id: h.client.departament_id)
end
