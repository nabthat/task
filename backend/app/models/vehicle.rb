# == Schema Information
#
# Table name: vehicles
#
#  id          :uuid             not null, primary key
#  kind        :integer          default("new"), not null
#  make        :string
#  model       :string
#  msrp        :integer
#  price       :integer
#  status      :integer          default("in_transit"), not null
#  stock       :string
#  trim        :string
#  vin         :string
#  year        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location_id :uuid
#
class Vehicle < ApplicationRecord
  
  # includes
  include TranslateEnum

  # definitions
  enum kind: [:new, :used], _prefix: :kind
  translate_enum :kind
  
  enum status: [:in_transit, :available, :sold], _prefix: :status
  translate_enum :status

  # associations
  belongs_to :location

  def monthly_payment
    monthly_payment = nil
    payments_years = 6
    payments_per_year = 12
    payments_rate = 4.99
    downpayment = 1000

    amount = price.to_i
    amount = msrp.to_i unless amount > 0
    if amount > 0
      financed = amount - downpayment
      step_one = financed * (payments_rate*0.01)/payments_per_year
      step_two = 1-((1+((payments_rate*0.01)/payments_per_year))**(-1*payments_years*payments_per_year))
      monthly_payment = (step_one / step_two).to_i
    end
    monthly_payment
  end

end
