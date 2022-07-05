# == Schema Information
#
# Table name: vehicles
#
#  id         :uuid             not null, primary key
#  make       :string
#  model      :string
#  price      :integer
#  status     :integer          default("in_transit"), not null
#  stock      :string
#  trim       :string
#  vin        :string
#  year       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Vehicle < ApplicationRecord

  enum status: [:in_transit, :available, :sold], _prefix: :status

end
