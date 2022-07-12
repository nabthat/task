class Api::V1::VehiclesController < ApplicationController

  def index
    @vehicles = Vehicle.includes(:location)

    apply_filters
    apply_sort
    apply_pagination

    options = {}
    options[:include] = [:location]

    sleep(1) # just to let Angular app show a pretty spinner

    render json: Api::V1::VehicleSerializer.new(@vehicles, options).serialized_json
  end

  def show
    @vehicle = Vehicle.find_by_vin(params[:id])
    options = {}
    options[:include] = [:location]
    render json: Api::V1::VehicleSerializer.new(@vehicle, options).serialized_json
  end

  protected

    def apply_filters
      # add filters
    end

    def apply_sort
      # add sorting
    end

    def apply_pagination
      # pageIndex
      page = permitted_params[:page][:number] if permitted_params[:page].present?
      page ||= 1
      # pageSize
      per_page = permitted_params[:page][:size] if permitted_params[:page].present?
      per_page ||= 10
      # will_paginate
      @vehicles = @vehicles.paginate(page: page, per_page: per_page)
    end

    def permitted_params
      permitted_filters = params.permit(:sort, page: {}, filter: {})
      permitted_filters
    end

end
