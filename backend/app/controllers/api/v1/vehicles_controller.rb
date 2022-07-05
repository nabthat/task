class Api::V1::VehiclesController < ApplicationController

  def index
    page = permitted_params[:page][:number] if permitted_params[:page].present?
    page ||= 1

    per_page = permitted_params[:page][:size] if permitted_params[:page].present?
    per_page ||= 10

    query = Vehicle

    query = case params['sort']
    when 'year_desc'
      query.reorder("vehicles.year DESC")
    when 'price_asc'
      query.reorder("vehicles.price ASC")
    when 'price_desc'
      query.reorder("vehicles.price DESC")
    # when 'name_asc'
    else
      query.reorder("vehicles.year ASC")
    end

    vehicles = query.paginate(page: page, per_page: per_page)
    render json: Api::V1::VehicleSerializer.new(vehicles).serialized_json
  end

  def show
    vehicle = Vehicle.find_by_vin(params[:id])
    render json: Api::V1::VehicleSerializer.new(vehicle).serialized_json
  end

  protected

    def permitted_params
      permitted_filters = params.permit(:sort, page: {}, filter: {})
      permitted_filters
    end

end
